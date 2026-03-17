'use client'

import { motion } from "framer-motion"
import { Building2, Landmark, Headphones, Briefcase } from "lucide-react"

export function UseCases() {
    const cases = [
        {
            icon: <Briefcase className="h-6 w-6" />,
            title: "Отдел продаж",
            description: "Контроль качества переговоров, оценка ценности лидов (1–5), рекомендации «какие вопросы задать». Выявляйте лучшие скрипты и обучайте новичков.",
            tags: ["Рост конверсии", "Оценка лидов"]
        },
        {
            icon: <Landmark className="h-6 w-6" />,
            title: "Банки и Финансы",
            description: "Соблюдение скриптов, оценка тональности и корректности общения. Контроль взыскания и продаж банковских продуктов.",
            tags: ["Комплаенс", "Тональность"]
        },
        {
            icon: <Building2 className="h-6 w-6" />,
            title: "Офисы и Бизнес",
            description: "Единая аналитика по всем звонкам компании. Кто звонил, что обсуждали, резюме разговора. Полезно для юристов, риелторов, услуг.",
            tags: ["Прозрачность", "Резюме"]
        },
        {
            icon: <Headphones className="h-6 w-6" />,
            title: "Колл-центры",
            description: "Массовая оценка операторов, поиск по транскриптам, обучение на примерах. Автоматизация контроля качества (QC).",
            tags: ["Масштабирование QC", "Обучение"]
        }
    ]

    return (
        <section className="py-24 bg-muted/50">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Кому подойдет QBS Звонки</h2>
                    <p className="text-muted-foreground text-lg">
                        Универсальное решение для любого бизнеса, где важны телефонные переговоры.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cases.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-background rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow"
                        >
                            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-muted-foreground text-sm mb-6 min-h-[80px]">
                                {item.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {item.tags.map(tag => (
                                    <span key={tag} className="text-xs font-medium px-2 py-1 bg-muted rounded-md text-muted-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
