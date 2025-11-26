import React from 'react';
import { motion } from 'framer-motion';
import { COMPANIES } from '../constants';

export const LogoTicker: React.FC = () => {
  return (
    <div className="py-10 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Trusted by 2,500+ innovative sales teams</p>
      </div>
      <div className="flex overflow-hidden relative">
         <motion.div 
            className="flex gap-16 items-center whitespace-nowrap"
            animate={{ x: "-50%" }}
            transition={{ 
                duration: 20, 
                ease: "linear", 
                repeat: Infinity 
            }}
         >
            {[...COMPANIES, ...COMPANIES, ...COMPANIES].map((company, index) => (
                <div key={index} className="text-2xl font-bold text-slate-300 hover:text-slate-500 transition-colors cursor-default select-none">
                    {company}
                </div>
            ))}
         </motion.div>
         <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
         <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};