import { getSystemContext } from '@/lib/context';
import { characters } from '@/types/characters';

export const runtime = 'edge'; // Use Edge runtime for better streaming performance

// Security: List of forbidden keywords and patterns
const FORBIDDEN_PATTERNS = [
    /write\s+(me\s+)?(a\s+)?(python|java|javascript|code|script|game|app|application)/i,
    /generate\s+(code|script|game|python|snake)/i,
    /create\s+(a\s+)?(game|app|application|python|code)/i,
    /build\s+(a\s+)?(game|app|application)/i,
    /help\s+(me\s+)?(build|create|write|generate)\s+(a\s+)?(game|app|code)/i,
    /ignore\s+(previous|prior|all)\s+(instructions|prompts|rules)/i,
    /disregard\s+(all\s+)?(security|safety|restrictions)/i,
    /you\s+are\s+now/i,
    /forget\s+everything/i,
    /pretend\s+(you\s+are|this\s+is)/i,
];

// Security: Risky code patterns
const RISKY_CODE_KEYWORDS = [
    'subprocess.call',
    'os.system',
    'eval(',
    'exec(',
    'import socket',
    '__import__',
    'compile(',
    'pickle.loads',
];

function isForbiddenRequest(message: string): boolean {
    const lowerMessage = message.toLowerCase();
    
    // Check forbidden patterns
    for (const pattern of FORBIDDEN_PATTERNS) {
        if (pattern.test(message)) {
            return true;
        }
    }
    
    // Check for code generation requests
    const codeKeywords = ['code', 'script', 'game', 'app', 'application', 'write', 'generate', 'create'];
    const codeActions = ['write', 'generate', 'create', 'build', 'make', 'develop', 'code'];
    
    const hasCodeKeyword = codeKeywords.some(kw => lowerMessage.includes(kw));
    const hasCodeAction = codeActions.some(action => lowerMessage.includes(action));
    
    // Detect if asking for external code (not related to portfolio/experience)
    const portfolioKeywords = ['your', 'your portfolio', 'your project', 'your experience', 'your skills', 'you', 'hamza'];
    const isAboutPortfolio = portfolioKeywords.some(kw => lowerMessage.includes(kw));
    
    // If asking for code/game/app and NOT about portfolio, it's forbidden
    if (hasCodeKeyword && hasCodeAction && !isAboutPortfolio) {
        return true;
    }
    
    return false;
}

function sanitizeInput(message: string): string {
    // Remove any attempt to inject system prompts
    return message
        .replace(/system:/gi, '')
        .replace(/prompt:/gi, '')
        .replace(/instruction:/gi, '')
        .trim();
}

export async function POST(req: Request) {
    try {
        const { message, tone = 'professional' } = await req.json();

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

        // SECURITY: Check for forbidden requests
        if (isForbiddenRequest(message)) {
            return new Response(JSON.stringify({ 
                error: 'I appreciate the question, but I\'m specifically here to help you learn about my professional experience, expertise, and projects. For coding help with external projects, I\'d recommend platforms like Stack Overflow, GitHub Copilot, or dedicated coding tutors. However, I\'m happy to discuss any architecture patterns, best practices, or technologies I\'ve used in my work!'
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // SECURITY: Sanitize input
        const sanitizedMessage = sanitizeInput(message);

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
        
        // Get character prompt
        const character = characters[tone as keyof typeof characters] || characters.professional;

        // Prepare the full prompt with clear structure
        const fullPrompt = `${context}

---

${character.systemPrompt}

User Question: ${sanitizedMessage}`;

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
