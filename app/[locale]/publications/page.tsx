"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { FileText, Users, Calendar, Download } from "lucide-react"

const PublicationCard = ({
  title,
  authors,
  date,
  journal,
  abstract,
  link
}: {
  title: string
  authors: string
  date: string
  journal: string
  abstract: string
  link: string
}) => {
  const t = useTranslations("Publications")
  
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 border-blue-400/20 bg-background/50">
      <h3 className="text-xl font-semibold text-blue-400 mb-4">{title}</h3>
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="w-4 h-4" />
          <span>{authors}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-blue-400">
          <FileText className="w-4 h-4" />
          <span>{journal}</span>
        </div>
      </div>
      <p className="text-muted-foreground mb-4">{abstract}</p>
      <a 
        href={`/documents/${link}`}
        download
        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 transition-colors bg-blue-400/10 hover:bg-blue-400/20 px-4 py-2 rounded-lg"
      >
        <Download className="w-4 h-4" />
        {t("downloadButton")}
      </a>
    </Card>
  )
}

export default function Publications() {
  const t = useTranslations("Publications")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const publications = [
    {
      title: t("papers.first.title"),
      authors: t("papers.first.authors"),
      date: t("papers.first.date"),
      journal: t("papers.first.journal"),
      abstract: t("papers.first.abstract"),
      link: t("papers.first.link")
    }
    // Más publicaciones se pueden agregar aquí
  ]

  return (
    <section className="w-full py-20 px-4 md:px-12 bg-gradient-to-b from-background to-background/90">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-blue-400 mb-4 tracking-tight">
            {t("title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <PublicationCard {...pub} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 