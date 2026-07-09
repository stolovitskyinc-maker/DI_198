import { Link } from 'react-router-dom';
import {
  Sparkles, Play, ArrowRight, FileText, MapPin, Home as HomeIcon, Users,
  Compass, ShieldCheck, Bot, BadgeCheck, Plane, Baby, Briefcase, HeartHandshake,
} from 'lucide-react';

const problems = [
  { icon: FileText, title: 'Endless paperwork', text: 'Visas, Bituah Leumi, bank accounts, and licenses — each with its own rules and queues.' },
  { icon: MapPin, title: 'Where to live', text: 'Neighborhoods vary wildly in cost, community, transit, and Hebrew vs. English density.' },
  { icon: HomeIcon, title: 'Housing maze', text: 'Fragmented listing sites, unfamiliar rental norms, and guarantor requirements.' },
  { icon: Users, title: 'No support network', text: 'New arrivals feel isolated navigating language, culture, and bureaucracy alone.' },
];

const solutionSteps = [
  { icon: Bot, title: 'Tell your AI Concierge your story', text: 'Family size, budget, visa status, work plans, and lifestyle preferences — in one guided chat.' },
  { icon: Compass, title: 'Get a personalized relocation plan', text: 'A step-by-step roadmap with deadlines, documents, and priority order tailored to you.' },
  { icon: MapPin, title: 'Match to your ideal neighborhood', text: 'AI ranks areas by commute, schools, community fit, and budget — not just price.' },
  { icon: HomeIcon, title: 'Find a home that fits', text: 'Curated listings matched to your plan, with everything you need to apply.' },
];

const features = [
  {
    icon: Sparkles,
    tag: 'AI Relocation LaunchPad',
    title: 'Your personal relocation copilot',
    text: 'A guided AI concierge that interviews you once, then produces a full, prioritized relocation plan — paperwork, timelines, and local tips — specific to Israel.',
    points: ['Personalized step-by-step plan', 'Smart document checklist', 'Local expert knowledge baked in'],
    accent: 'from-orange-500 to-amber-400',
  },
  {
    icon: MapPin,
    tag: 'AI Neighborhood Match',
    title: 'Find where you actually belong',
    text: 'Answer a few lifestyle questions and the AI matches you to neighborhoods by community, commute, schools, budget, and culture — ranked just for you.',
    points: ['Ranked neighborhood matches', 'Lifestyle & community fit', 'Cost-of-living comparisons'],
    accent: 'from-sky-500 to-cyan-400',
  },
];

const targets = [
  { icon: Plane, title: 'Aliyah families', text: 'Coordinated plans for parents, kids, and schools.' },
  { icon: Baby, title: 'Aliyah individuals', text: 'Solo olim finding community and footing fast.' },
  { icon: Briefcase, title: 'Skilled workers', text: 'B-1 visa holders landing with a plan.' },
  { icon: HeartHandshake, title: 'Family reunification', text: 'Reuniting loved ones with less friction.' },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-warm">
        <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pb-28 lg:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold text-orange-700">
              <BadgeCheck className="h-4 w-4" /> Currently focused on Israel
            </span>
            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Start your new life with <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">confidence.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance">
              LaunchPad AI turns relocation complexity into a personalized journey — from paperwork to finding the right neighborhood.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/concierge"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-transform hover:scale-[1.03] sm:w-auto"
              >
                Start My Journey
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-base font-semibold text-foreground shadow-sm transition-colors hover:bg-secondary sm:w-auto"
              >
                <Play className="h-4 w-4" /> See Demo
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-orange-500" /> Trusted guidance</span>
              <span className="inline-flex items-center gap-2"><Bot className="h-4 w-4 text-orange-500" /> AI-powered plans</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-orange-500" /> Neighborhood matching</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">The problem</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Relocating to a new country is overwhelming
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Immigrants face a maze of unfamiliar systems, fragmented information, and high-stakes decisions — with little personalized help.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">The solution</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              One AI guide, end to end
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              LaunchPad AI replaces scattered advice with a single, personalized journey — from landing to settling in.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {solutionSteps.map((s, i) => (
              <div key={s.title} className="relative rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="absolute right-5 top-5 font-heading text-3xl font-extrabold text-secondary-foreground/40">
                  {i + 1}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 text-white shadow-lg shadow-sky-500/20">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">Two flagship tools</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Built for the moments that matter
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {features.map((f) => (
              <div key={f.tag} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-xl">
                <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${f.accent} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`} />
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${f.accent} text-white shadow-lg`}>
                  <f.icon className="h-6 w-6" />
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{f.tag}</p>
                <h3 className="mt-1.5 font-heading text-2xl font-bold tracking-tight">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                <ul className="mt-5 space-y-2.5">
                  {f.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5 text-sm">
                      <BadgeCheck className="h-4 w-4 shrink-0 text-orange-500" /> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target users */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">Who it's for</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Made for every newcomer
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {targets.map((t) => (
              <div key={t.title} className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-transform hover:-translate-y-1">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                  <t.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-amber-400 px-8 py-14 text-center shadow-2xl shadow-orange-500/20 sm:px-16">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="relative">
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl">
                Your new life, planned with confidence.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/90">
                Start your personalized relocation journey in minutes — no consultants, no guesswork.
              </p>
              <Link
                to="/concierge"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-orange-600 shadow-lg transition-transform hover:scale-[1.03]"
              >
                Start My Journey <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}