"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { FileDown, ChevronLeft, ChevronRight } from "lucide-react"
import Footer from "@/components/sections/footer"
import { useState, useEffect } from "react"

export default function SelfHelp() {
  const t = useTranslations("SelfHelp")
  const [currentPage, setCurrentPage] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const itemsPerPage = 6;

  // Get guide entries from translations
  const guideEntries = Object.entries(t.raw("guides") as Record<string, any>);
  
  // Calculate total pages
  const totalPages = Math.ceil(guideEntries.length / itemsPerPage);
  
  // Get current guides to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentGuides = guideEntries.slice(indexOfFirstItem, indexOfLastItem);

  // Pagination handlers
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  // Handle hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t("title")}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("subtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isClient && currentGuides.map(([key, guide], index) => (
              <motion.div
                key={key}
                className="bg-card rounded-lg shadow-lg overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">{guide.title}</h3>
                  <p className="text-muted-foreground mb-6 h-16 line-clamp-3">{guide.description}</p>
                  <a
                    href={`/documents/${guide.filename}`}
                    download
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md transition-colors duration-300"
                  >
                    <FileDown className="h-5 w-5" />
                    <span>{t("downloadButton")}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination controls */}
          {isClient && totalPages > 1 && (
            <div className="mt-10 flex justify-center items-center gap-4">
              <button
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className={`flex items-center gap-1 px-4 py-2 rounded-md border ${
                  currentPage === 1 
                    ? 'border-gray-300 text-gray-400 cursor-not-allowed' 
                    : 'border-primary text-primary hover:bg-primary/10 transition-colors'
                }`}
              >
                <ChevronLeft className="h-4 w-4" />
                {t("pagination.prev")}
              </button>
              
              <span className="text-sm text-muted-foreground">
                {t("pagination.page")} {currentPage} / {totalPages}
              </span>
              
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-1 px-4 py-2 rounded-md border ${
                  currentPage === totalPages 
                    ? 'border-gray-300 text-gray-400 cursor-not-allowed' 
                    : 'border-primary text-primary hover:bg-primary/10 transition-colors'
                }`}
              >
                {t("pagination.next")}
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
} 