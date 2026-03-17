'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { CheckCircle2, X, ZoomIn } from "lucide-react"

export function Features() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    // Handle ESC key to close lightbox
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedImage(null)
        }
        window.addEventListener("keydown", handleEsc)
        return () => window.removeEventListener("keydown", handleEsc)
    }, [])

    const features = [
        {
            title: "1. Расшифровка звонков",
            description: "Сервис автоматически расшифровывает все звонки и анализирует их по многим параметрам. Вы получаете полный текст разговора с разделением по ролям (Менеджер/Клиент).",
            screenshot: "/screenshots/screenshot1.png",
            points: [
                "Высокая точность транскрибации",
                "Разделение спикеров (диаризация)",
                "Поддержка русского языка"
            ]
        },
        {
            title: "2. Ценность звонка",
            description: "ИИ быстро оценит ценность звонка для компании по шкале от 1 до 5. Разговор с автоответчиком или очень короткий получит низкую ценность. Отсортируйте звонки по ценности и не тратьте время на изучение пустых разговоров.",
            screenshot: "/screenshots/screenshot2.png",
            points: [
                "Автоматическая оценка лида (1-5)",
                "Фильтрация автоответчиков и спама",
                "Настраиваемые критерии ценности под вашу нишу"
            ]
        },
        {
            title: "3. Вывод и резюме",
            description: "Краткое резюме разговора, составленное ИИ. Узнайте суть 10-минутного разговора за 5 секунд чтения. ИИ выделяет главные договоренности, боли клиента и итоги.",
            screenshot: "/screenshots/screenshot3.png",
            points: [
                "Мгновенное понимание сути разговора",
                "Выделение ключевых тем",
                "Экономия времени руководителя"
            ]
        },
        {
            title: "4. Рекомендации менеджеру",
            description: "ИИ составит персональные рекомендации менеджеру по улучшению скрипта. В личном кабинете менеджер каждый день читает рекомендации, и качество разговора улучшается — ИИ оценивает прогресс.",
            screenshot: "/screenshots/screenshot4.png",
            points: [
                "Персональный коучинг сотрудников",
                "Работа над ошибками в скриптах",
                "Отслеживание прогресса обучения"
            ]
        },
        {
            title: "5. Статистика эффективности",
            description: "Экран статистики показывает эффективность работы менеджеров. Сравнивайте сотрудников по количеству звонков, средней оценке качества и конверсии.",
            screenshot: "/screenshots/screenshot5.png",
            points: [
                "Рейтинг сотрудников",
                "Динамика качества звонков",
                "Прозрачные KPI отдела продаж"
            ]
        },
        {
            title: "6. Телеграмм отчеты",
            description: "Получайте управленческие инсайты в ежедневном телеграмм отчете. Краткая сводка за день: количество звонков, лучшие сотрудники, проблемные зоны.",
            screenshot: "/screenshots/screenshot6.png",
            points: [
                "Ежедневная сводка в мессенджер",
                "Главные цифры дня под рукой",
                "Оперативный контроль без входа в CRM"
            ]
        }
    ]

    return (
        <section id="features" className="py-24 bg-background relative">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-5xl mb-6">Возможности сервиса</h2>
                    <p className="text-muted-foreground text-xl">
                        Полный цикл автоматизации контроля качества: от записи звонка до управленческих решений.
                    </p>
                </div>

                <div className="space-y-32">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className={`flex flex-col gap-12 items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                } min-h-[80vh]`}
                        >
                            <div className="flex-1 space-y-8">
                                <h3 className="text-3xl md:text-4xl font-bold">{feature.title}</h3>
                                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                                    {feature.description}
                                </p>
                                <ul className="space-y-4">
                                    {feature.points.map((point, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-lg">
                                            <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex-1 w-full max-w-[500px] md:max-w-full">
                                <div
                                    className="relative rounded-xl border bg-background/50 shadow-2xl overflow-hidden backdrop-blur-sm ring-1 ring-white/10 group cursor-zoom-in transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/10"
                                    onClick={() => setSelectedImage(feature.screenshot)}
                                >
                                    {/* Window Header */}
                                    <div className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 border-b bg-muted/40 backdrop-blur-md">
                                        <div className="flex gap-1.5 md:gap-2">
                                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80 shadow-sm" />
                                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80 shadow-sm" />
                                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80 shadow-sm" />
                                        </div>
                                        <div className="ml-2 md:ml-4 h-4 md:h-5 w-full max-w-[150px] md:max-w-[200px] rounded-md bg-muted/40 hidden sm:block" />
                                    </div>

                                    <div className="relative bg-muted/20">
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                            <ZoomIn className="text-white w-10 h-10 md:w-12 md:h-12 drop-shadow-lg" />
                                        </div>
                                        <Image
                                            src={feature.screenshot}
                                            alt={feature.title}
                                            width={1600}
                                            height={1200}
                                            className="w-full h-auto object-contain max-h-[50vh] md:max-h-[70vh]"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12 cursor-zoom-out"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2 z-50"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8 md:w-10 md:h-10" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Full size preview"
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
