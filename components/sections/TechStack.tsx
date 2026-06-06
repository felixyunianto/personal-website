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

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative overflow-hidden bg-[#050505] px-5 py-20 text-white sm:px-6 md:px-10 md:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DFFF4F]/10 blur-[90px] md:h-[500px] md:w-[500px] md:blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 md:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#DFFF4F] md:mb-5 md:text-sm">
            Technology
          </p>

          <h2 className="max-w-4xl text-4xl font-bold leading-[1.06] tracking-[-0.05em] md:text-6xl">
            Built with modern technologies.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 md:mt-6 md:text-lg md:leading-8">
            Using reliable tools and frameworks to create fast, scalable, and
            maintainable websites.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
          {stacks.map((stack) => (
            <div
              key={stack}
              className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] md:rounded-[32px] md:p-8"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#DFFF4F]/0 blur-[70px] transition-all duration-500 group-hover:bg-[#DFFF4F]/15 md:h-40 md:w-40 md:blur-[80px]" />

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                  {stack}
                </h3>

                <div className="mt-7 h-px bg-white/10 md:mt-8">
                  <div className="h-px w-0 bg-[#DFFF4F] transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}