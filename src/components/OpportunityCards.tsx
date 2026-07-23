import React from "react";
import { 
  UserCheck, 
  FlaskConical, 
  Sun, 
  BookOpen, 
  ArrowRight 
} from "lucide-react";

interface OpportunityCardsProps {
  onApplyClick: (positionTitle: string) => void;
}

export interface OpportunityItem {
  id: string;
  title: string;
  positionLabel: string;
  theme: "blue" | "green" | "orange" | "purple";
  icon: React.ComponentType<{ className?: string }>;
  imageUrl: string;
  bullets: string[];
}

export const OPPORTUNITY_ITEMS: OpportunityItem[] = [
  {
    id: "counsellor",
    title: "EDUCATIONAL COUNSELLOR",
    positionLabel: "Educational Counsellor",
    theme: "blue",
    icon: UserCheck,
    imageUrl: "/counsellor.jpg",
    bullets: [
      "Guide students and parents regarding educational programs.",
      "Explain course details, admission procedures, and career opportunities.",
      "Follow up with prospective students."
    ]
  },
  {
    id: "lab-tech",
    title: "MEDICAL LAB TECHNICIAN",
    positionLabel: "Lab Assistant / Technician",
    theme: "green",
    icon: FlaskConical,
    imageUrl: "/lab-technician.jpg",
    bullets: [
      "Work in modern labs with advanced technology.",
      "Handle lab instruments and test samples.",
      "Ensure quality control and accurate results."
    ]
  },
  {
    id: "green-tech",
    title: "TECHNICIAN – GREEN TECHNOLOGY & RENEWABLE ENERGY",
    positionLabel: "Technician - Green Technology and Renewable Energy",
    theme: "orange",
    icon: Sun,
    imageUrl: "/green-technology.jpg",
    bullets: [
      "Work with solar, wind & renewable energy systems.",
      "Install, test and maintain green energy systems.",
      "Be a part of sustainable future."
    ]
  },
  {
    id: "faculty",
    title: "IIT-JEE (MAIN & ADVANCED) / NEET FACULTY",
    positionLabel: "IIT, Advanced JEE Trainer & NEET Trainers",
    theme: "purple",
    icon: BookOpen,
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    bullets: [
      "Teach and mentor aspirants for IIT-JEE / NEET.",
      "Deliver concept-based learning.",
      "Inspire and shape future achievers."
    ]
  }
];

export default function OpportunityCards({ onApplyClick }: OpportunityCardsProps) {
  const getThemeStyles = (theme: OpportunityItem["theme"]) => {
    switch (theme) {
      case "blue":
        return {
          headerBg: "bg-blue-950 text-white",
          btnBg: "bg-blue-950 hover:bg-blue-900 text-white shadow-blue-950/20",
          border: "border-blue-200"
        };
      case "green":
        return {
          headerBg: "bg-emerald-800 text-white",
          btnBg: "bg-emerald-700 hover:bg-emerald-800 text-white shadow-emerald-700/20",
          border: "border-emerald-200"
        };
      case "orange":
        return {
          headerBg: "bg-amber-600 text-white",
          btnBg: "bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/20",
          border: "border-amber-200"
        };
      case "purple":
        return {
          headerBg: "bg-purple-950 text-white",
          btnBg: "bg-purple-900 hover:bg-purple-950 text-white shadow-purple-900/20",
          border: "border-purple-200"
        };
    }
  };

  return (
    <section id="explore-opportunities" className="py-12 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* EXPLORE OPPORTUNITIES Title Strip */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-4 max-w-xl mx-auto">
            <div className="h-0.5 bg-slate-300 flex-1" />
            <h2 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight uppercase">
              EXPLORE OPPORTUNITIES
            </h2>
            <div className="h-0.5 bg-slate-300 flex-1" />
          </div>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Select a job position below to apply directly
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OPPORTUNITY_ITEMS.map((item) => {
            const styles = getThemeStyles(item.theme);
            const IconComponent = item.icon;

            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border ${styles.border} shadow-lg overflow-hidden flex flex-col justify-between transition-all hover:shadow-xl hover:-translate-y-1 duration-300`}
              >
                <div>
                  {/* Card Header Strip */}
                  <div className={`p-3.5 ${styles.headerBg} flex items-center gap-2.5`}>
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-extrabold text-xs sm:text-sm uppercase tracking-wide leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Card Image */}
                  <div className="h-44 w-full overflow-hidden relative bg-slate-100">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Bullet points */}
                  <div className="p-4 space-y-2 text-xs text-slate-700 min-h-[120px]">
                    {item.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-slate-900 font-bold text-sm leading-none">•</span>
                        <span className="font-medium text-slate-800">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Apply Now Button */}
                <div className="p-4 pt-0">
                  <button
                    onClick={() => onApplyClick(item.positionLabel)}
                    className={`w-full py-2.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer ${styles.btnBg}`}
                  >
                    <span>APPLY NOW</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
