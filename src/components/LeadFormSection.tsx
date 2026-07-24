import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ClipboardList, 
  CheckCircle2, 
  AlertCircle, 
  Send,
  RefreshCw,
  User,
  Phone,
  GraduationCap,
  Briefcase,
  MapPin,
  MessageSquare
} from "lucide-react";

interface LeadFormSectionProps {
  onWhatsAppClick: () => void;
  selectedPosition?: string;
}

export default function LeadFormSection({ onWhatsAppClick, selectedPosition }: LeadFormSectionProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; qualification?: string; position?: string; city?: string }>({});
  
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    qualification: "",
    position: selectedPosition || "Educational Counsellor",
    city: "",
  });

  const [sheetSyncStatus, setSheetSyncStatus] = useState<{ status: string; message: string } | null>(null);

  // Sync selectedPosition from parent when Apply Now button is clicked
  useEffect(() => {
    if (selectedPosition) {
      setFormData((prev) => ({ ...prev, position: selectedPosition }));
    }
  }, [selectedPosition]);

  const validate = () => {
    const newErrors: { name?: string; phone?: string; qualification?: string; position?: string; city?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = "Candidate name is required";
    }
    const cleanPhone = formData.whatsapp.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      newErrors.phone = "Enter a valid 10-digit WhatsApp number";
    }
    if (!formData.qualification.trim()) {
      newErrors.qualification = "Qualification is required";
    }
    if (!formData.position.trim()) {
      newErrors.position = "Please select or specify a position";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmittingForm(true);
    setSheetSyncStatus(null);
    
    let success = false;
    
    try {
      // Submit to server endpoint /api/leads
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
        success = true;
      } else {
        throw new Error(`Server responded with status ${res.status}`);
      }
    } catch (err: any) {
      console.warn("Server API error, falling back to direct Google Sheets connection...", err);
      
      const directUrl = "https://script.google.com/macros/s/AKfycby-23gdlNE4Nc8xi-HcTRM0LpPtFBzA3HE29dND6ZPpiIbu-zmICJWuNE__vUTaXvQ45A/exec";
      
      const payload = {
        id: "lead_client_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
        name: formData.name.trim(),
        whatsapp: formData.whatsapp.trim(),
        qualification: formData.qualification.trim(),
        position: formData.position.trim(),
        city: formData.city.trim(),
        examInterest: formData.position.trim(),
        timestamp: new Date().toISOString()
      };

      try {
        await fetch(directUrl, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload),
        });

        setFormSubmitted(true);
        setSheetSyncStatus({
          status: "success",
          message: "Application submitted successfully to Vizion India HR desk!"
        });
        success = true;
      } catch (sheetErr: any) {
        try {
          await fetch(directUrl, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify(payload),
          });

          setFormSubmitted(true);
          setSheetSyncStatus({
            status: "success",
            message: "Application received by HR team!"
          });
          success = true;
        } catch (noCorsErr: any) {
          console.error("All submission methods failed:", noCorsErr);
          setErrors({ phone: "Network error submitting application. Please try contacting HR directly via WhatsApp." });
        }
      }
    } finally {
      setIsSubmittingForm(false);
    }

    // Trigger Meta Pixel conversion tracking event if defined
    if (success && typeof window !== "undefined" && (window as any).fbq) {
      try {
        (window as any).fbq("track", "Lead", {
          content_name: `Candidate Application - ${formData.position}`,
          value: 1,
          currency: "INR",
        });
      } catch (e) {}
    }
  };

  return (
    <section id="lead-form-section" className="py-16 px-4 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-2xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest bg-amber-400/10 border border-amber-400/20 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <ClipboardList className="w-3.5 h-3.5" /> CANDIDATE APPLICATION FORM
          </span>
          <h2 className="font-black text-2xl sm:text-3xl text-white tracking-tight">
            Apply to Vizion India
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Fill out the details below to submit your job application. Our HR recruitment team will review your credentials and contact you directly via WhatsApp.
          </p>
        </div>

        {/* Application Form */}
        <div className="bg-slate-800/90 border border-slate-700/80 p-6 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden backdrop-blur-sm">
          
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-400 via-blue-500 to-emerald-400" />

          {!formSubmitted ? (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
                <h3 className="font-extrabold text-sm uppercase tracking-wider text-amber-400 flex items-center gap-2">
                  <User className="w-4 h-4" /> Candidate Information
                </h3>
                <span className="text-[10px] text-slate-400">* All 5 fields are required</span>
              </div>

              {/* 1. Candidate Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-blue-400" /> Candidate Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name (e.g. Rajesh Kumar)"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  className={`w-full bg-white border border-slate-300 text-slate-900 placeholder:text-slate-500 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all focus:outline-none focus:ring-2 ${
                    errors.name ? "border-red-500 focus:ring-red-400" : "focus:ring-amber-400 focus:border-amber-400"
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-400 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                  </p>
                )}
              </div>

               {/* 2. WhatsApp No */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp Number <span className="text-amber-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-700 font-bold text-sm border-r border-slate-300 pr-2.5">
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
                    className={`w-full bg-white border border-slate-300 text-slate-900 placeholder:text-slate-500 pl-16 pr-4 py-3.5 rounded-xl text-sm font-semibold transition-all focus:outline-none focus:ring-2 ${
                      errors.phone ? "border-red-500 focus:ring-red-400" : "focus:ring-amber-400 focus:border-amber-400"
                    }`}
                  />
                </div>
                {errors.phone ? (
                  <p className="text-xs text-red-400 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
                  </p>
                ) : (
                  <p className="text-[10px] text-slate-300">
                    HR team will contact you directly on this WhatsApp number regarding interview scheduling.
                  </p>
                )}
              </div>

              {/* 3. Qualification (input type=text) */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-400" /> Qualification <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. M.Sc Psychology / B.Sc MLT / Diploma / B.E / B.Tech"
                  value={formData.qualification}
                  onChange={(e) => {
                    setFormData({ ...formData, qualification: e.target.value });
                    if (errors.qualification) setErrors({ ...errors, qualification: undefined });
                  }}
                  className={`w-full bg-white border border-slate-300 text-slate-900 placeholder:text-slate-500 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all focus:outline-none focus:ring-2 ${
                    errors.qualification ? "border-red-500 focus:ring-red-400" : "focus:ring-amber-400 focus:border-amber-400"
                  }`}
                />
                {errors.qualification && (
                  <p className="text-xs text-red-400 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.qualification}
                  </p>
                )}
              </div>

              {/* 4. Position / Role */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-purple-400" /> Position / Role Applied For <span className="text-amber-400">*</span>
                </label>
                <select
                  value={formData.position}
                  onChange={(e) => {
                    setFormData({ ...formData, position: e.target.value });
                    if (errors.position) setErrors({ ...errors, position: undefined });
                  }}
                  className="w-full bg-white border border-slate-300 text-slate-900 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 cursor-pointer"
                >
                  <option value="Educational Counsellor" className="bg-white text-slate-900">Educational Counsellor</option>
                  <option value="Lab Assistant / Technician" className="bg-white text-slate-900">Medical Lab Technician (Lab Assistant / Tech)</option>
                  <option value="Technician - Green Technology and Renewable Energy" className="bg-white text-slate-900">Technician - Green Technology & Renewable Energy</option>
                  <option value="IIT, Advanced JEE Trainer & NEET Trainers" className="bg-white text-slate-900">IIT-JEE (Main & Advanced) / NEET Faculty</option>
                  <option value="Other / General Application" className="bg-white text-slate-900">Other / General Application</option>
                </select>
                {errors.position && (
                  <p className="text-xs text-red-400 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.position}
                  </p>
                )}
              </div>

              {/* 5. City (input type=text) */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" /> City / Preferred Location <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Thanjavur, Perambalur, Trichy, Ariyalur"
                  value={formData.city}
                  onChange={(e) => {
                    setFormData({ ...formData, city: e.target.value });
                    if (errors.city) setErrors({ ...errors, city: undefined });
                  }}
                  className={`w-full bg-white border border-slate-300 text-slate-900 placeholder:text-slate-500 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all focus:outline-none focus:ring-2 ${
                    errors.city ? "border-red-500 focus:ring-red-400" : "focus:ring-amber-400 focus:border-amber-400"
                  }`}
                />
                
                {/* Quick Selection Location Pills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Popular:</span>
                  {["Thanjavur", "Perambalur", "Trichy", "Ariyalur"].map((city) => (
                    <button
                      key={city}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, city });
                        if (errors.city) setErrors({ ...errors, city: undefined });
                      }}
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full transition-all border cursor-pointer ${
                        formData.city === city
                          ? "bg-amber-400 text-slate-950 border-amber-400 font-bold"
                          : "bg-slate-800/80 text-slate-300 border-slate-700 hover:border-amber-400/60"
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>

                {errors.city && (
                  <p className="text-xs text-red-400 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.city}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmittingForm}
                  className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black py-4 rounded-xl shadow-xl shadow-amber-400/20 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-base uppercase tracking-wider disabled:opacity-50"
                >
                  {isSubmittingForm ? (
                    <RefreshCw className="w-5 h-5 animate-spin text-slate-950" />
                  ) : (
                    <Send className="w-5 h-5 fill-slate-950" />
                  )}
                  {isSubmittingForm ? "Submitting Application..." : "Submit Job Application"}
                </motion.button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-700/60">
                <span>🔒 Your candidate data is stored securely.</span>
                <button
                  type="button"
                  onClick={onWhatsAppClick}
                  className="text-emerald-400 hover:underline font-bold flex items-center gap-1 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Chat directly on WhatsApp
                </button>
              </div>

            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6 text-center space-y-6"
            >
              <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-500/40 shadow-lg">
                <CheckCircle2 className="w-12 h-12 stroke-[2.5]" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="font-extrabold text-2xl text-white">
                  Application Submitted Successfully!
                </h3>
                <p className="text-sm text-slate-300">
                  Thank you, <strong className="text-amber-400">{formData.name}</strong>. Your job application for <strong className="text-amber-400">{formData.position}</strong> has been registered with Vizion India.
                </p>
              </div>

              {sheetSyncStatus && (
                <div className={`p-3 rounded-xl text-xs max-w-md mx-auto flex items-center gap-2 justify-center font-semibold ${
                  sheetSyncStatus.status === "success" 
                    ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30" 
                    : "bg-amber-500/10 text-amber-300 border border-amber-500/30"
                }`}>
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                  <span>{sheetSyncStatus.message}</span>
                </div>
              )}

              <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-4 text-xs space-y-2 max-w-md mx-auto text-left">
                <div className="flex justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400 uppercase font-bold text-[10px]">Candidate Details Summary</span>
                  <span className="text-emerald-400 font-bold">Status: Received</span>
                </div>
                <div className="text-slate-300 space-y-1 pt-1">
                  <p>• <strong>Name:</strong> {formData.name}</p>
                  <p>• <strong>WhatsApp:</strong> +91 {formData.whatsapp}</p>
                  <p>• <strong>Qualification:</strong> {formData.qualification}</p>
                  <p>• <strong>Applied Position:</strong> {formData.position}</p>
                  <p>• <strong>City:</strong> {formData.city}</p>
                </div>
              </div>

              <div>
                <button
                  onClick={onWhatsAppClick}
                  className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg transition-colors text-sm flex items-center justify-center gap-2 mx-auto cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-slate-950" />
                  Contact HR Instantly via WhatsApp
                </button>
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
