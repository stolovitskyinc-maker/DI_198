import { useState } from 'react';
import { Link } from 'react-router-dom';
import EmptyState from '@/components/EmptyState';
import {
  MapPin, Star, ArrowRight, Sparkles, Heart, Bus, Users, Baby,
  Building2, TreePine, BookOpen, ShoppingCart, Stethoscope,
  Check, TrendingUp,
} from 'lucide-react';

const neighborhoods = [
  {
    name: "Ra'anana",
    match: 92,
    img: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80',
    why: "Ra'anana offers a strong Anglo community, excellent schools, and abundant green spaces — ideal for a family seeking a balanced lifestyle with both secular and religious options.",
    rentRange: '₪7,500 – ₪12,000',
    commute: '~35 min to Tel Aviv by train; direct routes to central Israel',
    lifestyleFit: 90,
    familyFit: 95,
    communityFit: 88,
    amenities: [
      { label: 'Schools', icon: BookOpen, available: true },
      { label: 'Parks', icon: TreePine, available: true },
      { label: 'Synagogue', icon: Building2, available: true },
      { label: 'Supermarket', icon: ShoppingCart, available: true },
      { label: 'Public transport', icon: Bus, available: true },
      { label: 'Healthcare', icon: Stethoscope, available: true },
    ],
  },
  {
    name: 'Givat Shmuel',
    match: 87,
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    why: 'A compact, family-oriented city with a growing religious community, close to Bar-Ilan University and major highways. Great for families wanting proximity to Tel Aviv at moderate cost.',
    rentRange: '₪6,500 – ₪10,500',
    commute: '~20 min to Tel Aviv; easy access to Highway 4',
    lifestyleFit: 82,
    familyFit: 88,
    communityFit: 85,
    amenities: [
      { label: 'Schools', icon: BookOpen, available: true },
      { label: 'Parks', icon: TreePine, available: true },
      { label: 'Synagogue', icon: Building2, available: true },
      { label: 'Supermarket', icon: ShoppingCart, available: true },
      { label: 'Public transport', icon: Bus, available: true },
      { label: 'Healthcare', icon: Stethoscope, available: true },
    ],
  },
  {
    name: 'Modiin',
    match: 84,
    img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80',
    why: 'A modern city between Tel Aviv and Jerusalem with diverse communities, large parks, and a train line. Perfect for families wanting central Israel access with a relaxed suburban feel.',
    rentRange: '₪6,000 – ₪9,500',
    commute: '~30 min to Tel Aviv or Jerusalem by train',
    lifestyleFit: 85,
    familyFit: 86,
    communityFit: 80,
    amenities: [
      { label: 'Schools', icon: BookOpen, available: true },
      { label: 'Parks', icon: TreePine, available: true },
      { label: 'Synagogue', icon: Building2, available: true },
      { label: 'Supermarket', icon: ShoppingCart, available: true },
      { label: 'Public transport', icon: Bus, available: true },
      { label: 'Healthcare', icon: Stethoscope, available: true },
    ],
  },
];

function FitBar({ label, score, icon: Icon }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs">
        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
          <Icon className="h-3.5 w-3.5" /> {label}
        </span>
        <span className="font-semibold">{score}%</span>
      </div>
      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 transition-all"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}

function NeighborhoodCard({ n }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
      {/* Image + match score */}
      <div className="relative h-48 overflow-hidden">
        <img src={n.img} alt={n.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-orange-600 backdrop-blur">
          <Star className="h-3.5 w-3.5 fill-orange-500 text-orange-500" /> {n.match}% match
        </span>
        <button
          onClick={() => setSaved(!saved)}
          className={`absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur transition-colors ${
            saved ? 'bg-primary text-primary-foreground' : 'bg-white/90 text-foreground hover:bg-white'
          }`}
        >
          <Heart className={`h-3.5 w-3.5 ${saved ? 'fill-current' : ''}`} />
          {saved ? 'Saved' : 'Save'}
        </button>
        <h3 className="absolute bottom-3 left-4 font-heading text-xl font-bold text-white drop-shadow">{n.name}</h3>
      </div>

      <div className="p-5 sm:p-6">
        {/* Why it fits */}
        <div className="flex items-start gap-2 rounded-xl bg-secondary/60 p-3">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
          <p className="text-xs leading-relaxed text-muted-foreground">{n.why}</p>
        </div>

        {/* Rent + commute */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-border bg-background px-3 py-2.5">
            <p className="text-xs text-muted-foreground">Estimated rent</p>
            <p className="mt-0.5 text-sm font-bold">{n.rentRange}</p>
          </div>
          <div className="rounded-xl border border-border bg-background px-3 py-2.5">
            <p className="text-xs text-muted-foreground">Commute</p>
            <p className="mt-0.5 text-sm font-bold">{n.commute}</p>
          </div>
        </div>

        {/* Fit scores */}
        <div className="mt-4 space-y-2.5">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Fit breakdown</p>
          <FitBar label="Lifestyle fit" score={n.lifestyleFit} icon={TrendingUp} />
          <FitBar label="Family fit" score={n.familyFit} icon={Baby} />
          <FitBar label="Religious / community fit" score={n.communityFit} icon={Users} />
        </div>

        {/* Amenities */}
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Nearby amenities</p>
          <div className="mt-2.5 grid grid-cols-2 gap-2">
            {n.amenities.map((a) => (
              <div
                key={a.label}
                className="flex items-center gap-2 rounded-lg bg-background px-2.5 py-2 ring-1 ring-border"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-50 text-green-600">
                  <a.icon className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-medium">{a.label}</span>
                <Check className="ml-auto h-3.5 w-3.5 text-green-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-5 flex gap-3">
          <Link
            to="/listings"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02]"
          >
            View Listings <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setSaved(!saved)}
            className={`inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
              saved ? 'border-primary bg-orange-50 text-primary' : 'border-border hover:bg-secondary'
            }`}
          >
            <Heart className={`h-4 w-4 ${saved ? 'fill-current' : ''}`} />
            {saved ? 'Saved' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function NeighborhoodMatch() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {/* Header */}
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1.5 text-xs font-semibold text-sky-700">
          <MapPin className="h-4 w-4" /> AI Neighborhood Match
        </span>
        <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl text-balance">
          Your top neighborhood matches
        </h1>
        <p className="mt-3 text-muted-foreground">Ranked by your lifestyle, budget, and community fit.</p>
      </div>

      {/* Profile summary */}
      <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 text-white shadow">
            <Sparkles className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Your relocation profile</p>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground">
              Family relocating through Aliyah, looking for a family-friendly mixed community near central Israel, with schools, parks, synagogue access, and public transport.
            </p>
          </div>
        </div>
      </div>

      {/* Neighborhood cards */}
      {neighborhoods.length > 0 ? (
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {neighborhoods.map((n) => (
            <NeighborhoodCard key={n.name} n={n} />
          ))}
        </div>
      ) : (
        <div className="mt-10">
          <EmptyState
            icon={MapPin}
            title="No neighborhood matches yet"
            description="Complete the AI Concierge questions and we'll rank neighborhoods based on your budget, community, and lifestyle preferences."
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