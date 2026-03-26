import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-accent-500/10 to-blue-500/10 border border-accent-500/20 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">今すぐ始めましょう</h2>
        <p className="text-zinc-400 mb-8">無料プランで今すぐスタート。クレジットカード不要。</p>
        <Link to="/pricing" className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-500 text-on-accent px-8 py-3.5 rounded-xl font-semibold transition-colors">
          無料で始める <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
