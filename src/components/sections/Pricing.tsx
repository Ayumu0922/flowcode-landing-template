import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter",
    description: "個人や小規模チーム向け",
    price: "¥0",
    period: "永久無料",
    features: [
      "月100タスクまで",
      "5つのワークフロー",
      "基本連携",
      "コミュニティサポート",
    ],
    cta: "無料で始める",
    popular: false,
  },
  {
    name: "Pro",
    description: "成長中のチーム向け",
    price: "¥2,980",
    period: "/月",
    features: [
      "無制限タスク",
      "無制限ワークフロー",
      "500+アプリ連携",
      "優先サポート",
      "チーム共有",
      "分析ダッシュボード",
    ],
    cta: "14日間無料トライアル",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "大規模組織向け",
    price: "お問い合わせ",
    period: "",
    features: [
      "Proの全機能",
      "カスタム連携開発",
      "SLA保証",
      "専任サポート",
      "オンプレミス対応",
      "セキュリティ監査",
    ],
    cta: "営業に相談",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/30">
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
            シンプルな<span className="gradient-text">料金体系</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            チームの規模に合わせて、最適なプランをお選びください。
            いつでもアップグレード可能です。
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={cn(
                  "relative h-full",
                  plan.popular && "border-primary shadow-lg scale-105"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="gradient">人気No.1</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-2">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </CardHeader>

                <CardContent className="text-center">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
