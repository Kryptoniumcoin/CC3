import React from 'react';
import { X, Phone, AlertTriangle, CheckCircle2 } from 'lucide-react';
import Timer from './Timer';

interface PopupOfferProps {
  onClose: () => void;
}

const PopupOffer: React.FC<PopupOfferProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-yellow-50 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Header with hazard sign */}
        <div className="bg-black text-yellow-400 p-6 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-yellow-400 hover:text-yellow-200"
          >
            <X className="w-6 h-6" />
          </button>
          <AlertTriangle className="w-16 h-16 mx-auto mb-2" />
          <h3 className="text-2xl font-bold">
            ⚠️ URGENT NOTICE ⚠️
          </h3>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <Timer />
          </div>

          <div className="text-black mb-6">
            <p className="text-lg font-bold mb-2">
              🚨 FINAL CALL: Only 3 Spots Remaining!
            </p>
            <p className="text-sm mb-4">
              Lock in your exclusive rate before it expires:
            </p>
          </div>

          <div className="bg-black/5 rounded-lg p-4 mb-6">
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-sm">Save up to <span className="font-bold">50%</span> on your premium</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-sm"><span className="font-bold">Extra $10/month</span> savings guaranteed</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-sm"><span className="font-bold">Free</span> roadside assistance included</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="tel:+1-8334615733"
              className="block w-full bg-black text-yellow-400 py-4 rounded-full text-center font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 animate-pulse"
            >
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>CALL +1-833-461-5733 NOW!</span>
              </div>
            </a>
            
            <div className="text-center text-sm text-gray-600">
              <p>⭐⭐⭐⭐⭐</p>
              <p>"Saved $847 on my premium!" - Sarah M.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupOffer;