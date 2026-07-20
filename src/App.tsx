import HeroSection from "./components/HeroSection";
import SocialProofStrip from "./components/SocialProofStrip";
import WhyVizion from "./components/WhyVizion";
import OfferDetails from "./components/OfferDetails";
import ExamCategories from "./components/ExamCategories";
import Testimonials from "./components/Testimonials";
import UrgencyRepeat from "./components/UrgencyRepeat";
import LeadFormSection from "./components/LeadFormSection";
import FaqAccordion from "./components/FaqAccordion";
import FinalCtaBanner from "./components/FinalCtaBanner";
import Footer from "./components/Footer";
import StickyMobileCTA from "./components/StickyMobileCTA";

export default function App() {
  // Smooth scroll handler targeting form section and auto-focusing the first input field
  const handleScrollToForm = () => {
    const element = document.getElementById("lead-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        const input = element.querySelector("input");
        if (input) {
          input.focus();
        }
      }, 700);
    }
  };

  // Safe WhatsApp click handler that avoids strict sandboxed iframe restrictions
  const handleWhatsAppRedirect = () => {
    const url = "https://wa.me/919113242161?text=Hi%20Vizion%20India%2C%20I%20clicked%20your%20Meta%20Ad.%20I%20want%20to%20secure%20the%20%E2%82%B91200%20All-India%20Exam%20Prep%20Offer.%20Please%20activate%20my%20trial.";
    try {
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      // Fallback location change
      window.location.href = url;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-brand-accent/20 selection:text-brand-accent pb-16 md:pb-0">
      {/* 1. STICKY MOBILE CTA BAR (fixed bottom on mobile only) */}
      <StickyMobileCTA
        onCtaclick={handleScrollToForm}
        onWhatsAppClick={handleWhatsAppRedirect}
      />

      {/* 2. HERO SECTION */}
      <HeroSection
        onCtaclick={handleScrollToForm}
        onWhatsAppClick={handleWhatsAppRedirect}
      />

      {/* 3. SOCIAL PROOF STRIP */}
      <SocialProofStrip />

      {/* 5. WHY VIZION INDIA */}
      <WhyVizion />

      {/* 4. THE OFFER / WHAT'S INCLUDED */}
      <OfferDetails onCtaclick={handleScrollToForm} />

      {/* 6. EXAM CATEGORIES GRID */}
      <ExamCategories />

      {/* 7. TESTIMONIAL / RESULTS SECTION */}
      <Testimonials />

      {/* 8. URGENCY + SCARCITY REPEAT BLOCK */}
      <UrgencyRepeat onCtaclick={handleScrollToForm} />

      {/* 9. SIMPLE LEAD FORM & WHATSAPP TOGGLE */}
      <LeadFormSection onWhatsAppClick={handleWhatsAppRedirect} />

      {/* 10. FAQ ACCORDION */}
      <FaqAccordion />

      {/* 11. FINAL CTA BANNER */}
      <FinalCtaBanner onCtaclick={handleScrollToForm} />

      {/* 12. FOOTER */}
      <Footer />
    </div>
  );
}
