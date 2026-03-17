'use client'

import Link from "next/link"
import { Phone } from "lucide-react"
import { useState } from "react"
import { LeadFormModal } from "./LeadFormModal"


export function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 mx-auto">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                            <Phone className="h-4 w-4" />
                        </div>
                        <span>QBS Звонки</span>
                    </Link>
                    <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
                        <Link href="#features" className="hover:text-foreground transition-colors">Возможности</Link>
                        <Link href="#how-it-works" className="hover:text-foreground transition-colors">Как это работает</Link>
                        <Link href="#analytics" className="hover:text-foreground transition-colors">Аналитика</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/app/" className="text-sm font-medium hover:text-primary transition-colors hidden sm:block">
                            Войти
                        </Link>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                        >
                            Запросить демо
                        </button>
                    </div>
                </div>
            </nav>
            <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} mode="demo" />
        </>
    )
}
