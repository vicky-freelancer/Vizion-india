import React from "react";
import { motion } from "motion/react";
import { 
  UserCheck, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  CheckCircle2, 
  Briefcase, 
  DollarSign, 
  Star, 
  ArrowRight, 
  Phone, 
  Globe 
} from "lucide-react";

interface HiringPostersSectionProps {
  onApplyClick: (positionTitle: string) => void;
}

export interface JobOpening {
  id: string;
  title: string;
  theme: "blue" | "green" | "orange" | "purple";
  positionLabel: string;
  location: string;
  ageLimit: string;
  qualifications: string[];
  responsibilities: string[];
  salaryAndBenefits: string[];
  preferredSkills: string[];
  subTagline: string;
}

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "counsellor",
    title: "EDUCATIONAL COUNSELLORS",
    theme: "blue",
    positionLabel: "Educational Counsellor",
    location: "Tamil Nadu",
    ageLimit: "18 to 35 Years",
    subTagline: "Join one of Tamil Nadu's fastest-growing education organizations and build a rewarding career in the education sector.",
    qualifications: [
      "Postgraduate in M.Sc. (Psychology), MSW or equivalent.",
      "Freshers and Experienced candidates can apply",
      "Excellent communication skills in Tamil (English is an added advantage)",
      "Basic computer knowledge is preferred"
    ],
    responsibilities: [
      "Counsel students and parents regarding educational programs.",
      "Explain course details, admission procedures, and career opportunities.",
      "Follow up with prospective students and organize meetings.",
      "Maintain student records and update CRM/database.",
      "Coordinate with admissions and academic teams.",
      "Participate in seminars, awareness campaigns & promotional activities.",
      "Achieve counselling and admission targets.",
      "Build strong relationships with students, parents, schools & institutions."
    ],
    salaryAndBenefits: [
      "₹21,000 – ₹35,000 per month (based on qualification and experience)",
      "Attractive Incentives",
      "Performance Bonus",
      "Career Growth Opportunities",
      "Training & Development",
      "PF / ESI (as per company policy)"
    ],
    preferredSkills: [
      "Good communication & interpersonal skills",
      "Positive attitude and willingness to learn",
      "Customer service orientation",
      "Team player with leadership potential"
    ]
  },
  {
    id: "lab-tech",
    title: "MEDICAL LAB TECHNICIAN",
    theme: "green",
    positionLabel: "Lab Assistant / Technician",
    location: "Tamil Nadu",
    ageLimit: "21 to 35 Years",
    subTagline: "Join one of Tamil Nadu's fastest-growing Health Sector and build a rewarding career.",
    qualifications: [
      "B.Sc. Medical Laboratory Technology (MLT), DMLT or equivalent qualification.",
      "Freshers and Experienced candidates can apply",
      "Excellent communication skills in Tamil (English is an added advantage)",
      "Basic computer knowledge is preferred"
    ],
    responsibilities: [
      "Collect, label and process patient specimens as per protocol.",
      "Run diagnostic tests and operate laboratory instruments.",
      "Ensure quality control and accuracy of test results.",
      "Maintain laboratory equipment and inventory.",
      "Record and report results accurately in systems.",
      "Follow infection control and safety guidelines.",
      "Support physicians in diagnosis and treatment evaluation."
    ],
    salaryAndBenefits: [
      "₹21,000 – ₹35,000 per month (based on qualification and experience)",
      "Attractive Incentives",
      "Performance Bonus",
      "Career Growth Opportunities",
      "Training & Development",
      "PF / ESI (as per company policy)"
    ],
    preferredSkills: [
      "Good communication & interpersonal skills",
      "Positive attitude and willingness to learn",
      "Customer service orientation",
      "Team player with leadership potential"
    ]
  },
  {
    id: "green-tech",
    title: "TECHNICIAN - GREEN TECHNOLOGY & RENEWABLE ENERGY",
    theme: "orange",
    positionLabel: "Technician - Green Technology and Renewable Energy",
    location: "Tamil Nadu",
    ageLimit: "21 to 35 Years",
    subTagline: "Join one of Tamil Nadu's fastest-growing Tech. Sector and build a rewarding career.",
    qualifications: [
      "B.Sc. (Electrical & Electronics), Diploma / ITI - Electrical & Electronics",
      "Freshers and Experienced candidates can apply",
      "Excellent communication skills in Tamil (English is an added advantage)",
      "Basic computer knowledge is preferred"
    ],
    responsibilities: [
      "Install, test and maintain solar PV and renewable energy systems.",
      "Design and maintain electrical equipment and components.",
      "Assist in planning and executing renewable energy projects.",
      "Perform preventive maintenance and troubleshoot issues.",
      "Ensure compliance with safety standards and procedures.",
      "Prepare reports and documentation of work done."
    ],
    salaryAndBenefits: [
      "₹21,000 – ₹35,000 per month (based on qualification and experience)",
      "Attractive Incentives",
      "Performance Bonus",
      "Career Growth Opportunities",
      "Training & Development",
      "PF / ESI (as per company policy)"
    ],
    preferredSkills: [
      "Good communication & interpersonal skills",
      "Positive attitude and willingness to learn",
      "Customer service orientation",
      "Team player with leadership potential"
    ]
  },
  {
    id: "faculty",
    title: "IIT-JEE (MAIN & ADVANCED) / NEET FACULTY",
    theme: "purple",
    positionLabel: "IIT, Advanced JEE Trainer & NEET Trainers",
    location: "Tamil Nadu",
    ageLimit: "21 to 35 Years",
    subTagline: "Join one of Tamil Nadu's fastest-growing education organizations and build a rewarding career as a Doctorate / Research scholar in your area of specialization.",
    qualifications: [
      "Postgraduate in M.Sc. (Math, Physics, Chemistry, Life Science, Computer Science or related disciplines)",
      "Freshers and Experienced candidates can apply",
      "Excellent communication skills in Tamil (English is an added advantage)",
      "Basic computer knowledge is preferred",
      "Interest to upgrade career as Doctorate / Research holder"
    ],
    responsibilities: [
      "Deliver concept-based teaching aligned with JEE/NEET patterns.",
      "Design study materials, mock tests and practice papers.",
      "Analyze student performance and provide academic feedback.",
      "Conduct doubt-clearing and one-on-one mentoring sessions.",
      "Guide students with strategy, time management and motivation.",
      "Coordinate with academic teams and communicate with parents.",
      "Support students throughout their preparation journey."
    ],
    salaryAndBenefits: [
      "₹21,000 – ₹35,000 per month (based on qualification and experience)",
      "Attractive Incentives",
      "Performance Bonus",
      "Career Growth Opportunities",
      "Training & Development",
      "PF / ESI (as per company policy)"
    ],
    preferredSkills: [
      "Good communication & interpersonal skills",
      "Positive attitude and willingness to learn",
      "Customer service orientation",
      "Team player with leadership potential"
    ]
  }
];

export default function HiringPostersSection({ onApplyClick }: HiringPostersSectionProps) {
  const getThemeStyles = (theme: JobOpening["theme"]) => {
    switch (theme) {
      case "blue":
        return {
          bannerBg: "bg-blue-900 text-white",
          accentColor: "text-blue-900",
          badgeBg: "bg-blue-950 text-white",
          subBg: "bg-blue-50/70 border-blue-100",
          colHeader: "bg-blue-900 text-white",
          btnBg: "bg-blue-900 hover:bg-blue-950 text-white shadow-blue-900/30",
          border: "border-blue-200"
        };
      case "green":
        return {
          bannerBg: "bg-emerald-800 text-white",
          accentColor: "text-emerald-800",
          badgeBg: "bg-emerald-900 text-white",
          subBg: "bg-emerald-50/70 border-emerald-100",
          colHeader: "bg-emerald-800 text-white",
          btnBg: "bg-emerald-700 hover:bg-emerald-800 text-white shadow-emerald-700/30",
          border: "border-emerald-200"
        };
      case "orange":
        return {
          bannerBg: "bg-amber-600 text-white",
          accentColor: "text-amber-700",
          badgeBg: "bg-amber-800 text-white",
          subBg: "bg-amber-50/70 border-amber-100",
          colHeader: "bg-amber-700 text-white",
          btnBg: "bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/30",
          border: "border-amber-200"
        };
      case "purple":
        return {
          bannerBg: "bg-indigo-900 text-white",
          accentColor: "text-indigo-900",
          badgeBg: "bg-indigo-950 text-white",
          subBg: "bg-indigo-50/70 border-indigo-100",
          colHeader: "bg-indigo-900 text-white",
          btnBg: "bg-indigo-900 hover:bg-indigo-950 text-white shadow-indigo-900/30",
          border: "border-indigo-200"
        };
    }
  };

  return (
    <section id="hiring-positions" className="py-12 px-3 sm:px-6 bg-slate-100">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-900 font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-sm tracking-wide">
            💥 SUKRITH LEARNING OPC PRIVATE LIMITED – TAMIL NADU
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            CURRENT JOB OPENINGS
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            Explore positions below and click <strong className="text-blue-900">APPLY NOW</strong> to fill out your quick candidate application form.
          </p>
        </div>

        {/* Poster Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {JOB_OPENINGS.map((job) => {
            const styles = getThemeStyles(job.theme);

            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={`bg-white rounded-2xl shadow-xl border ${styles.border} overflow-hidden flex flex-col justify-between`}
              >
                <div>
                  {/* Top Header Strip */}
                  <div className="bg-amber-400 text-slate-900 font-extrabold text-center py-2 px-4 text-xs sm:text-sm tracking-wider uppercase border-b border-amber-300">
                    💥 SUKRITH LEARNING OPC PRIVATE LIMITED – TAMIL NADU
                  </div>

                  {/* Hiring Main Title */}
                  <div className="text-center py-4 px-4 bg-slate-50 border-b border-slate-200">
                    <span className="text-slate-900 text-2xl sm:text-3xl font-black tracking-tight block">
                      We're Hiring!
                    </span>
                    <div className={`mt-2 py-2.5 px-4 font-black text-lg sm:text-xl uppercase tracking-wider ${styles.bannerBg} rounded-xl shadow-md mx-2 sm:mx-6`}>
                      {job.title}
                    </div>
                    <p className="text-xs text-slate-600 font-medium mt-2 max-w-lg mx-auto leading-relaxed">
                      {job.subTagline}
                    </p>
                  </div>

                  {/* Upper Split Details: Position/Location/Age vs Qualification */}
                  <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-12 gap-4 border-b border-slate-200 bg-slate-50/50">
                    
                    {/* Left Badges (5 cols on md) */}
                    <div className="md:col-span-5 space-y-2.5">
                      <div className="bg-white border border-slate-200 p-2.5 rounded-xl shadow-sm space-y-2">
                        <div className="flex items-start gap-2">
                          <div className={`p-1.5 rounded-lg ${styles.colHeader} flex-shrink-0 mt-0.5`}>
                            <UserCheck className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Position</span>
                            <span className="text-xs font-black text-slate-900 leading-snug block">{job.positionLabel}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2 pt-1 border-t border-slate-100">
                          <div className={`p-1.5 rounded-lg ${styles.colHeader} flex-shrink-0 mt-0.5`}>
                            <MapPin className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Location</span>
                            <span className="text-xs font-black text-slate-900 leading-snug block">{job.location}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2 pt-1 border-t border-slate-100">
                          <div className={`p-1.5 rounded-lg ${styles.colHeader} flex-shrink-0 mt-0.5`}>
                            <Calendar className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Age Limit</span>
                            <span className="text-xs font-black text-slate-900 leading-snug block">{job.ageLimit}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Qualification Box (7 cols on md) */}
                    <div className="md:col-span-7 bg-white border border-slate-200 p-3 rounded-xl shadow-sm">
                      <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-slate-100">
                        <GraduationCap className={`w-4 h-4 ${styles.accentColor}`} />
                        <h4 className="text-xs font-black text-slate-900 uppercase tracking-wide">Qualification</h4>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {job.qualifications.map((q, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 leading-snug">
                            <span className="text-emerald-600 font-bold text-sm leading-none">•</span>
                            <span className="font-medium text-[11px] sm:text-xs">{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* 3-Column Detailed Cards: Responsibilities, Salary, Skills */}
                  <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white">
                    
                    {/* Responsibilities */}
                    <div className="border border-slate-200 rounded-xl overflow-hidden flex flex-col">
                      <div className={`px-2.5 py-1.5 font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider flex items-center gap-1 ${styles.colHeader}`}>
                        <Briefcase className="w-3 h-3 flex-shrink-0" />
                        <span>Key Responsibilities</span>
                      </div>
                      <div className="p-2.5 bg-slate-50/60 flex-1">
                        <ul className="space-y-1 text-[11px] text-slate-700">
                          {job.responsibilities.map((r, idx) => (
                            <li key={idx} className="flex items-start gap-1 leading-tight">
                              <span className="text-slate-400 font-bold">•</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Salary & Benefits */}
                    <div className="border border-slate-200 rounded-xl overflow-hidden flex flex-col">
                      <div className={`px-2.5 py-1.5 font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider flex items-center gap-1 ${styles.colHeader}`}>
                        <DollarSign className="w-3 h-3 flex-shrink-0" />
                        <span>Salary & Benefits</span>
                      </div>
                      <div className="p-2.5 bg-slate-50/60 flex-1">
                        <ul className="space-y-1 text-[11px] text-slate-700">
                          {job.salaryAndBenefits.map((sb, idx) => (
                            <li key={idx} className="flex items-start gap-1 leading-tight">
                              <span className="text-emerald-600 font-bold">•</span>
                              <span className={idx === 0 ? "font-bold text-slate-900 text-xs" : ""}>{sb}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Preferred Skills */}
                    <div className="border border-slate-200 rounded-xl overflow-hidden flex flex-col">
                      <div className={`px-2.5 py-1.5 font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider flex items-center gap-1 ${styles.colHeader}`}>
                        <Star className="w-3 h-3 flex-shrink-0" />
                        <span>Preferred Skills</span>
                      </div>
                      <div className="p-2.5 bg-slate-50/60 flex-1">
                        <ul className="space-y-1 text-[11px] text-slate-700">
                          {job.preferredSkills.map((ps, idx) => (
                            <li key={idx} className="flex items-start gap-1 leading-tight">
                              <span className="text-amber-500 font-bold">✓</span>
                              <span>{ps}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Footer Action Bar with APPLY NOW Button */}
                <div className="p-4 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => onApplyClick(job.positionLabel)}
                    className={`w-full sm:w-auto px-6 py-3 rounded-xl font-black text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer ${styles.btnBg}`}
                  >
                    <span>APPLY NOW</span>
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </motion.button>

                  <div className="text-center sm:text-right space-y-0.5">
                    <p className="text-[10px] text-slate-500 font-medium">
                      Register via <strong className="text-slate-800">www.vizionindia.in</strong>
                    </p>
                    <div className="flex items-center justify-center sm:justify-end gap-1 text-xs font-bold text-slate-800">
                      <Phone className="w-3 h-3 text-emerald-600" />
                      <a href="tel:+919445285416" className="hover:underline">+91 94452 85416</a>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
