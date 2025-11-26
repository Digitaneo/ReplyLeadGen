import React from 'react';
import { motion } from 'framer-motion';
import { Database, UserPlus, Search, Linkedin, Mail, MessageSquare, Phone, Zap, Calendar, Clock, CheckCircle2, ArrowRight, ShoppingBag, Cloud, MessageCircle } from 'lucide-react';
import { Button } from './ui/Button';

const FeatureBlock = ({ 
  title, 
  subtitle, 
  description, 
  features, 
  imageComponent, 
  align = 'left',
  badge
}: { 
  title: string, 
  subtitle: string, 
  description: string, 
  features: string[], 
  imageComponent: React.ReactNode, 
  align?: 'left' | 'right',
  badge?: string
}) => {
  return (
    <div className="py-24 border-b border-slate-100 last:border-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row items-center gap-16 ${align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Text Content */}
          <div className="flex-1">
            {badge && (
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
                {badge}
              </span>
            )}
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{title}</h3>
            <h4 className="text-xl text-brand font-medium mb-6">{subtitle}</h4>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {description}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 min-w-[20px]">
                    <CheckCircle2 size={20} className="text-green-500" />
                  </div>
                  <span className="text-slate-700 font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="outline" className="group">
              Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Visual Content */}
          <div className="flex-1 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-2xl p-2 sm:p-6"
            >
              {imageComponent}
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export const DetailedFeatures: React.FC = () => {
  return (
    <section className="bg-white relative overflow-hidden">
      
      {/* SECTION 1: DATA & PROSPECTING */}
      <FeatureBlock 
        align="left"
        badge="Real-Time Data"
        title="Find the Right People, Not Just Any People."
        subtitle="Precision Prospecting Powered by Generect"
        description="Build laser-focused lists to connect with an audience that truly resonates. Access over 1 billion global contacts with real-time data and intent signals to keep your outreach sharp and effective."
        features={[
          "Smart Audience Suggestions",
          "1 Billion+ Global Contacts",
          "Email Search Extension (LinkedIn/Gmail)",
          "Real-time Data Enrichment"
        ]}
        imageComponent={
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-100 p-3 flex items-center justify-between">
              <div className="text-xs font-semibold text-slate-500 uppercase">B2B Database</div>
              <div className="flex gap-2">
                 <div className="h-2 w-2 rounded-full bg-slate-300"></div>
                 <div className="h-2 w-2 rounded-full bg-slate-300"></div>
              </div>
            </div>
            <div className="p-4 space-y-3">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="flex items-center gap-3 p-3 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-100 cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-blue-600 font-bold">
                       {i === 1 ? 'JD' : i === 2 ? 'SM' : 'AR'}
                    </div>
                    <div className="flex-1">
                       <div className="h-2.5 bg-slate-800 rounded w-1/3 mb-1.5"></div>
                       <div className="h-2 bg-slate-300 rounded w-1/2"></div>
                    </div>
                    <div className="flex gap-2">
                       <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] rounded font-medium">Verified</span>
                       <span className="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] rounded font-medium">Intent High</span>
                    </div>
                 </div>
               ))}
               <div className="mt-4 pt-3 border-t border-slate-100 text-center">
                  <span className="text-xs text-slate-400">Powered by Generect Data Provider</span>
               </div>
            </div>
          </div>
        }
      />

      {/* SECTION 2: MULTICHANNEL */}
      <FeatureBlock 
        align="right"
        badge="Multichannel Outreach"
        title="Engage Across Every Channel."
        subtitle="AI-Generated Conditional Sequences"
        description="Engage with your prospects on their terms, not just in their inbox. AI personalizes interaction across Email, Social Media, Calls, WhatsApp, and more. Combine them into dynamic conditional sequences."
        features={[
          "AI-Generated Sequences",
          "Personalized AI Variables",
          "Unified Inbox for All Channels",
          "Conditional Logic Steps"
        ]}
        imageComponent={
          <div className="relative h-[400px] w-full flex items-center justify-center bg-slate-50/50 rounded-xl overflow-hidden">
             {/* Central Hub */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="w-20 h-20 bg-brand rounded-2xl flex items-center justify-center shadow-2xl shadow-brand/30 border-4 border-white">
                   <Zap className="text-white w-10 h-10" />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Reply Core</span>
                </div>
             </div>

             {/* Inner Orbit */}
             <div className="absolute w-[280px] h-[280px] border border-dashed border-slate-300/60 rounded-full animate-[spin_30s_linear_infinite]"></div>
             
             {/* Outer Orbit */}
             <div className="absolute w-[450px] h-[450px] border border-slate-200/40 rounded-full opacity-50"></div>

             {/* Floating Integration Icons */}
             
             {/* LinkedIn */}
             <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-[20%] left-[20%] z-20"
             >
                <div className="bg-white p-3 rounded-xl shadow-lg border border-blue-100 flex items-center gap-3">
                   <div className="bg-[#0077b5]/10 p-2 rounded-lg"><Linkedin size={20} className="text-[#0077b5]"/></div>
                   <div>
                      <div className="text-xs font-bold text-slate-700">LinkedIn</div>
                      <div className="text-[10px] text-slate-400">Connection Request</div>
                   </div>
                </div>
             </motion.div>

             {/* Gmail */}
             <motion.div 
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute top-[15%] right-[20%] z-20"
             >
                <div className="bg-white p-3 rounded-xl shadow-lg border border-red-100 flex items-center gap-3">
                   <div className="bg-red-50 p-2 rounded-lg"><Mail size={20} className="text-red-500"/></div>
                   <div>
                      <div className="text-xs font-bold text-slate-700">Gmail</div>
                      <div className="text-[10px] text-slate-400">Personal Email</div>
                   </div>
                </div>
             </motion.div>

             {/* Salesforce */}
             <motion.div 
               animate={{ x: [0, 10, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
               className="absolute bottom-[25%] left-[15%] z-20"
             >
                <div className="bg-white p-3 rounded-xl shadow-lg border border-blue-100 flex items-center gap-3">
                   <div className="bg-blue-50 p-2 rounded-lg"><Cloud size={20} className="text-blue-500"/></div>
                   <div>
                      <div className="text-xs font-bold text-slate-700">Salesforce</div>
                      <div className="text-[10px] text-slate-400">Update Lead</div>
                   </div>
                </div>
             </motion.div>

             {/* WhatsApp */}
             <motion.div 
               animate={{ x: [0, -10, 0] }}
               transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
               className="absolute bottom-[20%] right-[15%] z-20"
             >
                <div className="bg-white p-3 rounded-xl shadow-lg border border-green-100 flex items-center gap-3">
                   <div className="bg-green-50 p-2 rounded-lg"><MessageCircle size={20} className="text-green-500"/></div>
                   <div>
                      <div className="text-xs font-bold text-slate-700">WhatsApp</div>
                      <div className="text-[10px] text-slate-400">Direct Msg</div>
                   </div>
                </div>
             </motion.div>

             {/* Shopify */}
             <motion.div 
               animate={{ scale: [1, 1.05, 1] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
               className="absolute top-[50%] right-[5%] z-10 opacity-80 scale-90"
             >
                <div className="bg-white p-2.5 rounded-xl shadow-md border border-green-100 flex items-center gap-2">
                   <div className="bg-green-50 p-1.5 rounded-lg"><ShoppingBag size={16} className="text-green-600"/></div>
                   <span className="text-xs font-bold text-slate-600">Shopify</span>
                </div>
             </motion.div>

             {/* Hubspot/Generic CRM */}
             <motion.div 
               animate={{ scale: [1, 1.05, 1] }}
               transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
               className="absolute top-[50%] left-[5%] z-10 opacity-80 scale-90"
             >
                <div className="bg-white p-2.5 rounded-xl shadow-md border border-orange-100 flex items-center gap-2">
                   <div className="bg-orange-50 p-1.5 rounded-lg"><Database size={16} className="text-orange-600"/></div>
                   <span className="text-xs font-bold text-slate-600">HubSpot</span>
                </div>
             </motion.div>

          </div>
        }
      />

      {/* SECTION 3: SCHEDULING */}
      <FeatureBlock 
        align="left"
        badge="Automated Closing"
        title="Stop Scheduling, Start Selling."
        subtitle="AI Responses & Meeting Booking"
        description="Eliminate the scheduling headache with AI sales automation. Book meetings with qualified leads effortlessly, accelerating your sales pipeline. AI handles follow-ups and basic inquiries for you."
        features={[
          "Book Meetings from Sequences",
          "AI-Generated Responses",
          "Calendly & CRM Integration",
          "Sync & Route Leads"
        ]}
        imageComponent={
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4">
               <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Jason AI Active
               </div>
            </div>
            <div className="p-6">
               <div className="flex gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-slate-200">
                    <img src="https://i.pravatar.cc/100?img=12" alt="Prospect" className="w-full h-full rounded-full" />
                  </div>
                  <div className="bg-slate-50 p-3 rounded-2xl rounded-tl-none text-sm text-slate-600 max-w-[80%]">
                     Does Tuesday at 2 PM work for a quick demo?
                  </div>
               </div>
               
               <div className="flex gap-4 flex-row-reverse mb-6">
                  <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white text-xs">AI</div>
                  <div className="bg-blue-600 p-3 rounded-2xl rounded-tr-none text-sm text-white max-w-[80%] shadow-lg shadow-blue-200">
                     I've checked the calendar. Tuesday at 2 PM EST is confirmed. I've sent the invite to your email.
                  </div>
               </div>

               <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                  <div className="bg-red-50 p-3 rounded-lg text-red-500">
                     <Calendar size={24} />
                  </div>
                  <div>
                     <div className="font-bold text-slate-900">Product Demo</div>
                     <div className="text-xs text-slate-500">Tue, Oct 24 • 2:00 PM - 2:30 PM</div>
                  </div>
                  <div className="ml-auto">
                     <CheckCircle2 size={24} className="text-green-500" />
                  </div>
               </div>
            </div>
          </div>
        }
      />

    </section>
  );
};