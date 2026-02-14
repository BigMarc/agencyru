import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  niche: string;
  quote: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  niche,
  quote,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="bg-surface border border-white/10 rounded-2xl p-8">
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 text-yellow-400 fill-yellow-400"
          />
        ))}
      </div>
      <p className="text-text-secondary leading-relaxed mb-6 italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <p className="text-white font-bold">{name}</p>
        <p className="text-text-secondary text-sm">{niche}</p>
      </div>
    </div>
  );
}
