import React from 'react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

export const CtaSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-transparent scroll-mt-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0c043f] to-[#2a2468] rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Decorative rings */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to scale your sales?</h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using AI to automate their outreach. 
              <br/>
              <span className="font-semibold text-yellow-300">Use our partner link below to unlock a 10% discount on your first month.</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="white" className="h-14 px-10 text-lg">
                Get 10% Discount
              </Button>
            </div>
            <p className="mt-6 text-sm text-blue-200/60">No credit card required for 14-day trial.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};