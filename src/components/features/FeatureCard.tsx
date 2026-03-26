import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface Props { icon: LucideIcon; title: string; description: string; color: string; index: number; }

export default function FeatureCard({ icon: Icon, title, description, color, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors group"
    >
      <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: color + '20' }}>
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
