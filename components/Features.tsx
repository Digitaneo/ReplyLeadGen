import React from 'react';
import { Mail, Zap, Users, BarChart3, Globe, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: <Mail className="w-6 h-6 text-blue-600" />,
    title: "Multichannel Outreach",
    description: "Combine emails, follow-ups, calls, SMS, and WhatsApp into a single sequence."
  },
  {
    icon: <Zap className="w-6 h-6 text-amber-500" />,
    title: "AI SDR Assistant",
    description: "Jason AI writes emails, handles responses, and books meetings for you automatically."
  },
  {
    icon: <Users className="w-6 h-6 text-green-600" />,
    title: "B2B Data Database",
    description: "Access a database of 140M+ verified contacts with emails and phone numbers."
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-purple-600" />,
    title: "Advanced Reporting",
    description: "Track open rates, reply rates, and meeting bookings with granular analytics."
  },
  {
    icon: <Globe className="w-6 h-6 text-cyan-600" />,
    title: "Agency Solutions",
    description: "Manage multiple clients from a single dashboard with unlimited mailboxes."
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-pink-600" />,
    title: "Unified Inbox",
    description: "Manage all prospect conversations from different channels in one centralized place."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white/50 backdrop-blur-sm scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need to grow revenue</h2>
          <p className="text-lg text-slate-600">
            From finding prospects to closing deals, our platform handles the heavy lifting so you can focus on selling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};