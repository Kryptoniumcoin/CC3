import React, { useState, useEffect } from 'react';
import { Shield, CheckCircle2, Clock, Phone, Mail, Facebook, Instagram, Car, DollarSign, Heart, Award, Star, Users, FileCheck, ArrowRight, Menu, X, AlertTriangle, Zap, Timer as TimerIcon } from 'lucide-react';
import Timer from './components/Timer';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import PrivacyPolicy from './components/PrivacyPolicy';
import PopupOffer from './components/PopupOffer';
import NoFormsSection from './components/NoFormsSection';
import FloatingCTA from './components/FloatingCTA';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Show popup after 8 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 8000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (showPrivacyPolicy) {
    return (
      <>
        <header className={`${isScrolled ? 'shadow-md' : ''} fixed w-full top-0 z-50 bg-green-800 text-white py-4 transition-all duration-300`}>
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setShowPrivacyPolicy(false)}>
              <Shield className="w-8 h-8" />
              <span className="text-2xl font-bold">CompareOnCall</span>
            </div>
          </div>
        </header>
        <PrivacyPolicy />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {showPopup && <PopupOffer onClose={() => setShowPopup(false)} />}
      <FloatingCTA />

      {/* Header */}
      <header className={`${isScrolled ? 'shadow-md' : ''} fixed w-full top-0 z-50 bg-green-800 text-white py-4 transition-all duration-300`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8" />
            <span className="text-2xl font-bold">CompareOnCall</span>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#why-us" className="hover:text-green-200">Why Choose Us</a>
            <a href="#about" className="hover:text-green-200">About Us</a>
            <a href="tel:+1-8334615733" className="bg-orange-500 px-6 py-3 rounded-full hover:bg-orange-400 transition flex items-center space-x-2 animate-pulse">
              <Phone className="w-5 h-5" />
              <span className="font-bold">+1-833-461-5733</span>
            </a>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-green-800 py-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <a href="#why-us" className="hover:text-green-200" onClick={() => setMobileMenuOpen(false)}>Why Choose Us</a>
              <a href="#about" className="hover:text-green-200" onClick={() => setMobileMenuOpen(false)}>About Us</a>
              <a href="tel:+1-8334615733" className="bg-orange-500 px-6 py-3 rounded-full hover:bg-orange-400 transition flex items-center justify-center space-x-2 animate-pulse">
                <Phone className="w-5 h-5" />
                <span className="font-bold">+1-833-461-5733</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[600px] mt-16 flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1549925245-f20a7c0495ee?auto=format&fit=crop&q=80"
            alt="Happy family with car"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-900/80"></div>
        </div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-2xl">
            <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full mb-4 animate-bounce">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4" />
                <span className="font-semibold">Limited Time Offer - Act Now!</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Skip the Hassle - Get Your Auto Insurance Quote by Phone!
            </h1>
            <p className="text-xl text-white mb-8 max-w-xl">
              Save up to 50% on your car insurance in minutes. Our licensed experts are ready to find you the best rates from top providers.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="tel:+1-8334615733" className="bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-orange-400 transition inline-flex items-center space-x-3 transform hover:scale-105 animate-pulse">
                <Phone className="w-6 h-6" />
                <span>Call Now: +1-833-461-5733</span>
              </a>
              <div className="flex items-center space-x-2 text-white">
                <Clock className="w-5 h-5" />
                <span>Takes only 2 minutes</span>
              </div>
            </div>
            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-4">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=50&h=50&fit=crop" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                </div>
                <div className="text-white">
                  <p className="font-semibold">15+ people saved in the last hour</p>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timer Section */}
      <section className="bg-green-800 py-8">
        <div className="container mx-auto px-4 flex justify-center">
          <Timer />
        </div>
      </section>

      {/* No Forms Section */}
      <NoFormsSection />

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-gray-50 rounded-lg transform hover:scale-105 transition">
              <div className="text-4xl font-bold text-green-600 mb-2 flex justify-center items-center">
                <Zap className="w-8 h-8 mr-2" />
                50%
              </div>
              <p className="text-gray-600">Average Savings on Car Insurance</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg transform hover:scale-105 transition">
              <div className="text-4xl font-bold text-green-600 mb-2 flex justify-center items-center">
                <TimerIcon className="w-8 h-8 mr-2" />
                2 min
              </div>
              <p className="text-gray-600">Quick Quote Process</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg transform hover:scale-105 transition">
              <div className="text-4xl font-bold text-green-600 mb-2 flex justify-center items-center">
                <Users className="w-8 h-8 mr-2" />
                24/7
              </div>
              <p className="text-gray-600">Customer Support</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg transform hover:scale-105 transition">
              <div className="text-4xl font-bold text-green-600 mb-2 flex justify-center items-center">
                <Shield className="w-8 h-8 mr-2" />
                100%
              </div>
              <p className="text-gray-600">Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-800">Common Insurance Struggles We Solve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <DollarSign className="w-12 h-12 text-orange-500" />,
                title: "Paying Too Much?",
                description: "Most drivers overpay by $500+ annually. We'll find you better rates instantly.",
                action: "Save Up To 50% Today"
              },
              {
                icon: <AlertTriangle className="w-12 h-12 text-orange-500" />,
                title: "Denied Coverage?",
                description: "Bad driving record or lapses in coverage? We work with carriers who specialize in high-risk drivers.",
                action: "Get Covered Now"
              },
              {
                icon: <Clock className="w-12 h-12 text-orange-500" />,
                title: "Need Coverage Fast?",
                description: "Don't wait days for quotes. Get insured in minutes with our rapid quote system.",
                action: "Get Instant Quote"
              },
              {
                icon: <FileCheck className="w-12 h-12 text-orange-500" />,
                title: "Confusing Policies?",
                description: "Our experts explain everything in plain English. No insurance jargon.",
                action: "Speak to an Expert"
              },
              {
                icon: <Shield className="w-12 h-12 text-orange-500" />,
                title: "Inadequate Coverage?",
                description: "Find out if you have dangerous gaps in your coverage that could cost you thousands.",
                action: "Review Your Coverage"
              },
              {
                icon: <Users className="w-12 h-12 text-orange-500" />,
                title: "Poor Service?",
                description: "Tired of automated systems? Get personalized support from real insurance experts.",
                action: "Talk to a Human"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a href="tel:+1-8334615733" className="inline-flex items-center space-x-2 text-orange-500 font-semibold hover:text-orange-600">
                  <span>{item.action}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOMO Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">🔥 Don't Miss Out!</h2>
                  <p className="text-xl mb-4">
                    <span className="font-bold text-orange-400">Only 3 spots left</span> for our exclusive rate-lock guarantee.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span>Lock in your low rate for 12 months</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span>Save an extra $10/month guaranteed</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span>Free roadside assistance included</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="mb-4">
                    <Timer />
                  </div>
                  <a href="tel:+1-8334615733" className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-orange-400 transition transform hover:scale-105 animate-pulse">
                    Claim Your Offer Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted By Leading Insurance Providers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            <img src="https://logo.clearbit.com/progressive.com" alt="Progressive" className="h-12" />
            <img src="https://logo.clearbit.com/statefarm.com" alt="State Farm" className="h-12" />
            <img src="https://logo.clearbit.com/geico.com" alt="Geico" className="h-12" />
            <img src="https://logo.clearbit.com/allstate.com" alt="Allstate" className="h-12" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Save on Your Car Insurance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who save an average of 50% on their car insurance.
            Call now and get your free quote in minutes!
          </p>
          <a href="tel:+1-8334615733" className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-orange-400 transition transform hover:scale-105 animate-pulse">
            Call +1-833-461-5733 Now
          </a>
          <p className="mt-4 text-sm text-green-200">No obligation • Free quotes • 100% satisfaction guaranteed</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-6 h-6" />
                <span className="text-xl font-bold">CompareOnCall</span>
              </div>
              <p className="text-green-200">Your trusted partner in finding the best insurance rates.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+1-8334615733" className="hover:text-green-200">+1-833-461-5733</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@compareoncall.com</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-green-200">About Us</a></li>
                <li><a href="#why-us" className="hover:text-green-200">Why Choose Us</a></li>
                <li><button onClick={() => setShowPrivacyPolicy(true)} className="hover:text-green-200">Privacy Policy</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61555515786564" target="_blank" rel="noopener noreferrer" className="hover:text-green-200">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/compareoncall?igsh=MXVka3BlMWt1cGg1MQ==" target="_blank" rel="noopener noreferrer" className="hover:text-green-200">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-200">
            <p>&copy; {new Date().getFullYear()} CompareOnCall. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;