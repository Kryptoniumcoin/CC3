import React, { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';

const FloatingCTA = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState('');

  const messages = [
    "🔥 Don't miss your $500 savings!",
    "⚡ Limited time offer ending soon!",
    "💰 Save extra $10/month - Call now!",
    "🎉 Only 3 spots left for best rates!",
    "⏰ Offer expires in 2 hours!"
  ];

  useEffect(() => {
    const expandInterval = setInterval(() => {
      setIsExpanded(true);
      setTimeout(() => setIsExpanded(false), 3000);
    }, 5000);

    const messageInterval = setInterval(() => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      setMessage(randomMessage);
    }, 5000);

    return () => {
      clearInterval(expandInterval);
      clearInterval(messageInterval);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center">
      {isExpanded && (
        <div className="mr-4 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg shadow-lg animate-fade-in">
          {message}
        </div>
      )}
      <a
        href="tel:+1-8334615733"
        className="bg-orange-500 hover:bg-orange-400 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center animate-pulse"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingCTA;