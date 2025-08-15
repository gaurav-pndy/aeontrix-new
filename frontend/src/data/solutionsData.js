import {
  Phone,
  MessageSquare,
  Users,
  Mail,
  Bot,
  BarChart3,
  Clock,
  User,
  Zap,
  Settings,
} from "lucide-react";
import {
  FaBullhorn,
  FaChartLine,
  FaHashtag,
  FaHospitalUser,
  FaLinkedinIn,
  FaPhotoVideo,
  FaQuestion,
  FaRegClone,
  FaRobot,
  FaShoppingCart,
  FaSlack,
  FaStore,
  FaTools,
  FaUserCheck,
  FaUserShield,
} from "react-icons/fa";
import {
  FaBrain,
  FaCalendar,
  FaClock,
  FaDatabase,
  FaPhone,
  FaRegClock,
  FaRegMessage,
  FaShirt,
  FaUser,
  FaUserDoctor,
  FaUsers,
  FaUsersBetweenLines,
  FaUserTie,
  FaWhatsapp,
} from "react-icons/fa6";
import { IoIosSettings, IoMdMail, IoMdPhotos } from "react-icons/io";
import {
  RiChatFollowUpLine,
  RiCustomerServiceFill,
  RiFileAddLine,
  RiUser2Fill,
  RiUserHeartFill,
  RiUserHeartLine,
} from "react-icons/ri";
import { CgTranscript } from "react-icons/cg";
import { TbAutomation, TbMessageUser, TbSeo, TbSocial } from "react-icons/tb";
import { SiGitconnected } from "react-icons/si";
import { LuBuilding2, LuMessagesSquare } from "react-icons/lu";
import {
  MdArticle,
  MdBusinessCenter,
  MdDashboardCustomize,
  MdOutlineAttachMoney,
  MdOutlineCampaign,
  MdOutlineMarkEmailRead,
  MdRecordVoiceOver,
  MdSportsSoccer,
} from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { PiPhonePlusFill } from "react-icons/pi";
import { IoBookmarks, IoLanguage } from "react-icons/io5";
import { GrCloudSoftware } from "react-icons/gr";
import { GoLaw } from "react-icons/go";
import {
  BsBuildings,
  BsCalendar2Check,
  BsCalendarPlus,
  BsClipboardCheck,
  BsServer,
} from "react-icons/bs";
import { TiSocialAtCircular } from "react-icons/ti";
import { WiDaySunny } from "react-icons/wi";
import { BiNews } from "react-icons/bi";
import { FiCalendar } from "react-icons/fi";

export const solutionsData = [
  {
    id: "ai-sdr",
    title: "AI SDR",
    icon: FaShoppingCart,
    heading: "Turn Conversations into Customers — on Autopilot",
    desc: "Supercharge your outreach with AI voice callers, SMS, cold emails, and WhatsApp campaigns.",
    heroBtn: "Book a Call",
    overviewDesc:
      "Manual prospecting is outdated. Your AI Sales Assistant handles cold outreach and follow-ups — intelligently, consistently, and at scale.",
    useCases: [
      {
        icon: LuBuilding2,
        title: "Real Estate",
        desc: "Use AI to manage multi-channel outreach, follow up with property inquiries, and auto-book showings.",
      },
      {
        icon: FaRobot,
        title: "Insurance",
        desc: "Use AI to manage multi-channel outreach, including follow up. Streamline client onboarding.",
      },
      {
        icon: GoLaw,
        title: "Law Firms",
        desc: "Automate onboarding, Qualify leads and Book consultations with AI Voice Caller.",
      },
      {
        icon: MdSportsSoccer,
        title: "Coaches and Consultants",
        desc: "Let AI handle discovery calls, follow-ups, and onboarding sequences.",
      },
      {
        icon: LuBuilding2,
        title: "Marketing and Creative Agencies",
        desc: "Use AI to generate consistent pipeline with outbound multi-channel outreach.",
      },
      {
        icon: BsBuildings,
        title: "SMBs (e.g., Medspas, Dentists, Gyms, Restaurants) ",
        desc: "Reactivate past clients, Book Appointments, with reminder, rescheduling and cancellation options available.",
      },
      {
        icon: FaStore,
        title: "E-commerce",
        desc: "Recover abandoned carts with personalized outreach via SMS, Calls, Email, and WhatsApp.",
      },
    ],
    featuresGrid: "lg:grid-cols-3",
    coreFeatures: [
      {
        icon: FaPhone,
        title: "AI Cold Caller – Real-time conversations with leads",
      },
      {
        icon: FaRegMessage,
        title: "SMS + Email + WhatsApp Campaigns",
      },

      {
        icon: FaDatabase,
        title: "Leads Database Reactivation + Follow-Up Flows",
      },

      {
        icon: CgTranscript,
        title: "Meeting Transcripts and Smart Summaries",
      },
      {
        icon: FaUsersBetweenLines,
        title: "Automated Client Onboarding",
      },

      {
        icon: SiGitconnected,
        title: "CRM Integration for all of the above",
      },
      {
        icon: TbMessageUser,
        title: "Personalized Messaging at Scale",
      },
      {
        icon: LuMessagesSquare,
        title: "Multichannel Outreach",
      },
      {
        icon: FaRegClock,
        title: "Works 24/7, never misses a follow-up",
      },
    ],
    // whoItsFor: [
    //   {
    //     icon: MdOutlineAttachMoney,
    //     title: "Sales Teams",
    //   },
    //   {
    //     icon: RiFileAddLine,

    //     title: "Lead Generation Agencies",
    //   },
    //   {
    //     icon: LuBuilding2,

    //     title: "Real Estate Agents",
    //   },
    //   {
    //     icon: FaUserTie,

    //     title: "Insurance Brokers",
    //   },
    //   {
    //     icon: FaUserShield,

    //     title: "Consultants",
    //   },
    // ],
    howItWorks: [
      {
        step: "1",
        title: "You upload your lead list",
      },
      {
        step: "2",
        title: "We configure messaging per channel",
      },
      {
        step: "3",
        title: "Your AI Assistant starts contacting leads",
      },
      {
        step: "4",
        title: "You get notified of responses & hot leads",
      },
    ],
    button1: "Start Your Sales Automation",
    button2: "Book a Call",
  },
  {
    id: "ai-project-manager",
    title: "AI Project Manager",
    icon: RiUser2Fill,
    heading: "Create Your Brand’s AI Influencer in Minutes",
    desc: "From product modeling to reels, create unlimited marketing content with your virtual model.",
    heroBtn: "Create Your AI Influencer Now",
    overviewDesc:
      "No more scheduling photoshoots or hiring influencers. Create a hyper-realistic AI model to represent your brand across platforms.",
    useCases: [
      {
        icon: FaStore,
        title: "E-commerce ",
        desc: "Showcase products using AI models in photos and videos for ads or organic content.",
      },
      {
        icon: MdSportsSoccer,
        title: "Coaches and Consultants",
        desc: "Build your personal brand with an AI face that matches your vibe.",
      },
      {
        icon: LuBuilding2,
        title: "Marketing and Creative Agencies ",
        desc: "Partner with us and sell influencer content to your clients.",
      },
      {
        icon: BsBuildings,
        title: "SMBs (e.g., Salons, Fashion Boutiques, Medspas) ",
        desc: "Run ads and promote products without needing models or studios.",
      },
    ],
    featuresGrid: "lg:grid-cols-4",
    coreFeatures: [
      {
        icon: BsCalendar2Check,
        title: "Meeting-to-Tasks Autopilot",
        desc: "Transcribes calls, extracts action items, assigns owners & due dates",
      },
      {
        icon: FaUsersBetweenLines,
        title: "One-Click Client Onboarding",
        desc: "Form/contract/payment → project from template, folders, Slack channel",
      },

      {
        icon: FaUser,
        title: "AI Task Allocator",
        desc: "Routes work to the right person based on skills, load, and priority",
      },
      {
        icon: FaRobot,
        title: "Ask-AI Project Assistant",
        desc: "Get an instant project status – % complete, tasks by stage, overdue items, next milestones, and owners",
      },
      {
        icon: FaRegClock,
        title: "Daily / Weekly Briefs",
        desc: "One clean summary to Slack/Email; no manual reporting",
      },
      {
        icon: RiUserHeartLine,
        title: "Smart Intake Router",
        desc: "Classifies requests/bugs/changes and creates the right task automatically",
      },
      {
        icon: MdOutlineAttachMoney,
        title: "Account Receivables Follow-ups",
        desc: "Friendly, timed invoice reminders that stop on payment; human-approve optional",
      },
      {
        icon: FaClock,
        title: "Works 24/7, Integrates Everywhere",
        desc: "ClickUp/Asana/Jira, Slack, Google, Stripe, and more",
      },
    ],
    // whoItsFor: [
    //   {
    //     icon: FaStore,
    //     title: "E-commerce Brands",
    //   },
    //   {
    //     icon: FaShirt,
    //     title: "Fashion & Beauty Companies",
    //   },
    //   {
    //     icon: FaUserTie,
    //     title: "Digital Agencies",
    //   },
    //   {
    //     icon: MdBusinessCenter,
    //     title: "Businesses that want a Mascot for their Social Media",
    //   },
    // ],
    howItWorks: [
      {
        step: "1",
        title: "Upload Your Lead List",
      },
      {
        step: "2",
        title: "Configure Messaging",
      },
      {
        step: "3",
        title: "AI Starts Contacting",
      },
      {
        step: "4",
        title: "Get Notified",
      },
    ],
    button1: "Create Your AI Influencer",
    button2: "Get Your Ai",
  },
  {
    id: "ai-marketing-suite",
    title: "AI Marketing Suite",
    icon: FaBullhorn,
    heading: "10x Your Content Production with AI",
    desc: "Generate SEO blogs, image/video ads, and social content in minutes – all tailored to your audience.",
    heroBtn: "Try the AI Marketing Suite",
    overviewDesc:
      "Forget writer’s block and costly creatives. The AI Marketing Suite creates blog posts, ad creatives, social media content, and more — in minutes.",
    useCases: [
      {
        icon: FaStore,
        title: "E-commerce",
        desc: "Turn Product Data into SEO Articles, Stunning Ad Creatives, and Social Media Content.",
      },
      {
        icon: MdSportsSoccer,
        title: "Coaches and Consultants ",
        desc: "Repurpose Long Form Content into multiple Instagram Reels, TikTokscarousels, lead magnets.",
      },
      {
        icon: LuBuilding2,
        title: "Marketing and Creative Agencies ",
        desc: "Offer fast-turnaround content for multiple clients.",
      },
      {
        icon: LuBuilding2,
        title: "Real Estate ",
        desc: "AI-written local blogs, market reports, video listings.",
      },
      {
        icon: FaRobot,
        title: "Insurance",
        desc: "Build authority through educational content and social ads.",
      },
      {
        icon: BsBuildings,
        title: "SMBs (e.g., Restaurants, Gyms, Medspas) ",
        desc: "Boost visibility with automated blog and post generation.",
      },
    ],
    featuresGrid: "lg:grid-cols-4",
    coreFeatures: [
      {
        icon: MdArticle,
        title: "SEO Optimized Blog/Article Generator",
      },
      {
        icon: TiSocialAtCircular,
        title:
          "Connect Unlimited Social Media Accounts (Pricing differs based on number of accounts)",
      },

      {
        icon: FaClock,
        title:
          "Schedule and Post Content to Instagram, Facebook, TikTok, YouTube, X, Threads, LinkedIn, Pinterest, Bluesky",
      },
      {
        icon: FaLinkedinIn,
        title: "Brand Voice Aligned AI Content writer",
      },
      {
        icon: FaPhotoVideo,
        title: "Ads Creatives Generator - Image and Video",
      },
      {
        icon: LuMessagesSquare,
        title: "Automate DMs",
      },

      {
        icon: FaRobot,
        title: "Repurpose Content Across Platforms",
      },
      {
        icon: IoLanguage,
        title: "Multilingual Content Creation",
      },

      {
        icon: FaRobot,
        title: "AI-Generated Influencer Models",
      },
      {
        icon: MdDashboardCustomize,
        title: "Customizable Appearance",
      },

      {
        icon: TfiVideoClapper,
        title: "Branded Reels and Shorts",
      },
      {
        icon: MdRecordVoiceOver,
        title: "Voice Narration with Custom AI Voice",
      },
      {
        icon: RiUserHeartLine,
        title: "Ad-Ready Visuals",
      },
    ],
    // whoItsFor: [
    //   {
    //     icon: FaUserTie,
    //     title: "Marketers",
    //   },
    //   {
    //     icon: TbSeo,
    //     title: "SEO Agencies",
    //   },
    //   {
    //     icon: FaUsers,
    //     title: "Content Teams",
    //   },
    //   {
    //     icon: MdSportsSoccer,
    //     title: "Coaches",
    //   },
    //   {
    //     icon: FaHospitalUser,
    //     title: "Founders",
    //   },
    // ],
    howItWorks: [
      {
        step: "1",
        title: "Enter your product/topic",
      },
      {
        step: "2",
        title: "Select your platform",
      },
      {
        step: "3",
        title: "Get instant content tailored to your brand and audience",
      },
    ],
  },
  {
    id: "ai-secretary",
    title: "Your 24/7 AI Secretary",
    icon: FaRobot,
    heading: "Let People Talk to You — Even When You’re Asleep",
    desc: "Book Meetings, Manage Inbox, and get Live Business Data, Around the Clock and in any Language, So you Reclaim hours Every Week to focus on High-Impact decisions.",
    heroBtn: "Create Your AI Secretary Now",
    overviewDesc:
      "Imagine a digital version of yourself that can speak, advise, sell, and support. From voice calls to video, your AI Secretarytary handles it all.",
    useCases: [
      {
        icon: FaUserTie,
        title: "C-Suite Executives",
        desc: "Let your AI version answer questions, sell programs, or guide users 24/7.",
      },
      {
        icon: MdSportsSoccer,
        title: "Coaches and Consultants",
        desc: "Let your AI version answer questions, sell programs, or guide users 24/7.",
      },
      {
        icon: GoLaw,
        title: "Law Firms",
        desc: "AI Secretarytary of an attorney to handle client FAQs.",
      },
      {
        icon: LuBuilding2,
        title: "Real Estate",
        desc: "AI agent assistant to handle property queries.",
      },
      {
        icon: FaRobot,
        title: "Agencies ",
        desc: "Founder clones to scale personal brand presence.",
      },
      {
        icon: FaUser,
        title: "Insurance",
        desc: "Educate clients and onboard them with a digital version of your top rep.",
      },
    ],
    featuresGrid: "lg:grid-cols-4",
    coreFeatures: [
      {
        icon: FaRegMessage,
        title:
          "Can be connected to any Chat Interface Platform (that has an API)",
      },
      {
        icon: TfiVideoClapper,
        title: "Can interact with it in both Text and Voice",
      },
      {
        icon: FaClock,
        title: "Multilingual & Active 24/7/365",
      },
      {
        icon: BsClipboardCheck,
        title: "Pull to-dos from emails, chats and meetings",
      },
      {
        icon: BsCalendarPlus,
        title: "Book Meetings & Share Meeting Links with just a voice note",
      },
      {
        icon: FiCalendar,
        title: "Manage Calendar – Share free slots with others",
      },

      {
        icon: MdOutlineMarkEmailRead,
        title: "Summarise E-mails & Mailboxes",
      },

      {
        icon: BsServer,
        title: "Pull Data from Internal System like ERP, CRM",
      },
      {
        icon: FaUserCheck,
        title: "Draft Emails & Send with Human in the Loop",
      },
      {
        icon: BiNews,
        title: "Get latest news about any topic from any website",
      },
      {
        icon: WiDaySunny,
        title: "Tell the weather forecast",
      },
    ],
    // whoItsFor: [
    //   {
    //     icon: MdSportsSoccer,
    //     title: "Coaches",
    //   },
    //   {
    //     icon: FaUserShield,
    //     title: "Consultants",
    //   },
    //   {
    //     icon: RiUserHeartLine,
    //     title: "Influencers",
    //   },
    //   {
    //     icon: FaUserTie,
    //     title: "CEOs",
    //   },
    //   {
    //     icon: RiCustomerServiceFill,
    //     title: "Customer Support Professionals",
    //   },
    // ],
    howItWorks: [
      {
        step: "1",
        title: "Upload training content (Courses, Videos, FAQ)",
      },
      {
        step: "2",
        title: "Record a voice and video sample",
      },
      {
        step: "3",
        title: "We’ll create your AI Secretarytary",
      },
    ],
  },
  {
    id: "ai-customer-support",
    title: "AI Customer Support",
    icon: RiCustomerServiceFill,
    heading: "AI that Answers<br/>All Your Calls - Instantly",
    desc: "Never Miss a Lead, Booking, or Inquiry again, with Your Multilingual AI Voice Support Agent that works 24/7 without Burnout.",
    heroBtn: "Deploy AI Support Now",
    overviewDesc:
      "No more missed calls or long hold times. Our AI handles inbound support calls, answers questions, and even books appointments.",
    useCases: [
      {
        icon: GoLaw,
        title: "Law Firms",
        desc: "Manage Intake Calls, Multilingual Inquiries, After-Hours Responses.",
      },
      {
        icon: FaUser,
        title: "Insurance",
        desc: "Handle Claim Inquiries, Quotes, and Appointment Bookings.",
      },
      {
        icon: LuBuilding2,
        title: "Real Estate",
        desc: "Manage Listing Inquiries, Schedule Showings, and Call-Backs.",
      },
      {
        icon: FaStore,
        title: "E-commerce",
        desc: "Answer Order Related Questions and Product Queries 24/7.",
      },
      {
        icon: BsBuildings,
        title: "SMBs (e.g., Gyms, Medspas, Dental Clinics, Restaurants) ",
        desc: "Bookings, service explanations, FAQs answered instantly.",
      },
    ],
    featuresGrid: "lg:grid-cols-4",
    coreFeatures: [
      {
        icon: FaRegClock,
        title: "24/7 AI Voice Support Agent",
      },
      {
        icon: FaPhone,
        title: "Handles Multiple Calls Simultaneously",
      },
      {
        icon: IoBookmarks,
        title: "Appointment Booking System",
      },
      {
        icon: FaCalendar,
        title: "CRM and Calendar Integration",
      },
      {
        icon: IoLanguage,
        title: "Multilingual Support",
      },
      {
        icon: FaDatabase,
        title:
          "Can collect and securely store customer data in CRM, compliant with data protection laws.",
      },
      {
        icon: RiCustomerServiceFill,
        title:
          "Can Raise Support Tickets for Customer Problems and Send Internal Notifications",
      },
      {
        icon: FaQuestion,
        title: "Trained on Your Business FAQs",
      },
    ],
    // whoItsFor: [
    //   {
    //     icon: FaUserDoctor,
    //     title: "Healthcare",
    //   },
    //   {
    //     icon: LuBuilding2,
    //     title: "Real Estate",
    //   },
    //   {
    //     icon: GrCloudSoftware,
    //     title: "SaaS",
    //   },
    //   {
    //     icon: GoLaw,
    //     title: "Law Firms",
    //   },
    //   {
    //     icon: FaUserTie,
    //     title: "SMBs",
    //   },
    // ],
    howItWorks: [
      {
        step: "1",
        title: "Train AI on your FAQs and processes",
      },
      {
        step: "2",
        title: "Connect it to a phone number",
      },
      {
        step: "3",
        title: "Go live in days",
      },
    ],
  },
  {
    id: "ai-business-partner",
    title: "AI Business Partner",
    icon: MdBusinessCenter,
    heading: "Your Own Dedicated <br/>AI Team",
    desc: "Monthly flat fee. Unlimited automations. All your AI needs handled for you.",
    heroBtn: "Book a Call",
    overviewDesc:
      "An elite-level service for serious businesses. Get a dedicated AI specialist who automates your operations, trains your team, and maintains everything.",
    featuresGrid: "lg:grid-cols-3",
    coreFeatures: [
      {
        icon: FaRobot,
        title: "Access to all our AI Solutions",
      },
      {
        icon: TbAutomation,
        title: "Unlimited AI Automations",
      },
      {
        icon: FaBrain,
        title: "Dedicated AI Strategist",
      },
      {
        icon: MdArticle,
        title: "Full Documentation and SOPs",
      },
      {
        icon: FaUsers,
        title: "Custom AI Training for Your Team",
      },
      {
        icon: MdOutlineAttachMoney,
        title: "Flat Monthly Rate — No Surprises",
      },
    ],
    whoItsFor: [
      {
        icon: MdOutlineAttachMoney,
        title: "Scaling Businesses",
      },
      {
        icon: FaUserTie,
        title: "Founders who want to automate",
      },
      {
        icon: FaUserShield,
        title: "Agencies",
      },
      {
        icon: LuBuilding2,
        title: "Enterprises needing hands-on AI help",
      },
    ],
    pricing: {
      price: "$5,000/month",
      desc: "3-month minimum commitment",
    },
    howItWorks: [
      {
        step: "1",
        title: "We Understand & Audit Your Business",
      },
      {
        step: "2",
        title: "Create Custom Automation Roadmap",
      },
      {
        step: "3",
        title: "Deliver, Optimize, and Support",
      },
    ],
  },
];
