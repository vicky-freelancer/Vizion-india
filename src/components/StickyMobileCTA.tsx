import React from "react";
import { motion } from "motion/react";
import { MessageSquare, Briefcase } from "lucide-react";

interface StickyMobileCTAProps {
  onCtaclick: () => void;
  onWhatsAppClick: () => void;
}

export default function StickyMobileCTA({ onCtaclick, onWhatsAppClick }: StickyMobileCTAProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2.5 z-50 shadow-[0_-8px_30px_rgb(0,0,0,0.3)] flex gap-2">
      <motion.button
        whileTap={{ scale: 0.96 }}
        onClick={onCtaclick}
        className="flex-1 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs py-3 px-3 rounded-xl flex items-center justify-center gap-1.5 shadow-md uppercase tracking-wide cursor-pointer"
      >
        <Briefcase className="w-4 h-4 fill-slate-950" />
        <span>Apply Now Form</span>
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.96 }}
        onClick={onWhatsAppClick}
        className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs py-3 px-3.5 rounded-xl flex items-center justify-center gap-1 shadow-md cursor-pointer"
        aria-label="WhatsApp HR Desk"
      >
        <MessageSquare className="w-4 h-4 fill-white/20" />
        <span>HR WhatsApp</span>
      </motion.button>
    </div>
  );
}
