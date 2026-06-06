const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Usually around 1–3 weeks depending on the scope, number of pages, content readiness, and required features.",
  },
  {
    question: "Can you build a website without design files?",
    answer:
      "Yes. I can help create the layout direction and visual style first, then continue to development.",
  },
  {
    question: "What kind of websites can you build?",
    answer:
      "Company profile, landing page, personal portfolio, admin dashboard, and custom web interfaces.",
  },
  {
    question: "Do you make the website responsive?",
    answer:
      "Yes. Every website is built to work properly on desktop, tablet, and mobile devices.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#050505] px-5 py-20 text-white sm:px-6 md:px-10 md:py-28"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl md:mb-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#DFFF4F] md:mb-5 md:text-sm">
            FAQ
          </p>

          <h2 className="text-4xl font-bold leading-[1.06] tracking-[-0.05em] md:text-6xl">
            Questions before starting a project.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#DFFF4F]/35 md:rounded-[32px] md:p-7"
            >
              <h3 className="text-lg font-semibold leading-snug tracking-[-0.03em] md:text-xl">
                {faq.question}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/60">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}