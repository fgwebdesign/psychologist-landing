"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock, Linkedin, Loader2, MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"
// import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"

// Utility function to detect mobile devices
const isMobileDevice = () => {
  if (typeof window === "undefined") return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

export default function Contact() {
  const t = useTranslations("Contact")
  const [mounted, setMounted] = useState(false)
  // const { toast } = useToast()
  // const [isSubmitting, setIsSubmitting] = useState(false)
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: ""
  // })
  
  useEffect(() => {
    setMounted(true)
  }, [])

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setIsSubmitting(true)

  //   try {
  //     const response = await fetch('/api/send', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     })

  //     const data = await response.json()

  //     if (response.ok) {
  //       toast({
  //         title: t("form.success.title"),
  //         description: t("form.success.description"),
  //         className: "bg-green-50 border-green-200",
  //       })
  //       // Reset form
  //       setFormData({
  //         name: "",
  //         email: "",
  //         subject: "",
  //         message: ""
  //       })
  //     } else {
  //       throw new Error(data.error || 'Something went wrong')
  //     }
  //   } catch (error) {
  //     toast({
  //       title: t("form.error.title"),
  //       description: t("form.error.description"),
  //       variant: "destructive",
  //     })
  //   } finally {
  //     setIsSubmitting(false)
  //   }
  // }

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target
  //   setFormData(prev => ({
  //     ...prev,
  //     [name]: value
  //   }))
  // }

  const formatPhoneNumber = (phone: string) => {
    return phone
      .replace(/\s+/g, '') // Remove spaces
      .replace(/[-()]/g, '') // Remove parentheses and hyphens
      .replace(/^\+/, '') // Remove leading plus sign
  }

  const openWhatsApp = (phone: string) => {
    const phoneNumber = formatPhoneNumber(phone)
    const url = isMobileDevice()
      ? `whatsapp://send?phone=${phoneNumber}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}`
    window.open(url, '_blank')
  }

  const contactInfo = [
    {
      icon: <MessageCircle className="h-5 w-5 text-green-500" />,
      title: "WhatsApp",
      details: t("info.uruguay.phone"),
      hasAction: true,
      action: () => {
        if (typeof window !== "undefined") {
          openWhatsApp(t("info.uruguay.phone"))
        }
      },
    },
    {
      icon: <MessageCircle className="h-5 w-5 text-green-500" />,
      title: "WhatsApp",
      details: t("info.uk.phone"),
      hasAction: true,
      action: () => {
        if (typeof window !== "undefined") {
          openWhatsApp(t("info.uk.phone"))
        }
      },
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      details: t("info.russia.phone"),
      hasAction: true,
      action: () => {
        if (typeof window !== "undefined") {
          window.open(`tel:${t("info.russia.phone")}`, "_blank")
        }
      },
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      details: "m.c.schweizerarigon@gmail.com",
      hasAction: true,
      action: () => {
        if (typeof window !== "undefined") {
          window.open(`mailto:m.c.schweizerarigon@gmail.com`, "_blank")
        }
      },
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-400">
        <path d="M21.5 4.5L2.5 9.5 8.5 12.5 12.5 20.5 15.5 12.5 21.5 9.5"></path>
        <path d="M8.5 12.5L15.5 7.5"></path>
      </svg>,
      title: "Telegram",
      details: "@schweizerpsy",
      hasAction: true,
      action: () => {
        if (typeof window !== "undefined") {
          window.open("https://t.me/schweizerpsy", "_blank")
        }
      },
    },
    {
      icon: <Linkedin className="h-5 w-5 text-primary" />,
      title: "LinkedIn",
      details: t("info.linkedin.name"),
      hasAction: true,
      action: () => {
        if (typeof window !== "undefined") {
          window.open(t("info.linkedin.url"), "_blank")
        }
      },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Removed form and replaced with full-width contact info grid */}
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className={cn(
                  "group transition-all duration-200 h-full",
                  item.hasAction && "cursor-pointer hover:border-primary hover:shadow-md"
                )}
                onClick={() => handleCardClick(item)}
              >
                <CardContent className="p-5 flex items-start space-x-4">
                  <div className="mt-1 transition-colors">{item.icon}</div>
                  <div>
                    <h3 className="font-medium text-foreground/90 group-hover:text-primary transition-colors">
                      {item.details}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">{t("form.name")}</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t("form.namePlaceholder")}
                      className="h-11 transition-colors focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">{t("form.email")}</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t("form.emailPlaceholder")}
                      className="h-11 transition-colors focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">{t("form.subject")}</Label>
                    <Input 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder={t("form.subjectPlaceholder")}
                      className="h-11 transition-colors focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">{t("form.message")}</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t("form.messagePlaceholder")}
                      className="min-h-[120px] transition-colors focus:border-primary resize-y"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className={cn(
                      "w-full h-11 text-base font-medium transition-all duration-200",
                      isSubmitting ? "opacity-90" : "hover:opacity-90"
                    )}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>{t("form.submitting")}</span>
                      </div>
                    ) : (
                      t("form.submit")
                    )}
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
                  className={cn(
                    "group transition-all duration-200",
                    item.hasAction && "cursor-pointer hover:border-primary hover:shadow-md"
                  )}
                  onClick={() => handleCardClick(item)}
                >
                  <CardContent className="p-4 flex items-start space-x-4">
                    <div className="mt-1 transition-colors">{item.icon}</div>
                    <div>
                      <h3 className="font-medium text-foreground/90 group-hover:text-primary transition-colors">
                        {item.details}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        */}
      </div>
    </section>
  )
}

