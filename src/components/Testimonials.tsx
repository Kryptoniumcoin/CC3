import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Michael Anderson",
    location: "Dallas, TX",
    text: "I was paying way too much for my auto insurance. CompareOnCall found me a better policy with the same coverage for $847 less per year! The whole process took less than 10 minutes on the phone.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    saved: "$847/year",
    occupation: "Small Business Owner"
  },
  {
    name: "Jennifer Martinez",
    location: "Phoenix, AZ",
    text: "After my accident, other companies wanted to charge me a fortune. CompareOnCall found me affordable coverage despite my record. Their agent was so helpful and understanding!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    saved: "$623/year",
    occupation: "Nurse"
  },
  {
    name: "Robert Wilson",
    location: "Atlanta, GA",
    text: "I thought I had a good rate until I called CompareOnCall. They saved me over $500 annually and even got me better coverage. The best part? No paperwork!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    saved: "$506/year",
    occupation: "Construction Manager"
  },
  {
    name: "Sarah Miller",
    location: "Chicago, IL",
    text: "Being a first-time driver, I was worried about high insurance rates. CompareOnCall found me an affordable policy that fit my budget. Their customer service is exceptional!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    saved: "$738/year",
    occupation: "Graduate Student"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-green-800">Real Customer Stories</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Join thousands of satisfied customers who've saved money and found better coverage with CompareOnCall
        </p>
        
        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition z-10"
          >
            <ChevronLeft className="w-6 h-6 text-green-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition z-10"
          >
            <ChevronRight className="w-6 h-6 text-green-600" />
          </button>
          
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                    <Quote className="w-10 h-10 text-green-600/20 mb-4" />
                    <div className="flex flex-col md:flex-row items-start md:items-center mb-6 gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                        <p className="text-gray-600 text-sm">{testimonial.occupation}</p>
                        <p className="text-gray-600 text-sm">{testimonial.location}</p>
                        <div className="flex items-center mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <div className="md:ml-auto">
                        <div className="bg-green-50 text-green-800 px-4 py-2 rounded-full font-semibold">
                          Saved {testimonial.saved}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentIndex === index ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;