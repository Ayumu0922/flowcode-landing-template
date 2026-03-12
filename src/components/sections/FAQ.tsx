import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "FlowCodeとは何ですか？",
    answer:
      "FlowCodeは、ビジネスプロセスを自動化するためのノーコードプラットフォームです。ドラッグ&ドロップで簡単にワークフローを構築し、500以上のアプリケーションと連携できます。",
  },
  {
    question: "無料プランでどこまでできますか？",
    answer:
      "無料プランでは、月100タスクまで、5つのワークフローを作成できます。基本的な連携機能も利用可能で、小規模なチームや個人利用には十分な機能を提供しています。",
  },
  {
    question: "どのようなアプリと連携できますか？",
    answer:
      "Slack、Notion、Salesforce、Google Workspace、Microsoft 365、Asana、Trelloなど、500以上のアプリケーションと連携可能です。また、Webhookを使用したカスタム連携も可能です。",
  },
  {
    question: "セキュリティは大丈夫ですか？",
    answer:
      "FlowCodeはSOC2 Type II認証を取得しており、GDPR、CCPAにも準拠しています。すべてのデータはエンドツーエンドで暗号化され、定期的なセキュリティ監査を実施しています。",
  },
  {
    question: "サポートはどのように受けられますか？",
    answer:
      "Starterプランではコミュニティサポート、Proプランでは優先メールサポート、Enterpriseプランでは専任のカスタマーサクセスマネージャーが対応します。また、充実したドキュメントとビデオチュートリアルも用意しています。",
  },
  {
    question: "トライアル期間中にキャンセルできますか？",
    answer:
      "はい、14日間の無料トライアル期間中はいつでもキャンセル可能です。クレジットカード情報の入力も不要で、気軽にお試しいただけます。",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            よくある<span className="gradient-text">質問</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
