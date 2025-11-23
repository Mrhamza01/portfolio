'use client';

import { MessageCircle } from 'lucide-react';
import { whatsappConfig } from '@/constants/social-links';
import { useState } from 'react';

export function WhatsAppButton() {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        const message = encodeURIComponent(whatsappConfig.defaultMessage);
        const url = `https://wa.me/${whatsappConfig.phoneNumber}?text=${message}`;
        window.open(url, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl"
            aria-label="Contact on WhatsApp"
        >
            <MessageCircle className={`h-7 w-7 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />

            {/* Ripple effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" />
        </button>
    );
}
