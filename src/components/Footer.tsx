import React from "react";
import { Phone, Globe, MapPin, Mail, ShieldCheck, Award } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 py-12 px-4 border-t border-slate-800">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Main Footer Banner matching the bottom poster banner in screenshot */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 border-2 border-blue-500/30 p-6 sm:p-8 rounded-3xl shadow-2xl text-center space-y-4 relative overflow-hidden">
          
          <div className="absolute top-0 inset-x-0 h-1 bg-amber-400" />

          <div className="flex justify-center mb-2">
            <img 
              src="/logo2.jpg" 
              alt="Vizion India Logo" 
              className="h-12 sm:h-14 w-auto object-contain bg-white p-1 rounded-xl shadow-md"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
            <Award className="w-4 h-4" /> VIZION INDIA
          </div>

          <h3 className="font-display font-black text-xl sm:text-3xl text-white tracking-tight uppercase">
            BUILD YOUR CAREER WITH Vizion India
          </h3>

          <p className="text-emerald-400 font-extrabold text-xs sm:text-sm uppercase tracking-wider">
            Join Vizion India – Be Future Ready
          </p>

          <div className="text-xs sm:text-sm font-extrabold text-amber-400 tracking-widest uppercase flex flex-wrap justify-center gap-2 sm:gap-4">
            <span>EMPOWERING STUDENTS</span>
            <span className="text-slate-600">|</span>
            <span>BUILDING CAREERS</span>
            <span className="text-slate-600">|</span>
            <span>CREATING FUTURE LEADERS</span>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-bold border-t border-slate-800/80">
            <a 
              href="https://www.vizionindia.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 hover:underline"
            >
              <Globe className="w-4 h-4 text-amber-400" />
              <span>www.vizionindia.in</span>
            </a>

            <span className="hidden sm:inline text-slate-600">•</span>

            <a 
              href="tel:+919445285416" 
              className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 hover:underline"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call for queries: +91 94452 85416</span>
            </a>
          </div>

        </div>

        {/* Corporate details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-400 pt-4 border-t border-slate-800/60">
          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm uppercase">Registered Company</h4>
            <p className="leading-relaxed font-medium">
              <strong className="text-white font-bold">Registered Company:</strong> Vizion India<br />
              <span className="text-slate-300">Registered in Tamil Nadu, India.</span>
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm uppercase">Helpdesk & Contact</h4>
            <p className="leading-relaxed flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-400" /> +91 94452 85416
            </p>
            <p className="leading-relaxed flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-blue-400" /> www.vizionindia.in
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-white text-sm uppercase">Job Locations</h4>
            <p className="leading-relaxed">
              Positions available across major cities in Tamil Nadu (Chennai, Madurai, Coimbatore, Trichy, Salem & regional centers).
            </p>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="text-center text-[11px] text-slate-500 pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {currentYear} SUKRITH LEARNING OPC PRIVATE LIMITED, Tamil Nadu. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
