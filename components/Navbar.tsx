"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  const { scrollY } = useScroll();

  const background = useTransform(
    scrollY,
    [0, 80],
    ["rgba(5,5,5,0)", "rgba(5,5,5,0.82)"],
  );

  const borderColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.1)"],
  );

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      style={{ background, borderColor }}
      className="fixed left-1/2 top-3 z-50 w-[calc(100%-24px)] max-w-7xl -translate-x-1/2 rounded-full border px-3 py-2.5 text-white backdrop-blur-xl md:top-4 md:w-[calc(100%-32px)] md:px-5 md:py-3"
    >
      <nav className="flex items-center justify-between gap-3">
        <a href="#" className="flex min-w-0 items-center gap-2.5">
          <Image
            src="/logo.svg"
            alt="Felix Yunianto"
            width={34}
            height={34}
            priority
            className="shrink-0 md:h-[38px] md:w-[38px]"
          />

          <span className="hidden truncate text-sm font-semibold sm:block md:text-base">
            Felix Yunianto
          </span>
        </a>

        <div className="hidden gap-7 text-sm md:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`transition ${
                  isActive ? "text-[#DFFF4F]" : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="shrink-0 rounded-full bg-[#DFFF4F] px-4 py-2 text-xs font-semibold text-black transition hover:scale-[1.03] md:px-5 md:py-2.5 md:text-sm"
        >
          <span className="hidden sm:inline">Let&apos;s Talk ↗</span>
          <span className="sm:hidden">Talk ↗</span>
        </a>
      </nav>
    </motion.header>
  );
}