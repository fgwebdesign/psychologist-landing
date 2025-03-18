"use client"

import { useTranslations } from "next-intl"
import { Download } from "lucide-react"

export default function Publications() {
  const t = useTranslations("Publications")

  const publications = [
    {
      title: t("papers.first.title"),
      authors: t("papers.first.authors"),
      date: t("papers.first.date"),
      journal: t("papers.first.journal"),
      abstract: t("papers.first.abstract"),
      link: t("papers.first.link")
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">
        {t("title")}
      </h1>
      <p className="text-center text-gray-600 mb-12">
        {t("subtitle")}
      </p>
      <div className="max-w-4xl mx-auto">
        {publications.map((pub, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-6 border border-primary/20">
            <h2 className="text-2xl font-semibold mb-6 text-primary">{pub.title}</h2>
            <div className="space-y-3 mb-8 text-gray-300">
              <p className="flex items-center">
                <span className="font-medium mr-2 text-primary">Autores:</span> {pub.authors}
              </p>
              <p className="flex items-center">
                <span className="font-medium mr-2 text-primary">Fecha:</span> {pub.date}
              </p>
              <p className="flex items-center">
                <span className="font-medium mr-2 text-primary">Journal:</span> {pub.journal}
              </p>
              <p className="mt-4 text-gray-400">{pub.abstract}</p>
            </div>
            <div className="flex justify-center">
              <a
                href={`/documents/${pub.link}`}
                download
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                <Download className="w-6 h-6 mr-3" />
                {t("downloadButton")}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 