import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import FeatureCard from '../components/features/FeatureCard';
import { features } from '../data/features';

export default function FeaturesPage() {
  return (
    <PageTransition>
      <div data-fc-id="FeaturesPage-root" className="py-28 px-6 relative">
        {/* Decorative orb */}
        <div className="absolute top-[-5%] right-[10%] w-[400px] h-[400px] bg-accent-500/8 blur-[120px] pointer-events-none" />

        <div data-fc-id="FeaturesPage-inner" className="max-w-6xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} data-fc-id="FeaturesPage-header" className="text-center mb-20">
            <span className="text-xs font-semibold text-accent-400 uppercase tracking-[0.2em] mb-3 block">Features</span>
            <h1 className="text-4xl md:text-6xl font-black text-foreground tracking-tight mb-5">すべての機能</h1>
            <p className="text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed">
              SaaSifyが提供する包括的な機能セットで、ビジネスのあらゆるニーズに対応します。
            </p>
          </motion.div>

          {/* Bento grid */}
          <div data-fc-id="FeaturesPage-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-2">
              <FeatureCard {...features[0]} index={0} large />
            </div>
            <div className="lg:col-span-2">
              <FeatureCard {...features[1]} index={1} large />
            </div>
            {features.slice(2).map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i + 2} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
