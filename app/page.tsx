export default function Home() {
  const languages = [
    {
      name: "Japanese",
      href: "/learn-japanese",
      alt: "Private Japanese tutoring session",
    },
    {
      name: "Spanish",
      href: "/learn-spanish",
      alt: "Private Spanish tutoring session",
    },
    {
      name: "French",
      href: "/learn-french",
      alt: "Private French tutoring session",
    },
    {
      name: "Italian",
      href: "/learn-italian",
      alt: "Private Italian tutoring session",
    },
    {
      name: "English",
      href: "/learn-english",
      alt: "Private English tutoring session",
    },
  ];

  const primaryNav = [
    { label: "Home", href: "#home" },
    { label: "How it works", href: "#how-it-works" },
    { label: "About Me", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header>
        <nav
          aria-label="Primary"
          className="sticky top-0 z-40 border-b border-black/5 bg-white/70 backdrop-blur"
        >
          <div className="container flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-2">
              <span className="display text-lg font-semibold tracking-tight">
                Langage
              </span>
            </a>

            <a className="sr-only" href="#how-it-works">
              Skip to content
            </a>

            <div className="hidden items-center gap-7 text-sm font-medium md:flex">
              {primaryNav.slice(0, 3).map((l) => (
                <a key={l.href} className="hover:opacity-80" href={l.href}>
                  {l.label}
                </a>
              ))}

              <details className="group relative">
                <summary className="list-none inline-flex cursor-pointer items-center gap-2 hover:opacity-80">
                  Languages <span aria-hidden="true">▾</span>
                </summary>
                <div
                  className="absolute left-0 top-full mt-3 w-60 rounded-2xl border border-black/10 bg-white p-2 shadow-[0_18px_50px_rgba(36,27,29,0.12)]"
                  role="menu"
                  aria-label="Languages"
                >
                  {languages.map((lang) => (
                    <a
                      key={lang.href}
                      href={lang.href}
                      className="block rounded-xl px-3 py-2 text-sm hover:bg-[color:var(--pink-50)]"
                      role="menuitem"
                    >
                      {lang.name}
                    </a>
                  ))}
                </div>
              </details>

              {primaryNav.slice(3).map((l) => (
                <a key={l.href} className="hover:opacity-80" href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <a className="btn btnPrimary" href="#contact">
                Book a trial lesson
              </a>
            </div>

            <a className="btn btnSecondary md:hidden" href="#contact">
              Book
            </a>
          </div>
        </nav>

        <div id="home" className="container pt-12 pb-10 md:pt-20 md:pb-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold tracking-wide">
                <span className="h-2 w-2 rounded-full bg-[var(--coral-500)]" />
                Discover your potential
              </p>
              <h1 className="display mt-6 text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
                Private Language Tutoring: Learn Japanese, Spanish, &amp; French
                Online
              </h1>
              <p className="muted mt-5 text-lg leading-8">
                Discover the world through personalized, cultural immersion
                lessons with Mariana.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a className="btn btnPrimary" href="#contact">
                  Book a trial lesson
                </a>
                <a className="btn btnSecondary" href="#languages">
                  Explore languages
                </a>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="card px-5 py-4">
                  <p className="text-sm font-semibold">50+ happy students</p>
                  <p className="muted text-xs">Trusted online tutoring</p>
                </div>
                <p className="muted text-sm italic">
                  “Language learning is a journey — not a race.”
                </p>
              </div>
            </div>

            <div className="card relative overflow-hidden p-6">
              <div className="absolute inset-0 bg-[radial-gradient(700px_350px_at_30%_20%,rgba(255,209,222,0.9),rgba(255,209,222,0)_60%),radial-gradient(700px_350px_at_80%_30%,rgba(255,228,236,0.95),rgba(255,228,236,0)_60%)]" />
              <div className="relative">
                <img
                  src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A//www.w3.org/2000/svg'%20width%3D'900'%20height%3D'675'%20viewBox%3D'0%200%20900%20675'%3E%3Cdefs%3E%3ClinearGradient%20id%3D'g'%20x1%3D'0'%20y1%3D'0'%20x2%3D'1'%20y2%3D'1'%3E%3Cstop%20offset%3D'0'%20stop-color%3D'%23FFE4EC'/%3E%3Cstop%20offset%3D'1'%20stop-color%3D'%23FFFFFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20x%3D'0'%20y%3D'0'%20width%3D'900'%20height%3D'675'%20rx%3D'28'%20fill%3D'url(%23g)'/%3E%3Cpath%20d%3D'M120%20520c90-140%20210-210%20360-210s270%2070%20360%20210'%20fill%3D'none'%20stroke%3D'%23F06F7F'%20stroke-opacity%3D'.35'%20stroke-width%3D'18'%20stroke-linecap%3D'round'/%3E%3Ccircle%20cx%3D'260'%20cy%3D'300'%20r%3D'56'%20fill%3D'%23FFD1DE'%20fill-opacity%3D'.85'/%3E%3Ccircle%20cx%3D'620'%20cy%3D'250'%20r%3D'72'%20fill%3D'%23FFE4EC'%20fill-opacity%3D'.9'/%3E%3C/svg%3E"
                  alt="Private language tutoring session online"
                  className="aspect-[4/3] w-full rounded-2xl border border-black/10 object-cover"
                  loading="eager"
                  width={900}
                  height={675}
                />
                <p className="muted mt-4 text-sm">
                  Preview image (replace with Mariana portrait)
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="how-it-works" className="container py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-widest text-[color:var(--coral-600)]">
              Unlock a new world of possibilities
            </p>
            <h2 className="display mt-3 text-3xl font-semibold md:text-4xl">
              How it works
            </h2>
            <p className="muted mt-4 text-base leading-7">
              A calm, premium experience designed to help you speak sooner—with
              structure, cultural context, and accountability.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Virtual sessions",
                desc: "Live lessons with clear goals, notes, and follow-ups—no commute, no friction.",
                icon: "🖥️",
              },
              {
                title: "Personalized lessons",
                desc: "Your pace, your interests, your learning style—every plan adapts to you.",
                icon: "🧠",
              },
              {
                title: "Cultural immersion",
                desc: "Learn the culture behind the words: etiquette, idioms, media, and everyday life.",
                icon: "🌍",
              },
              {
                title: "Flexible scheduling",
                desc: "Pick a time that fits your week and keep momentum with consistent practice.",
                icon: "🕒",
              },
            ].map((f) => (
              <div key={f.title} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--pink-50)] text-xl">
                    <span aria-hidden="true">{f.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {f.title}
                    </h3>
                    <p className="muted mt-2 text-sm leading-6">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a className="btn btnSecondary" href="#contact">
              Personalize your course
            </a>
          </div>
        </section>

        <section className="container py-14 md:py-20">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[color:var(--coral-600)]">
                Embark on your language learning journey
              </p>
              <h2 className="display mt-3 text-3xl font-semibold md:text-4xl">
                Easy 3-Step Booking Process
              </h2>
              <p className="muted mt-4 text-base leading-7">
                Book in minutes, then show up ready to speak. We keep the
                logistics simple so you can focus on progress.
              </p>

              <ol className="mt-7 grid gap-4">
                {[
                  {
                    title: "Choose a time",
                    desc: "Select a slot that fits your schedule and learning rhythm.",
                  },
                  {
                    title: "Confirm details",
                    desc: "Get a confirmation email with next steps and what to prepare.",
                  },
                  {
                    title: "Join the session",
                    desc: "Click your lesson link and start speaking with guidance and confidence.",
                  },
                ].map((s, idx) => (
                  <li key={s.title} className="card p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--pink-100)] text-sm font-semibold">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold">{s.title}</h3>
                        <p className="muted mt-2 text-sm leading-6">{s.desc}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-7">
                <a className="btn btnPrimary" href="#contact">
                  Book a trial lesson
                </a>
              </div>
            </div>

            <div className="card overflow-hidden p-6">
              <img
                src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A//www.w3.org/2000/svg'%20width%3D'1000'%20height%3D'800'%20viewBox%3D'0%200%201000%20800'%3E%3Cdefs%3E%3ClinearGradient%20id%3D'g'%20x1%3D'0'%20y1%3D'0'%20x2%3D'1'%20y2%3D'1'%3E%3Cstop%20offset%3D'0'%20stop-color%3D'%23FFD1DE'/%3E%3Cstop%20offset%3D'1'%20stop-color%3D'%23FFFFFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20x%3D'0'%20y%3D'0'%20width%3D'1000'%20height%3D'800'%20rx%3D'28'%20fill%3D'url(%23g)'/%3E%3Crect%20x%3D'110'%20y%3D'140'%20width%3D'560'%20height%3D'420'%20rx%3D'26'%20fill%3D'%23FFFFFF'%20fill-opacity%3D'.75'%20stroke%3D'%23241B1D'%20stroke-opacity%3D'.10'/%3E%3Crect%20x%3D'180'%20y%3D'230'%20width%3D'420'%20height%3D'42'%20rx%3D'18'%20fill%3D'%23FFE4EC'/%3E%3Crect%20x%3D'180'%20y%3D'295'%20width%3D'300'%20height%3D'42'%20rx%3D'18'%20fill%3D'%23FFF1F5'/%3E%3Crect%20x%3D'180'%20y%3D'360'%20width%3D'360'%20height%3D'42'%20rx%3D'18'%20fill%3D'%23FFF1F5'/%3E%3Ccircle%20cx%3D'820'%20cy%3D'320'%20r%3D'130'%20fill%3D'%23FFE4EC'%20fill-opacity%3D'.9'/%3E%3Cpath%20d%3D'M750%20320c40-70%20110-90%20160-35'%20fill%3D'none'%20stroke%3D'%23F06F7F'%20stroke-opacity%3D'.4'%20stroke-width%3D'16'%20stroke-linecap%3D'round'/%3E%3C/svg%3E"
                alt="Online lesson booking illustration"
                className="aspect-[5/4] w-full rounded-2xl border border-black/10 object-cover"
                loading="lazy"
                width={1000}
                height={800}
              />
              <p className="muted mt-4 text-sm">
                Booking flow preview (replace with your artwork)
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="container py-14 md:py-20">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[color:var(--coral-600)]">
                Let’s get to know each other
              </p>
              <h2 className="display mt-3 text-3xl font-semibold md:text-4xl">
                About Me
              </h2>
              <p className="muted mt-4 text-base leading-7">
                I’m Mariana—a language tutor focused on practical fluency and
                cultural confidence. Lessons are designed to feel premium, warm,
                and motivating, with a plan that fits your goals.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "5+ years experience",
                  "Culture-first method",
                  "Measurable progress",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs font-semibold"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="mt-7">
                <a
                  className="btn btnSecondary"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  View my biography
                </a>
              </div>
            </div>

            <div className="card relative overflow-hidden p-6">
              <div className="absolute inset-0 bg-[radial-gradient(650px_350px_at_25%_25%,rgba(255,228,236,0.95),rgba(255,228,236,0)_60%),radial-gradient(650px_350px_at_80%_55%,rgba(255,209,222,0.75),rgba(255,209,222,0)_60%)]" />
              <div className="relative">
              <img
                src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A//www.w3.org/2000/svg'%20width%3D'800'%20height%3D'1000'%20viewBox%3D'0%200%20800%201000'%3E%3Cdefs%3E%3ClinearGradient%20id%3D'g'%20x1%3D'0'%20y1%3D'0'%20x2%3D'1'%20y2%3D'1'%3E%3Cstop%20offset%3D'0'%20stop-color%3D'%23FFFFFF'/%3E%3Cstop%20offset%3D'1'%20stop-color%3D'%23FFE4EC'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20x%3D'0'%20y%3D'0'%20width%3D'800'%20height%3D'1000'%20rx%3D'28'%20fill%3D'url(%23g)'/%3E%3Ccircle%20cx%3D'400'%20cy%3D'360'%20r%3D'140'%20fill%3D'%23FFD1DE'%20fill-opacity%3D'.9'/%3E%3Crect%20x%3D'180'%20y%3D'560'%20width%3D'440'%20height%3D'260'%20rx%3D'44'%20fill%3D'%23FFFFFF'%20fill-opacity%3D'.65'%20stroke%3D'%23241B1D'%20stroke-opacity%3D'.10'/%3E%3Cpath%20d%3D'M250%20630h300'%20stroke%3D'%23F06F7F'%20stroke-opacity%3D'.35'%20stroke-width%3D'18'%20stroke-linecap%3D'round'/%3E%3Cpath%20d%3D'M250%20710h220'%20stroke%3D'%23241B1D'%20stroke-opacity%3D'.18'%20stroke-width%3D'14'%20stroke-linecap%3D'round'/%3E%3C/svg%3E"
                alt="Mariana language tutor portrait"
                className="aspect-[4/5] w-full rounded-2xl border border-black/10 object-cover"
                loading="lazy"
                width={800}
                height={1000}
              />
                <p className="muted mt-4 text-sm">Portrait placeholder</p>
              </div>
            </div>
          </div>
        </section>

        <section id="languages" className="container py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-widest text-[color:var(--coral-600)]">
              Choose your language
            </p>
            <h2 className="display mt-3 text-3xl font-semibold md:text-4xl">
              The journey begins here
            </h2>
            <p className="muted mt-4 text-base leading-7">
              Pick a language, explore the course page, and book a trial lesson
              when you’re ready.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {languages.map((lang) => (
              <article key={lang.name} className="card overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A//www.w3.org/2000/svg'%20width%3D'960'%20height%3D'600'%20viewBox%3D'0%200%20960%20600'%3E%3Cdefs%3E%3ClinearGradient%20id%3D'g'%20x1%3D'0'%20y1%3D'0'%20x2%3D'1'%20y2%3D'1'%3E%3Cstop%20offset%3D'0'%20stop-color%3D'%23FFE4EC'/%3E%3Cstop%20offset%3D'1'%20stop-color%3D'%23FFFFFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20x%3D'0'%20y%3D'0'%20width%3D'960'%20height%3D'600'%20fill%3D'url(%23g)'/%3E%3Ccircle%20cx%3D'220'%20cy%3D'220'%20r%3D'120'%20fill%3D'%23FFD1DE'%20fill-opacity%3D'.9'/%3E%3Ccircle%20cx%3D'720'%20cy%3D'260'%20r%3D'150'%20fill%3D'%23FFF1F5'%20fill-opacity%3D'.9'/%3E%3Cpath%20d%3D'M140%20480c150-120%20350-160%20680-90'%20fill%3D'none'%20stroke%3D'%23F06F7F'%20stroke-opacity%3D'.35'%20stroke-width%3D'18'%20stroke-linecap%3D'round'/%3E%3C/svg%3E"
                  alt={lang.alt}
                  className="aspect-[16/10] w-full border-b border-black/10 object-cover"
                  loading="lazy"
                  width={960}
                  height={600}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {lang.name}
                  </h3>
                  <p className="muted mt-2 text-sm leading-6">
                    Private, online lessons focused on real conversation,
                    listening, and cultural confidence.
                  </p>
                  <div className="mt-5">
                    <a className="btn btnSecondary w-full" href={lang.href}>
                      View course
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="container py-14 md:py-20">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[color:var(--coral-600)]">
                Contact me
              </p>
              <h2 className="display mt-3 text-3xl font-semibold md:text-4xl">
                Get in touch
              </h2>
              <p className="muted mt-4 text-base leading-7">
                Send a message and I’ll reply within 24 hours with next steps for
                a trial lesson.
              </p>
              <div className="mt-6 card p-6">
                <h3 className="text-base font-semibold">Contact information</h3>
                <p className="muted mt-2 text-sm">info@langageschool.com</p>
                <p className="muted text-sm">+39 375 5343 259</p>
              </div>
            </div>

            <form className="card p-6" action="#" method="post">
              <h3 className="text-base font-semibold">Let’s talk</h3>
              <p className="muted mt-2 text-sm">
                Fill out the form and I’ll get back to you.
              </p>

              <div className="mt-6 grid gap-4">
                <div>
                  <label className="text-sm font-medium" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:border-[color:var(--coral-500)] focus:ring-4 focus:ring-[color:var(--ring)]"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:border-[color:var(--coral-500)] focus:ring-4 focus:ring-[color:var(--ring)]"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-2 w-full resize-none rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:border-[color:var(--coral-500)] focus:ring-4 focus:ring-[color:var(--ring)]"
                    required
                  />
                </div>
                <button className="btn btnPrimary" type="submit">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="container pb-10">
        <div className="flex flex-col items-start justify-between gap-4 border-t border-black/5 pt-8 md:flex-row md:items-center">
          <p className="muted text-sm">Langage © {new Date().getFullYear()}.</p>
          <div className="flex items-center gap-4 text-sm">
            <a className="muted hover:opacity-80" href="#home">
              Home
            </a>
            <a className="muted hover:opacity-80" href="#languages">
              Languages
            </a>
            <a className="muted hover:opacity-80" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
