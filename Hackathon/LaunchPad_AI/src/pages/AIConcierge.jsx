import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle2, Pencil, Rocket } from 'lucide-react';

const questions = [
  {
    key: 'relocationType',
    ask: "Shalom! I'm your LaunchPad guide. 🌟 What brings you to Israel?",
    options: ['Aliyah', 'Work relocation', 'Family reunification'],
  },
  {
    key: 'currentStage',
    ask: 'Where are you in the process right now?',
    options: ['Just exploring', 'Preparing documents', 'Moving soon', 'Already in Israel'],
  },
  {
    key: 'persona',
    ask: 'Who will be relocating with you?',
    options: ['Individual', 'Couple', 'Family with children'],
  },
  {
    key: 'childrenCount',
    ask: 'How many children will be moving with you?',
    options: ['1', '2', '3', '4+'],
    showIf: (a) => a.persona === 'Family with children',
  },
  {
    key: 'childrenAges',
    ask: "What are their ages? (e.g. 4, 8, 12)",
    options: ['Under 5', '5–10', '11–14', '15–18', 'Mixed ages'],
    showIf: (a) => a.persona === 'Family with children',
  },
  {
    key: 'religiousLifestyle',
    ask: 'What community / religious lifestyle fits your family?',
    options: ['Secular', 'Traditional', 'Masorti', 'Religious', 'Orthodox', 'Mixed community', 'No preference'],
  },
  {
    key: 'workLocation',
    ask: 'Where will you work or study?',
    options: ['Tel Aviv area', 'Jerusalem area', 'Haifa area', 'Beer Sheva area', 'Remote / flexible'],
  },
  {
    key: 'budget',
    ask: 'What is your monthly housing budget (ILS)?',
    options: ['Under 5,000', '5,000–8,000', '8,000–12,000', '12,000–18,000', '18,000+'],
  },
  {
    key: 'transport',
    ask: 'How do you prefer to get around?',
    options: ['Public transport', 'Car', 'Walking', 'Flexible'],
  },
  {
    key: 'hebrewLevel',
    ask: 'How is your Hebrew?',
    options: ['None', 'Basic', 'Intermediate', 'Fluent'],
  },
  {
    key: 'needs',
    ask: 'What matters most to you? Pick all that apply.',
    options: ['Schools', 'Daycare', 'Parks', 'Synagogue', 'Public transport', 'Healthcare', 'English-speaking community', 'Affordable rent'],
    multi: true,
  },
];

const summaryLabels = {
  relocationType: 'Relocation type',
  currentStage: 'Current stage',
  persona: 'Persona',
  childrenCount: 'Number of children',
  childrenAges: "Children's ages",
  religiousLifestyle: 'Community / lifestyle',
  workLocation: 'Work / study location',
  budget: 'Monthly housing budget',
  transport: 'Transportation preference',
  hebrewLevel: 'Hebrew level',
  needs: 'Important needs',
};

function Avatar({ children, className = '' }) {
  return (
    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow ${className}`}>
      {children}
    </span>
  );
}

function ChatBubble({ side, children }) {
  const isUser = side === 'user';
  return (
    <div className={`flex gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && <Avatar><Sparkles className="h-4 w-4" /></Avatar>}
      <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
        isUser ? 'rounded-tr-sm bg-primary text-primary-foreground' : 'rounded-tl-sm bg-secondary'
      }`}>
        {children}
      </div>
    </div>
  );
}

export default function AIConcierge() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const [answers, setAnswers] = useState({});
  const [visibleSteps, setVisibleSteps] = useState(0); // how many Q+answer pairs shown
  const [done, setDone] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const stepIdx = visibleSteps; // current question index among visible

  // compute the actual question list based on persona
  const visibleQuestions = questions.filter((q) => !q.showIf || q.showIf(answers));
  const currentQ = visibleQuestions[stepIdx];

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [visibleSteps, done]);

  const answer = (val) => {
    const q = currentQ;
    let newAnswers;
    if (q.multi) {
      const prev = answers[q.key] || [];
      newAnswers = { ...answers, [q.key]: prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val] };
    } else {
      newAnswers = { ...answers, [q.key]: val };
    }
    setAnswers(newAnswers);

    if (!q.multi) {
      setVisibleSteps((s) => s + 1);
      if (stepIdx + 1 >= visibleQuestions.length) {
        setTimeout(() => setDone(true), 400);
      }
    } else {
      // for multi-select, wait for a "confirm" — show confirm button when >=1 selected
    }
  };

  const confirmMulti = () => {
    setVisibleSteps((s) => s + 1);
    if (stepIdx + 1 >= visibleQuestions.length) {
      setTimeout(() => setDone(true), 400);
    }
  };

  const restart = () => {
    setAnswers({});
    setVisibleSteps(0);
    setDone(false);
    setEditMode(false);
  };

  // Build chat transcript
  const transcript = [];
  for (let i = 0; i < visibleSteps; i++) {
    const q = visibleQuestions[i];
    transcript.push({ type: 'bot', text: q.ask });
    const a = answers[q.key];
    if (a) {
      const val = Array.isArray(a) ? a.join(', ') : a;
      transcript.push({ type: 'user', text: val });
    }
  }

  const summaryEntries = Object.entries(summaryLabels)
    .filter(([k]) => answers[k])
    .map(([k, label]) => {
      const val = Array.isArray(answers[k]) ? answers[k].join(', ') : answers[k];
      return { key: k, label, val };
    });

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-xs font-semibold text-orange-700">
          <Sparkles className="h-4 w-4" /> AI Concierge
        </span>
        <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl text-balance">
          Let's build your relocation profile
        </h1>
        <p className="mt-3 text-muted-foreground">A quick, friendly chat — I'll ask one thing at a time.</p>
      </div>

      {!done ? (
        <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          {/* Chat area */}
          <div ref={scrollRef} className="h-[420px] space-y-3 overflow-y-auto bg-secondary/20 p-4 sm:p-6">
            {transcript.map((m, i) => (
              <ChatBubble key={i} side={m.type === 'user' ? 'user' : 'bot'}>{m.text}</ChatBubble>
            ))}

            {currentQ && (
              <ChatBubble side="bot">{currentQ.ask}</ChatBubble>
            )}
          </div>

          {/* Answer area */}
          {currentQ && (
            <div className="border-t border-border p-4 sm:p-5">
              {currentQ.multi && (answers[currentQ.key]?.length > 0) && (
                <p className="mb-2 text-xs text-muted-foreground">
                  Selected: {answers[currentQ.key].join(', ')}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {currentQ.options.map((opt) => {
                  const selected = currentQ.multi && (answers[currentQ.key] || []).includes(opt);
                  return (
                    <button
                      key={opt}
                      onClick={() => answer(opt)}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                        selected
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-background hover:border-orange-300 hover:bg-orange-50'
                      }`}
                    >
                      {selected && <CheckCircle2 className="h-3.5 w-3.5" />}
                      {opt}
                    </button>
                  );
                })}
              </div>
              {currentQ.multi && (
                <button
                  onClick={confirmMulti}
                  disabled={!answers[currentQ.key]?.length}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground disabled:opacity-40"
                >
                  Confirm <ArrowRight className="h-4 w-4" />
                </button>
              )}
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all"
                  style={{ width: `${(visibleSteps / visibleQuestions.length) * 100}%` }}
                />
              </div>
              <p className="mt-1.5 text-right text-xs text-muted-foreground">
                {visibleSteps} / {visibleQuestions.length}
              </p>
            </div>
          )}
        </div>
      ) : (
        /* Summary card */
        <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
          <div className="flex items-center gap-3 border-b border-border bg-gradient-to-r from-orange-50 to-amber-50 p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-400 text-white shadow">
              <CheckCircle2 className="h-6 w-6" />
            </span>
            <div>
              <h2 className="font-heading text-xl font-bold">Your Relocation Profile Summary</h2>
              <p className="text-sm text-muted-foreground">Here's everything we've captured.</p>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <dl className="grid gap-3 sm:grid-cols-2">
              {summaryEntries.map(({ key, label, val }) => (
                <div key={key} className="rounded-xl border border-border bg-background px-4 py-3">
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</dt>
                  <dd className="mt-1 text-sm font-semibold">{val}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={restart}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                <Pencil className="h-4 w-4" /> Edit Answers
              </button>
              <button
                onClick={() => navigate('/dashboard')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03]"
              >
                <Rocket className="h-4 w-4" /> Generate My LaunchPad
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}