import Link from 'next/link';
import type { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href = '/services',
}: ServiceCardProps) {
  return (
    <div className="bg-surface border border-white/10 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 group">
      <div className="text-accent mb-5 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
      <p className="text-text-secondary leading-relaxed mb-5 text-sm">
        {description}
      </p>
      <Link
        href={href}
        className="text-accent font-semibold text-sm hover:underline inline-flex items-center gap-1"
      >
        Подробнее
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
