import React, { useEffect, useRef, useState } from "react";

import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import SeoBreadcrumbs from "../components/SeoBreadcrumbs";

function AppLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    const gridOverlay = document.querySelector(".grid-overlay");
    let lastMouseEvent = null;

    if (!gridOverlay) return;

    function updateCursorLight(e) {
      const x = e.clientX;
      const y = e.clientY;
      gridOverlay.style.background = `radial-gradient(180px circle at ${x}px ${y}px, rgba(0, 255, 147, 0.2) 0%, transparent 40%)`;
      lastMouseEvent = e;
    }

    function onScroll() {
      if (lastMouseEvent) {
        updateCursorLight(lastMouseEvent);
      }
    }

    const buttonListeners = [];

    function attachCursorGlow() {
      const buttons = document.querySelectorAll(".glow-button");

      buttons.forEach((button) => {
        const glow = button.querySelector(".cursor-glow");

        const handleMove = (e) => {
          if (!glow) return;
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          glow.style.left = `${x}px`;
          glow.style.top = `${y}px`;
          glow.style.opacity = "1";
        };

        const handleLeave = () => {
          if (!glow) return;
          glow.style.opacity = "0";
        };

        button.addEventListener("mousemove", handleMove);
        button.addEventListener("mouseleave", handleLeave);

        buttonListeners.push({ button, handleMove, handleLeave });
      });
    }

    attachCursorGlow();

    document.addEventListener("mousemove", updateCursorLight);
    document.addEventListener("scroll", onScroll);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", updateCursorLight);
      document.removeEventListener("scroll", onScroll);

      // In cleanup
      buttonListeners.forEach(({ button, handleMove, handleLeave }) => {
        button.removeEventListener("mousemove", handleMove);
        button.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  const boxRef = useRef(null);
  const borderRef = useRef(null);

  useEffect(() => {
    document.querySelectorAll(".border-glow-wrapper").forEach((box) => {
      const border = box.querySelector(".border-glow");

      const handleMouseMove = (e) => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // console.log("Mouse position:", x, y);

        border.style.setProperty("--x", `${x}px`);
        border.style.setProperty("--y", `${y}px`);
      };

      const handleMouseLeave = () => {
        border.style.setProperty("--x", `-200px`);
        border.style.setProperty("--y", `-200px`);
      };

      box.addEventListener("mousemove", handleMouseMove);
      box.addEventListener("mouseleave", handleMouseLeave);
    });
  }, [pathname]);
  return (
    <div className="min-h-screen wrapper bg-[#060606] relative overflow-hidden">
      <div className="absolute inset-0 grid-background">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="glow-background"></div>
        </div>

        <div id="gridOverlay" className="grid-overlay"></div>
      </div>
      <Navbar />
      <SeoBreadcrumbs />
      <div className="mt-[6.5rem]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
