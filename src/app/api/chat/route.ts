import { getSystemContext } from '@/lib/context';

export const runtime = 'edge'; // Use Edge runtime for better streaming performance

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        if (!message || typeof message !== 'string') {
            return new Response(JSON.stringify({ error: 'Valid message is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Validate message length
        if (message.length > 1000) {
            return new Response(JSON.stringify({ error: 'Message too long. Maximum 1000 characters.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Check for API key
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            console.error('GEMINI_API_KEY not configured');
            return new Response(JSON.stringify({ error: 'Service temporarily unavailable' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Get context
        const context = getSystemContext();

        // Prepare the full prompt
        const fullPrompt = `${context}

User Question: ${message}

Please respond as Muhammad Hamza, answering the question professionally and concisely.`;

        // Call Gemini API with streaming
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse&key=${apiKey}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: fullPrompt
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 800,
                    }
                }),
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Gemini API error:', response.status, errorText);
            return new Response(JSON.stringify({ error: 'Failed to get AI response' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Create a readable stream
        const encoder = new TextEncoder();
        const stream = new ReadableStream({
            async start(controller) {
                const reader = response.body?.getReader();
                if (!reader) {
                    controller.close();
                    return;
                }

                const decoder = new TextDecoder();

                try {
                    while (true) {
                        const { done, value } = await reader.read();
                        if (done) break;

                        const chunk = decoder.decode(value, { stream: true });
                        const lines = chunk.split('\n');

                        for (const line of lines) {
                            if (line.startsWith('data: ')) {
                                const data = line.slice(6).trim();
                                if (!data || data === '[DONE]') continue;

                                try {
                                    const parsed = JSON.parse(data);
                                    const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text;

                                    if (text) {
                                        controller.enqueue(encoder.encode(text));
                                    }
                                } catch (e) {
                                    // Skip invalid JSON chunks
                                    console.warn('Failed to parse chunk:', e);
                                }
                            }
                        }
                    }
                } catch (error) {
                    console.error('Stream error:', error);
                    controller.error(error);
                } finally {
                    controller.close();
                }
            },
        });

        return new Response(stream, {
            headers: {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache, no-transform',
                'Connection': 'keep-alive',
                'X-Content-Type-Options': 'nosniff',
            },
        });
    } catch (error: any) {
        console.error('Chat error:', error);
        return new Response(JSON.stringify({
            error: 'An unexpected error occurred'
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
