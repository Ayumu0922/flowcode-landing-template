import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Zap,
  Shield,
  BarChart3,
  Puzzle,
  Clock,
  Users,
  ArrowRight,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Zap,
    title: "高速自動化",
    description: "ドラッグ&ドロップで簡単にワークフローを構築。コーディング不要で即座に自動化を開始。",
    gradient: "from-yellow-500 to-orange-500",
    iconBg: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: Puzzle,
    title: "500+連携",
    description: "Slack、Notion、Salesforceなど、500以上のアプリと簡単に連携。",
    gradient: "from-blue-500 to-cyan-500",
    iconBg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Shield,
    title: "エンタープライズセキュリティ",
    description: "SOC2、GDPR対応。エンドツーエンド暗号化でデータを保護。",
    gradient: "from-green-500 to-emerald-500",
    iconBg: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
  },
  {
    icon: BarChart3,
    title: "リアルタイム分析",
    description: "ワークフローのパフォーマンスをリアルタイムで監視し、最適化。",
    gradient: "from-purple-500 to-violet-500",
    iconBg: "bg-gradient-to-br from-purple-500/20 to-violet-500/20",
  },
  {
    icon: Clock,
    title: "スケジュール実行",
    description: "定期実行やイベントトリガーで、完全自動のワークフローを実現。",
    gradient: "from-orange-500 to-red-500",
    iconBg: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
  },
  {
    icon: Users,
    title: "チームコラボレーション",
    description: "チームでワークフローを共有・編集。権限管理も細かく設定可能。",
    gradient: "from-pink-500 to-rose-500",
    iconBg: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
  },
]

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <Zap className="h-4 w-4" />
            強力な機能
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            すべてを<span className="gradient-text">自動化</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            FlowCodeは、あなたのビジネスプロセスを効率化するための
            すべての機能を備えています。
          </p>
        </motion.div>

        {/* Features Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  {/* Gradient border effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                  {/* Top gradient line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />

                  <CardContent className="p-8 relative">
                    <motion.div
                      className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <Icon className={`h-7 w-7 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`} style={{ stroke: `url(#${feature.title})` }} />
                      <svg width="0" height="0">
                        <defs>
                          <linearGradient id={feature.title} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" className={`stop-${feature.gradient.split(' ')[0].replace('from-', '')}`} />
                            <stop offset="100%" className={`stop-${feature.gradient.split(' ')[1].replace('to-', '')}`} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {feature.description}
                    </p>

                    <motion.div
                      className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      詳しく見る
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
