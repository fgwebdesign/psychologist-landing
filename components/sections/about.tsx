"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, Heart, Users, Star, Brain } from "lucide-react"

export default function About() {
  const t = useTranslations("About")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const stats = [
    { number: t("stats.years.number"), text: t("stats.years.text"), icon: Award },
    { number: t("stats.clients.number"), text: t("stats.clients.text"), icon: Users },
    { number: t("stats.hours.number"), text: t("stats.hours.text"), icon: Brain },
  ]

  return (
    <section id="about" className="w-full py-20 px-4 md:px-12 bg-gradient-to-b from-background to-background/90">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-blue-400 mb-4 tracking-tight">{t("title")}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">{t("subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Imagen y estadísticas */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeIn}
            className="space-y-8"
          >
            {/* Contenedor de la imagen */}
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent rounded-2xl z-0" />
              <Image
                src="/martin.png"
                alt="Martin Schweizer - Clinical Psychologist"
                fill
                className="object-cover object-[center_35%] z-10"
                priority
              />
              <div className="absolute inset-0 border-2 border-blue-400/20 rounded-2xl z-20" />
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <Card key={index} className="border border-blue-900/10 bg-background/50 backdrop-blur">
                    <CardContent className="p-4 text-center">
                      <Icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-blue-400 mb-1">{stat.number}</p>
                      <p className="text-sm text-muted-foreground">{stat.text}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </motion.div>

          {/* Contenido principal */}
          <div className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              variants={fadeIn}
              className="space-y-6"
            >
              <h3 className="text-2xl font-medium text-blue-400">{t("greeting")}</h3>
              <p className="text-lg leading-relaxed font-light">{t("intro")}</p>
            </motion.div>

            {/* Experiencia NHS */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              variants={fadeIn}
              className="space-y-4"
            >
              <h4 className="text-xl font-medium text-blue-400">{t("experience.title")}</h4>
              <p className="text-base leading-relaxed font-light">{t("experience.description")}</p>
            </motion.div>

            {/* Enfoque Terapéutico */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              variants={fadeIn}
              className="space-y-4"
            >
              <h4 className="text-xl font-medium text-blue-400">{t("approach.title")}</h4>
              <p className="text-base leading-relaxed font-light">{t("approach.description")}</p>
            </motion.div>

            {/* Misión */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              variants={fadeIn}
              className="space-y-4"
            >
              <h4 className="text-xl font-medium text-blue-400">{t("mission.title")}</h4>
              <p className="text-base leading-relaxed font-light">{t("mission.description")}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

