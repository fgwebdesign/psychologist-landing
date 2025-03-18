"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "next-intl"
import { MessageCircle, X } from "lucide-react"

type WhatsAppContact = {
  name: string
  translationKey: string
  number: string
  country: string
}

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const t = useTranslations("WhatsApp")

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const whatsappContacts: WhatsAppContact[] = [
    {
      name: "Uruguay",
      translationKey: "uruguay",
      number: "+59892543668",
      country: "🇺🇾"
    },
    {
      name: "UK",
      translationKey: "uk",
      number: "+447821848437",
      country: "🇬🇧"
    }
  ]

  const handleWhatsAppClick = (contact: WhatsAppContact) => {
    const whatsappUrl = `https://wa.me/${contact.number.replace(/\+/g, '')}`;
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg overflow-hidden w-72"
            >
              <div className="px-4 py-3 bg-green-500 text-white flex justify-between items-center">
                <span className="text-sm font-medium">{t("title")}</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="p-2">
                {whatsappContacts.map((contact, index) => (
                  <button
                    key={index}
                    onClick={() => handleWhatsAppClick(contact)}
                    className="w-full p-2 flex items-center gap-3 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <span className="text-xl">{contact.country}</span>
                    <div className="text-left">
                      <p className="text-sm font-medium text-gray-700">{t(contact.translationKey)}</p>
                      <p className="text-xs text-gray-500">{contact.number}</p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
} 