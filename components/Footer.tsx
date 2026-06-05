export default function Footer() {
  return (
    <footer className="bg-[#050505] px-5 text-white sm:px-6 md:px-10">
      <div className="mx-auto max-w-7xl py-20 md:py-24">
        <div className="border-t border-white/10 pt-12 md:pt-16">
          <p className="mb-4 text-sm font-medium text-[#DFFF4F] md:mb-5">
            Contact
          </p>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
                Let's build something exceptional.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/60 md:mt-6 md:leading-8">
                Available for freelance projects, remote opportunities, and
                collaborations.
              </p>
            </div>

            <div className="flex flex-col gap-5 lg:items-end md:gap-6">
              <a
                href="mailto:felixyunianto@gmail.com"
                className="break-all text-base font-medium text-white transition hover:text-[#DFFF4F] md:text-lg"
              >
                felixyunianto@gmail.com
              </a>

              <div className="flex flex-wrap gap-6 text-sm text-white/50">
                <a
                  href="https://github.com/felixyunianto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#DFFF4F]"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/felixyunianto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#DFFF4F]"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:mt-20 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Felix Yunianto. All rights reserved.
            </p>
            <p>Frontend Developer based in Indonesia.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}