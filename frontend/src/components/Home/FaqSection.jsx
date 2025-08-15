import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    questionKey: "1. What does Aeontrix do exactly?",
    answerKey:
      "Aeontrix builds custom AI systems tailored to your business needs — from AI-powered sales outreach and marketing content to AI influencers, customer support, and internal automations. You only pay for the features you need.",
  },
  {
    questionKey:
      "2. How is Aeontrix different from other AI tools or platforms?",
    answerKey:
      "Unlike rigid platforms, we offer custom-built AI solutions integrated directly into your existing workflows. Plus, we back it with a dedicated strategist, ongoing support, and clear ROI-driven implementation.",
  },
  {
    questionKey: "3. What’s the process to get started?",
    answerKey: `We follow a three-phase journey:
    <div class='ml-5'> 
•	<b>Phase 1:</b> Discovery & AI Audit<br/>
•	<b>Phase 2:</b> Building, Testing & Launch<br/>
•	<b>Phase 3:</b> Optimization & Scaling</div>
We begin with a refundable AI audit to assess opportunities in your business. You get a roadmap and cost estimate before you commit.
`,
  },
  {
    questionKey: "4. Is the AI Audit really refundable?",
    answerKey:
      "Yes. If you proceed with the build after the audit, the fee is fully credited toward your solution cost.",
  },
  {
    questionKey: "5. How long does it take to launch a solution?",
    answerKey:
      "It depends on the scope, but typical projects are ready in a few weeks. We move quickly without compromising on quality or security.",
  },
  {
    questionKey: "6. Can I upgrade or add features later?",
    answerKey:
      "Absolutely. Our solutions are modular. You can start small and expand — from cold calling to content creation, influencer automation, or AI customer support — whenever you're ready.",
  },
  {
    questionKey: "7. Do you offer training and support?",
    answerKey:
      "Yes. We provide user guides, Loom walkthroughs, and team training if needed. Ongoing clients receive performance reviews, upgrades, and priority support.",
  },
  {
    questionKey: "8. Can your AI integrate with my CRM or internal systems?",
    answerKey:
      "Yes. We support integrations with most major CRMs, calendars, internal chat tools (like Slack), and other business systems.",
  },
  {
    questionKey: "9. Is my data safe with you?",
    answerKey:
      "Security and privacy are top priorities. All solutions are tested for data safety, and we follow best practices in AI security and compliance.",
  },
  {
    questionKey: "10. What types of businesses do you work with?",
    answerKey:
      "We serve real estate firms, law firms, insurance agencies, e-commerce brands, SMBs (medspas, dentists, gyms), coaches, consultants, and marketing agencies.",
  },
  {
    questionKey: "11. Do I need technical skills to use your solutions?",
    answerKey:
      "No technical skills needed. Everything is built for ease-of-use, and we handle all the setup, onboarding, and maintenance.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3, once: true }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="py-16 mb-10 relative z-10 text-seasalt"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="gradient-title font-bold text-center ">
          Frequently Asked Questions{" "}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              onClick={() => toggle(index)}
              key={index}
              className=" p-4 rounded-xl shadow-sm cursor-pointer content-box border-glow-wrapper highlighted-box-small    relative "
            >
              <div className="border-glow"></div>

              <div className="flex justify-between items-center">
                <p className="font-medium text-lg">{faq.questionKey}</p>
                <span className="border rounded bg-neutral-800 border-[#00FF93]/30 text-[#00FF93] p-px">
                  <ChevronDown
                    className={`w-4  h-4 transition-all duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </div>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: faq.answerKey }}
                      className="pt-4  text-[#F8F9FB]/70 overflow-hidden"
                    ></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FaqSection;
