import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] px-5 py-20 text-white sm:px-6 md:px-10 md:py-28"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <span className="mb-5 inline-flex rounded-full border border-[#DFFF4F]/30 bg-[#DFFF4F]/10 px-4 py-2 text-sm font-medium text-[#DFFF4F]">
            About Me
          </span>

          <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
            I build clean, modern, and high-performing digital experiences.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/60 md:mt-6 md:leading-8">
            I'm a Frontend Developer focused on creating modern, responsive, and
            visually refined websites. I help businesses, startups, and personal
            brands establish a stronger online presence through clean design,
            thoughtful user experience, and high-quality development.
          </p>

          <div className="mt-8 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2 md:mt-9">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-3xl font-semibold text-white">3+</h3>
              <p className="mt-2 text-sm text-white/50">Years Experience</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-3xl font-semibold text-white">Next.js</h3>
              <p className="mt-2 text-sm text-white/50">Primary Framework</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Next.js", "Tailwind CSS", "Framer Motion", "React"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[480px] lg:max-w-none">
          <div className="absolute inset-0 rounded-[28px] border border-[#DFFF4F]/20 md:rounded-[32px]" />

          <div className="relative rounded-[28px] border border-white/10 bg-white/[0.04] p-3 shadow-2xl md:rounded-[32px] md:p-4">
            <div className="relative h-[430px] overflow-hidden rounded-[22px] bg-gradient-to-b from-white/10 to-transparent sm:h-[500px] md:h-[560px] md:rounded-[26px]">
              <Image
                src="/images/felix.png"
                alt="Felix Yunianto"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-xl md:bottom-5 md:left-5 md:right-5 md:p-5">
                <p className="text-sm text-white/50">Frontend Developer</p>
                <h3 className="mt-1 text-lg font-semibold text-white md:text-xl">
                  Felix Yunianto
                </h3>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 top-10 hidden rounded-2xl border border-[#DFFF4F]/30 bg-[#DFFF4F] px-5 py-4 text-black shadow-xl lg:block">
            <p className="text-sm font-medium">Available for</p>
            <p className="text-lg font-bold">Freelance</p>
          </div>
        </div>
      </div>
    </section>
  );
}