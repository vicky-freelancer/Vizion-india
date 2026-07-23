import React from "react";
import { MessageSquare, ArrowRight } from "lucide-react";

interface NavbarProps {
  onApplyClick: () => void;
  onWhatsAppClick: () => void;
}

export default function Navbar({ onApplyClick, onWhatsAppClick }: NavbarProps) {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Vizion India Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={onApplyClick}>
          <img 
            src="public/logo2.jpg" 
            alt="Vizion India Logo" 
            className="h-11 sm:h-12 w-auto object-contain rounded transition-all"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Right Nav Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* WhatsApp Button (Replaces website registration pill button) */}
          <button
            onClick={onWhatsAppClick}
            className="flex items-center gap-1.5 sm:gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 py-1.5 px-3 sm:px-4 rounded-full text-xs font-bold transition-all cursor-pointer shadow-sm"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white flex-shrink-0">
              <MessageSquare className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="hidden sm:inline text-[11px] font-medium text-slate-500">Chat with us on</span>
            <span className="font-extrabold text-slate-900">WhatsApp</span>
          </button>

          <button
            onClick={onApplyClick}
            className="bg-blue-950 hover:bg-blue-900 text-white font-black text-xs sm:text-sm py-2.5 px-5 sm:px-6 rounded-lg uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center gap-1.5"
          >
            <span>APPLY NOW</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </nav>
  );
}
