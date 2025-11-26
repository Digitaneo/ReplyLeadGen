import React from 'react';
import { motion } from 'framer-motion';
import { Search, Send, TrendingUp } from 'lucide-react';
import { BRAND_COLOR } from '../constants';

const steps = [
  {
    id: 1,
    title: "Find Your Perfect Leads",
    description: "Use the B2B database to find verified emails and phone numbers for your ideal customer profile.",
    icon: <Search className="w-6 h-6 text-white" />,
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "Automate Outreach",
    description: "Set up multichannel sequences (Email, LinkedIn, Calls) that run on autopilot with Jason AI.",
    icon: <Send className="w-6 h-6 text-white" />,
    color: "bg-purple-500"
  },
  {
    id: 3,
    title: "Close More Deals",
    description: "Handle replies, book meetings automatically, and track revenue growth in real-time.",
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    color: "bg-green-500"
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="solutions" className="py-24 relative overflow-hidden scroll-mt-28">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 transform origin-top-right -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-sm font-bold tracking-wide text-brand uppercase mb-2">Workflow</h2>
           <h3 className="text-3xl md:text-4xl font-bold text-slate-900">How It Works</h3>
           <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Turn cold prospects into loyal customers in three simple steps.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 z-0"></div>

           {steps.map((step, index) => (
             <motion.div 
               key={step.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.2 }}
               className="relative z-10 flex flex-col items-center text-center group"
             >
                <div className={`w-24 h-24 rounded-2xl ${step.color} shadow-lg flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                   {step.icon}
                </div>
                <div className="bg-white/80 backdrop-blur p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow w-full">
                    <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold mb-3">
                        STEP {step.id}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                        {step.description}
                    </p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};