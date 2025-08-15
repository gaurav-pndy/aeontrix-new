import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BookAuditButton from "./BookAuditButton";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollWithOffset = (el, offset = 100) => {
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const solutions = [
    {
      id: "ai-sdr",
      title: "AI SDR",
    },
    {
      id: "ai-project-manager",
      title: "AI Project Manager",
    },
    {
      id: "ai-marketing-suite",
      title: "AI Marketing Suite",
    },
    {
      id: "ai-secretary",
      title: "AI Secretary",
    },
    {
      id: "ai-customer-support",
      title: "AI Customer Support",
    },
    {
      id: "ai-business-partner",
      title: "AI Business Partner",
    },
  ];

  const industries = [
    {
      id: "e-commerce",
      title: "E-Commerce",
    },
    {
      id: "agencies",
      title: "Agencies",
    },
    {
      id: "real-estate",
      title: "Real Estate",
    },
    {
      id: "insurance",
      title: "Insurance",
    },
    {
      id: "law-firms",
      title: "Law Firms",
    },
    {
      id: "coaches-and-consultants",
      title: "Coaches & Consultants",
    },
    {
      id: "small-medium-enterprises",
      title: "Small & Medium Sized Enterprises",
    },
  ];

  const goToPage = (pageId) => {
    navigate(`${pageId}`);
    setMobileMenuOpen(false);
  };
  const handleClick = (targetId) => {
    if (location.pathname === "/") {
      const el = document.getElementById(targetId);
      if (el) scrollWithOffset(el, 100);
    } else {
      navigate("/", { state: { scrollTo: targetId } });
    }
  };

  return (
    <nav className="fixed max-w-[98vw] md:max-w-[90vw] w-full mx-auto top-1 md:top-3 rounded-full left-[50%] translate-x-[-50%] flex items-center h-16 z-50 backdrop-blur-lg bg-white/10 shadow-lg">
      <div className="mx-auto w-full flex items-center justify-between px-3 md:px-8">
        <Link to="/">
          <div className="flex z-20 items-center md:space-x-2">
            <img
              loading="lazy"
              src="/logo-light.png"
              alt="logo"
              width="320"
              height="80"
              className="w-40 md:w-44"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex h-16 items-center space-x-6 xl:space-x-10 text-[#F8F9FB] font-medium">
          {/* Solutions */}
          <div
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            className="relative flex items-center h-full"
          >
            <div
              onClick={() => handleClick("services")}
              className="flex hover:text-[#00FF93] transition-all duration-200 items-center gap-1 cursor-pointer"
            >
              Solutions <ChevronDown size={16} />
            </div>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ type: "tween", duration: 0.12 }}
                  className="absolute overflow-hidden top-full mt-1 left-[50%] translate-x-[-50%] bg-[#0F1114] border border-white/10 rounded-lg shadow-[#00FF93]/10 shadow  w-56 z-50"
                >
                  {solutions.map((item) => (
                    <Link to={`/solutions/${item.id}`} key={item.id}>
                      <button className="w-full text-left px-4 py-3 hover:text-[#00FF93] transition-all duration-200 hover:bg-[#1A1D21] text-white">
                        {item.title}
                      </button>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            className="hover:text-[#00FF93] transition-all duration-200"
            to="/blogs"
          >
            Blogs
          </Link>
          <div
            onMouseEnter={() => setDropdownOpen2(true)}
            onMouseLeave={() => setDropdownOpen2(false)}
            className="relative flex items-center h-full"
          >
            <div className="flex hover:text-[#00FF93] transition-all duration-200 items-center gap-1 cursor-pointer">
              Industries & Use Cases <ChevronDown size={16} />
            </div>
            <AnimatePresence>
              {dropdownOpen2 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ type: "tween", duration: 0.12 }}
                  className="absolute overflow-hidden top-full mt-1 left-[50%] translate-x-[-50%] bg-[#0F1114] border border-white/10 rounded-lg shadow-[#00FF93]/10 shadow  w-56 z-50"
                >
                  {industries.map((item) => (
                    <Link to={`/industries/${item.id}`} key={item.id}>
                      <button className="w-full text-left px-4 py-3 hover:text-[#00FF93] transition-all duration-200 hover:bg-[#1A1D21] text-white">
                        {item.title}
                      </button>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            className="hover:text-[#00FF93] transition-all duration-200 cursor-pointer"
            onClick={() => handleClick("Contact")}
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex gap-6 items-center">
          <BookAuditButton className="!px-3 md:!px-6 !hidden md:!flex !py-1.5 md:!py-2.5 text-[0.8rem] md:text-sm" />

          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              {mobileMenuOpen ? <X size={36} /> : <Menu size={36} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide In */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute rounded-3xl top-17 left-[50%] translate-x-[-50%] w-[98vw] md:max-w-[90vw] mx-auto  bg-[#042222] text-[#F8F9FB] shadow-md py-4 flex flex-col items-center space-y-6 text-lg xl:hidden z-50"
          >
            <div
              onClick={() => {
                setDropdownOpen(!dropdownOpen);
                setDropdownOpen2(false);
              }}
              className="relative flex gap-2 flex-col items-center h-full"
            >
              <div
                onClick={() => handleClick("services")}
                className="flex  items-center gap-1 cursor-pointer"
              >
                Solutions <ChevronDown size={16} />
              </div>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full bg-[#111111] py-1 text-sm overflow-hidden"
                  >
                    {solutions.map((item) => (
                      <button
                        onClick={() => goToPage(`/solutions/${item.id}`)}
                        className="w-full  px-4 py-3 hover:bg-[#1A1D21] text-white"
                      >
                        {item.title}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/blogs" onClick={() => setMobileMenuOpen(false)}>
              Blogs
            </Link>
            <div
              onClick={() => {
                setDropdownOpen2(!dropdownOpen);
                setDropdownOpen(false);
              }}
              className="relative flex gap-2 flex-col items-center h-full"
            >
              <div className="flex  items-center gap-1 cursor-pointer">
                Industries & Use Cases <ChevronDown size={16} />
              </div>
              <AnimatePresence>
                {dropdownOpen2 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full bg-[#111111] py-1 text-sm overflow-hidden"
                  >
                    {industries.map((item) => (
                      <button
                        onClick={() => goToPage(`/industries/${item.id}`)}
                        className="w-full  px-4 py-3 hover:bg-[#1A1D21] text-white"
                      >
                        {item.title}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              onClick={() => {
                handleClick("Contact");
                setMobileMenuOpen(false);
              }}
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
