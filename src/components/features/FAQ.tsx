import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: '無料プランはどれくらい使えますか？', a: '無料プランでは最大3プロジェクトまで作成でき、基本的な分析機能とコミュニティサポートをご利用いただけます。クレジットカードの登録は不要です。' },
  { q: 'プランの変更はいつでもできますか？', a: 'はい、いつでもアップグレード・ダウングレードが可能です。アップグレードは即時反映、ダウングレードは次の請求サイクルから適用されます。' },
  { q: 'エンタープライズプランの料金は？', a: '組織の規模やニーズに応じてカスタム料金をご提案します。専任のアカウントマネージャーがお客様に最適なプランを設計いたします。' },
  { q: 'データのセキュリティは大丈夫ですか？', a: 'SOC 2 Type II認証取得済みで、すべてのデータはAES-256で暗号化されています。GDPR、個人情報保護法にも完全準拠しています。' },
  { q: '導入のサポートはありますか？', a: 'Proプラン以上では優先サポートをご利用いただけます。Enterpriseプランでは専任のカスタマーサクセスマネージャーが導入から運用まで伴走します。' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section data-fc-id="FAQ-root" className="py-24 px-6 md:px-10 lg:px-16">
      <div data-fc-id="FAQ-inner" className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          data-fc-id="FAQ-header"
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-black text-foreground tracking-tight mb-3">よくある質問</h2>
          <p className="text-zinc-500">ご不明な点がございましたら、お気軽にお問い合わせください。</p>
        </motion.div>

        <div data-fc-id="FAQ-list" className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              data-fc-id={`FAQ-item-${i}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                data-fc-id={`FAQ-trigger-${i}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors hover:bg-zinc-800/30"
              >
                <span className="text-sm font-medium text-foreground pr-4">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    data-fc-id={`FAQ-answer-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-zinc-400 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
