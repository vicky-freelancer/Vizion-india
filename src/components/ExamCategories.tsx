import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Sparkles, BookOpen, Layers } from "lucide-react";

export default function ExamCategories() {
  const categories = [
    {
      id: "jee",
      name: "JEE (Mains & Adv)",
      sub: "Physics, Chemistry, Maths prep with past 15 years papers",
      badge: "Popular",
    },
    {
      id: "neet",
      name: "NEET Entrance",
      sub: "Complete Biology, Physics, and Chemistry high-yield maps",
      badge: "Result Match",
    },
    {
      id: "upsc",
      name: "UPSC & NDA",
      sub: "Daily GK updates, historical notes, mock prelim exams",
    },
    {
      id: "banking",
      name: "Banking (IBPS, SBI)",
      sub: "Quantitative aptitude shortcuts, reasoning, general banking awareness",
    },
    {
      id: "ssc",
      name: "SSC (CGL, CHSL)",
      sub: "Comprehensive English grammar, quantitative, and logical reasoning banks",
    },
    {
      id: "railways",
      name: "Railways (RRB)",
      sub: "General awareness, science guides, and technical paper patterns",
    },
    {
      id: "defence",
      name: "Defence & Police",
      sub: "Physical assessment advice, mock papers for CDS, AFCAT & Constable",
    },
    {
      id: "teaching",
      name: "Teaching (CTET)",
      sub: "Child development pedagogy courses, previous solved papers",
    },
    {
      id: "cuet",
      name: "CUET Entrance",
      sub: "Domain subjects guide, general aptitude mock tests",
    },
    {
      id: "govt",
      name: "State Gov Exams",
      sub: "Regional general knowledge PDFs, historical and political maps",
    },
    {
      id: "it",
      name: "IT & Computers",
      sub: "Computer literacy questions, basic networking and code fundamentals",
    },
    {
      id: "management",
      name: "Management & Law",
      sub: "CAT verbal section worksheets, CLAT logical reasoning",
    },
    {
      id: "psu",
      name: "PSU & Research",
      sub: "GATE foundational formulas, UGC NET Paper 1 study notes",
    },
    {
      id: "school",
      name: "Class 10-12 Boards",
      sub: "CBSE & State Board textbook summaries, formula sheets, sample papers",
    },
  ];

  const [selectedId, setSelectedId] = useState("jee");

  const activeCategory = categories.find((c) => c.id === selectedId) || categories[0];

  return (
    <section className="py-16 px-4 bg-slate-50 border-b border-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-3 mb-10">
          <span className="text-brand-blue font-mono text-xs uppercase font-extrabold tracking-widest bg-brand-blue/10 px-3.5 py-1.5 rounded-full">
            All-India Syllabus Coverage
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            18+ Exam Categories Covered Under One Pass
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-xs sm:text-sm">
            Select your target exam category to preview what is instantly unlocked inside the Vizion India dashboard upon registration.
          </p>
        </div>

        {/* Categories Chip Grid */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => {
            const isSelected = cat.id === selectedId;
            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedId(cat.id)}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-brand-blue text-white shadow-md shadow-brand-blue/10 border-brand-blue"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/60"
                }`}
              >
                {cat.name}
                {cat.badge && (
                  <span
                    className={`text-[8px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded ${
                      isSelected
                        ? "bg-brand-accent text-white"
                        : "bg-brand-accent/15 text-brand-accent"
                    }`}
                  >
                    {cat.badge}
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Preview of Selected Category Material */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
          >
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-brand-blue">
                <BookOpen className="w-5 h-5 text-brand-accent" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400">
                  Included Material Details
                </span>
              </div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900">
                Premium Resources for <span className="text-brand-blue">{activeCategory.name}</span>
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {activeCategory.sub}. Designed strictly in alignment with the latest exam patterns.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Syllabus mapped study books</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Interactive chapter mock tests</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Quick formula Cheat Sheets</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Solved previous papers (10+ Years)</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 bg-slate-50 border border-slate-200/60 rounded-xl p-5 text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Full-Access Pricing
              </span>
              <div className="flex items-baseline justify-center gap-1.5 my-2">
                <span className="text-3xl font-extrabold font-display text-slate-900">₹1200</span>
                <span className="text-sm text-slate-400 line-through">₹5999</span>
              </div>
              <p className="text-[10px] text-emerald-600 font-semibold mb-3">
                No extra monthly fee!
              </p>
              <div className="bg-emerald-50 text-emerald-700 text-[10px] font-bold p-1.5 rounded flex items-center justify-center gap-1">
                <Sparkles className="w-3.5 h-3.5 animate-spin" /> Unlocks Instantly on Purchase
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
