import { GraduationCap, Smartphone, BookOpen } from "lucide-react";

export default function WhyVizion() {
  const points = [
    {
      id: 1,
      icon: <GraduationCap className="w-6 h-6 text-brand-blue" />,
      title: "India's Expert Faculty",
      desc: "Learn from teachers who have mentored thousands to top national ranks.",
    },
    {
      id: 2,
      icon: <Smartphone className="w-6 h-6 text-brand-accent" />,
      title: "Modern Interactive Platform",
      desc: "High-speed mock tests, live ranking lists, and micro-analytics on mobile.",
    },
    {
      id: 3,
      icon: <BookOpen className="w-6 h-6 text-brand-blue" />,
      title: "Comprehensive Study Material",
      desc: "One bundle covering all 15+ central, regional, and state level exams.",
    },
  ];

  return (
    <section className="py-12 bg-white px-4 border-b border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {points.map((point) => (
            <div
              key={point.id}
              className="flex flex-col md:flex-row items-center md:items-start gap-4 p-5 rounded-2xl hover:bg-slate-50 transition-colors duration-200"
            >
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-100/80 flex-shrink-0">
                {point.icon}
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-bold text-base text-slate-900">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
