import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-background text-muted-foreground border-t">
            <div className="container px-4 md:px-6 py-8 mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    {/* Left Side - Status (Removed as per request) */}
                    <div />

                    {/* Right Side - Links */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
                        <Link href="/privacy" className="hover:text-foreground transition-colors">
                            Политика конфиденциальности
                        </Link>
                        <Link href="/terms" className="hover:text-foreground transition-colors">
                            Пользовательское соглашение
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-2 text-sm text-muted-foreground/60">
                    <p>&copy; 2026 ООО «КЬЮ БИ ЭС». Все права защищены.</p>
                    <p>ИНН 7736289024 / КПП 771501001</p>
                </div>
            </div>
        </footer>
    )
}
