import React from 'react';
import { Phone, Clock, CheckCircle2 } from 'lucide-react';

const NoFormsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-green-800">
            No Forms, No Waiting - Just Call for Instant Quotes!
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Phone className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Just One Call</h3>
              <p className="text-sm text-gray-600">No complicated forms to fill out. Simply call us for your quote.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <Clock className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">2 Minutes or Less</h3>
              <p className="text-sm text-gray-600">Get your quote in minutes, not hours or days.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Instant Coverage</h3>
              <p className="text-sm text-gray-600">Get covered right away with our instant approval process.</p>
            </div>
          </div>
          
          <a
            href="tel:+1-8334615733"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-400 transition transform hover:scale-105 animate-pulse"
          >
            Call +1-833-461-5733 Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default NoFormsSection;