"use client";

import { motion } from "framer-motion";

const stacks = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Laravel",
  "MySQL",
  "Framer Motion",
  "Git",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden bg-[#050505] px-5 py-20 text-white sm:px-6 md:px-10 md:py-28"
    >
      <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DFFF4F]/10 blur-[110px] md:h-[500px] md:w-[500px] md:blur-[180px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.12 }}
          className="mb-12 md:mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#DFFF4F] md:mb-5 md:text-sm"
          >
            Technology
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="max-w-4xl text-4xl font-bold leading-[1.06] tracking-[-0.05em] md:text-6xl"
          >
            Built with modern technologies.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-base leading-7 text-white/60 md:mt-6 md:text-lg md:leading-8"
          >
            Using reliable tools and frameworks to create fast, scalable, and
            maintainable websites.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            staggerChildren: 0.08,
          }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4"
        >
          {stacks.map((stack) => (
            <motion.div
              key={stack}
              variants={fadeUp}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] p-6 md:rounded-[32px] md:p-8"
            >
              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#DFFF4F]/0 blur-[80px] transition-all duration-500 group-hover:bg-[#DFFF4F]/15 md:h-40 md:w-40" />

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                  {stack}
                </h3>

                <div className="mt-7 h-px bg-white/10 md:mt-8">
                  <div className="h-px w-0 bg-[#DFFF4F] transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}