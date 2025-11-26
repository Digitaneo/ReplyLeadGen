import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Head of Sales at TechFlow",
    content: "The AI features are a game changer. We've automated 80% of our outreach and booked 3x more meetings in the first month.",
    image: "https://i.pravatar.cc/100?img=11"
  },
  {
    name: "Sarah Williams",
    role: "Founder, GrowthAgency",
    content: "ReplyLeadGen's partner link saved us money, and the tool itself is incredible. The multichannel sequences work seamlessly.",
    image: "https://i.pravatar.cc/100?img=5"
  },
  {
    name: "Michael Chen",
    role: "SDR Manager, CloudScale",
    content: "I love the unified inbox. Managing LinkedIn and Email conversations in one place saves my team hours every single day.",
    image: "https://i.pravatar.cc/100?img=3"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50/50 border-t border-slate-200 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Trusted by Sales Leaders</h2>
           <p className="mt-4 text-lg text-slate-600">See what others are saying about the platform.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col hover:shadow-lg transition-shadow"
            >
               <div className="flex gap-1 text-yellow-400 mb-4">
                  {[1,2,3,4,5].map(star => <Star key={star} size={18} fill="currentColor" />)}
               </div>
               <p className="text-slate-700 leading-relaxed mb-6 flex-grow">"{t.content}"</p>
               <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full" />
                  <div>
                     <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                     <div className="text-slate-500 text-xs">{t.role}</div>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};