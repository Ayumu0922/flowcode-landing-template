import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, Activity, Globe } from 'lucide-react';

const stats = [
  { icon: Users, value: '10,000+', label: 'アクティブユーザー' },
  { icon: Activity, value: '99.99%', label: '稼働率' },
  { icon: Globe, value: '50+', label: 'インテグレーション' },
];

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } },
  item: { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } },
};

export default function Hero() {
  return (
    <section data-fc-id="Hero-root" className="relative py-28 md:py-40 px-6 overflow-hidden">
      {/* Atmospheric orbs */}
      <div data-fc-id="Hero-orb-1" className="absolute top-[-20%] left-[15%] w-[500px] h-[500px] rounded-full bg-accent-500/15 blur-[120px] animate-orb pointer-events-none" />
      <div data-fc-id="Hero-orb-2" className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px] animate-orb-alt pointer-events-none" />
      <div data-fc-id="Hero-orb-3" className="absolute top-[30%] right-[30%] w-[300px] h-[300px] rounded-full bg-accent-400/8 blur-[80px] animate-pulse-glow pointer-events-none" />

      {/* Dot grid overlay */}
      <div data-fc-id="Hero-grid" className="absolute inset-0 dot-grid opacity-60" />

      {/* Radial fade */}
      <div data-fc-id="Hero-fade" className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,var(--color-accent-500)/12,transparent_70%)]" />

      <div data-fc-id="Hero-content" className="max-w-5xl mx-auto text-center relative">
        <motion.div variants={stagger.container} initial="initial" animate="animate">
          {/* Badge */}
          <motion.div variants={stagger.item} data-fc-id="Hero-badge" className="mb-8 inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-accent-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-400" />
              </span>
              <Sparkles className="w-3.5 h-3.5" />
              新機能リリース — v2.0
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={stagger.item}
            data-fc-id="Hero-headline"
            className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-[1.05] tracking-tight mb-7"
          >
            ビジネスを
            <br />
            <span className="bg-gradient-to-r from-accent-400 via-accent-300 to-blue-400 bg-clip-text text-transparent animate-shimmer">
              次のレベル
            </span>
            へ
          </motion.h1>

          {/* Subline */}
          <motion.p
            variants={stagger.item}
            data-fc-id="Hero-subline"
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            SaaSifyは、チームの生産性を最大化する次世代プラットフォーム。
            <br className="hidden md:block" />
            直感的な操作で、複雑なワークフローを簡単に自動化。
          </motion.p>

          {/* CTAs */}
          <motion.div variants={stagger.item} data-fc-id="Hero-ctas" className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              to="/pricing"
              data-fc-id="Hero-cta-primary"
              className="group relative bg-accent-600 hover:bg-accent-500 text-on-accent px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-[0_0_30px_-5px] shadow-accent-500/30 hover:shadow-accent-500/50"
            >
              無料で始める
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/features"
              data-fc-id="Hero-cta-secondary"
              className="group glass px-8 py-4 rounded-2xl font-semibold text-zinc-300 hover:text-foreground transition-all duration-300 hover:border-zinc-600"
            >
              機能を見る
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={stagger.item}
            data-fc-id="Hero-stats"
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} data-fc-id={`Hero-stat-${label}`} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent-400" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold text-foreground tracking-tight">{value}</p>
                  <p className="text-xs text-zinc-500">{label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
