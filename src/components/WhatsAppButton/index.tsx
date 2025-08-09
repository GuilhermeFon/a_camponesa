"use client";

import {MessageCircle} from "lucide-react";
import WhatsappIcon from "@/src/assets/whatsapp.svg";

interface WhatsAppButtonProps {
  message?: string;
}

export default function WhatsAppButton({
  message = "Olá! Gostaria de saber mais sobre os produtos da Camponesa.",
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5541984602341?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
        aria-label="Entrar em contato via WhatsApp"
      >
        <WhatsappIcon className="w-8 h-8" />
      </button>
    </div>
  );
}
