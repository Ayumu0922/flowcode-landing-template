import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  name: string; price: string; period: string; description: string;
  features: string[]; cta: string; highlighted: boolean; index: number;
}

export default function PricingCard({ name, price, period, description, features, cta, highlighted, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`rounded-2xl p-8 flex flex-col ${
        highlighted
          ? 'bg-gradient-to-b from-accent-500/20 to-zinc-900/50 border-2 border-accent-500/50 ring-1 ring-accent-500/20'
          : 'bg-zinc-900/50 border border-zinc-800'
      }`}
    >
      <h3 className="text-lg font-bold text-white">{name}</h3>
      <p className="text-sm text-zinc-500 mt-1">{description}</p>
      <div className="mt-6 mb-6">
        <span className="text-4xl font-black text-white">{price}</span>
        <span className="text-zinc-500">{period}</span>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm text-zinc-300">
            <Check className="w-4 h-4 text-accent-400 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-xl font-semibold transition-colors ${
        highlighted ? 'bg-accent-600 hover:bg-accent-500 text-white' : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300'
      }`}>
        {cta}
      </button>
    </motion.div>
  );
}
