const benefits = [
  {
    title: "Business-first design",
    desc: "I create websites that are not only visually polished, but also clear, easy to understand, and aligned with your business goals.",
  },
  {
    title: "Responsive on every device",
    desc: "Every layout is carefully crafted to look clean and work smoothly across desktop, tablet, and mobile devices.",
  },
  {
    title: "Clean & maintainable code",
    desc: "I write structured and maintainable code, making it easier to improve, scale, or update your website in the future.",
  },
  {
    title: "Modern tech stack",
    desc: "Built with Next.js, React, Tailwind CSS, and modern frontend tools to deliver fast and reliable web experiences.",
  },
];

export default function WhyWork() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-[#050505] px-5 py-20 text-white sm:px-6 md:px-10 md:py-28"
    >
      <div className="pointer-events-none absolute -left-24 top-32 h-[280px] w-[280px] rounded-full bg-[#DFFF4F]/10 blur-[90px] md:left-0 md:h-[420px] md:w-[420px] md:blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 max-w-4xl md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#DFFF4F] md:mb-5 md:text-sm">
            Why Work With Me
          </p>

          <h2 className="text-4xl font-bold leading-[1.06] tracking-[-0.05em] md:text-6xl">
            I focus on websites that look premium and work smoothly.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {benefits.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#DFFF4F]/40 md:rounded-[34px] md:p-8"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#DFFF4F]/10 blur-[70px] transition-opacity duration-300 group-hover:opacity-100 md:h-44 md:w-44 md:blur-[80px]" />

              <div className="relative z-10">
                <span className="text-sm font-semibold text-[#DFFF4F]">
                  0{index + 1}
                </span>

                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] md:mt-7">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}