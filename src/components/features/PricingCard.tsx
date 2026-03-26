import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  name: string;
  price: string;
  yearlyPrice?: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  index: number;
  yearly?: boolean;
}

export default function PricingCard({ name, price, yearlyPrice, period, description, features, cta, highlighted, index, yearly }: Props) {
  const displayPrice = yearly && yearlyPrice ? yearlyPrice : price;
  const displayPeriod = yearly && yearlyPrice ? '/年' : period;

  return (
    <motion.div
      data-fc-id={`PricingCard-${index}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      {/* Popular ribbon */}
      {highlighted && (
        <div data-fc-id="PricingCard-ribbon" className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-accent-600 text-on-accent text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-accent-600/30">
            人気No.1
          </span>
        </div>
      )}

      {/* Gradient border for highlighted */}
      {highlighted && (
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-accent-400/40 via-accent-500/20 to-transparent pointer-events-none" />
      )}

      <div
        data-fc-id={`PricingCard-inner-${index}`}
        className={`relative glass rounded-2xl p-8 flex flex-col h-full transition-all duration-300 group-hover:border-zinc-600 ${
          highlighted ? 'border-accent-500/30' : ''
        }`}
      >
        <h3 data-fc-id={`PricingCard-name-${index}`} className="text-lg font-bold text-foreground">{name}</h3>
        <p data-fc-id={`PricingCard-desc-${index}`} className="text-sm text-zinc-500 mt-1">{description}</p>

        <div data-fc-id={`PricingCard-price-${index}`} className="mt-6 mb-6">
          <motion.span
            key={displayPrice}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-foreground tracking-tight"
          >
            {displayPrice}
          </motion.span>
          <span className="text-zinc-500 ml-1">{displayPeriod}</span>
        </div>

        <ul data-fc-id={`PricingCard-features-${index}`} className="space-y-3.5 mb-8 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
              <div className="mt-0.5 w-5 h-5 rounded-full bg-accent-500/10 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-accent-400" />
              </div>
              {f}
            </li>
          ))}
        </ul>

        <button
          data-fc-id={`PricingCard-cta-${index}`}
          className={`w-full py-3.5 rounded-xl font-semibold transition-all duration-300 ${
            highlighted
              ? 'bg-accent-600 hover:bg-accent-500 text-on-accent shadow-lg shadow-accent-600/20 hover:shadow-accent-500/30'
              : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-foreground'
          }`}
        >
          {cta}
        </button>
      </div>
    </motion.div>
  );
}
