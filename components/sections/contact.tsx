"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Clock, Linkedin, Loader2 } from "lucide-react"
import { useState, useEffect } from "react"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"

export default function Contact() {
  const t = useTranslations("Contact")
  const [mounted, setMounted] = useState(false)
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: t("form.success.title"),
          description: t("form.success.description"),
          className: "bg-green-50 border-green-200",
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        })
      } else {
        throw new Error(data.error || 'Something went wrong')
      }
    } catch (error) {
      toast({
        title: t("form.error.title"),
        description: t("form.error.description"),
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: t("info.uruguay.title"),
      details: t("info.uruguay.phone"),
      hasAction: true,
      action: () => {
        if (typeof window !== "undefined") {
          window.open(`https://wa.me/${t("info.uruguay.phone").replace(/\+/g, '')}`, "_blank")
        }
      },
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: t("info.uk.title"),
      details: t("info.uk.phone"),
      hasAction: true,
      action: () => {
        if (typeof window !== "undefined") {
          window.open(`https://wa.me/${t("info.uk.phone").replace(/\+/g, '')}`, "_blank")
        }
      },
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: t("info.russia.title"),
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
      title: t("info.email.title"),
      details: t("info.email.address"),
      hasAction: true,
      action: () => {
        if (typeof window !== "undefined") {
          window.open(`mailto:${t("info.email.address")}`, "_blank")
        }
      },
    },
    {
      icon: <Linkedin className="h-5 w-5 text-primary" />,
      title: t("info.linkedin.title"),
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
                    <div className="mt-1 transition-colors group-hover:text-primary">{item.icon}</div>
                    <div>
                      <h3 className="font-medium text-foreground/90 group-hover:text-primary transition-colors">
                        {item.details}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">{item.title.includes("Contact.") ? "" : item.details}</p>
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

