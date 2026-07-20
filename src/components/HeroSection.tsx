import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Flame, MessageSquare, ShieldCheck, Users, Clock } from "lucide-react";
import VizionLogo from "./VizionLogo";

interface HeroSectionProps {
  onCtaclick: () => void;
  onWhatsAppClick: () => void;
}

export default function HeroSection({ onCtaclick, onWhatsAppClick }: HeroSectionProps) {
  // Countdown Timer Logic (Counts down to midnight of current day)
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

  // Seat Scarcity Logic (Simulates slow decrement for authenticity)
  const [seatsLeft, setSeatsLeft] = useState(994); // Starts under the target 1000 threshold for ultra high urgency
  useEffect(() => {
    const interval = setInterval(() => {
      setSeatsLeft((prev) => {
        if (prev <= 12) return 12; // Keep minimum seats
        // 10% chance to decrement a seat every few seconds
        const shouldDecrement = Math.random() > 0.85;
        return shouldDecrement ? prev - 1 : prev;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const totalSeats = 1000;
  const percentageFilled = ((totalSeats - seatsLeft) / totalSeats) * 100;

  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-brand-blue-dark text-white pb-16 pt-6 px-4">
      {/* Background radial accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,107,53,0.1),transparent_45%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Navigation / Header Brand Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6 mb-12">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <VizionLogo light={true} />
            <p className="text-[10px] text-slate-400 font-mono tracking-wider sm:pl-16">eduonline.vizionindia.in</p>
          </div>
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-xs font-medium text-slate-200">
              Empowering Students Across India
            </p>
          </div>
        </div>

        {/* Hero Main Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Column 1: Copywriting and CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust badge */}
            <span className="bg-brand-accent text-white px-3 py-1.5 text-[11px] font-black uppercase tracking-widest rounded mb-6 inline-flex items-center gap-2 w-max shadow-sm">
              <Users className="w-3.5 h-3.5" />
              Trusted by 1,00,000+ Students Across India
            </span>

            {/* Headline */}
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-[5.5rem] leading-[0.9] text-white tracking-tighter uppercase">
              Crack Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-amber-300">Dream Exam.</span>
            </h2>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-blue-100 max-w-xl mx-auto lg:mx-0 leading-snug font-medium">
              JEE, NEET, UPSC & 15+ exams. Get expert-curated study material starting at just <span className="text-white font-bold underline decoration-brand-accent decoration-wavy">₹1200</span> <span className="line-through opacity-50">₹5999</span>.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onCtaclick}
                className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accent-hover text-white font-display font-black text-lg px-8 py-4.5 rounded-xl shadow-lg shadow-brand-accent/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-tighter"
              >
                <Flame className="w-5 h-5 fill-current animate-bounce" />
                Claim My 80% Discount
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onWhatsAppClick}
                className="w-full sm:w-auto bg-transparent border-2 border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-display font-black text-base px-6 py-4.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-tighter"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
                Chat on WhatsApp
              </motion.button>
            </div>

            {/* Security trust note */}
            <div className="flex items-center justify-center lg:justify-start gap-5 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Secure Payment
              </span>
              <span>•</span>
              <span>Immediate Activation</span>
              <span>•</span>
              <span>★ 4.9/5 Student Rating</span>
            </div>
          </div>

          {/* Column 2: Interactive Scarcity Card */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-slate-800/80 backdrop-blur-md border border-slate-700 p-6 rounded-2xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-brand-accent text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-bl-lg">
                80% OFF Deal
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">
                    Special Package Offer
                  </h3>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-extrabold font-display text-white">₹1200</span>
                    <span className="text-lg text-slate-500 line-through">₹5999</span>
                    <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-2 py-0.5 rounded">
                      Save ₹4799
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    One-time payment. Full syllabus prep bundle included.
                  </p>
                </div>

                {/* Countdown Timer Widget */}
                <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700/80 shadow-inner">
                  <div className="flex items-center gap-2 text-slate-300 text-[10px] font-black uppercase tracking-widest mb-3.5">
                    <Clock className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
                    Offer Ends In
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-mono">
                      <div className="flex flex-col items-center">
                        <span className="bg-white/10 text-white text-3xl font-black px-3 py-2 rounded-lg border border-white/5 shadow-sm min-w-[54px] text-center">
                          {String(timeLeft.hours).padStart(2, "0")}
                        </span>
                        <span className="text-[9px] uppercase font-bold text-slate-400 mt-1.5 tracking-wider">Hrs</span>
                      </div>
                      <span className="text-xl font-bold text-slate-600 mb-5">:</span>
                      <div className="flex flex-col items-center">
                        <span className="bg-white/10 text-white text-3xl font-black px-3 py-2 rounded-lg border border-white/5 shadow-sm min-w-[54px] text-center">
                          {String(timeLeft.minutes).padStart(2, "0")}
                        </span>
                        <span className="text-[9px] uppercase font-bold text-slate-400 mt-1.5 tracking-wider">Min</span>
                      </div>
                      <span className="text-xl font-bold text-slate-600 mb-5">:</span>
                      <div className="flex flex-col items-center">
                        <span className="bg-brand-accent text-white text-3xl font-black px-3 py-2 rounded-lg shadow-md shadow-brand-accent/20 min-w-[54px] text-center animate-pulse">
                          {String(timeLeft.seconds).padStart(2, "0")}
                        </span>
                        <span className="text-[9px] uppercase font-bold text-brand-accent mt-1.5 tracking-wider">Sec</span>
                      </div>
                    </div>

                    <div className="border-l border-slate-700/80 pl-5 text-right flex flex-col justify-center">
                      <span className="text-[9px] uppercase font-black tracking-widest text-slate-400">Total discount</span>
                      <span className="text-2xl font-black text-brand-accent tracking-tighter uppercase">80% OFF</span>
                      <span className="text-[10px] font-bold text-emerald-400">Locked</span>
                    </div>
                  </div>
                </div>

                {/* Seats Left Scarcity */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-300 uppercase tracking-wider">Seats Left Scarcity</span>
                    <span className="text-brand-accent font-mono animate-pulse">
                      Only {seatsLeft} / {totalSeats} seats remaining!
                    </span>
                  </div>
                  <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-700">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: `${percentageFilled}%` }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-brand-accent to-amber-500 shadow-[0_0_8px_rgba(255,107,53,0.5)]"
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 text-center">
                    Due to extremely high traffic from Meta Ads, seats are filling fast.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}
