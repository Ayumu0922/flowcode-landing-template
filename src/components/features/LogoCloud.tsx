import { motion } from 'framer-motion';

const logos = [
  'TechCorp', 'StartupX', 'DesignLab', 'CloudBase', 'DataFlow',
  'NexGen', 'Synthwave', 'Quantum AI', 'MetaLabs', 'ZeroStack',
];

export default function LogoCloud() {
  return (
    <section data-fc-id="LogoCloud-root" className="py-16 px-6 border-y border-zinc-800/50 overflow-hidden">
      <div data-fc-id="LogoCloud-inner" className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          data-fc-id="LogoCloud-label"
          className="text-center text-xs font-medium text-zinc-500 uppercase tracking-[0.2em] mb-8"
        >
          1,000社以上の企業が導入
        </motion.p>
        <div data-fc-id="LogoCloud-track" className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={`${name}-${i}`}
                data-fc-id={`LogoCloud-logo-${i}`}
                className="flex items-center justify-center min-w-[160px] mx-6 py-3"
              >
                <span className="text-lg font-bold text-zinc-600 tracking-tight select-none whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
