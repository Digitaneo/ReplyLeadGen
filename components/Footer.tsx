import React from 'react';
import { BRAND_COLOR } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: BRAND_COLOR }}>
                    <span className="text-white font-bold text-lg">R</span>
                </div>
                <span className="text-xl font-bold text-slate-900">ReplyLeadGen</span>
            </div>
            <p className="text-sm text-slate-500">
              The ultimate AI-powered sales engagement platform for modern sales teams.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="https://www.replyleadgen.com/reply/about-us" className="hover:text-brand">About Us</a></li>
              <li><a href="https://www.replyleadgen.com/reply/contact-us" className="hover:text-brand">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="https://www.replyleadgen.com/reply/help-centre" className="hover:text-brand">Help Centre</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="https://www.replyleadgen.com/reply/privacy-policy" className="hover:text-brand">Privacy Policy</a></li>
              <li><a href="https://www.replyleadgen.com/reply/terms-of-service" className="hover:text-brand">Terms of Service</a></li>
              <li><a href="https://www.replyleadgen.com/reply/refund-policy" className="hover:text-brand">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8">
            <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 text-center mb-6">
                <p className="text-sm text-yellow-800 font-medium">
                    Disclaimer: ReplyLeadGen.com is an independent affiliate partner. We are not the official website of Reply.io. 
                    This page contains affiliate links. If you make a purchase through these links, we may earn a commission at no extra cost to you.
                </p>
            </div>
            <p className="text-center text-sm text-slate-400">
                &copy; {new Date().getFullYear()} ReplyLeadGen. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};