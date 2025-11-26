import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Is the 10% discount applied automatically?",
    answer: "Yes! When you click our partner link and sign up, the affiliate tracking ensures you are eligible for the discount on your first subscription payment."
  },
  {
    question: "Do I need a credit card for the free trial?",
    answer: "No, you can start your 14-day free trial without entering any credit card information. You only pay when you decide to upgrade."
  },
  {
    question: "Does this work for LinkedIn outreach too?",
    answer: "Absolutely. The platform supports multichannel sequences including Email, LinkedIn, SMS, WhatsApp, and manual calls."
  },
  {
    question: "Can I cancel at any time?",
    answer: "Yes, there are no long-term contracts. You can cancel your subscription at any time from your dashboard."
  }
];

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-12">
           <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
         </div>
         
         <div className="space-y-4">
            {faqs.map((faq, index) => (
               <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur shadow-sm">
                  <button 
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                  >
                     <span className="font-semibold text-slate-800">{faq.question}</span>
                     {activeIndex === index ? <Minus size={20} className="text-brand" /> : <Plus size={20} className="text-gray-400" />}
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                       <motion.div 
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: "auto", opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         className="overflow-hidden"
                       >
                          <div className="p-5 pt-0 text-slate-600 border-t border-gray-50">
                             {faq.answer}
                          </div>
                       </motion.div>
                    )}
                  </AnimatePresence>
               </div>
            ))}
         </div>
      </div>
    </section>
  );
};