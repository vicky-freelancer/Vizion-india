import { motion } from "motion/react";
import { Check, ShieldAlert, Award, Star, BookOpen, Layers, CheckCircle } from "lucide-react";

interface OfferDetailsProps {
  onCtaclick: () => void;
}

export default function OfferDetails({ onCtaclick }: OfferDetailsProps) {
  const inclusions = [
    {
      title: "Expert-Curated Study Material",
      desc: "Complete syllabus-mapped textbooks, crisp summary revisions, and high-yielding question banks compiled by subject matter experts.",
    },
    {
      title: "1,000+ Full-Length Mock Tests",
      desc: "Simulate real exam environments with detailed performance diagnostic analytics and instant rank prediction algorithms.",
    },
    {
      title: "24/7 Priority Doubt Clearing",
      desc: "Stuck on a tricky math equation or complex concept? Post a screenshot on our platform and receive step-by-step video solutions within minutes.",
    },
    {
      title: "Personalized Study Dashboard",
      desc: "An intuitive web/mobile study portal that keeps track of your completion rates, core strengths, and weak chapters.",
    },
    {
      title: "Regular Rank Booster Masterclasses",
      desc: "Live strategy webinars and smart cheat-sheet techniques presented by top-ranking mentors and veteran teachers.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <span className="text-brand-accent font-mono text-xs uppercase font-extrabold tracking-widest bg-brand-accent/10 px-3.5 py-1.5 rounded-full">
            Unbeatable Course Package
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight">
            Everything You Need To Score Top Rank
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
            No need to purchase expensive individual coaching apps or books. Access premium All-India study materials in one place.
          </p>
        </div>

        {/* Central Pricing & Inclusion Card */}
        <div className="bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-12">
          {/* Left Column: Details & Inclusions */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2">
              <span className="inline-block p-1.5 bg-brand-blue/10 rounded-lg text-brand-blue">
                <BookOpen className="w-5 h-5" />
              </span>
              <h3 className="font-display font-bold text-lg text-slate-900">
                All-India Master Prep Bundle
              </h3>
            </div>

            <div className="space-y-4">
              {inclusions.map((inc, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="bg-emerald-50 text-emerald-600 p-1 rounded-full border border-emerald-200">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-slate-900 leading-tight">
                      {inc.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {inc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-Impact Pricing CTA Block */}
          <div className="md:col-span-5 bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white p-6 sm:p-8 flex flex-col justify-between relative">
            {/* Visual element decorator */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,107,53,0.15),transparent_50%)] pointer-events-none" />

            <div className="space-y-6 relative z-10 text-center md:text-left">
              <div className="inline-block bg-brand-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2">
                Most Popular Offer
              </div>

              <div>
                <p className="text-xs text-slate-300 font-medium">All-Inclusive Unlimited Bundle Pass</p>
                <div className="flex items-baseline justify-center md:justify-start gap-2 mt-2">
                  <span className="text-5xl font-extrabold font-display text-white">₹1200</span>
                  <span className="text-xl text-slate-400 line-through">₹5999</span>
                </div>
                <p className="text-xs text-emerald-400 font-semibold mt-1.5">
                  Save 80% (₹4,799 Discount Applied)
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-200 justify-center md:justify-start">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>1 Year Validity</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200 justify-center md:justify-start">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Available on Mobile & PC</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200 justify-center md:justify-start">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Includes 15+ Exam Syllabus</span>
                </div>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onCtaclick}
                className="w-full bg-brand-accent hover:bg-brand-accent-hover text-white font-display font-bold py-3.5 rounded-xl shadow-lg shadow-brand-accent/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                Claim This Bundle Deal
              </motion.button>
              <p className="text-[10px] text-slate-300 text-center mt-2.5 flex items-center justify-center gap-1">
                <ShieldAlert className="w-3 h-3 text-slate-400" /> One-time payment. Zero renewal fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
