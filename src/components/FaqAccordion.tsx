import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqAccordion() {
  const faqs = [
    {
      id: 1,
      question: "Is this ₹1200 pricing a real discount?",
      answer: "Yes, absolutely. Vizion India runs this subsidized pricing as part of our academic outreach campaign to support students in Tier-2 and Tier-3 towns. The normal pricing of our All-India exam package is indeed ₹5999, which represents an 80% discount.",
    },
    {
      id: 2,
      question: "Will I get access to the study material immediately?",
      answer: "Immediately! Once our advisor verifies your registration details, you will be sent a login link and access credentials directly to your WhatsApp number. You can log in on your phone, laptop, or tablet and begin preparation within 10 minutes.",
    },
    {
      id: 3,
      question: "Is there a refund policy?",
      answer: "We stand behind the quality of our learning materials. We offer a hassle-free 7-day money-back policy. If you feel the syllabus questions, summary notes, or mock tests don't meet your expectations, simply tell us on WhatsApp and we will process a complete refund.",
    },
    {
      id: 4,
      question: "How do I get my WhatsApp confirmation?",
      answer: "Upon completing the quick registration details form or initiating a WhatsApp chat, our support desk registers your account instantly. A verification specialist will then ping you on WhatsApp to hand over your login pass and explain how to use the dashboards.",
    },
    {
      id: 5,
      question: "Can parents monitor their children's progress?",
      answer: "Yes. Our dashboard includes a dedicated 'Parent Console' tracker. This enables parents to view mock exam results, chapter progress, study streaks, and rank estimations at any time.",
    },
  ];

  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 px-4 bg-white border-b border-slate-100">
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-3 mb-12">
          <span className="text-brand-blue font-mono text-xs uppercase font-extrabold tracking-widest bg-brand-blue/10 px-3.5 py-1.5 rounded-full">
            Objection Handling FAQs
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-xs sm:text-sm">
            Have queries or doubts before unlocking your prep pass? Here are transparent answers to help parents and students proceed.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-200 ${
                  isOpen
                    ? "border-brand-blue bg-slate-50/40 ring-1 ring-brand-blue/10"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-5 py-4.5 sm:px-6 sm:py-5 flex items-start gap-4 justify-between font-display font-semibold text-slate-900 text-sm sm:text-base cursor-pointer focus:outline-none"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className={`w-4 h-4 flex-shrink-0 ${isOpen ? "text-brand-blue" : "text-slate-400"}`} />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "transform rotate-180 text-brand-blue" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-100 mt-1">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
