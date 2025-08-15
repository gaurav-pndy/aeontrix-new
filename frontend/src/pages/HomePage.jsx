import React, { useEffect } from "react";
import SEO from "../components/SEO";
import HeroSection from "../components/Home/HeroSection";
import ServicesSection from "../components/Home/ServicesSection";
import Benefits from "../components/Home/Benefits";
import HumanAIComparison from "../components/Home/HumanAIComparison";
import Timeline from "../components/Home/Timeline";
import CalEmbed from "../components/Home/CalEmbed";
import ContactForm from "../components/Home/ContactForm";
import Footer from "../components/Footer";
import { useLocation } from "react-router";
import BlogSection from "../components/Home/BlogSection";
import FaqSection from "../components/Home/FaqSection";
import Carousel from "../components/Home/Carousel";

function HomePage() {
  const location = useLocation();
  const scrollWithOffset = (el, offset = 100) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    const targetId = location.state?.scrollTo;
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) scrollWithOffset(el, 100); // Add same offset here
      }, 100);
    }
  }, [location]);

  return (
    <div>
      <div id="main">
        <SEO
          title="Aeontrix | AI Transformation Partner"
          description="We help businesses reduce costs, save time, and streamline operations through intelligent AI automation. Our custom workflows eliminate repetitive tasks across CRMs, helpdesks, and spreadsheets—freeing your team for high-impact work. Get lower overhead, faster execution, and reliable 24/7 systems without human error or burnout."
          keywords="AI automation, business process automation, AI agents, chatbots, workflow automation, AI integration, n8n vs Zapier, AI ROI calculator, AI transformation, automated customer service, AI lead generation, AI automation consultant, AI automation services, custom AI solutions, GPT integration, no-code AI, Aeontrix, Aeontrix AI, Aeontrix automation, AI workflow design, AI automation agency, AI development company, AI consulting firm, business automation tools, AI for small business, AI automation benefits, AI implementation services, intelligent process automation"
          url="https://aeontrix.com/"
          canonical="https://aeontrix.com/"
          ogTitle="Aeontrix | AI Transformation Partner"
          ogDescription="We help businesses reduce costs, save time, and streamline operations through intelligent AI automation. Our custom workflows eliminate repetitive tasks across CRMs, helpdesks, and spreadsheets—freeing your team for high-impact work. Get lower overhead, faster execution, and reliable 24/7 systems without human error or burnout."
          ogImage="https://aeontrix.com/aeontrix-emblem.png"
          twitterCard="https://aeontrix.com/aeontrix-emblem.png"
          twitterSite="@aeontrix"
          schemaMarkup={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Aeontrix",
            url: "https://aeontrix.com",
            logo: "https://aeontrix.com/aeontrix-emblem.png",
            description:
              "We help businesses reduce costs, save time, and streamline operations through intelligent AI automation. Our custom workflows eliminate repetitive tasks across CRMs, helpdesks, and spreadsheets—freeing your team for high-impact work. Get lower overhead, faster execution, and reliable 24/7 systems without human error or burnout.",
            sameAs: [
              "https://www.linkedin.com/company/aeontrix",
              "https://x.com/AeontrixAI",
              "https://facebook.com/aeontrix",
            ],
          }}
        />
        <HeroSection />
        <Carousel />
        <ServicesSection />
        {/* <Benefits /> */}
        <HumanAIComparison />
        <Timeline />
        <BlogSection />
        <CalEmbed />
        <ContactForm />
        <FaqSection />
      </div>
    </div>
  );
}

export default HomePage;
