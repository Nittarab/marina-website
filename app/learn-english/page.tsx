import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learn English Online",
  description:
    "Private English tutoring online with personalized lessons, real-world practice, and clear feedback.",
  alternates: { canonical: "/learn-english" },
};

export default function LearnEnglishPage() {
  return (
    <main className="container py-14 md:py-20">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold tracking-widest text-[color:var(--coral-600)]">
          English tutoring
        </p>
        <h1 className="display mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          Learn English online for work, travel, and everyday conversation
        </h1>
        <p className="muted mt-4 text-base leading-7">
          Build fluency with structured speaking practice, listening support,
          and feedback you can apply immediately.
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
        {["Speaking", "Pronunciation", "Writing support"].map((t) => (
          <div key={t} className="card p-6">
            <h2 className="text-base font-semibold">{t}</h2>
            <p className="muted mt-2 text-sm leading-6">
              Practice with real scenarios and vocabulary from your daily life.
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
