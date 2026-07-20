import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Clock, ShieldCheck, Flame } from "lucide-react";

interface UrgencyRepeatProps {
  onCtaclick: () => void;
}

export default function UrgencyRepeat({ onCtaclick }: UrgencyRepeatProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);

      const diff = endOfDay.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-14 px-4 bg-gradient-to-r from-slate-900 via-brand-blue-dark to-slate-900 text-white relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,107,53,0.1),transparent_40%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-brand-accent/20 border border-brand-accent/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-brand-accent uppercase tracking-wider">
          <Clock className="w-3.5 h-3.5 animate-pulse" /> Urgent: Pricing increases to ₹5999 shortly
        </div>

        <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl leading-tight">
          Don't Wait! Lock In Your <span className="text-brand-accent">80% Lifetime Discount</span> Now
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Over 1,00,000 students have already verified our preparatory mock tests and curated syllabi. Start your learning path today at just <span className="font-bold text-white underline">₹1200</span>.
        </p>

        {/* Sync'd countdown display */}
        <div className="flex items-center justify-center gap-3 font-mono">
          <span className="text-xs sm:text-sm text-slate-400 font-sans font-medium uppercase tracking-wider">Offer expires in:</span>
          <div className="flex gap-1.5 text-brand-accent font-extrabold text-lg sm:text-xl bg-slate-950 px-4 py-2 rounded-xl border border-white/5">
            <span>{String(timeLeft.hours).padStart(2, "0")}</span>
            <span className="animate-pulse">:</span>
            <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
            <span className="animate-pulse">:</span>
            <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Action button */}
        <div className="pt-2">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onCtaclick}
            className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accent-hover text-white font-display font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-brand-accent/20 transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <Flame className="w-5 h-5 fill-current animate-bounce" />
            Claim My 80% Discount Now
          </motion.button>
        </div>

        <div className="flex items-center justify-center gap-5 text-[10px] sm:text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Authorized Academic Partner
          </span>
          <span>•</span>
          <span>No hidden recurring fees</span>
        </div>
      </div>
    </section>
  );
}
