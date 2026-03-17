'use client'

import { motion } from "framer-motion"
import { Play } from "lucide-react"

export function VideoSection() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl">
                <div className="flex flex-col items-center text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto space-y-4"
                    >
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                            Посмотрите, как это работает
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Узнайте за 2 минуты, как QBS Звонки помогают увеличивать продажи и контролировать качество.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl bg-black/5 border border-white/10 group cursor-pointer"
                    >
                        {/* Placeholder Content */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                            <div className="text-center p-6">
                                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors backdrop-blur-sm">
                                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <Play className="w-8 h-8 text-white fill-current ml-1" />
                                    </div>
                                </div>
                                <h3 className="text-white font-medium text-xl mb-2">Видео демонстрация сервиса</h3>
                                <p className="text-gray-400">Скоро здесь появится видео</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
