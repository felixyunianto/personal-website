"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "We discuss your business, goals, target audience, and what kind of website you need.",
  },
  {
    number: "02",
    title: "Design Direction",
    desc: "I prepare the layout direction, visual style, and content structure before development.",
  },
  {
    number: "03",
    title: "Development",
    desc: "The website is built with clean, responsive, and maintainable frontend code.",
  },
  {
    number: "04",
    title: "Launch",
    desc: "Final testing, responsive check, optimization, and deployment so your website is ready to use.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0 },
};

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#050505] px-5 py-20 text-white sm:px-6 md:px-10 md:py-28"
    >
      <div className="absolute -right-24 top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-[#DFFF4F]/10 blur-[100px] md:right-0 md:h-[420px] md:w-[420px] md:blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.12 }}
          className="mb-12 grid gap-6 md:mb-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8"
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#DFFF4F] md:mb-5 md:text-sm"
            >
              Process
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="max-w-3xl text-4xl font-bold leading-[1.06] tracking-[-0.05em] md:text-6xl"
            >
              Simple process, clear result.
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="max-w-xl self-end text-base leading-7 text-white/60 md:text-lg md:leading-8"
          >
            A clear workflow helps every project stay focused, organized, and
            easier to finish without unnecessary confusion.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.14 }}
          className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-[#DFFF4F]/40 md:rounded-[34px] md:p-7"
            >
              <motion.div
                animate={{
                  opacity: [0.02, 0.08, 0.02],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.35,
                }}
                className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#DFFF4F] blur-[80px] md:h-40 md:w-40 md:blur-[90px]"
              />

              <div className="relative z-10">
                <span className="text-sm font-semibold text-[#DFFF4F]">
                  {step.number}
                </span>

                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] md:mt-10">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {step.desc}
                </p>

                <div className="mt-8 h-px w-full bg-white/10 md:mt-10">
                  <div className="h-px w-10 bg-[#DFFF4F] transition-all duration-300 group-hover:w-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}