import {
  FaBalanceScale,
  FaBolt,
  FaBroadcastTower,
  FaBullhorn,
  FaCalendarAlt,
  FaCalendarCheck,
  FaCameraRetro,
  FaChalkboardTeacher,
  FaChartLine,
  FaClock,
  FaCommentsDollar,
  FaGlobe,
  FaGlobeAmericas,
  FaHandshake,
  FaLanguage,
  FaMoneyBillWave,
  FaNetworkWired,
  FaPhoneVolume,
  FaRecycle,
  FaRegClock,
  FaRegKeyboard,
  FaRetweet,
  FaShoppingCart,
  FaSmileBeam,
  FaSpa,
  FaSun,
  FaUserAlt,
  FaUserClock,
  FaUserPlus,
  FaUserTie,
  FaUtensils,
} from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";
import {
  MdContentPaste,
  MdOutlineSchool,
  MdPersonSearch,
  MdPlumbing,
  MdStarRate,
  MdSupportAgent,
} from "react-icons/md";
import {
  RiMessage2Line,
  RiShieldCheckLine,
  RiTimerFlashLine,
} from "react-icons/ri";
import { SiCivicrm } from "react-icons/si";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BsRobot } from "react-icons/bs";
import { IoIosClipboard } from "react-icons/io";
import {
  GiArchiveRegister,
  GiArtificialIntelligence,
  GiBodyBalance,
  GiTooth,
  GiTreeGrowth,
} from "react-icons/gi";
import { use } from "react";
import { LuHeater } from "react-icons/lu";
import { FaPeopleRoof } from "react-icons/fa6";

export const industriesData = [
  {
    id: "e-commerce",
    title: "E-Commerce",
    icon: FaShoppingCart,
    heading:
      "Automate all Support & Increase Revenue through recovered Abandoned Carts",
    useCasesGrid: "lg:grid-cols-3",

    useCases: [
      {
        icon: FaShoppingCart,
        desc: "Abandoned cart follow up via <b>Calls, SMS, E-mail & WhatsApp</b>",
      },
      {
        icon: MdSupportAgent,
        desc: "<b>AI Voice & Chat Support</b> for Order Status or FAQs",
      },
      {
        icon: FaCameraRetro,
        desc: "<b>On-demand AI influencer-style product photos & reels</b>",
      },
    ],
    benefitsFlex: "lg:w-[calc(25%-1.5rem)]",
    benefits: [
      {
        icon: FaRecycle,
        desc: "Recover Abandoned Carts",
      },
      {
        icon: FaLanguage,
        desc: "24/7 Multilingual Customer Support",
      },
      {
        icon: FaChartLine,
        desc: "Create 30x more Content",
      },
      {
        icon: FaMoneyBillWave,
        desc: "Reduced Influencer ad-Creation Costs by",
      },
    ],
    solutionsFlex: "lg:w-[calc(33.33%-1.5rem)]",
    solutions: [
      {
        icon: MdSupportAgent,
        title: "AI Customer Support",
      },
      {
        icon: FaUserTie,
        title: "AI Sales Representative",
      },

      {
        icon: FaBullhorn,
        title: "AI Marketing Suite",
      },

      {
        icon: FaCameraRetro,
        title: "AI Project Manager",
      },
      {
        icon: FaHandshake,
        title: "AI Business Partner",
      },
    ],
  },
  {
    id: "agencies",
    title: "Agencies",
    icon: FaShoppingCart,
    heading: "Focus on Growth—Not Admin & Overhead",
    useCasesGrid: "lg:grid-cols-3",
    useCases: [
      {
        icon: FaRegClock,
        desc: "<b>Speed to Lead -</b> Qualification & Appointment Setting (With Follow-ups) & CRM Integration",
      },
      {
        icon: RiMessage2Line,
        desc: "<b>AI Outreach -</b> Cold Email, Cold Calls, SMS",
      },
      {
        icon: MdContentPaste,
        desc: "<b>AI Content Creation & Publishing Suite</b> for Multi Client Calendars",
      },
      {
        icon: FaUserPlus,
        desc: "Automated Client Onboarding",
      },
      {
        icon: FaRegKeyboard,
        desc: "AI Secretary to Automate Admin work",
      },
      {
        icon: MdPersonSearch,
        desc: "Internal bot for Employee Onboarding & Training",
      },
    ],
    benefitsFlex: "lg:w-[calc(33.333%-1.5rem)]",
    benefits: [
      {
        icon: FaBolt,
        desc: "Instant Lead Qualification within 30 seconds",
      },
      {
        icon: SiCivicrm,
        desc: "Automated CRM updates",
      },
      {
        icon: FaChartLine,
        desc: "Create 30x more Content",
      },
      {
        icon: FaRegClock,
        desc: "Save 100+ Hours monthly with AI Secretary",
      },
      {
        icon: FaSmileBeam,
        desc: "Increased Client Satisfaction with Automated Onboarding",
      },
      {
        icon: MdOutlineSchool,
        desc: "Faster Employee Training",
      },
    ],
    solutionsFlex: "lg:w-[calc(33.33%-1.5rem)]",
    solutions: [
      {
        icon: FaUserTie,
        title: "AI Sales Representative",
      },
      {
        icon: FaBullhorn,
        title: "AI Marketing Suite",
      },

      {
        icon: FaUserClock,
        title: "AI Secretary",
      },

      {
        icon: FaHandshake,
        title: "AI Business Partner",
      },
      {
        icon: FaCameraRetro,
        title: "AI Project Manager",
      },
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate",
    icon: FaShoppingCart,
    heading: "Move Properties Faster With 24/7 AI Agents",
    useCasesGrid: "lg:grid-cols-2",
    useCases: [
      {
        icon: FaBolt,
        desc: "<b>Speed to Lead -</b> Qualification & Appointment Setting (With Follow-ups) & CRM Integration",
      },
      {
        icon: MdSupportAgent,
        desc: "<b>Inbound Voice AI -</b> Open House Booking + FAQs",
      },
      {
        icon: MdContentPaste,
        desc: "<b>AI Content Creation</b> & Publishing Suite for Multi Client Calendars",
      },
      {
        icon: FaRegKeyboard,
        desc: "<b>AI Secretary</b> to Automate Admin work",
      },
    ],
    benefitsFlex: "lg:w-[calc(33.333%-1.5rem)]",
    benefits: [
      {
        icon: RiTimerFlashLine,
        desc: "Instant Lead Qualification within 30 seconds",
      },
      {
        icon: SiCivicrm,
        desc: "Automated CRM updates",
      },
      {
        icon: FaCalendarCheck,
        desc: "Fill calendars with Open House Bookings",
      },
      {
        icon: FaChartLine,
        desc: "30x Content Creation for Social Media",
      },
      {
        icon: IoTicketOutline,
        desc: "Save 100+ Hours monthly with AI Secretary",
      },
    ],
    solutionsFlex: "lg:w-[calc(33.33%-1.5rem)]",
    solutions: [
      {
        icon: FaUserTie,
        title: "AI Sales Representative",
      },
      {
        icon: FaBullhorn,
        title: "AI Marketing Suite",
      },

      {
        icon: FaRegKeyboard,
        title: "AI Secretary",
      },

      {
        icon: FaHandshake,
        title: "AI Business Partner",
      },
      {
        icon: FaCameraRetro,
        title: "AI Project Manager",
      },
    ],
  },
  {
    id: "insurance",
    title: "Insurance",
    icon: MdSupportAgent,
    heading: "Quote, Claim, & Close—All on Autopilot",
    useCasesGrid: "lg:grid-cols-3",
    useCases: [
      {
        icon: FaCommentsDollar,
        desc: "Instant quote chatbots with dynamic forms",
      },
      {
        icon: FaBolt,
        desc: "Speed to Lead - Qualification & Appointment Setting (With Follow-ups) & CRM Integration",
      },
      {
        icon: FaGlobe,
        desc: "24/7 Multilingual customer support hotline",
      },
    ],
    benefitsFlex: "lg:w-[calc(50%-1.5rem)]",
    benefits: [
      {
        icon: FaGlobeAmericas,
        desc: "24/7 Multilingual Customer Support",
      },
      {
        icon: RiTimerFlashLine,
        desc: "Instant Lead Qualification within 30 seconds",
      },
      {
        icon: SiCivicrm,
        desc: "Automated CRM updates",
      },
      {
        icon: FaNetworkWired,
        desc: "Scalable support without call centre sprawl",
      },
    ],
    solutionsFlex: "lg:w-[calc(33.33%-1.5rem)]",
    solutions: [
      {
        icon: MdSupportAgent,
        title: "AI Customer Support",
      },
      {
        icon: FaUserTie,
        title: "AI Sales Suite",
      },

      {
        icon: FaHandshake,
        title: "AI Business Partner",
      },
      {
        icon: FaBullhorn,
        title: "AI Marketing Suite",
      },

      {
        icon: IoIosClipboard,
        title: "AI Secretary",
      },
    ],
  },
  {
    id: "law-firms",
    title: "Law Firms",
    icon: FaShoppingCart,
    heading: "Bill More Hours—While Automations Do the Admin",
    useCasesGrid: "lg:grid-cols-2",
    useCases: [
      {
        icon: FaCalendarAlt,
        desc: "Appointment Booking & Rescheduling Receptionist",
      },
      {
        icon: SiCivicrm,
        desc: "AI automatically updates customer information in CRM",
      },
      {
        icon: HiOutlineDocumentText,
        desc: "Drafting documents based on your format & existing documents.",
      },
      {
        icon: BsRobot,
        desc: "Internal chatbot trained on firm precedents & knowledge base",
      },
    ],
    benefitsFlex: "lg:w-[calc(50%-1.5rem)]",
    benefits: [
      {
        icon: RiShieldCheckLine,
        desc: "<b>Maintain confidentiality</b> with zero trust design",
      },
      {
        icon: FaUserPlus,
        desc: "<b>Capture more clients</b> with instant intake & follow up",
      },
      {
        icon: FaClock,
        desc: "<b>Reduce drafting time</b> by up to 80 %",
      },
      {
        icon: FaSmileBeam,
        desc: "<b>24/7 responsiveness</b> improves client satisfaction",
      },
    ],
    solutionsFlex: "lg:w-[calc(25%-1.5rem)]",
    solutions: [
      {
        icon: FaUserTie,
        title: "AI Sales Representative",
      },
      {
        icon: IoIosClipboard,
        title: "AI Secretary",
      },

      {
        icon: FaHandshake,
        title: "AI Business Partner",
      },
      {
        icon: FaCameraRetro,
        title: "AI Project Manager",
      },
    ],
  },
  {
    id: "coaches-and-consultants",
    title: "Coaches & Consultants",
    icon: FaShoppingCart,
    heading: "Clone Your Expertise & Scale Impact",
    useCasesGrid: "lg:grid-cols-3",
    useCases: [
      {
        icon: BsRobot,
        desc: "AI Chatbot Trained On Your Knowledge",
      },
      {
        icon: FaUserAlt,
        desc: "AI Avatar & Voice Clone Images & Reels",
      },
      {
        icon: MdContentPaste,
        desc: "<b>AI Content Creation & Publishing</b> using AI Marketing Suite",
      },
      {
        icon: FaCalendarCheck,
        desc: "Automated discovery calls & calendar bookings",
      },
      {
        icon: FaRetweet,
        desc: "Social media content repurposing from long form videos",
      },
      {
        icon: FaUserPlus,
        desc: "Automated Client Onboarding",
      },
    ],
    benefitsFlex: "lg:w-[calc(33.333%-1.5rem)]",
    benefits: [
      {
        icon: FaSun,
        desc: "<b>Serve clients 24/7</b> without burning out",
      },
      {
        icon: FaChalkboardTeacher,
        desc: "<b>Increase course sales</b> via always on nurturing",
      },
      {
        icon: FaBroadcastTower,
        desc: "<b>Expand audience reach</b> with daily content clips",
      },
      {
        icon: MdSupportAgent,
        desc: "<b>Lower support load</b> through self service answers",
      },
      {
        icon: GiArchiveRegister,
        desc: "<b>Productize expertise</b> into scalable digital assets",
      },
    ],
    solutionsFlex: "lg:w-[calc(33.33%-1.5rem)]",
    solutions: [
      {
        icon: MdSupportAgent,
        title: "AI Customer Support",
      },
      {
        icon: IoIosClipboard,
        title: "AI Secretary",
      },
      {
        icon: FaHandshake,
        title: "AI Business Partner",
      },
      {
        icon: FaCameraRetro,
        title: "AI Project Manager",
      },
      {
        icon: FaBullhorn,
        title: "AI Marketing Suite",
      },

      {
        icon: FaUserTie,
        title: "AI Sales Representative",
      },
    ],
  },
  {
    id: "small-medium-enterprises",
    title: "Small & Medium Sized Business",
    icon: FaShoppingCart,
    heading: "Enterprise level Scalability, without the Overhead",
    smbGrid: "lg:grid-cols-4",
    smbs: [
      {
        icon: LuHeater,
        name: "HVAC",
      },
      {
        icon: FaPeopleRoof,
        name: "Roofing",
      },
      {
        icon: MdPlumbing,
        name: "Plumbing",
      },
      {
        icon: GiTreeGrowth,
        name: "Landscape",
      },
      {
        icon: GiTooth,
        name: "Dental",
      },
      {
        icon: FaSpa,
        name: "Med-spa",
      },
      {
        icon: GiBodyBalance,
        name: "Physiotherapy",
      },
      {
        icon: FaUtensils,
        name: "Restaurants",
      },
    ],
    useCasesGrid: "lg:grid-cols-2",

    useCases: [
      {
        icon: MdSupportAgent,
        desc: "AI Receptionist for calls, bookings & rescheduling",
      },
      {
        icon: RiMessage2Line,
        desc: "Customer reactivation campaigns via SMS/Email/WhatsApp",
      },
      {
        icon: FaBullhorn,
        desc: "Create Content & Post on all Socials using AI Marketing suite",
      },
      {
        icon: MdStarRate,
        desc: "Review Requesting & Reputation Management Flows",
      },
    ],
    benefitsFlex: "lg:w-[calc(50%-1.5rem)]",
    benefits: [
      {
        icon: FaPhoneVolume,
        desc: "Never miss a booking—AI answers every call",
      },
      {
        icon: FaLanguage,
        desc: "Multilingual & Active 24/7/365",
      },
      {
        icon: FaUserClock,
        desc: "Recover Previous Customers & Increase CLV",
      },
      {
        icon: FaBalanceScale,
        desc: "Enterprise grade tech at SMB friendly pricing",
      },
    ],
    solutionsFlex: "lg:w-[calc(33.33%-1.5rem)]",
    solutions: [
      {
        icon: MdSupportAgent,
        title: "AI Customer Support",
      },
      {
        icon: FaUserTie,
        title: "AI Sales Representative",
      },

      {
        icon: FaBullhorn,
        title: "AI Marketing Suite",
      },

      {
        icon: FaHandshake,
        title: "AI Business Partner",
      },
      {
        icon: IoIosClipboard,
        title: "AI Secretary",
      },
    ],
  },
];
