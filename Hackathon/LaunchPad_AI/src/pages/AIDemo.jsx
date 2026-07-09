import { Link } from 'react-router-dom';
import {
  Sparkles, Bot, Map, MapPin, Languages, ArrowRight, ArrowDown,
  User, Monitor, Brain, Database, Rocket,
} from 'lucide-react';

const demoCards = [
  {
    icon: Bot,
    title: 'AI Relocation Concierge',
    description: 'Instead of forcing users to fill out long forms, the AI asks only the questions that matter — adapting to each family\'s situation, stage, and priorities.',
    color: 'from-orange-500 to-amber-400',
    shadow: 'shadow-orange-500/20',
  },
  {
    icon: Map,
    title: 'AI Personalized Roadmap',
    description: 'The roadmap is generated based on relocation type, family status, current stage, Hebrew level, and priorities — so every family sees a plan tailored to them.',
    color: 'from-violet-500 to-purple-400',
    shadow: 'shadow-violet-500/20',
  },
  {
    icon: MapPin,
    title: 'AI Neighborhood Match',
    description: 'AI recommends neighborhoods based on budget, commute, family needs, religious/community preference, and lifestyle — ranked by how well each area fits.',
    color: 'from-sky-500 to-cyan-400',
    shadow: 'shadow-sky-500/20',
  },
  {
    icon: Languages,
    title: 'AI Hebrew Listing Interpreter',
    description: 'AI translates and summarizes Hebrew rental listings into clear English — including pros, concerns, and shelter information — so immigrants can decide with confidence.',
    color: 'from-green-500 to-emerald-400',
    shadow: 'shadow-green-500/20',
  },
];

const flow = [
  { icon: User, label: 'User', sub: 'Relocation needs' },
  { icon: Monitor, label: 'Base44 Frontend', sub: 'React + Tailwind' },
  { icon: Brain, label: 'AI Prompt Layer', sub: 'Adaptive logic' },
  { icon: Database, label: 'Knowledge Base / Mock Data', sub: 'Neighborhoods · Listings · Tasks' },
  { icon: Rocket, label: 'Personalized Output', sub: 'Roadmap + Match + Listing Summary' },
];

function FlowNode({ node }) {
  const Icon = node.icon;
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full max-w-sm items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow">
          <Icon className="h-5 w-5" />
        </span>
        <div className="text-center">
          <p className="font-heading text-sm font-bold">{node.label}</p>
          <p className="text-xs text-muted-foreground">{node.sub}</p>
        </div>
      </div>
    </div>
  );
}

function ArrowConnector() {
  return (
    <div className="flex justify-center py-1.5">
      <ArrowDown className="h-5 w-5 text-muted-foreground/50" />
    </div>
  );
}

export default function AIDemo() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {/* Header */}
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-xs font-semibold text-orange-700">
          <Sparkles className="h-4 w-4" /> AI Demo
        </span>
        <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl text-balance">
          How LaunchPad AI creates value
        </h1>
        <p className="mt-3 text-muted-foreground">Four AI capabilities working together to make relocation simpler, clearer, and more personal.</p>
      </div>

      {/* Demo cards */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {demoCards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.title} className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg">
              <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${card.color} text-white shadow-lg ${card.shadow}`}>
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-bold tracking-tight">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.description}</p>
            </div>
          );
        })}
      </div>

      {/* Architecture diagram */}
      <div className="mt-14">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold text-muted-foreground">
            Architecture
          </span>
          <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight sm:text-3xl">How it flows</h2>
        </div>

        <div className="mx-auto mt-8 max-w-sm">
          <FlowNode node={flow[0]} />
          <ArrowConnector />
          <FlowNode node={flow[1]} />
          <ArrowConnector />
          <FlowNode node={flow[2]} />
          <ArrowConnector />
          <FlowNode node={flow[3]} />
          <ArrowConnector />
          <FlowNode node={flow[4]} />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-3xl border border-border bg-gradient-to-br from-orange-50 to-amber-50 p-6 text-center shadow-sm sm:p-8">
        <h3 className="font-heading text-xl font-bold tracking-tight">Ready to try it yourself?</h3>
        <p className="mt-2 text-sm text-muted-foreground">Start your journey and let the AI build your personalized plan.</p>
        <Link to="/concierge" className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03]">
          Start My Journey <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}