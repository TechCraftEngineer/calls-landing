'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Check } from "lucide-react"

interface LeadFormModalProps {
    isOpen: boolean
    onClose: () => void
    mode: "demo" | "trial"
}

export function LeadFormModal({ isOpen, onClose, mode }: LeadFormModalProps) {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [employeeCount, setEmployeeCount] = useState<string | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [emailError, setEmailError] = useState("")

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setIsSuccess(false)
            setIsSubmitting(false)
            setName("")
            setPhone("")
            setEmail("")
            setEmployeeCount(null)
            setEmailError("")
        }
    }, [isOpen])

    const validateEmail = (value: string) => {
        // Stricter regex: must have @, domain, dot, and 2+ char extension
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!emailRegex.test(value)) {
            setEmailError("Пожалуйста, введите корректный адрес электронной почты")
            return false
        }
        setEmailError("")
        return true
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateEmail(email)) {
            return
        }

        setIsSubmitting(true)

        // Mock API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        console.log("Form Submitted:", { mode, name, phone, email, employeeCount })

        setIsSubmitting(false)
        setIsSuccess(true)

        // Close after success message
        setTimeout(() => {
            onClose()
        }, 3000)
    }

    // Phone masking logic (simple implementation)
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, "")
        if (value.startsWith("7") || value.startsWith("8")) value = value.slice(1)

        let formatted = ""
        if (value.length > 0) formatted += "+7"
        if (value.length > 0) formatted += " (" + value.substring(0, 3)
        if (value.length >= 4) formatted += ") " + value.substring(3, 6)
        if (value.length >= 7) formatted += "-" + value.substring(6, 8)
        if (value.length >= 9) formatted += "-" + value.substring(8, 10)

        setPhone(formatted)
    }

    const employeeOptions = ["1-10", "11-50", "51-200", "201+"]

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg overflow-hidden rounded-xl bg-background border shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 rounded-full p-2 opacity-70 ring-offset-background transition-opacity hover:opacity-100 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                        </button>

                        <div className="p-6 md:p-8">
                            {!isSuccess ? (
                                <>
                                    <div className="mb-6 space-y-2 text-center">
                                        <h2 className="text-2xl font-bold tracking-tight">
                                            {mode === "demo" ? "Запросить демо" : "Попробовать бесплатно"}
                                        </h2>

                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name & Phone Row */}
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                    Имя
                                                </label>
                                                <input
                                                    id="name"
                                                    required
                                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                    placeholder="Иван"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                            {(mode === "demo" || phone) && (
                                                <div className="space-y-2">
                                                    <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                        Телефон {mode === "trial" && <span className="text-muted-foreground font-normal">(необязательно)</span>}
                                                    </label>
                                                    <input
                                                        id="phone"
                                                        required={mode === "demo"}
                                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                        placeholder="+7 (999) 000-00-00"
                                                        value={phone}
                                                        onChange={handlePhoneChange}
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                E-mail
                                            </label>
                                            <div className="relative">
                                                <input
                                                    id="email"
                                                    type="email"
                                                    required
                                                    className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${emailError ? "border-red-500 focus-visible:ring-red-500" : "border-input"
                                                        }`}
                                                    placeholder="name@company.com"
                                                    value={email}
                                                    onChange={(e) => {
                                                        setEmail(e.target.value)
                                                        if (emailError) validateEmail(e.target.value)
                                                    }}
                                                    onBlur={(e) => validateEmail(e.target.value)}
                                                />
                                                {emailError && (
                                                    <span className="text-xs text-red-500 absolute -bottom-5 left-0">{emailError}</span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Employee Count Chips */}
                                        <div className="space-y-3">
                                            <label className="text-sm font-medium leading-none">
                                                Сколько сотрудников в компании?
                                            </label>
                                            <div className="flex flex-wrap gap-2">
                                                {employeeOptions.map((opt) => (
                                                    <button
                                                        key={opt}
                                                        type="button"
                                                        onClick={() => setEmployeeCount(opt)}
                                                        className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${employeeCount === opt
                                                            ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                                            : "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                                                            }`}
                                                    >
                                                        {opt}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting || !employeeCount}
                                            className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                                        >
                                            {isSubmitting ? "Отправка..." : (mode === "demo" ? "Запросить демо" : "Получить доступ")}
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-6 text-green-600 dark:text-green-500">
                                        <Check className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Заявка отправлена!</h3>
                                    <p className="text-muted-foreground max-w-xs mx-auto">
                                        Спасибо за интерес к QBS Звонки. Наш менеджер свяжется с вами в ближайшее время.
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
