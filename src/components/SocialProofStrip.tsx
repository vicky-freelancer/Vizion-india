import { Award, Users, BookOpen, UserCheck } from "lucide-react";

export default function SocialProofStrip() {
  const stats = [
    {
      id: 1,
      icon: <Users className="w-5 h-5 text-brand-blue" />,
      value: "1,00,000+",
      label: "Happy Students",
    },
    {
      id: 2,
      icon: <Award className="w-5 h-5 text-brand-accent" />,
      value: "AIR 247",
      label: "NEET Top Result",
    },
    {
      id: 3,
      icon: <BookOpen className="w-5 h-5 text-brand-blue" />,
      value: "18+ Categories",
      label: "All-India Exams",
    },
    {
      id: 4,
      icon: <UserCheck className="w-5 h-5 text-brand-accent" />,
      value: "100+ PhDs",
      label: "Expert Faculty",
    },
  ];

  return (
    <div className="bg-white border-y border-slate-100 shadow-sm relative z-20 -mt-6 rounded-2xl max-w-5xl mx-4 lg:mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex items-center gap-3.5 p-4 sm:p-6 justify-center text-left"
          >
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              {stat.icon}
            </div>
            <div>
              <div className="font-display font-extrabold text-lg sm:text-xl text-slate-900 leading-tight">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-500 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
