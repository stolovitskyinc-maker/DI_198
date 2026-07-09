import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 shadow-lg shadow-orange-500/30 transition-transform group-hover:scale-105">
        <Rocket className="h-5 w-5 text-white" strokeWidth={2.4} />
      </span>
      {!compact && (
        <span className="font-heading text-lg font-extrabold tracking-tight">
          LaunchPad<span className="text-orange-500"> AI</span>
        </span>
      )}
    </Link>
  );
}