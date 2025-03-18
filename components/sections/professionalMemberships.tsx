"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ProfessionalMemberships() {
  const t = useTranslations("ProfessionalMemberships")

  const memberships = [
    {
      name: "Russian Psychological Society",
      logo: "/images/rps.png",
      alt: "Russian Psychological Society logo",
      width: 160,
      height: 75
    },
    {
      name: "International Association of Cognitive Behavioural Therapy",
      logo: "/images/iacbt.png",
      alt: "IACBT logo",
      width: 160,
      height: 80
    },
    {
      name: "British Psychological Society",
      logo: "/images/bps.png",
      alt: "British Psychological Society logo",
      width: 160,
      height: 55
    },
    {
      name: "Ministerio de Salud de Uruguay",
      logo: "/images/msp.png",
      alt: "Ministerio de Salud Pública de Uruguay logo",
      width: 160,
      height: 80
    }
  ]

  return (
    <section id="professional-memberships" className="w-full py-16 px-4 md:px-12 bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">{t("title")}</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">{t("description")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {memberships.map((membership, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111827] rounded-lg p-6 flex flex-col items-center justify-center h-48 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center h-24 mb-4">
                <Image
                  src={membership.logo}
                  alt={membership.alt}
                  width={membership.width}
                  height={membership.height}
                  className="object-contain"
                />
              </div>
              <p className="text-center text-sm font-medium">{membership.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 