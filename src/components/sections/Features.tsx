import { motion } from "framer-motion"
import {
  Zap,
  Shield,
  BarChart3,
  Puzzle,
  Clock,
  Users,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Zap,
    title: "高速自動化",
    description: "ドラッグ&ドロップで簡単にワークフローを構築。コーディング不要で即座に自動化を開始。",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    icon: Puzzle,
    title: "500+連携",
    description: "Slack、Notion、Salesforceなど、500以上のアプリと簡単に連携。",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Shield,
    title: "エンタープライズセキュリティ",
    description: "SOC2、GDPR対応。エンドツーエンド暗号化でデータを保護。",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: BarChart3,
    title: "リアルタイム分析",
    description: "ワークフローのパフォーマンスをリアルタイムで監視し、最適化。",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Clock,
    title: "スケジュール実行",
    description: "定期実行やイベントトリガーで、完全自動のワークフローを実現。",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: Users,
    title: "チームコラボレーション",
    description: "チームでワークフローを共有・編集。権限管理も細かく設定可能。",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            すべてを<span className="gradient-text">自動化</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            FlowCodeは、あなたのビジネスプロセスを効率化するための
            すべての機能を備えています。
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className={`h-6 w-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
