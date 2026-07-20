import { motion } from "motion/react";
import { MessageSquare, Flame } from "lucide-react";

interface StickyMobileCTAProps {
  onCtaclick: () => void;
  onWhatsAppClick: () => void;
}

export default function StickyMobileCTA({ onCtaclick, onWhatsAppClick }: StickyMobileCTAProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200 p-3 z-50 shadow-[0_-8px_30px_rgb(0,0,0,0.1)] flex gap-3">
      {/* Primary 80% OFF claim button */}
      <motion.button
        whileTap={{ scale: 0.96 }}
        onClick={onCtaclick}
        className="flex-1 bg-brand-accent hover:bg-brand-accent-hover text-white font-display font-bold text-sm py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-brand-accent/20 cursor-pointer"
      >
        <Flame className="w-4 h-4 fill-current animate-pulse" />
        Claim 80% OFF Now
      </motion.button>

      {/* Immediate WhatsApp chat trigger */}
      <motion.button
        whileTap={{ scale: 0.96 }}
        onClick={onWhatsAppClick}
        className="bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-xl flex items-center justify-center shadow-md shadow-emerald-500/20 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-white/15" />
      </motion.button>
    </div>
  );
}
