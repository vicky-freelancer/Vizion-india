import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import OpportunityCards from "./components/OpportunityCards";
import JobLocationsSection from "./components/JobLocationsSection";
import LeadFormSection from "./components/LeadFormSection";
import Footer from "./components/Footer";
import StickyMobileCTA from "./components/StickyMobileCTA";

export default function App() {
  const [selectedPosition, setSelectedPosition] = useState<string>("Educational Counsellor");

  // Smooth scroll handler targeting candidate form section and focusing candidate name field
  const handleScrollToForm = (positionTitle?: string) => {
    if (positionTitle) {
      setSelectedPosition(positionTitle);
    }
    const element = document.getElementById("lead-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        const input = element.querySelector("input");
        if (input) {
          input.focus();
        }
      }, 500);
    }
  };

  // Safe WhatsApp click handler targeting Vizion India / Sukrith HR (+91 94452 85416)
  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(
      `Hi Vizion India / Sukrith Learning, I am interested in applying for job positions (${selectedPosition}). Please share application & interview details.`
    );
    const url = `https://wa.me/919445285416?text=${message}`;
    try {
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      window.location.href = url;
    }
  };

  // Website redirection
  const handleWebsiteRedirect = () => {
    window.open("https://www.vizionindia.in", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased pb-16 md:pb-0">
      
      {/* 1. TOP NAVBAR */}
      <Navbar
        onApplyClick={() => handleScrollToForm()}
        onWhatsAppClick={handleWhatsAppRedirect}
      />

      {/* 2. MAIN HERO HIRING BANNER */}
      <HeroSection
        onApplyClick={() => handleScrollToForm()}
        onWhatsAppClick={handleWhatsAppRedirect}
      />

      {/* 3. EXPLORE OPPORTUNITIES - 4 JOB CARDS GRID */}
      <OpportunityCards
        onApplyClick={(posTitle) => handleScrollToForm(posTitle)}
      />

      {/* 4. JOB LOCATIONS SECTION (Thanjavur, Perambalur, Trichy, Ariyalur & Regional Centers) */}
      <JobLocationsSection
        onApplyClick={() => handleScrollToForm()}
      />

      {/* 5. CANDIDATE APPLICATION FORM (5 REQUIRED FIELDS) */}
      <LeadFormSection
        selectedPosition={selectedPosition}
        onWhatsAppClick={handleWhatsAppRedirect}
      />

      {/* 6. CORPORATE FOOTER */}
      <Footer />

      {/* 7. STICKY MOBILE CTA BAR */}
      <StickyMobileCTA
        onCtaclick={() => handleScrollToForm()}
        onWhatsAppClick={handleWhatsAppRedirect}
      />
      
    </div>
  );
}
