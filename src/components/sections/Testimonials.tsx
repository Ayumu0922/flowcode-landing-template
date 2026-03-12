import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "田中 太郎",
    role: "CEO",
    company: "TechStartup Inc.",
    content:
      "FlowCodeを導入してから、チームの生産性が3倍になりました。特にSlackとの連携が素晴らしく、手動作業がほぼゼロになりました。",
    rating: 5,
  },
  {
    name: "佐藤 花子",
    role: "マーケティングマネージャー",
    company: "Growth Marketing Co.",
    content:
      "マーケティングオートメーションがこんなに簡単に実現できるとは思いませんでした。ROIは導入初月で200%を超えました。",
    rating: 5,
  },
  {
    name: "鈴木 一郎",
    role: "CTO",
    company: "Enterprise Corp.",
    content:
      "セキュリティ要件が厳しい弊社でも、SOC2対応で安心して導入できました。カスタマーサポートも迅速で助かっています。",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32">
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
            お客様の<span className="gradient-text">声</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            2,000社以上の企業がFlowCodeで業務効率化を実現しています。
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-violet-500" />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} @ {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-8">
            業界をリードする企業で活用されています
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50">
            {["Company A", "Company B", "Company C", "Company D", "Company E"].map(
              (company) => (
                <div
                  key={company}
                  className="text-xl font-bold text-muted-foreground"
                >
                  {company}
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
