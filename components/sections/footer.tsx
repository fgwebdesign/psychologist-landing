"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const t = useTranslations("Footer")

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/martinschweizer.psy/", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/martin-schweizer-arigon/", label: "LinkedIn" },
  ]

  const footerLinks = [
    { 
      title: "links.services", 
      items: [
        { key: "links.individual", href: "#services" },
        { key: "links.couples", href: "#services" },
        { key: "links.family", href: "#services" },
        { key: "links.online", href: "#services" }
      ] 
    },
    { 
      title: "links.resources", 
      items: [
        { key: "links.publications", href: "/publications" },
        { key: "links.faq", href: "#" },
        { key: "links.testimonials", href: "#" },
        { key: "links.research", href: "#" }
      ] 
    },
    { 
      title: "links.legal", 
      items: [
        { key: "links.privacy", href: "#" },
        { key: "links.terms", href: "#" },
        { key: "links.cookies", href: "#" },
        { key: "links.disclaimer", href: "#" }
      ] 
    },
  ]

  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4">{t("about.title")}</h3>
            <p className="mb-4 text-primary-foreground/80">{t("about.description")}</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
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
              <ul className="space-y-2">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {t(item.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>
            © 2025 {t("copyright")}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

