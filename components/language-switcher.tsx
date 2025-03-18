"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useLocale } from "next-intl"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { motion } from "framer-motion"

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "en", name: "English", icon: "🇺🇸" },
    { code: "es", name: "Español", icon: "🇪🇸" },
    { code: "ru", name: "Русский", icon: "🇷🇺" },
  ]

  const handleLanguageChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
    setIsOpen(false)
  }

  const currentLanguage = languages.find(lang => lang.code === locale)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            variant="outline" 
            size="default"
            className="relative h-10 md:h-12 pl-4 pr-10 rounded-full border border-blue-800/20 bg-background/30 backdrop-blur hover:bg-blue-500/10 hover:border-blue-400/30 group transition-all duration-200"
          >
            <span className="text-xl mr-2">{currentLanguage?.icon}</span>
            <span className="font-medium text-base text-blue-400 group-hover:text-blue-300">{currentLanguage?.name}</span>
            <Globe className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
            <span className="sr-only">Switch language</span>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-[200px] text-base bg-background/95 backdrop-blur border border-blue-900/10 rounded-xl p-2 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 duration-200"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`
              flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200
              ${locale === language.code 
                ? "bg-blue-500/10 text-blue-400 font-medium" 
                : "hover:bg-blue-500/5 hover:text-blue-400 text-foreground/80"}
            `}
          >
            <span className="text-2xl transform transition-transform duration-200 group-hover:scale-110">{language.icon}</span>
            <span className="text-base">{language.name}</span>
            {locale === language.code && (
              <motion.div
                className="flex-1 flex justify-end"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <div className="h-2 w-2 rounded-full bg-blue-400" />
              </motion.div>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

