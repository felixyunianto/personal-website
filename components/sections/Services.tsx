"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Company Website",
    desc: "Professional websites that help businesses establish credibility, showcase their services, and create a strong online presence.",
  },
  {
    number: "02",
    title: "Landing Page",
    desc: "High-converting landing pages designed to communicate value clearly and encourage visitors to take action.",
  },
  {
    number: "03",
    title: "Web Dashboard",
    desc: "Modern dashboard interfaces built for managing data, users, reports, and internal business operations efficiently.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050505] px-5 py-20 text-white sm:px-6 md:px-10 md:py-28"
    >
      <motion.div
        animate={{
          opacity: [0.06, 0.12, 0.06],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-24 top-24 h-[260px] w-[260px] rounded-full bg-[#DFFF4F]/16 blur-[100px] md:right-0 md:top-20 md:h-[360px] md:w-[360px] md:bg-[#DFFF4F]/20 md:blur-[150px]"
      />

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
              transition={{ duration: 0.7 }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#DFFF4F] md:mb-5 md:text-sm"
            >
              Services
            </motion.p>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.8 }}
              className="max-w-3xl text-4xl font-bold leading-[1.06] tracking-[-0.05em] md:text-6xl"
            >
              Solutions designed for modern businesses.
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="max-w-xl self-end text-base leading-7 text-white/60 md:text-lg md:leading-8"
          >
            Whether you're launching a new business, improving your online
            presence, or building internal tools, I create websites that are
            fast, modern, and built to grow.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.14 }}
          className="grid gap-4 md:gap-5 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-[#DFFF4F]/40 hover:bg-[#DFFF4F]/[0.04] md:min-h-[360px] md:rounded-[36px] md:p-8"
            >
              <motion.div
                animate={{
                  opacity: [0.02, 0.1, 0.02],
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
                className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#DFFF4F] blur-[80px] md:h-48 md:w-48 md:blur-[90px]"
              />

              <div className="relative z-10">
                <motion.span
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
                  className="text-sm font-semibold text-[#DFFF4F]"
                >
                  {service.number}
                </motion.span>

                <h3 className="mt-7 text-2xl font-semibold tracking-[-0.03em] md:mt-8 md:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60 md:mt-5">
                  {service.desc}
                </p>

                <motion.div
                  whileHover={{
                    x: 5,
                    y: -5,
                  }}
                  transition={{ duration: 0.25 }}
                  className="mt-8 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[#DFFF4F] transition-colors group-hover:border-[#DFFF4F]/40 md:mt-10 md:h-12 md:w-12"
                >
                  ↗
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
