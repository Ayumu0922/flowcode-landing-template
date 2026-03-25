import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-transparent to-transparent" />
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" /> 新機能リリース
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
            ビジネスを<br />
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">次のレベル</span>へ
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10">
            SaaSifyは、チームの生産性を最大化する次世代プラットフォーム。
            直感的な操作で、複雑なワークフローを簡単に自動化できます。
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/pricing" className="bg-violet-600 hover:bg-violet-500 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors flex items-center gap-2">
              無料で始める <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/features" className="border border-zinc-700 hover:border-zinc-600 text-zinc-300 px-8 py-3.5 rounded-xl font-semibold transition-colors">
              機能を見る
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
