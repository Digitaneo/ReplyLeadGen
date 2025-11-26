import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Play, MessageSquare, BarChart, Calendar } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* 3D Dynamic Background */}
      <div className="absolute inset-0 perspective-container pointer-events-none -z-10">
        <div className="moving-grid"></div>
        {/* Subtle radial fade for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/40 to-white/80 opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-transparent opacity-90 h-32"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 text-brand font-medium text-sm mb-8 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          New: AI Sales Assistant for 2025
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 relative"
        >
          Create Opportunities <br className="hidden md:block" />
          <span className="relative inline-block px-3 mx-1 align-bottom">
            <motion.span 
                className="absolute inset-0 bg-[#3b82f6] rounded-md -skew-x-3"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "circOut" }}
                style={{ originX: 0 }}
            ></motion.span>
            <span className="relative text-white z-10">At Scale</span>
          </span> with AI
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Automate your cold outreach with the AI-first sales engagement platform. 
          Find prospects, engage across multiple channels, and close more deals.
          <br/>
          <motion.span 
             animate={{ scale: [1, 1.02, 1] }}
             transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
             className="inline-block mt-3 font-bold text-brand bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100"
          >
             Save 10% on your first month with our partner link.
          </motion.span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button className="h-14 px-8 text-lg w-full sm:w-auto shadow-xl shadow-brand/20">
            Try for Free
            <ArrowRight size={20} />
          </Button>
          <Button variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto bg-white/50 backdrop-blur-sm">
            <Play size={18} className="mr-2 fill-current" />
            See How It Works
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500"
        >
          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-brand" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={16} className="text-brand" />
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
               {[1,2,3].map(i => (
                 <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" className="w-full h-full object-cover"/>
                 </div>
               ))}
            </div>
            <span>Trusted by 2500+ teams</span>
          </div>
        </motion.div>

        {/* Dashboard Wrapper with Floating Animation */}
        <motion.div
           initial={{ opacity: 0, y: 60, scale: 0.95 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.3 }}
           className="mt-20 relative mx-auto max-w-5xl"
        >
           {/* Continuous Float Animation */}
           <motion.div
             animate={{ y: [0, -15, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
           >
               {/* Main Window */}
               <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/60 overflow-hidden relative z-10">
                  {/* Window Header */}
                  <div className="bg-slate-50 border-b border-slate-100 h-10 flex items-center px-4 gap-2">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                     </div>
                     <div className="mx-auto w-1/3 h-5 bg-white rounded-md shadow-sm border border-slate-100"></div>
                  </div>

                  {/* Dashboard Layout */}
                  <div className="flex h-[400px] md:h-[500px]">
                     {/* Sidebar */}
                     <div className="hidden md:flex w-64 bg-slate-50/50 border-r border-slate-100 flex-col p-4 gap-4">
                        <div className="h-8 w-32 bg-slate-200/50 rounded animate-pulse"></div>
                        <div className="space-y-2 mt-4">
                           {[1,2,3,4,5].map(i => (
                              <div key={i} className="h-8 w-full bg-white rounded border border-slate-100 flex items-center px-3 gap-3">
                                 <div className="w-4 h-4 bg-slate-100 rounded"></div>
                                 <div className="w-20 h-2 bg-slate-100 rounded"></div>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Main Content Area */}
                     <div className="flex-1 p-6 md:p-8 bg-white relative">
                        {/* Header stats */}
                        <div className="flex gap-4 mb-8">
                           <div className="flex-1 h-24 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-4">
                              <div className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center mb-2">
                                <MessageSquare size={16}/>
                              </div>
                              <div className="h-2 w-16 bg-blue-100 rounded mb-1"></div>
                              <div className="h-6 w-12 bg-slate-800 rounded"></div>
                           </div>
                           <div className="flex-1 h-24 rounded-xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 p-4">
                              <div className="w-8 h-8 rounded bg-purple-100 text-purple-600 flex items-center justify-center mb-2">
                                 <BarChart size={16} />
                              </div>
                              <div className="h-2 w-16 bg-purple-100 rounded mb-1"></div>
                              <div className="h-6 w-12 bg-slate-800 rounded"></div>
                           </div>
                           <div className="flex-1 hidden sm:block h-24 rounded-xl bg-white border border-slate-100 p-4">
                                <div className="w-full h-full bg-slate-50 rounded animate-pulse"></div>
                           </div>
                        </div>

                        {/* Fake Graph Area */}
                        <div className="h-64 w-full bg-slate-50 rounded-xl border border-slate-100 relative overflow-hidden flex items-end justify-between px-4 pb-0 pt-10">
                           <div className="absolute top-4 left-4 text-xs font-bold text-slate-400">CAMPAIGN PERFORMANCE</div>
                            {/* Bars */}
                            {[30, 45, 35, 60, 50, 75, 65, 90].map((h, i) => (
                               <motion.div 
                                  key={i}
                                  initial={{ height: 0 }}
                                  animate={{ height: `${h}%` }}
                                  transition={{ duration: 1, delay: 0.8 + (i * 0.1) }}
                                  className="w-[8%] bg-brand/10 rounded-t-md relative group hover:bg-brand/20 transition-colors"
                               >
                                  {/* Tooltip on hover */}
                                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                     {h * 12} Replies
                                  </div>
                               </motion.div>
                            ))}
                            
                            {/* Line Chart Overlay */}
                             <svg className="absolute top-0 left-0 w-full h-full pointer-events-none p-4" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <motion.path
                                   initial={{ pathLength: 0 }}
                                   animate={{ pathLength: 1 }}
                                   transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                                   d="M0,70 Q10,60 20,65 T40,40 T60,50 T80,20 T100,10"
                                   fill="none"
                                   stroke="#3b82f6"
                                   strokeWidth="0.5"
                                />
                             </svg>
                        </div>
                     </div>
                  </div>
               </div>
           </motion.div>

           {/* Animated Floating Notification 1 */}
           <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ 
                  x: 0, 
                  opacity: 1,
                  y: [0, -10, 0] // Gentle float
              }}
              transition={{ 
                  x: { delay: 2, duration: 0.5 },
                  opacity: { delay: 2, duration: 0.5 },
                  y: { delay: 2.2, duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -right-4 top-20 md:-right-12 md:top-32 bg-white rounded-xl shadow-2xl border border-green-100 p-4 z-20 max-w-[260px]"
           >
              <div className="flex items-start gap-3">
                 <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-green-600">
                    <Calendar size={20} />
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-900 text-sm">Meeting Booked!</h4>
                    <p className="text-xs text-slate-500 mt-1">Jason AI just booked a demo with <span className="font-semibold text-slate-700">Acme Corp</span>.</p>
                    <div className="mt-2 flex items-center gap-2">
                       <span className="text-[10px] bg-green-50 text-green-700 px-1.5 py-0.5 rounded font-medium">2 min ago</span>
                    </div>
                 </div>
              </div>
           </motion.div>
           
             {/* Secondary Floating Notification 2 */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ 
                  x: 0, 
                  opacity: 1,
                  y: [0, 8, 0] // Float offset
              }}
              transition={{ 
                  x: { delay: 3, duration: 0.5 },
                  opacity: { delay: 3, duration: 0.5 },
                  y: { delay: 3.5, duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -left-4 bottom-20 md:-left-12 md:bottom-32 bg-white rounded-xl shadow-2xl border border-blue-100 p-3 z-20 flex items-center gap-3"
           >
                <div className="relative">
                   <img src="https://i.pravatar.cc/100?img=33" alt="Prospect" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                   <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div>
                   <div className="text-xs font-semibold text-slate-900">Sarah from TechLink</div>
                   <div className="text-[10px] text-slate-500">Replied: "Sounds interesting..."</div>
                </div>
           </motion.div>

        </motion.div>

      </div>
    </section>
  );
};