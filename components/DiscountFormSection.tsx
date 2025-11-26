import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Check, Rocket } from 'lucide-react';
import { AFFILIATE_LINK } from '../constants';

export const DiscountFormSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Redirect to affiliate link after short delay
      setTimeout(() => {
        window.open(AFFILIATE_LINK, '_blank');
      }, 1500);
    }, 1500);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-[#0c043f]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <motion.div 
           animate={{ 
             scale: [1, 1.2, 1],
             opacity: [0.3, 0.5, 0.3],
             rotate: [0, 90, 0]
           }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[100px] opacity-30" 
         />
         <motion.div 
           animate={{ 
             scale: [1, 1.3, 1],
             opacity: [0.2, 0.4, 0.2],
             x: [0, -50, 0]
           }}
           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
           className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[120px] opacity-30" 
         />
         
         {/* Floating particles */}
         {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full opacity-20"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
         ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
           {/* Shimmer effect on card */}
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_3s_infinite]"></div>

           <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-sm font-semibold mb-4 border border-amber-400/30"
                 >
                    <Sparkles size={14} />
                    Limited Time Offer
                 </motion.div>
                 
                 <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-4"
                 >
                    Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-300">10% Discount</span> Code Now
                 </motion.h2>
                 
                 <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-blue-100 text-lg leading-relaxed mb-6"
                 >
                    Unlock full access to the AI Sales Assistant platform. Join 2,500+ teams scaling their revenue today.
                 </motion.p>
              </div>

              <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 }}
                 className="bg-white/5 p-6 rounded-2xl border border-white/10"
              >
                 <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                       <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-1">Business Email</label>
                       <input 
                         type="email" 
                         id="email" 
                         required
                         placeholder="name@company.com"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                       />
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={status !== 'idle'}
                      className={`
                        w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all relative overflow-hidden group
                        ${status === 'success' ? 'bg-green-500 text-white' : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02]'}
                      `}
                    >
                       <AnimatePresence mode='wait'>
                          {status === 'idle' && (
                            <motion.span 
                               key="idle"
                               initial={{ opacity: 0 }}
                               animate={{ opacity: 1 }}
                               exit={{ opacity: 0 }}
                               className="flex items-center gap-2"
                            >
                               Claim 10% Off <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                            </motion.span>
                          )}
                          {status === 'loading' && (
                            <motion.span 
                               key="loading"
                               initial={{ opacity: 0 }}
                               animate={{ opacity: 1 }}
                               exit={{ opacity: 0 }}
                            >
                               Processing...
                            </motion.span>
                          )}
                          {status === 'success' && (
                            <motion.span 
                               key="success"
                               initial={{ opacity: 0, scale: 0.5 }}
                               animate={{ opacity: 1, scale: 1 }}
                               className="flex items-center gap-2"
                            >
                               <Check size={20} /> Coupon Unlocked!
                            </motion.span>
                          )}
                       </AnimatePresence>
                    </button>
                    
                    <p className="text-xs text-center text-blue-200/60">
                       We respect your privacy. No spam.
                    </p>
                 </form>
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
};
