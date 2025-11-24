export interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: string;
}

const STORAGE_KEY = 'hamza-ai-chat-history';

export const chatStorage = {
    saveMessage: (message: Omit<Message, 'id' | 'timestamp'>): Message => {
        const newMessage: Message = {
            ...message,
            id: Date.now().toString(),
            timestamp: new Date().toISOString(),
        };

        const messages = chatStorage.getMessages();
        messages.push(newMessage);

        if (typeof window !== 'undefined') {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
        }

        return newMessage;
    },

    getMessages: (): Message[] => {
        if (typeof window === 'undefined') return [];

        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    },

    clearMessages: (): void => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem(STORAGE_KEY);
        }
    },
};
