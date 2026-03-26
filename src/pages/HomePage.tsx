import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import Hero from '../components/features/Hero';
import LogoCloud from '../components/features/LogoCloud';
import FeatureCard from '../components/features/FeatureCard';
import StatsSection from '../components/features/StatsSection';
import TestimonialCard from '../components/features/TestimonialCard';
import CTA from '../components/features/CTA';
import { features } from '../data/features';
import { testimonials } from '../data/testimonials';

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <LogoCloud />

      {/* Bento feature grid — full-width background, wide content */}
      <section data-fc-id="HomePage-features" className="py-28 relative">
        <div className="w-full px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              data-fc-id="HomePage-features-header"
              className="text-center mb-16"
            >
              <span className="text-xs font-semibold text-accent-400 uppercase tracking-[0.2em] mb-3 block">Features</span>
              <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight mb-4">
                すべてが揃った
                <br />
                オールインワン
              </h2>
              <p className="text-zinc-500 max-w-lg mx-auto text-lg">チームの生産性を向上させる、洗練された機能群</p>
            </motion.div>

            <div data-fc-id="HomePage-bento" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-2">
                <FeatureCard {...features[0]} index={0} large />
              </div>
              <div className="lg:col-span-2">
                <FeatureCard {...features[1]} index={1} large />
              </div>
              {features.slice(2, 6).map((f, i) => (
                <FeatureCard key={f.title} {...f} index={i + 2} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Testimonials — full-bleed background strip */}
      <section data-fc-id="HomePage-testimonials" className="py-28 relative">
        {/* Edge-to-edge subtle bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/0 via-zinc-900/40 to-zinc-900/0 pointer-events-none" />
        <div data-fc-id="HomePage-testimonials-glow" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[300px] bg-accent-500/5 blur-[120px] pointer-events-none" />

        <div className="relative w-full px-6 md:px-10 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              data-fc-id="HomePage-testimonials-header"
              className="text-center mb-16"
            >
              <span className="text-xs font-semibold text-accent-400 uppercase tracking-[0.2em] mb-3 block">Testimonials</span>
              <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight mb-4">
                お客様の声
              </h2>
              <p className="text-zinc-500 text-lg">導入企業から高い評価をいただいています</p>
            </motion.div>
            <div data-fc-id="HomePage-testimonials-grid" className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {testimonials.map((t, i) => (
                <TestimonialCard key={t.name} {...t} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </PageTransition>
  );
}
