"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock, Linkedin } from "lucide-react"
import { useState, useEffect } from "react"

export default function Contact() {
  const t = useTranslations("Contact")
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "info.phone.title",
      details: t("info.phone.details"),
      hasAction: false,
      action: null,
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "info.email.title",
      details: t("info.email.details"),
      hasAction: false,
      action: null,
    },
    {
      icon: <Linkedin className="h-5 w-5 text-primary" />,
      title: "LinkedIn",
      details: "Martin Schweizer Arigon",
      hasAction: true,
      action: () => {
        if (typeof window !== "undefined") {
          window.open("https://www.linkedin.com/in/martin-schweizer-arigon/", "_blank")
        }
      },
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "info.hours.title",
      details: t("info.hours.details"),
      hasAction: false,
      action: null,
    },
  ]

  // Función segura para el onClick que comprueba si estamos en cliente
  const handleCardClick = (item: typeof contactInfo[0]) => {
    if (mounted && item.hasAction && item.action) {
      item.action()
    }
  }

  return (
    <section id="contact" className="w-full py-20 px-4 md:px-12 bg-muted">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t("title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("form.name")}</Label>
                    <Input id="name" placeholder={t("form.namePlaceholder")} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("form.email")}</Label>
                    <Input id="email" type="email" placeholder={t("form.emailPlaceholder")} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">{t("form.subject")}</Label>
                    <Input id="subject" placeholder={t("form.subjectPlaceholder")} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t("form.message")}</Label>
                    <Textarea id="message" placeholder={t("form.messagePlaceholder")} rows={5} />
                  </div>
                  <Button type="submit" className="w-full">
                    {t("form.submit")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  className={`${item.hasAction ? 'cursor-pointer hover:border-primary transition-colors' : ''}`}
                  onClick={() => handleCardClick(item)}
                >
                  <CardContent className="p-4 flex items-start space-x-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-medium">{index === 2 ? item.title : t(item.title)}</h3>
                      <p className="text-muted-foreground">{item.details}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

