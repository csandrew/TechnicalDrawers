// src/components/WhatsAppButton.jsx
import React from 'react';

const WhatsAppButton = () => {
    const phoneNumber = '254795011225';
    const message = 'Hello Technical Drawers,%0A%0AI have a question about your products. Can you help me?';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-whatsapp text-white p-3 rounded-full shadow-lg hover:bg-whatsapp-hover hover:scale-105 transition-all duration-300 group"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
        >
            <i className="fab fa-whatsapp text-2xl"></i>
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:pl-1 transition-all duration-300 font-medium text-sm">
                WhatsApp Us
            </span>
        </a>
    );
};

export default WhatsAppButton;