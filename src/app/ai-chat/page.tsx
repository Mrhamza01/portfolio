'use client';

import { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Loader2, ArrowLeft, Trash2, AlertCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { chatStorage, type Message } from '@/lib/chatStorage';
import { characters, type CharacterTone } from '@/types/characters';

interface MessageWithTone extends Message {
    tone?: CharacterTone;
}

export default function AIChatPage() {
    const [messages, setMessages] = useState<MessageWithTone[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [selectedTone, setSelectedTone] = useState<CharacterTone>('professional');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const stored = chatStorage.getMessages();
        setMessages(stored);
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const clearChat = () => {
        if (confirm('Are you sure you want to clear the chat history?')) {
            chatStorage.clearMessages();
            setMessages([]);
        }
    };

    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = chatStorage.saveMessage({ role: 'user', content: input }) as MessageWithTone;
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        const tempId = `temp-${Date.now()}`;
        const streamingMessage: MessageWithTone = {
            id: tempId,
            role: 'assistant',
            content: '',
            timestamp: new Date().toISOString(),
            tone: selectedTone,
        };

        // Don't add to messages yet - we'll update as we stream
        let fullText = '';

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage.content, tone: selectedTone }),
            });

            if (!res.ok) {
                throw new Error('Failed to get response');
            }

            const reader = res.body?.getReader();
            const decoder = new TextDecoder();
            let hasAddedMessage = false;

            if (reader) {
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    const chunk = decoder.decode(value, { stream: true });
                    fullText += chunk;

                    // Add message on first chunk
                    if (!hasAddedMessage) {
                        setMessages(prev => [...prev, streamingMessage]);
                        hasAddedMessage = true;
                    }

                    // Update streaming message
                    setMessages(prev =>
                        prev.map(msg =>
                            msg.id === tempId
                                ? { ...msg, content: fullText }
                                : msg
                        )
                    );
                }

                if (fullText.trim()) {
                    // Save the final message with tone info
                    const finalMessage: MessageWithTone = {
                        id: Date.now().toString(),
                        role: 'assistant',
                        content: fullText,
                        timestamp: new Date().toISOString(),
                        tone: selectedTone,
                    };
                    
                    if (typeof window !== 'undefined') {
                        const messages = chatStorage.getMessages();
                        messages.push(finalMessage);
                        localStorage.setItem('hamza-ai-chat-history', JSON.stringify(messages));
                    }

                    setMessages(prev =>
                        prev.map(msg =>
                            msg.id === tempId
                                ? finalMessage
                                : msg
                        )
                    );
                } else {
                    setMessages(prev => prev.filter(msg => msg.id !== tempId));
                    throw new Error('No response received');
                }
            }
        } catch (error) {
            console.error('Failed to send message:', error);
            setMessages(prev => prev.filter(msg => msg.id !== tempId));

            const errorMessage = chatStorage.saveMessage({
                role: 'assistant',
                content: 'Sorry, I encountered an error. Please try again.'
            }) as MessageWithTone;
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <header className="border-b border-border/40 bg-background/80 backdrop-blur-md sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                        <ArrowLeft className="h-5 w-5" />
                        <span>Back to Portfolio</span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <Bot className="h-6 w-6 text-primary" />
                            <span className="absolute -top-1 -right-1 h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                        </div>
                        <h1 className="font-bold text-lg">Hamza AI Assistant</h1>
                    </div>
                    <button
                        onClick={clearChat}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        title="Clear chat history"
                    >
                        <Trash2 className="h-4 w-4" />
                        <span className="hidden sm:inline">Clear</span>
                    </button>
                </div>
            </header>

            <div className="bg-blue-500/10 border-b border-blue-500/20">
                <div className="container mx-auto px-4 py-2">
                    <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        <p>Chat history is stored temporarily in your browser. Powered by Google Gemini AI.</p>
                    </div>
                </div>
            </div>

            {/* Character Tone Selector */}
            <div className="bg-muted/30 border-b border-border/40 sticky top-16 z-40">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <label className="text-sm font-medium">Chat Style:</label>
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {(Object.keys(characters) as CharacterTone[]).map((tone) => {
                            const char = characters[tone];
                            return (
                                <button
                                    key={tone}
                                    onClick={() => setSelectedTone(tone)}
                                    className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                                        selectedTone === tone
                                            ? `${char.bgColor} ${char.color} border`
                                            : 'bg-muted text-muted-foreground hover:bg-muted/70 border border-border'
                                    }`}
                                    title={char.description}
                                >
                                    <span className="mr-1">{char.emoji}</span>
                                    {char.name}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            <main className="flex-1 container mx-auto px-4 py-6 overflow-y-auto custom-scrollbar">
                <div className="max-w-3xl mx-auto space-y-6">
                    {messages.length === 0 && (
                        <div className="text-center py-20 text-muted-foreground">
                            <Bot className="h-16 w-16 mx-auto mb-4 text-primary/50" />
                            <h2 className="text-2xl font-bold mb-2 text-foreground">Hello! I&apos;m Hamza&apos;s AI Assistant.</h2>
                            <p className="mb-4">Ask me anything about his experience, skills, or projects.</p>
                            
                            <div className="mb-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                                <p className="text-sm font-medium mb-2">✨ Try different chat styles:</p>
                                <div className="flex gap-2 justify-center flex-wrap">
                                    {(Object.keys(characters) as CharacterTone[]).map((tone) => (
                                        <span key={tone} className="text-xs px-2 py-1 bg-primary/10 rounded">
                                            {characters[tone].emoji} {characters[tone].name}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <p className="text-sm text-muted-foreground/70">Responses stream in real-time!</p>
                            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
                                {['Tell me about your experience', 'What technologies do you use?', 'Explain the Axon ERP project', 'How can I contact you?'].map((q) => (
                                    <button
                                        key={q}
                                        onClick={() => setInput(q)}
                                        className="p-3 rounded-xl border border-border bg-card/50 hover:bg-primary/10 hover:border-primary/50 transition-all text-sm text-left"
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <AnimatePresence mode="popLayout">
                        {messages.map((msg, idx) => {
                            const characterTone = msg.tone ? characters[msg.tone] : characters.professional;
                            return (
                                <motion.div
                                    key={msg.id || idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    {msg.role === 'assistant' && (
                                        <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 border ${characterTone.bgColor}`}>
                                            <span>{characterTone.emoji}</span>
                                        </div>
                                    )}

                                    <div
                                        className={`rounded-2xl p-4 max-w-[80%] shadow-sm ${msg.role === 'user'
                                                ? 'bg-primary text-primary-foreground rounded-tr-none'
                                                : 'bg-card border border-border rounded-tl-none'
                                            }`}
                                    >
                                        <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                                        {msg.id?.startsWith('temp-') && msg.content && (
                                            <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-1" />
                                        )}
                                    </div>

                                    {msg.role === 'user' && (
                                        <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30">
                                            <User className="h-5 w-5 text-accent" />
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>

                    {isLoading && !messages.some(m => m.id?.startsWith('temp-')) && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex gap-4"
                        >
                            <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 border ${characters[selectedTone].bgColor}`}>
                                <span>{characters[selectedTone].emoji}</span>
                            </div>
                            <div className="bg-card border border-border rounded-2xl rounded-tl-none p-4 flex items-center gap-2">
                                <Loader2 className="h-4 w-4 animate-spin text-primary" />
                                <span className="text-sm text-muted-foreground">Thinking...</span>
                            </div>
                        </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </main>

            <footer className="p-4 bg-background/80 backdrop-blur-md border-t border-border/40">
                <div className="max-w-3xl mx-auto">
                    <form onSubmit={sendMessage} className="relative flex items-center gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask me anything..."
                            className="w-full bg-muted/50 border border-border rounded-full py-3 pl-6 pr-14 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            disabled={!input.trim() || isLoading}
                            className="absolute right-2 p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            title="Send message"
                        >
                            <Send className="h-4 w-4" />
                        </button>
                    </form>
                    <p className="text-xs text-center text-muted-foreground mt-2">
                        AI can make mistakes. Please verify important information.
                    </p>
                </div>
            </footer>
        </div>
    );
}
