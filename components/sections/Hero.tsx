"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] px-5 pb-20 pt-28 text-white sm:px-6 md:px-10 md:pt-36 lg:pb-8">
      <div className="absolute left-1/2 top-20 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#DFFF4F]/10 blur-[100px] md:h-[520px] md:w-[520px] md:blur-[150px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.12 }}
            className="relative z-10"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DFFF4F]/15 bg-[#DFFF4F]/10 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wide text-[#DFFF4F] sm:px-4 sm:text-xs"
            >
              <span className="h-2 w-2 rounded-full bg-[#DFFF4F]" />
              Available for freelance
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-[44px] font-bold leading-[1.03] tracking-[-0.055em] sm:text-6xl md:text-7xl"
            >
              I build clean websites for{" "}
              <span className="text-[#DFFF4F]">businesses</span> that want to{" "}
              <span className="text-[#DFFF4F]">look professional</span> online.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="mt-5 max-w-xl text-base leading-7 text-white/65 md:mt-6 md:text-lg md:leading-8"
            >
              I help brands, startups, and business owners create modern
              websites that are fast, responsive, and easy to use.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-9 md:gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex w-full items-center justify-center rounded-full bg-[#DFFF4F] px-7 py-4 text-sm font-semibold text-black transition hover:scale-[1.03] sm:w-auto"
              >
                Start a Project{" "}
                <span className="ml-1 inline-block transition group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              <a
                href="#services"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-medium text-white transition hover:bg-white/10 sm:w-auto"
              >
                View Services ↓
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[540px] lg:-mr-28 lg:max-w-none xl:-mr-40"
          >
            <motion.div
              animate={{
                opacity: [0.08, 0.16, 0.08],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-6 rounded-[36px] bg-[#DFFF4F]/16 blur-[80px] md:-inset-10 md:rounded-[52px] md:bg-[#DFFF4F]/20 md:blur-[120px]"
            />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[28px] border border-[#DFFF4F]/20 bg-gradient-to-b from-[#101010] to-[#050505] p-2.5 shadow-[0_0_60px_rgba(223,255,79,0.1)] sm:p-3 md:rounded-[44px] md:p-4 md:shadow-[0_0_80px_rgba(223,255,79,0.12)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-white/10 md:rounded-[44px]" />
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#DFFF4F]/70 to-transparent md:inset-x-10" />

              <Image
                src="/images/hero-mockup.png"
                alt="Website and mobile mockup"
                width={1600}
                height={1000}
                priority
                className="relative z-10 w-full select-none lg:w-[115%] lg:max-w-none lg:-translate-x-6"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
