import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Play, Sparkles, Check, Zap, Shield, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FloatingOrbs } from "@/components/ui/Particles"
import { useRef } from "react"

const stats = [
  { value: "10x", label: "生産性向上" },
  { value: "99.9%", label: "稼働率" },
  { value: "2000+", label: "導入企業" },
  { value: "24/7", label: "サポート" },
]

const features = [
  { icon: Zap, text: "即座にセットアップ" },
  { icon: Shield, text: "エンタープライズセキュリティ" },
  { icon: Globe, text: "グローバル対応" },
]

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-screen"
    >
      {/* Animated background */}
      <FloatingOrbs />
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 grid-pattern" />

      <motion.div
        style={{ y, opacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="gradient" className="mb-6 glow-pulse">
              <Sparkles className="h-3 w-3 mr-1 animate-pulse" />
              新機能: AI自動化が登場
              <ArrowRight className="h-3 w-3 ml-1" />
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              ワークフローを
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="gradient-text block"
            >
              自動化する
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            FlowCodeは、あらゆるビジネスプロセスを自動化し、
            チームの生産性を10倍向上させる次世代プラットフォームです。
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm"
              >
                <feature.icon className="h-4 w-4 text-primary" />
                <span className="text-sm">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" className="group text-lg px-8 py-6 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow">
                無料で始める
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" variant="outline" className="group text-lg px-8 py-6 backdrop-blur-sm">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                デモを見る
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold gradient-text"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 1.2 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Hero Image / Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 md:mt-28 relative perspective-1000"
        >
          <motion.div
            whileHover={{ rotateX: 2, rotateY: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative rounded-2xl overflow-hidden border border-border shadow-2xl bg-card gradient-border"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <div className="aspect-video bg-gradient-to-br from-primary/10 via-violet-500/10 to-fuchsia-500/10 p-8">
              {/* Mock Dashboard */}
              <div className="h-full rounded-lg bg-card/50 backdrop-blur border border-border/50 p-4 flex flex-col gap-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20" />
                    <div className="h-4 w-32 bg-muted rounded" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 w-20 bg-muted rounded" />
                    <div className="h-8 w-8 bg-primary/20 rounded" />
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1 grid grid-cols-3 gap-4">
                  <div className="col-span-2 rounded-lg bg-muted/50 p-4">
                    <div className="flex gap-4 h-full">
                      {[1, 2, 3, 4].map((i) => (
                        <motion.div
                          key={i}
                          className="flex-1 rounded bg-primary/20"
                          initial={{ height: "40%" }}
                          animate={{ height: `${30 + Math.random() * 60}%` }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: i * 0.2 }}
                          style={{ alignSelf: "flex-end" }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-4 flex flex-col gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-8 bg-muted rounded" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 md:-top-10 md:-left-10 p-4 rounded-xl bg-card border shadow-xl backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 rounded-full bg-green-500"
              />
              <span className="text-sm font-medium">自動実行中</span>
              <Badge variant="secondary" className="text-xs">Active</Badge>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 p-4 rounded-xl bg-card border shadow-xl backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <div className="text-sm">
                <span className="text-muted-foreground">処理完了</span>
                <motion.span
                  className="font-bold text-primary ml-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  +247件
                </motion.span>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/2 -right-4 md:-right-8 p-3 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-xl text-white"
          >
            <Zap className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
