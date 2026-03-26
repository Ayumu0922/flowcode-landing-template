import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Props {
  name: string;
  role: string;
  content: string;
  avatar: string;
  index: number;
}

export default function TestimonialCard({ name, role, content, avatar, index }: Props) {
  return (
    <motion.div
      data-fc-id={`TestimonialCard-${index}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      {/* Gradient border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-accent-500/20 via-transparent to-zinc-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div data-fc-id={`TestimonialCard-inner-${index}`} className="relative glass rounded-2xl p-7 h-full flex flex-col">
        {/* Stars */}
        <div data-fc-id={`TestimonialCard-stars-${index}`} className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Quote */}
        <p data-fc-id={`TestimonialCard-content-${index}`} className="text-sm text-zinc-300 leading-relaxed mb-6 flex-1">
          &ldquo;{content}&rdquo;
        </p>

        {/* Author */}
        <div data-fc-id={`TestimonialCard-author-${index}`} className="flex items-center gap-3 pt-4 border-t border-zinc-800/60">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-400/30 to-accent-600/30 text-accent-300 flex items-center justify-center text-sm font-bold ring-1 ring-accent-500/20">
            {avatar}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{name}</p>
            <p className="text-xs text-zinc-500">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
