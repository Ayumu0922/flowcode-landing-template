import { motion } from 'framer-motion';
import PricingCard from '../components/features/PricingCard';
import { plans } from '../data/pricing';

export default function PricingPage() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">料金プラン</h1>
          <p className="text-zinc-500">チームの規模に合わせて最適なプランをお選びください。</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} {...plan} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
