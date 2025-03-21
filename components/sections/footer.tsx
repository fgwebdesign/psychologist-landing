"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"
import { motion } from "framer-motion"
import { Linkedin, ExternalLink } from "lucide-react"

export default function Footer() {
  const t = useTranslations("Footer")

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/martin-schweizer-arigon/", label: "LinkedIn" },
  ]

  const footerLinks = [
    { 
      title: "links.services", 
      items: [
        { key: "links.individual", href: "#services" },
        { key: "links.business", href: "#services" }
      ] 
    },
    { 
      title: "links.resources", 
      items: [
        { key: "links.faq", href: "/faq" },
        { key: "links.selfHelp", href: "/self-help" },
        { key: "links.publications", href: "/publications" },
        { key: "links.recommendations", href: "#" }
      ] 
    },
  ]

  return (
    <footer className="w-full relative bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-primary-foreground overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary-foreground blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primary-foreground blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4">{t("about.title")}</h3>
            <p className="mb-5 text-primary-foreground/90 leading-relaxed">{t("about.description")}</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:scale-110 transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: columnIndex * 0.1 }}
              className="mt-8 lg:mt-0"
            >
              <h3 className="text-xl font-bold mb-4">{t(column.title)}</h3>
              <ul className="space-y-3">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors group flex items-center"
                    >
                      <span className="group-hover:underline">{t(item.key)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            className="text-primary-foreground/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>© 2025 {t("copyright")}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="https://www.fgwebdesign.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-2 opacity-80 hover:opacity-100 transition-all duration-300"
            >
              <span className="text-xs text-primary-foreground/70 group-hover:text-primary-foreground transition-all">Developed by</span>
              <span className="text-sm font-medium border-b border-transparent group-hover:border-primary-foreground/30 transition-all">FG WEB DESIGNS</span>
              <ExternalLink className="h-3 w-3 transform group-hover:translate-x-0.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

