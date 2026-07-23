import React from "react";
import { MapPin, Building2, Compass, CheckCircle2 } from "lucide-react";

interface JobLocationsSectionProps {
  onApplyClick?: () => void;
}

export default function JobLocationsSection({ onApplyClick }: JobLocationsSectionProps) {
  const primaryLocations = [
    { name: "Thanjavur", tag: "Major Hub", highlight: true },
    { name: "Perambalur", tag: "Regional Center", highlight: true },
    { name: "Trichy", tag: "Major Hub", highlight: true },
    { name: "Ariyalur", tag: "Regional Center", highlight: true },
  ];

  return (
    <section className="py-10 px-4 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 md:p-8 shadow-md relative overflow-hidden">
          
          {/* Subtle Decorative Background Element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Title & Description Column */}
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950 text-white rounded-full text-xs font-black uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Job Locations</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight leading-tight">
                Positions Available Across Major Cities in Tamil Nadu
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                Join our expanding educational network with job openings strategically situated across key hubs and regional centers in Tamil Nadu.
              </p>
            </div>

            {/* Cities Cards Column */}
            <div className="lg:col-span-7 space-y-4">
              {/* Highlighted Cities Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {primaryLocations.map((loc) => (
                  <div 
                    key={loc.name}
                    className="bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-300 p-3.5 rounded-2xl text-center shadow-sm transition-all flex flex-col items-center justify-center group"
                  >
                    <div className="w-9 h-9 rounded-full bg-blue-950 text-white flex items-center justify-center mb-2 group-hover:scale-110 transition-transform shadow-sm">
                      <Building2 className="w-4 h-4 text-amber-400" />
                    </div>
                    <span className="font-black text-slate-900 text-sm block leading-none">
                      {loc.name}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1 block">
                      {loc.tag}
                    </span>
                  </div>
                ))}
              </div>

              {/* Banner note for regional centers */}
              <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-2xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center flex-shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-extrabold text-amber-950">
                    & Regional Centers across Tamil Nadu
                  </p>
                  <p className="text-[11px] text-amber-800 font-medium">
                    Multiple educational counseling centers and institutes hiring locally.
                  </p>
                </div>
                {onApplyClick && (
                  <button
                    onClick={onApplyClick}
                    className="hidden sm:flex items-center gap-1.5 bg-blue-950 hover:bg-blue-900 text-white text-xs font-black px-4 py-2 rounded-xl transition-all shadow-sm cursor-pointer whitespace-nowrap"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Apply for your Location</span>
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
