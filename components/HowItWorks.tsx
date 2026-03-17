'use client'

import { motion } from "framer-motion"
import { ArrowDown, Database, FileAudio, FileText, BrainCircuit, Layout } from "lucide-react"

export function HowItWorks() {
    const steps = [
        {
            icon: <FileAudio className="h-8 w-8 text-primary" />,
            title: "1. Загрузка звонков",
            desc: "Интеграция с вашей IP-телефонией или API. Звонки поступают в систему автоматически.",
            color: "bg-blue-500/10 text-blue-500"
        },
        {
            icon: <FileText className="h-8 w-8 text-primary" />,
            title: "2. Транскрибация",
            desc: "Точный перевод речи в текст с разделением по спикерам (AssemblyAI / SaluteSpeech).",
            color: "bg-indigo-500/10 text-indigo-500"
        },
        {
            icon: <BrainCircuit className="h-8 w-8 text-primary" />,
            title: "3. AI-Анализ",
            desc: "DeepSeek оценивает качество, тональность, выявляет ценность и формирует саммари.",
            color: "bg-purple-500/10 text-purple-500"
        },
        {
            icon: <Layout className="h-8 w-8 text-primary" />,
            title: "4. Результат",
            desc: "Готовые отчеты, оценки и рекомендации в удобном дашборде для руководителя.",
            color: "bg-pink-500/10 text-pink-500"
        }
    ]

    return (
        <section id="how-it-works" className="py-24 border-t bg-background">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Как это работает</h2>
                    <p className="text-muted-foreground text-lg">
                        Полный цикл обработки звонка: от записи до конкретных рекомендаций по улучшению продаж.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col items-center text-center space-y-4"
                        >
                            <div className={`h-20 w-20 rounded-2xl flex items-center justify-center ${step.color} mb-4 relative z-10`}>
                                {step.icon}
                            </div>

                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-border -z-0">
                                    <div className="absolute right-0 -top-1 h-3 w-3 rounded-full bg-border" />
                                </div>
                            )}

                            <h3 className="text-xl font-bold">{step.title}</h3>
                            <p className="text-muted-foreground text-sm">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
