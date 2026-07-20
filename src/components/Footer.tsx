import { Phone, MapPin, Mail, ShieldAlert } from "lucide-react";
import VizionLogo from "./VizionLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Signature Bold Typography Header & Inline Dividers */}
        <div className="text-center py-6 border-b border-slate-800/80">
          <span className="text-[11px] font-black uppercase tracking-widest text-brand-accent">
            Vizion India Education Portal
          </span>
          <div className="text-xs uppercase tracking-wider font-black text-white/75 my-4 flex flex-wrap justify-center gap-3">
            <span>Expert Faculty</span>
            <span className="opacity-25">|</span>
            <span>Doubt Clearing</span>
            <span className="opacity-25">|</span>
            <span>Mock Tests</span>
            <span className="opacity-25">|</span>
            <span>All-India Rankers</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand block */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <VizionLogo light={true} />
            </div>
            <p className="text-slate-500 text-xs leading-relaxed max-w-sm mx-auto md:mx-0">
              Vizion India is a premier educational support portal empowering students across the country with affordable, world-class preparatory mock exams, syllabi matrices, and expert doubt clarification channels.
            </p>
          </div>

          {/* Trust and Contact channel */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-center sm:text-left">
            <div className="space-y-3">
              <h4 className="text-white font-bold uppercase tracking-wider text-xs">Official Inquiries</h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li className="flex items-center gap-2 justify-center sm:justify-start">
                  <Phone className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>Support: +91 9113242161 (WhatsApp)</span>
                </li>
                <li className="flex items-center gap-2 justify-center sm:justify-start">
                  <Mail className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>Email: support@vizionindia.in</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-white font-bold uppercase tracking-wider text-xs">Corporate Office</h4>
              <p className="text-xs text-slate-500 leading-relaxed flex items-start gap-2 justify-center sm:justify-start">
                <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span>
                  Vizion India Ltd., Block-C, Sector 62,<br />
                  Noida, Uttar Pradesh, PIN - 201301, India.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer and links */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-500">
          <p className="text-center sm:text-left">
            &copy; {currentYear} Vizion India. All Rights Reserved. eduonline.vizionindia.in
          </p>
          
          <div className="flex gap-4 font-semibold">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Terms & Conditions</span>
            <span>•</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">Refund Guidelines</span>
          </div>
        </div>

        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/60 text-[10px] text-slate-600 leading-relaxed">
          <p className="flex items-center gap-1.5 font-bold text-slate-500 mb-1">
            <ShieldAlert className="w-3.5 h-3.5 text-brand-accent" /> Academic Disclaimer
          </p>
          JEE, NEET, UPSC, SSC, and CUET are registered trademarks of their respective national testing agencies. Vizion India is an independent, private preparatory support publisher. Materials are designed as practice guidelines and do not guarantee official selection or rank in national examinations.
        </div>
      </div>
    </footer>
  );
}
