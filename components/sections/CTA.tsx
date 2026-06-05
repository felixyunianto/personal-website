"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] px-5 py-20 text-white sm:px-6 md:px-10 md:py-32"
    >
      <motion.div
        animate={{
          opacity: [0.06, 0.14, 0.06],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DFFF4F]/80 blur-[120px] md:h-[500px] md:w-[500px] md:blur-[180px]"
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-sm sm:p-8 md:rounded-[48px] md:p-16"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#DFFF4F] md:mb-5 md:text-sm">
            Start a Project
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.05em] md:text-7xl">
            Let's turn your ideas into a modern web experience.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 md:mt-8 md:text-lg md:leading-8">
            Whether you need a company profile, landing page, or dashboard, I
            can help turn your ideas into a modern web experience.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap md:mt-10 md:gap-4">
            <motion.a
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href="https://wa.me/6287848114793"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center rounded-full bg-[#DFFF4F] px-8 py-4 text-sm font-semibold text-black sm:w-auto"
            >
              Start a Project
              <span className="ml-2 inline-block transition group-hover:translate-x-1">
                ↗
              </span>
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href="mailto:felixyunianto@gmail.com"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/10 sm:w-auto"
            >
              Send Email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}