import React, { useState, useEffect, useRef } from "react";
import { handleOfflineIntent } from "~/utils/publicApis";
import { formatGeminiUserError, generateGeminiText, hasGeminiKey, buildChatAgentPrompt } from "~/utils/gemini";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export default function Chat() {
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Hi! I'm Muhammad Hamza's AI assistant. Ask about his work, experience, or try an interview simulation." }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isTyping) return;

        const userMsg = input.trim();
        setInput("");
        setMessages(prev => [...prev, { role: "user", content: userMsg }]);
        setIsTyping(true);

        try {
            const offline = await handleOfflineIntent(userMsg);
            if (offline) {
                setMessages(prev => [...prev, { role: "assistant", content: offline }]);
                return;
            }

            if (!hasGeminiKey) {
                setMessages(prev => [
                    ...prev,
                    {
                        role: "assistant",
                        content:
                            "Gemini API key is not configured. Add VITE_GEMINI_API_KEY to portfolio/.env, restart the dev server, or ask about weather / GitHub stats / FX rates.",
                    },
                ]);
                return;
            }

            const responseText = await generateGeminiText(buildChatAgentPrompt(userMsg));
            setMessages(prev => [...prev, { role: "assistant", content: responseText }]);
        } catch (error: unknown) {
            console.error(error);
            setMessages(prev => [...prev, { role: "assistant", content: formatGeminiUserError(error) }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="size-full flex flex-col bg-white dark:bg-[#1a1b1e] font-avenir">
            <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${msg.role === "user"
                            ? "bg-blue-500 text-white rounded-tr-none"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-none"
                            }`}>
                            {msg.content}
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl rounded-tl-none flex space-x-1">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                        </div>
                    </div>
                )}
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-100 dark:border-gray-800 flex space-x-2">
                <input
                    type="text"
                    className="flex-1 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 text-sm no-outline text-gray-800 dark:text-gray-200"
                    placeholder="Ask me anything..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isTyping}
                />
                <button
                    type="submit"
                    disabled={isTyping || !input.trim()}
                    className="size-9 bg-blue-500 hover:bg-blue-600 rounded-xl flex-center text-white transition-all disabled:opacity-50 active:scale-90"
                >
                    <span className="i-bi:send-fill" />
                </button>
            </form>
        </div>
    );
}
