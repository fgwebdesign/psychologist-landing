"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Building2, Briefcase, Users, Home } from "lucide-react"
import { Card } from "@/components/ui/card"

const ExperienceCard = ({ 
  title, 
  dates,
  description, 
  icon: Icon,
  isLeft = false 
}: { 
  title: string
  dates: { role: string; period: string }[]
  description: string
  icon: any
  isLeft?: boolean 
}) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={fadeIn}
      className="w-full"
    >
      <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 border-blue-400/20 bg-background/50">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-400/10 flex items-center justify-center border border-blue-400/20 group-hover:bg-blue-400/20 transition-colors">
              <Icon className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400">{title}</h3>
              <div className="space-y-1 mt-2">
                {dates.map((date, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <span className="text-blue-400/80">{date.role}</span>
                    <span className="text-blue-400 font-medium ml-2">({date.period})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </Card>
    </motion.div>
  )
}

export default function Experience() {
  const t = useTranslations("Experience")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const experiences = [
    {
      title: t("ippm.title"),
      dates: [
        { role: t("ippm.role.clinical"), period: t("ippm.date") },
        { role: t("ippm.role.manager"), period: t("ippm.date") }
      ],
      description: t("ippm.description"),
      icon: Building2
    },
    {
      title: t("private.title"),
      dates: [
        { role: "", period: t("private.date") }
      ],
      description: t("private.description"),
      icon: Briefcase
    },
    {
      title: t("nhs.title"),
      dates: [
        { role: t("nhs.role"), period: t("nhs.date") }
      ],
      description: t("nhs.description"),
      icon: Building2
    },
    {
      title: t("shp.title"),
      dates: [
        { role: "", period: t("shp.date") }
      ],
      description: t("shp.description"),
      icon: Users
    },
    {
      title: t("tresCruces.title"),
      dates: [
        { role: "", period: t("tresCruces.date") }
      ],
      description: t("tresCruces.description"),
      icon: Home
    }
  ]

  return (
    <section id="experience" className="w-full py-20 px-4 md:px-12 bg-gradient-to-b from-background to-background/90">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-blue-400 mb-4 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  )
} 