import React from "react";
import { Calendar, MapPin, Phone, Globe } from "lucide-react";

export default function JobFairBanner() {
  return (
    <section className="py-6 px-4 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 sm:p-5 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Box 1: Event Title & Date (4 cols) */}
            <div className="md:col-span-4 bg-white border border-slate-200 p-3 rounded-xl shadow-sm flex items-center gap-3">
              <div className="p-2.5 bg-slate-100 border border-slate-300 rounded-lg text-blue-950 flex-shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">
                  MEET US AT
                </span>
                <h3 className="text-sm sm:text-base font-black text-blue-950 leading-tight">
                  ARIYALUR MEGA JOB FAIR
                </h3>
                <div className="mt-1.5 inline-block bg-emerald-700 text-white font-extrabold text-[11px] px-3 py-0.5 rounded-full uppercase tracking-wider">
                  25.07.2026 SATURDAY
                </div>
              </div>
            </div>

            {/* Box 2: Location Address Details (4 cols) */}
            <div className="md:col-span-4 flex items-start gap-3 px-2">
              <div className="p-2 rounded-full bg-orange-100 text-amber-600 flex-shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 fill-current" />
              </div>
              <div className="text-xs">
                <p className="font-extrabold text-slate-900 leading-snug">
                  Block: A, Floor: GL, Stall No: 26,<br />
                  <span className="text-amber-700 uppercase">GOVERNMENT ARTS COLLEGE, RAJAJI NAGAR, ARIYALUR.</span>
                </p>
                <p className="text-[11px] font-bold text-slate-500 mt-0.5">
                  Ariyalur - NEAR GOVERNMENT MEDICAL COLLEGE
                </p>
              </div>
            </div>

            {/* Box 3 & 4: Phone & Website (4 cols) */}
            <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-slate-200 pl-0 md:pl-4">
              
              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-blue-950 text-white flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 block">For Queries</span>
                  <a href="tel:+919445285416" className="text-xs sm:text-sm font-black text-blue-950 hover:underline block">
                    +91 94452 85416
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-blue-950 text-white flex items-center justify-center flex-shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 block">Visit our website</span>
                  <a href="https://www.vizionindia.in" target="_blank" rel="noopener noreferrer" className="text-xs font-black text-blue-950 hover:underline block truncate max-w-[130px]">
                    www.vizionindia.in
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
