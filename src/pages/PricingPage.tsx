import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import PricingCard from '../components/features/PricingCard';
import FAQ from '../components/features/FAQ';

const plans = [
  {
    name: 'Free',
    price: '¥0',
    yearlyPrice: '¥0',
    period: '/月',
    description: '個人プロジェクトに最適',
    features: ['プロジェクト3件まで', 'ベーシック分析', 'コミュニティサポート', '1GBストレージ'],
    cta: '無料で始める',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '¥2,980',
    yearlyPrice: '¥29,800',
    period: '/月',
    description: '成長中のチームに',
    features: ['プロジェクト無制限', '高度な分析', '優先サポート', '100GBストレージ', 'カスタムドメイン', 'API アクセス'],
    cta: 'Proを始める',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'お問い合わせ',
    period: '',
    description: '大規模組織向け',
    features: ['全Pro機能', '専任サポート', '無制限ストレージ', 'SLA保証', 'SSO対応', 'カスタム統合'],
    cta: 'お問い合わせ',
    highlighted: false,
  },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <PageTransition>
      <div data-fc-id="PricingPage-root" className="py-28 px-6 md:px-10 lg:px-16 relative">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-500/8 blur-[120px] pointer-events-none" />

        <div data-fc-id="PricingPage-inner" className="max-w-6xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} data-fc-id="PricingPage-header" className="text-center mb-12">
            <span className="text-xs font-semibold text-accent-400 uppercase tracking-[0.2em] mb-3 block">Pricing</span>
            <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">料金プラン</h1>
            <p className="text-zinc-500 text-lg mb-8">チームの規模に合わせて最適なプランをお選びください。</p>

            {/* Billing toggle */}
            <div data-fc-id="PricingPage-toggle" className="inline-flex items-center gap-3 glass rounded-full px-2 py-1.5">
              <button
                onClick={() => setYearly(false)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  !yearly ? 'bg-accent-600 text-on-accent shadow-md' : 'text-zinc-400 hover:text-foreground'
                }`}
              >
                月払い
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  yearly ? 'bg-accent-600 text-on-accent shadow-md' : 'text-zinc-400 hover:text-foreground'
                }`}
              >
                年払い
                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                  2ヶ月無料
                </span>
              </button>
            </div>
          </motion.div>

          <div data-fc-id="PricingPage-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <PricingCard key={plan.name} {...plan} index={i} yearly={yearly} />
            ))}
          </div>
        </div>
      </div>

      <FAQ />
    </PageTransition>
  );
}
