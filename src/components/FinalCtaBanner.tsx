import { motion } from "motion/react";
import { Flame, ShieldCheck } from "lucide-react";

interface FinalCtaBannerProps {
  onCtaclick: () => void;
}

export default function FinalCtaBanner({ onCtaclick }: FinalCtaBannerProps) {
  return (
    <section className="bg-brand-blue py-16 px-4 text-white text-center relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.12),transparent_60%)] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 space-y-6">
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight">
          Ready to Crack Your Next Exam?
        </h2>
        <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto leading-relaxed">
          Unlock over 1,000+ mock tests, custom revision plans, and direct expert guidance. Join 1,00,000+ successful aspirants nationwide.
        </p>

        <div className="pt-2">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onCtaclick}
            className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accent-hover text-white font-display font-bold text-base px-10 py-4.5 rounded-xl shadow-xl shadow-brand-accent/25 transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <Flame className="w-5 h-5 fill-current animate-pulse" />
            Claim All-India Prep Pass (₹1200)
          </motion.button>
        </div>

        <div className="flex items-center justify-center gap-4 text-xs text-slate-300">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Secure Payment Guaranteed
          </span>
          <span>•</span>
          <span>No auto-billing or cards saved</span>
        </div>
      </div>
    </section>
  );
}
