import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MessageSquare, 
  ClipboardList, 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  Send,
  RefreshCw
} from "lucide-react";

interface LeadFormSectionProps {
  onWhatsAppClick: () => void;
}

export default function LeadFormSection({ onWhatsAppClick }: LeadFormSectionProps) {
  const [activeTab, setActiveTab] = useState<"form" | "whatsapp">("form");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    examInterest: "JEE Entrance",
  });

  const [sheetSyncStatus, setSheetSyncStatus] = useState<{ status: string; message: string } | null>(null);

  const validate = () => {
    const newErrors: { name?: string; phone?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }
    const cleanPhone = formData.whatsapp.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      newErrors.phone = "Enter a valid 10-digit WhatsApp number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmittingForm(true);
    setSheetSyncStatus(null);
    
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        setFormSubmitted(true);
        if (data.sheetSync) {
          setSheetSyncStatus(data.sheetSync);
        }
      } else {
        const errorData = await res.json();
        setErrors({ phone: errorData.error || "Failed to submit lead" });
      }
    } catch (err: any) {
      setErrors({ phone: "Network/Server error occurred while submitting lead." });
    } finally {
      setIsSubmittingForm(false);
    }

    // Trigger Meta Pixel conversion tracking event if defined
    if (typeof window !== "undefined" && (window as any).fbq) {
      try {
        (window as any).fbq("track", "Lead", {
          content_name: "Exam Prep 80% Discount Lead",
          value: 1200,
          currency: "INR",
          predicted_exam: formData.examInterest,
        });
        console.log("Meta Pixel 'Lead' event tracked successfully.");
      } catch (e) {
        console.warn("Meta Pixel tracking failed: ", e);
      }
    } else {
      console.log("Simulated Meta Pixel: fbq('track', 'Lead') called with values: ", formData);
    }
  };

  const handleWhatsAppAction = () => {
    // Trigger Meta Pixel lead tracking for direct chat button click too
    if (typeof window !== "undefined" && (window as any).fbq) {
      try {
        (window as any).fbq("track", "Lead", {
          content_name: "WhatsApp Click-to-Chat Lead",
          value: 1200,
          currency: "INR",
        });
      } catch (e) {}
    }
    onWhatsAppClick();
  };

  return (
    <section id="lead-form-section" className="py-16 px-4 bg-slate-50 border-b border-slate-100">
      <div className="max-w-xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-8">
          <span className="text-brand-accent font-mono text-xs uppercase font-extrabold tracking-widest bg-brand-accent/10 px-3.5 py-1.5 rounded-full">
            Claim Your Offer
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Unlock the ₹1200 Deal
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto">
            Choose how you would like to secure your All-India Exam prep package below. Both methods trigger instantly.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="bg-slate-200/60 p-1.5 rounded-2xl mb-8 flex gap-1 text-xs sm:text-sm font-bold">
          <button
            onClick={() => { setActiveTab("form"); setFormSubmitted(false); }}
            className={`flex-1 py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
              activeTab === "form"
                ? "bg-white text-brand-blue shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <ClipboardList className="w-4 h-4 text-brand-blue" />
            <span>Fill Quick Form</span>
          </button>
          
          <button
            onClick={() => setActiveTab("whatsapp")}
            className={`flex-1 py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
              activeTab === "whatsapp"
                ? "bg-emerald-500 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <MessageSquare className="w-4 h-4 text-emerald-100 fill-emerald-100/10" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>

        {/* Dynamic Display */}
        <AnimatePresence mode="wait">
          {activeTab === "form" && (
            <motion.div
              key="form-tab"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {!formSubmitted ? (
                <form
                  onSubmit={handleFormSubmit}
                  className="bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-xl space-y-5"
                >
                  <h3 className="font-display font-black text-xs uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-3">
                    Student Details Form
                  </h3>

                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-wider mb-1 block opacity-60">
                      Student / Parent Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amit Sharma"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={`w-full bg-slate-100/80 border-none px-4 py-3.5 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:bg-slate-50 ${
                        errors.name ? "focus:ring-red-400" : "focus:ring-brand-accent"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 flex items-center gap-1.5 font-medium mt-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone / WhatsApp Number field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-wider mb-1 block opacity-60">
                      WhatsApp Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 text-sm font-black border-r border-slate-200/60 pr-2.5">
                        +91
                      </div>
                      <input
                        type="tel"
                        maxLength={10}
                        required
                        placeholder="10-digit WhatsApp No."
                        value={formData.whatsapp}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, "");
                          setFormData({ ...formData, whatsapp: val });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        className={`w-full bg-slate-100/80 border-none pl-16 pr-4 py-3.5 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:bg-slate-50 ${
                          errors.phone ? "focus:ring-red-400" : "focus:ring-brand-accent"
                        }`}
                      />
                    </div>
                    {errors.phone ? (
                      <p className="text-xs text-red-500 flex items-center gap-1.5 font-medium mt-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                      </p>
                    ) : (
                      <p className="text-[10px] text-slate-400 mt-1">
                        Activation confirmation instructions will be sent to this WhatsApp number.
                      </p>
                    )}
                  </div>

                  {/* Exam/Course interest field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-wider mb-1 block opacity-60">
                      Target Exam / Interest
                    </label>
                    <select
                      value={formData.examInterest}
                      onChange={(e) => setFormData({ ...formData, examInterest: e.target.value })}
                      className="w-full bg-slate-100/80 border-none px-4 py-3.5 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent focus:bg-slate-50 cursor-pointer"
                    >
                      <option value="JEE Entrance">JEE (Engineering Mains & Advanced)</option>
                      <option value="NEET Entrance">NEET (Medical Entrance)</option>
                      <option value="UPSC / NDA">UPSC Civil Services & Defence</option>
                      <option value="Banking Exams">Banking (IBPS, SBI PO & Clerk)</option>
                      <option value="SSC Exams">SSC (CGL, CHSL, MTS)</option>
                      <option value="Railways RRB">Railways (RRB NTPC, Group D)</option>
                      <option value="CUET UG">CUET (Undergraduate College Prep)</option>
                      <option value="Government Prep">Teaching (CTET) & State PCS</option>
                      <option value="School Boards">Class 10-12 School Boards</option>
                      <option value="Other Exams">Other Vocational & Aptitude Exams</option>
                    </select>
                  </div>

                  {/* Form Submission Button */}
                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmittingForm}
                      className="w-full bg-brand-accent hover:bg-brand-accent-hover text-white font-display font-black py-4 rounded-xl shadow-lg shadow-brand-accent/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-base uppercase tracking-tighter disabled:opacity-50"
                    >
                      {isSubmittingForm ? (
                        <RefreshCw className="w-5 h-5 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4 fill-current" />
                      )}
                      {isSubmittingForm ? "Submitting..." : "Get My 80% OFF Now"}
                    </motion.button>
                  </div>

                  <p className="text-[10px] text-slate-400 text-center">
                    🔒 No spam. We'll contact you within 30 minutes via WhatsApp.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white border-2 border-emerald-500/20 p-8 rounded-3xl shadow-xl text-center space-y-6"
                >
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-xl text-slate-900">
                      Offer Secured Successfully!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-sm mx-auto">
                      Thank you, <strong className="text-slate-800">{formData.name}</strong>. We have registered your discount reservation for <strong className="text-slate-800">{formData.examInterest}</strong>.
                    </p>
                  </div>

                  {sheetSyncStatus && (
                    <div className={`p-3 rounded-xl text-xs max-w-sm mx-auto flex items-center gap-2 justify-center font-semibold ${
                      sheetSyncStatus.status === "success" 
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-100" 
                        : "bg-amber-50 text-amber-700 border border-amber-100"
                    }`}>
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${sheetSyncStatus.status === "success" ? "text-emerald-500" : "text-amber-500"}`} />
                      <span>{sheetSyncStatus.message}</span>
                    </div>
                  )}

                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-xs space-y-2.5 max-w-sm mx-auto text-left">
                    <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                      <span className="text-slate-400 uppercase font-bold tracking-wider text-[9px]">Discount Ticket</span>
                      <span className="text-brand-accent font-bold">₹1200 Special Promo Locked</span>
                    </div>
                    <div className="text-slate-600 space-y-1">
                      <p>• Verified phone: <strong className="text-slate-800">+91 {formData.whatsapp}</strong></p>
                      <p>• A support counselor will message you shortly to complete dashboard credential setups.</p>
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={handleWhatsAppAction}
                      className="bg-emerald-500 hover:bg-emerald-600 text-white font-display font-bold px-6 py-3.5 rounded-xl shadow-md transition-colors duration-200 text-sm flex items-center justify-center gap-2 mx-auto cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-white/10" />
                      Verify Immediately via WhatsApp Chat
                    </button>
                    <p className="text-[10px] text-slate-400 mt-2.5">
                      Skip the queue by texting us directly to speed up activation.
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {activeTab === "whatsapp" && (
            <motion.div
              key="whatsapp-tab"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-slate-200 p-8 rounded-3xl shadow-xl text-center space-y-6 max-w-xl mx-auto"
            >
              <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                <MessageSquare className="w-9 h-9 fill-emerald-500/20" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-extrabold text-lg text-slate-900">
                  Instant Access via WhatsApp Chat
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                  Avoid filling forms entirely! Click below to send a pre-filled text query to our admissions desk to claim your ₹1200 package discount instantly.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/50 p-4 rounded-2xl max-w-md mx-auto text-left flex gap-3.5 items-start">
                <span className="text-slate-400 bg-white border rounded-lg p-2 flex-shrink-0 font-mono text-xs font-bold uppercase">
                  SMS
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Pre-filled text message we will send:</h4>
                  <p className="text-xs text-slate-500 italic mt-1 font-sans">
                    "Hi Vizion India, I clicked your Meta Ad. I want to secure the ₹1200 All-India Exam Prep Offer. Please activate my trial."
                  </p>
                </div>
              </div>

              <div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsAppAction}
                  className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-display font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/20 transition-all duration-200 flex items-center justify-center gap-2 mx-auto cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  Launch WhatsApp Chat Now
                </motion.button>
              </div>

              <p className="text-[10px] text-slate-400">
                Admissions WhatsApp Support Desk is active: <strong>9:00 AM - 10:00 PM (IST)</strong>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
