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

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#050505] px-5 py-20 text-white sm:px-6 md:px-10 md:py-28"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 md:mb-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#DFFF4F] md:mb-5 md:text-sm">
              Services
            </p>

            <h2 className="max-w-3xl text-4xl font-bold leading-[1.06] tracking-[-0.05em] md:text-6xl">
              Solutions designed for modern businesses.
            </h2>
          </div>

          <p className="max-w-xl self-end text-base leading-7 text-white/60 md:text-lg md:leading-8">
            Whether you're launching a new business, improving your online
            presence, or building internal tools, I create websites that are
            fast, modern, and built to grow.
          </p>
        </div>

        <div className="grid gap-4 md:gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#DFFF4F]/40 hover:bg-[#DFFF4F]/[0.04] md:min-h-[360px] md:rounded-[36px] md:p-8"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#DFFF4F]/10 blur-[70px] transition-opacity duration-300 group-hover:opacity-100 md:h-48 md:w-48 md:blur-[80px]" />

              <div className="relative z-10">
                <span className="text-sm font-semibold text-[#DFFF4F]">
                  {service.number}
                </span>

                <h3 className="mt-7 text-2xl font-semibold tracking-[-0.03em] md:mt-8 md:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60 md:mt-5">
                  {service.desc}
                </p>

                <div className="mt-8 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[#DFFF4F] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:border-[#DFFF4F]/40 md:mt-10 md:h-12 md:w-12">
                  ↗
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}