import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: 10000, suffix: '+', label: '企業が導入', prefix: '' },
  { value: 99.99, suffix: '%', label: '稼働率保証', prefix: '' },
  { value: 2400000, suffix: '', label: 'APIコール/日', prefix: '' },
  { value: 42, suffix: 'カ国', label: 'グローバル展開', prefix: '' },
];

function AnimatedCounter({ target, suffix, prefix }: { target: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1800;
          const start = Date.now();
          const step = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(eased * target);
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const formatted = target >= 10000
    ? Math.floor(count).toLocaleString()
    : target % 1 !== 0
    ? count.toFixed(2)
    : Math.floor(count).toString();

  return (
    <span ref={ref} data-fc-id="StatsSection-counter">
      {prefix}{formatted}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section data-fc-id="StatsSection-root" className="py-24 px-6 relative">
      <div data-fc-id="StatsSection-bg" className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/[0.03] to-transparent pointer-events-none" />
      <div data-fc-id="StatsSection-inner" className="max-w-5xl mx-auto">
        <div data-fc-id="StatsSection-grid" className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              data-fc-id={`StatsSection-item-${i}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </p>
              <p className="text-sm text-zinc-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
