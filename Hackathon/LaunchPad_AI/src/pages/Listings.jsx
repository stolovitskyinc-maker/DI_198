import { useState } from 'react';
import { Link } from 'react-router-dom';
import EmptyState from '@/components/EmptyState';
import {
  Home, MapPin, BedDouble, Maximize, ArrowRight, ExternalLink, Sparkles,
  ShieldCheck, Shield, ShieldAlert, Building2, ArrowUp, Car, Accessibility, PawPrint,
  Check, AlertTriangle, Star, Heart,
} from 'lucide-react';

const shelterConfig = {
  mamad: { label: 'Mamad inside apartment', icon: ShieldCheck, className: 'bg-green-50 text-green-700 ring-green-200' },
  miklat: { label: 'Building miklat', icon: Shield, className: 'bg-sky-50 text-sky-700 ring-sky-200' },
  none: { label: 'No shelter info listed', icon: ShieldAlert, className: 'bg-amber-50 text-amber-700 ring-amber-200' },
};

const listings = [
  {
    title: 'דירת 4 חדרים משופצת ברעננה',
    area: "Ra'anana — Central",
    price: 9500,
    rooms: 4,
    size: 110,
    floor: '3rd of 5',
    match: 92,
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    hebrewExcerpt: 'דירת 4 חדרים מרווחת ומוארת, ממ"ד, מעלית, חניה, קרוב לבתי ספר ופארק. כניסה מיידית.',
    aiSummary: 'Spacious, renovated 4-room apartment with a protected room (Mamad), elevator, and parking. Close to schools and a park. Available immediately.',
    bestFor: 'Family with 2 children',
    pros: ['Recently renovated', 'Near TALI school', 'Walking distance to park', 'Elevator building'],
    concerns: ['Higher end of budget', 'No balcony'],
    shelter: 'mamad',
    elevator: true,
    parking: true,
    accessible: true,
    petFriendly: true,
  },
  {
    title: 'דירת 3 חדרים בגבעת שמואל',
    area: 'Givat Shmuel — Near Bar-Ilan',
    price: 7200,
    rooms: 3,
    size: 85,
    floor: '2nd of 4',
    match: 84,
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    hebrewExcerpt: 'דירת 3 חדרים, ממ"ד בבניין, מעלית, ללא חניה. קרוב לאוניברסיטת בר-אילן ותחבורה ציבורית.',
    aiSummary: '3-room apartment in an elevator building with a shared building shelter (Miklat). No private parking. Close to Bar-Ilan University and public transport.',
    bestFor: 'Couple or small family',
    pros: ['Good value for area', 'Near public transport', 'Elevator building'],
    concerns: ['No private parking', 'Shared shelter only'],
    shelter: 'miklat',
    elevator: true,
    parking: false,
    accessible: false,
    petFriendly: true,
  },
  {
    title: 'דירת 5 חדרים במודיעין',
    area: 'Modiin — Buchman',
    price: 8800,
    rooms: 5,
    size: 125,
    floor: '1st of 6',
    match: 88,
    img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80',
    hebrewExcerpt: 'דירת 5 חדרים, ממ"ד, מרפסת, חניה, מעלית. שכונה שקטה, קרוב לבית ספר וגן. פנוי בעוד חודש.',
    aiSummary: 'Large 5-room apartment with a protected room (Mamad), balcony, parking, and elevator in a quiet neighborhood. Near school and daycare. Available in one month.',
    bestFor: 'Large family',
    pros: ['Spacious — 5 rooms', 'Private parking', 'Near school & daycare', 'Balcony'],
    concerns: ['Not available immediately', 'Ground floor unit'],
    shelter: 'mamad',
    elevator: true,
    parking: true,
    accessible: true,
    petFriendly: false,
  },
  {
    title: 'דירת 3 חדרים במודיעין',
    area: 'Modiin — Center',
    price: 6800,
    rooms: 3,
    size: 75,
    floor: '4th of 4',
    match: 79,
    img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
    hebrewExcerpt: 'דירת 3 חדרים בקומה 4, ללא מעלית. לא מוזכר ממ"ד. מחיר מצוין, קרוב לרכבת.',
    aiSummary: '3-room apartment on the 4th floor of a building with no elevator. No protected room mentioned in the listing. Great price, close to the train station.',
    bestFor: 'Budget-conscious couple',
    pros: ['Below budget', 'Near train station', 'Quiet street'],
    concerns: ['No elevator (4th floor)', 'No shelter info listed', 'Walk-up access only'],
    shelter: 'none',
    elevator: false,
    parking: false,
    accessible: false,
    petFriendly: true,
  },
];

function InfoChip({ icon: Icon, label, available }) {
  return (
    <div className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium ring-1 ${
      available ? 'bg-green-50 text-green-700 ring-green-200' : 'bg-muted text-muted-foreground ring-border line-through'
    }`}>
      <Icon className="h-3.5 w-3.5" /> {label}
    </div>
  );
}

function ListingCard({ l }) {
  const [saved, setSaved] = useState(false);
  const shelter = shelterConfig[l.shelter];

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img src={l.img} alt={l.area} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-orange-600 backdrop-blur">
          <Star className="h-3.5 w-3.5 fill-orange-500 text-orange-500" /> {l.match}% match
        </span>
        <button
          onClick={() => setSaved(!saved)}
          className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur transition-colors ${
            saved ? 'bg-primary text-primary-foreground' : 'bg-white/90 text-muted-foreground hover:bg-white'
          }`}
        >
          <Heart className={`h-4 w-4 ${saved ? 'fill-current' : ''}`} />
        </button>
        <div className="absolute bottom-3 left-4 right-4">
          <p className="text-xs text-white/80" dir="rtl">{l.title}</p>
          <p className="font-heading text-lg font-bold text-white drop-shadow">{l.area}</p>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        {/* Price + rooms + size */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-heading text-xl font-bold">₪{l.price.toLocaleString()}<span className="text-sm font-normal text-muted-foreground">/mo</span></span>
          <span className="inline-flex items-center gap-1 text-sm text-muted-foreground"><BedDouble className="h-4 w-4" /> {l.rooms} rooms</span>
          <span className="inline-flex items-center gap-1 text-sm text-muted-foreground"><Maximize className="h-4 w-4" /> {l.size}m²</span>
        </div>

        {/* Shelter badge — prominent */}
        <div className="mt-4">
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Security shelter</p>
          <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold ring-1 ${shelter.className}`}>
            <shelter.icon className="h-4 w-4" /> {shelter.label}
          </span>
        </div>

        {/* Property details chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          <InfoChip icon={Building2} label={`Floor: ${l.floor}`} available={true} />
          <InfoChip icon={ArrowUp} label="Elevator" available={l.elevator} />
          <InfoChip icon={Car} label="Parking" available={l.parking} />
          <InfoChip icon={Accessibility} label="Accessible" available={l.accessible} />
          <InfoChip icon={PawPrint} label="Pet friendly" available={l.petFriendly} />
        </div>

        {/* Hebrew excerpt */}
        <div className="mt-4 rounded-xl border border-border bg-secondary/40 p-3">
          <p className="text-xs font-semibold text-muted-foreground">Original Hebrew listing</p>
          <p className="mt-1 text-sm leading-relaxed text-foreground" dir="rtl">{l.hebrewExcerpt}</p>
        </div>

        {/* AI English summary */}
        <div className="mt-3 flex items-start gap-2 rounded-xl bg-orange-50/50 p-3">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
          <div>
            <p className="text-xs font-semibold text-orange-700">AI English summary</p>
            <p className="mt-1 text-sm leading-relaxed text-foreground">{l.aiSummary}</p>
          </div>
        </div>

        {/* Best for */}
        <div className="mt-3 flex items-center gap-2 text-sm">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Best for:</span>
          <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">{l.bestFor}</span>
        </div>

        {/* Pros + concerns */}
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-green-200 bg-green-50/40 p-3">
            <p className="flex items-center gap-1.5 text-xs font-semibold text-green-700">
              <Check className="h-3.5 w-3.5" /> Pros
            </p>
            <ul className="mt-1.5 space-y-1">
              {l.pros.map((p) => (
                <li key={p} className="text-xs text-foreground">• {p}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-3">
            <p className="flex items-center gap-1.5 text-xs font-semibold text-amber-700">
              <AlertTriangle className="h-3.5 w-3.5" /> Possible concerns
            </p>
            <ul className="mt-1.5 space-y-1">
              {l.concerns.map((c) => (
                <li key={c} className="text-xs text-foreground">• {c}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Open original */}
        <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary">
          <ExternalLink className="h-4 w-4" /> Open Original Listing
        </button>
      </div>
    </div>
  );
}

export default function Listings() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-xs font-semibold text-orange-700">
            <Home className="h-4 w-4" /> AI-translated listings
          </span>
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight">Homes matched to your plan</h1>
          <p className="mt-2 text-muted-foreground">Hebrew listings, translated and summarized — with security shelter details made clear.</p>
        </div>
        <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary">
          <ArrowRight className="h-4 w-4 rotate-180" /> Back to dashboard
        </Link>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Shelter guide:</p>
        {Object.values(shelterConfig).map((s) => (
          <span key={s.label} className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ring-1 ${s.className}`}>
            <s.icon className="h-3.5 w-3.5" /> {s.label}
          </span>
        ))}
      </div>

      {/* Listings grid */}
      {listings.length > 0 ? (
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {listings.map((l) => (
            <ListingCard key={l.area} l={l} />
          ))}
        </div>
      ) : (
        <div className="mt-8">
          <EmptyState
            icon={Home}
            title="No listings matched yet"
            description="Once your AI Concierge profile and neighborhood match are ready, matched listings will show up here."
            action={
              <Link to="/concierge" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
                Start AI Concierge <ArrowRight className="h-4 w-4" />
              </Link>
            }
          />
        </div>
      )}
    </div>
  );
}