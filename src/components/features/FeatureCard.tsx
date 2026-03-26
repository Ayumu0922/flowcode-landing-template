import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  index: number;
  large?: boolean;
}

export default function FeatureCard({ icon: Icon, title, description, color, index, large }: Props) {
  return (
    <motion.div
      data-fc-id={`FeatureCard-${index}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className={`group relative glass rounded-2xl overflow-hidden transition-all duration-300 hover:border-zinc-600 ${large ? 'p-8' : 'p-6'}`}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${color}10, transparent 60%)`,
        }}
      />

      {/* Icon */}
      <div
        data-fc-id={`FeatureCard-icon-${index}`}
        className={`relative rounded-xl flex items-center justify-center mb-5 ${large ? 'w-14 h-14' : 'w-11 h-11'}`}
        style={{ backgroundColor: color + '15' }}
      >
        <div className="absolute inset-0 rounded-xl animate-pulse-glow" style={{ backgroundColor: color + '08' }} />
        <Icon className={`relative ${large ? 'w-7 h-7' : 'w-5 h-5'}`} style={{ color }} />
      </div>

      {/* Text */}
      <h3 data-fc-id={`FeatureCard-title-${index}`} className={`font-bold text-foreground mb-2 ${large ? 'text-xl' : 'text-base'}`}>
        {title}
      </h3>
      <p data-fc-id={`FeatureCard-desc-${index}`} className={`text-zinc-400 leading-relaxed ${large ? 'text-base' : 'text-sm'}`}>
        {description}
      </p>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(to right, transparent, ${color}60, transparent)` }}
      />
    </motion.div>
  );
}
