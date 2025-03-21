"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "next-intl"
import { MessageCircle, X, Phone } from "lucide-react"

type ContactInfo = {
  number: string
}

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const t = useTranslations("WhatsApp")

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const contacts = [
    {
      number: "+59892543668"
    },
    {
      number: "+447821848437"
    },
    {
      number: "+79160688413"
    }
  ]

  const handleContactClick = (contact: ContactInfo) => {
    window.open(`tel:${contact.number}`, "_blank");
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
              <div className="px-4 py-3 bg-blue-500 text-white flex justify-between items-center">
                <span className="text-sm font-medium">{t("title")}</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="p-2">
                {contacts.map((contact, index) => (
                  <button
                    key={index}
                    onClick={() => handleContactClick(contact)}
                    className="w-full p-3 flex items-center gap-4 hover:bg-gray-50 rounded-md transition-colors text-left mb-1"
                  >
                    <span className="flex-shrink-0">
                      <Phone className="h-5 w-5 text-blue-500" />
                    </span>
                    <p className="text-sm font-medium text-gray-700">
                      {contact.number}
                    </p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-colors duration-300 hover:scale-105"
          aria-label="Contactar"
        >
          <Phone className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
} 