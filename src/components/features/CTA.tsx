import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section data-fc-id="CTA-root" className="py-28 px-6 relative overflow-hidden">
      {/* Atmospheric glow */}
      <div data-fc-id="CTA-glow" className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-accent-500/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        data-fc-id="CTA-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative"
      >
        <div className="relative glass-strong rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
          {/* Gradient edges */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-500/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              data-fc-id="CTA-icon"
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent-500/10 mb-6"
            >
              <Sparkles className="w-7 h-7 text-accent-400" />
            </motion.div>
            <h2 data-fc-id="CTA-title" className="text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight">
              今すぐ始めましょう
            </h2>
            <p data-fc-id="CTA-desc" className="text-zinc-400 mb-10 text-lg max-w-xl mx-auto">
              無料プランで今すぐスタート。クレジットカード不要。
              <br />
              セットアップは30秒で完了します。
            </p>
            <div data-fc-id="CTA-actions" className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/pricing"
                data-fc-id="CTA-primary"
                className="group bg-accent-600 hover:bg-accent-500 text-on-accent px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-[0_0_30px_-5px] shadow-accent-500/30 hover:shadow-accent-500/50"
              >
                無料で始める
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                data-fc-id="CTA-secondary"
                className="text-zinc-400 hover:text-foreground px-8 py-4 font-semibold transition-colors"
              >
                営業に相談する →
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
