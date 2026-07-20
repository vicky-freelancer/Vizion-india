import { Star, Quote, Award } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Vignesh Kumar",
      exam: "NEET Entrance",
      badge: "AIR 247 NEET",
      text: "Scored AIR 247 with Vizion India's comprehensive mock test series! The 24/7 priority doubt-solving was a lifesaver during my late-night preparation.",
      rating: 5,
      avatarColor: "bg-amber-100 text-amber-700 border-amber-300",
      avatarText: "VK",
    },
    {
      id: 2,
      name: "Rajesh Sharma",
      exam: "JEE Mains (Parent)",
      badge: "Parent Verification",
      text: "Sneha improved her math scores from 45% to 92% in CBSE and Mains. Best ₹1200 investment we made for our daughter's higher education guidance.",
      rating: 5,
      avatarColor: "bg-blue-100 text-brand-blue border-blue-300",
      avatarText: "RS",
    },
    {
      id: 3,
      name: "Ananya Deshmukh",
      exam: "CUET Arts Entrance",
      badge: "DU Admission Match",
      text: "Got admission in Delhi University! The structured study plans, summary note maps, and mock test pacing sheets kept me on track without stress.",
      rating: 5,
      avatarColor: "bg-emerald-100 text-emerald-700 border-emerald-300",
      avatarText: "AD",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <span className="text-brand-accent font-mono text-xs uppercase font-extrabold tracking-widest bg-brand-accent/10 px-3.5 py-1.5 rounded-full">
            Real Student Success
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Proof That Vizion India Works
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-xs sm:text-sm">
            Read how aspirants and parents from across the country achieved outstanding national results utilizing our curated exam portal prep pass.
          </p>
        </div>

        {/* Testimonials Static Grid for Maximum Performance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className={`border rounded-2xl p-6 flex flex-col justify-between shadow-sm relative transition-all duration-300 hover:shadow-md ${
                rev.id === 1
                  ? "border-amber-200 bg-amber-50/20 ring-1 ring-amber-100"
                  : "border-slate-200 bg-white"
              }`}
            >
              {rev.id === 1 && (
                <div className="absolute -top-3.5 left-6 bg-amber-500 text-white text-[10px] uppercase font-extrabold tracking-widest px-3 py-1 rounded-full shadow flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 fill-current animate-bounce" /> Core Proof Point
                </div>
              )}

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote Icon */}
                <div className="text-slate-200 absolute top-4 right-6 pointer-events-none">
                  <Quote className="w-10 h-10 rotate-180 opacity-45" />
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal italic relative z-10">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Student Metadata */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-100 mt-6">
                <div
                  className={`w-10 h-10 rounded-full border flex items-center justify-center font-display font-bold text-sm ${rev.avatarColor}`}
                >
                  {rev.avatarText}
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-slate-900">
                    {rev.name}
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-semibold text-slate-400">
                    <span>{rev.exam}</span>
                    <span>•</span>
                    <span className="text-brand-blue font-semibold">{rev.badge}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
