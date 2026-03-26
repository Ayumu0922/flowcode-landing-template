import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import FeatureCard from '../components/features/FeatureCard';
import { features } from '../data/features';

export default function FeaturesPage() {
  return (
    <PageTransition>
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">すべての機能</h1>
          <p className="text-zinc-500 max-w-2xl mx-auto">SaaSifyが提供する包括的な機能セットで、ビジネスのあらゆるニーズに対応します。</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </div>
    </PageTransition>
  );
}
