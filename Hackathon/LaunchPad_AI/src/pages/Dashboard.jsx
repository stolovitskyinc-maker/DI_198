import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, MapPin, Compass, CheckCircle2, Circle, Clock, ChevronDown, ChevronUp,
  Sparkles, Plane, Home, BookOpen,
} from 'lucide-react';

const stages = [
  {
    id: 'before',
    label: 'Before Moving',
    icon: Plane,
    accent: 'from-orange-500 to-amber-400',
    tasks: [
      { title: 'Prepare immigration documents', status: 'done', ai: 'Based on your Aliyah pathway, your key documents are identified and ready to submit.' },
      { title: 'Confirm eligibility or visa pathway', status: 'done', ai: 'Your Aliyah eligibility is confirmed through the Jewish Agency pathway.' },
      { title: 'Collect family documents', status: 'in-progress', ai: 'Birth certificates and marriage documents for your family of 4 are being gathered.' },
    ],
  },
  {
    id: 'first30',
    label: 'First 30 Days',
    icon: Home,
    accent: 'from-sky-500 to-cyan-400',
    tasks: [
      { title: 'Register with healthcare provider', status: 'todo', ai: 'I recommend Maccabi or Meuhedet — both have strong English-speaking support near your match area.' },
      { title: 'Open a bank account', status: 'todo', ai: 'Bank Leumi and Discount offer new-immigrant (Oleh) packages with reduced fees for your first year.' },
      { title: 'Get local SIM card', status: 'todo', ai: 'Cellcom and Partner have prepaid plans ideal for your first weeks — no contract needed.' },
      { title: 'Complete government registration', status: 'todo', ai: "You'll need to register with Bituah Leumi and obtain Teudat Zehut for each family member." },
    ],
  },
  {
    id: 'settling',
    label: 'Settling In',
    icon: BookOpen,
    accent: 'from-violet-500 to-purple-400',
    tasks: [
      { title: 'School or childcare search', status: 'todo', ai: 'TALI schools in your match area offer bilingual programs suitable for your children (ages 4 and 8).' },
      { title: 'Housing search', status: 'todo', ai: '3 listings matched to your budget (₪8,000–12,000) and community preferences are ready to view.' },
      { title: 'Community resources', status: 'todo', ai: 'Anglo community groups and local integration programs are active in your top-match neighborhoods.' },
      { title: 'Hebrew learning options', status: 'todo', ai: "Ulpan Aleph classes are free for new Olim — I've found 2 centers near your preferred location." },
    ],
  },
];

const statusConfig = {
  done: { label: 'Done', icon: CheckCircle2, className: 'bg-green-50 text-green-700 ring-green-200' },
  'in-progress': { label: 'In progress', icon: Clock, className: 'bg-amber-50 text-amber-700 ring-amber-200' },
  todo: { label: 'To do', icon: Circle, className: 'bg-muted text-muted-foreground ring-border' },
};

const stats = [
  { label: 'Tasks complete', value: '2 / 11', icon: CheckCircle2, accent: 'text-green-600 bg-green-50' },
  { label: 'Neighborhood match', value: '88%', icon: MapPin, accent: 'text-orange-600 bg-orange-50' },
  { label: 'Listings saved', value: '3', icon: Home, accent: 'text-violet-600 bg-violet-50' },
];

function TaskCard({ task }) {
  const [open, setOpen] = useState(false);
  const cfg = statusConfig[task.status];
  const StatusIcon = cfg.icon;
  const pct = task.status === 'done' ? 100 : task.status === 'in-progress' ? 50 : 0;

  return (
    <div className="rounded-xl border border-border bg-background p-4 transition-shadow hover:shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className={`mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full ${cfg.className} ring-1`}>
            <StatusIcon className="h-3.5 w-3.5" />
          </span>
          <div>
            <p className={`text-sm font-medium ${task.status === 'done' ? 'text-muted-foreground line-through' : ''}`}>
              {task.title}
            </p>
            <span className={`mt-1.5 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ring-1 ${cfg.className}`}>
              <StatusIcon className="h-3 w-3" /> {cfg.label}
            </span>
          </div>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold text-primary hover:bg-orange-50"
        >
          {open ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
          {open ? 'Hide' : 'View Details'}
        </button>
      </div>

      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className={`h-full rounded-full ${task.status === 'done' ? 'bg-green-500' : task.status === 'in-progress' ? 'bg-amber-400' : 'bg-muted-foreground/30'}`}
          style={{ width: `${pct}%` }}
        />
      </div>

      {open && (
        <div className="mt-3 flex items-start gap-2 rounded-lg bg-secondary/60 p-3">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
          <p className="text-xs leading-relaxed text-muted-foreground">{task.ai}</p>
        </div>
      )}
    </div>
  );
}

export default function Dashboard() {
  const allTasks = stages.flatMap((s) => s.tasks);
  const doneCount = allTasks.filter((t) => t.status === 'done').length;
  const overallProgress = Math.round((doneCount / allTasks.length) * 100);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {/* Welcome */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-amber-400 p-6 text-white shadow-xl shadow-orange-500/20 sm:p-8">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Sample family · Aliyah to Israel
          </span>
          <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Your LaunchPad is ready.
          </h1>
          <p className="mt-2 max-w-xl text-sm text-white/90 sm:text-base">
            The Levy family · 2 adults, 2 children (ages 4 &amp; 8) · Traditional community · Budget ₪8,000–12,000
          </p>

          {/* Overall progress */}
          <div className="mt-6 max-w-md">
            <div className="flex items-center justify-between text-xs font-medium">
              <span>Overall relocation progress</span>
              <span>{overallProgress}%</span>
            </div>
            <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-white/25">
              <div className="h-full rounded-full bg-white transition-all" style={{ width: `${overallProgress}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Quick stats */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${s.accent}`}>
                <s.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-heading text-xl font-bold leading-none">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Two hero cards */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {/* Roadmap card */}
        <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg sm:p-7">
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 opacity-10 blur-2xl" />
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-lg shadow-orange-500/20">
            <Compass className="h-6 w-6" />
          </span>
          <h2 className="mt-4 font-heading text-xl font-bold tracking-tight">AI Relocation Roadmap</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Your step-by-step plan across 3 stages — from before you land to fully settled in.
          </p>
          <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-green-500" /> {doneCount} done</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4 text-amber-500" /> {allTasks.filter((t) => t.status === 'in-progress').length} in progress</span>
            <span className="inline-flex items-center gap-1.5"><Circle className="h-4 w-4 text-muted-foreground/40" /> {allTasks.filter((t) => t.status === 'todo').length} to do</span>
          </div>
          <a href="#roadmap" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            View roadmap <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Neighborhood match card */}
        <Link
          to="/neighborhood"
          className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-lg sm:p-7"
        >
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 opacity-10 blur-2xl transition-opacity group-hover:opacity-20" />
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 text-white shadow-lg shadow-sky-500/20">
            <MapPin className="h-6 w-6" />
          </span>
          <h2 className="mt-4 font-heading text-xl font-bold tracking-tight">AI Neighborhood Match</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Your top neighborhood matches based on budget, schools, community, and lifestyle.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">88% Katamon, Jerusalem</span>
            <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">82% Florentin, TLV</span>
          </div>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            See my matches <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>

      {/* Roadmap */}
      <div id="roadmap" className="mt-10 scroll-mt-20">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-2xl font-bold tracking-tight">Your relocation roadmap</h2>
          <span className="text-sm text-muted-foreground">{doneCount} of {allTasks.length} complete</span>
        </div>

        <div className="mt-6 space-y-6">
          {stages.map((stage) => (
            <div key={stage.id} className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-3">
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${stage.accent} text-white shadow`}>
                  <stage.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold">{stage.label}</h3>
                  <p className="text-xs text-muted-foreground">
                    {stage.tasks.filter((t) => t.status === 'done').length} of {stage.tasks.length} complete
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-2.5">
                {stage.tasks.map((task) => (
                  <TaskCard key={task.title} task={task} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}