import React from "react";
import { 
  UserCheck, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  ClipboardCheck, 
  MessageSquare, 
  ArrowRight,
  Quote
} from "lucide-react";

interface HeroSectionProps {
  onApplyClick: () => void;
  onWhatsAppClick: () => void;
}

export default function HeroSection({ onApplyClick, onWhatsAppClick }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/40 border-b border-slate-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* LEFT CONTENT COLUMN (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-blue-950 uppercase leading-none">
                WE'RE <span className="text-emerald-600">HIRING!</span>
              </h1>
              <div className="flex items-center gap-2 pt-1">
                <span className="font-extrabold text-slate-800 text-sm tracking-wider uppercase bg-slate-200 px-2 py-0.5 rounded">FOR</span>
                <div className="h-0.5 bg-blue-950 flex-1 rounded-full" />
              </div>
            </div>
          {/* Roles List Headline */}
            <div className="space-y-2 font-black text-slate-900 text-sm sm:text-base md:text-lg leading-snug uppercase tracking-tight bg-white/90 p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 shadow-sm">
              <p className="text-blue-900 flex items-center gap-2">
                <span className="text-blue-600 font-black min-w-[1.5rem] text-base sm:text-lg">1.</span>
                <span>EDUCATIONAL COUNSELLOR</span>
              </p>
              <p className="text-emerald-800 flex items-center gap-2">
                <span className="text-emerald-600 font-black min-w-[1.5rem] text-base sm:text-lg">2.</span>
                <span>MEDICAL LAB TECHNICIAN</span>
              </p>
              <p className="text-amber-700 flex items-center gap-2">
                <span className="text-amber-600 font-black min-w-[1.5rem] text-base sm:text-lg">3.</span>
                <span>GREEN TECHNOLOGY &amp; RENEWABLE ENERGY(TECHNICIAN)</span>
              </p>
              <p className="text-purple-900 flex items-center gap-2">
                <span className="text-purple-600 font-black min-w-[1.5rem] text-base sm:text-lg">4.</span>
                <span>IIT-JEE (MAIN &amp; ADVANCED) / NEET FACULTY</span>
              </p>
            </div>

            {/* Tagline */}
            <div className="space-y-1">
              <p className="text-blue-950 font-black text-sm sm:text-base tracking-tight uppercase">
                Join Vizion India – Be Future Ready
              </p>
              <p className="text-emerald-700 font-extrabold text-xs sm:text-sm tracking-wide uppercase">
                BUILD YOUR CAREER WITH Vizion India
              </p>
            </div>

            {/* CTA Buttons Row under badges */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onApplyClick}
                className="bg-blue-950 hover:bg-blue-900 text-white font-black text-sm px-6 py-3.5 rounded-xl shadow-lg uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
              >
                <span>APPLY NOW!</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* WhatsApp Button replacing vizionindia.in button */}
              <button
                onClick={onWhatsAppClick}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm px-5 py-3.5 rounded-full flex items-center justify-center gap-2.5 shadow-md cursor-pointer transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-current flex-shrink-0" />
                <div className="text-left leading-tight">
                  <span className="font-black block text-xs sm:text-sm">Chat on WhatsApp</span>
                  <span className="text-[10px] font-medium text-emerald-100 block">+91 94452 85416</span>
                </div>
              </button>
            </div>

          </div>

          {/* RIGHT GRAPHIC COLUMN (5 cols) - Visual matching screenshot */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              {/* Image background: climbers towards goal & windmills */}
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                alt="Career Growth & Team Success" 
                className="w-full h-[320px] sm:h-[380px] object-cover object-center brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/20 to-transparent" />

              {/* Floating Quote Box matching screenshot */}
              <div className="absolute bottom-4 left-4 right-4 bg-blue-950/90 backdrop-blur-md border border-blue-800 text-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-start gap-2">
                  <Quote className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold leading-snug">
                    Grab the opportunity to accomplish your desire and goals by{" "}
                    <span className="text-amber-400 font-extrabold">Learning while you Earn.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
