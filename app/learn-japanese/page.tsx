import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn Japanese Online",
  description:
    "Private Japanese tutoring online with personalized lessons, cultural immersion, and clear progress tracking.",
  alternates: { canonical: "/learn-japanese" },
};

export default function LearnJapanesePage() {
  return (
    <main className="container py-14 md:py-20">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold tracking-widest text-[color:var(--coral-600)]">
          Japanese tutoring
        </p>
        <h1 className="display mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          Learn Japanese online with private, culture-first lessons
        </h1>
        <p className="muted mt-4 text-base leading-7">
          Build real conversational confidence with structured practice,
          listening support, and cultural context.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link className="btn btnPrimary" href="/#contact">
            Book a trial lesson
          </Link>
          <Link className="btn btnSecondary" href="/#languages">
            Back to languages
          </Link>
        </div>
      </header>

      <section className="mx-auto mt-10 grid max-w-3xl gap-5 md:grid-cols-3">
        {["Speaking practice", "Grammar made simple", "Culture & etiquette"].map(
          (t) => (
            <div key={t} className="card p-6">
              <h2 className="text-base font-semibold">{t}</h2>
              <p className="muted mt-2 text-sm leading-6">
                A focused module designed around your goals and weekly rhythm.
              </p>
            </div>
          ),
        )}
      </section>
    </main>
  );
}
