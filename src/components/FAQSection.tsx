import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What information do I need to get a car insurance quote?",
    answer: "To get a quote, you'll need your vehicle information (make, model, year), driving history, personal information (name, address, date of birth), and current insurance details if any."
  },
  {
    question: "What types of car insurance coverage are required in the USA?",
    answer: "Most states require liability insurance at minimum, which includes bodily injury and property damage coverage. Some states also require personal injury protection (PIP) or uninsured/underinsured motorist coverage."
  },
  {
    question: "How can I lower my car insurance premium?",
    answer: "You can lower your premium by maintaining a good driving record, bundling policies, choosing a higher deductible, installing safety features, and taking advantage of available discounts like good student or safe driver discounts."
  },
  {
    question: "How quickly can I get car insurance coverage?",
    answer: "With CompareOnCall, you can get coverage immediately after selecting and purchasing your policy. Our experts will guide you through the process and ensure you have all necessary documentation."
  },
  {
    question: "What factors affect my car insurance rates?",
    answer: "Insurance rates are affected by factors including your driving history, age, location, vehicle type, credit score (in most states), annual mileage, and the coverage types and limits you choose."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-left">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-green-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-green-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white border border-gray-100 rounded-b-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;