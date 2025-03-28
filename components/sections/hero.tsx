"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const t = useTranslations("Hero")

  return (
    <section id="hero" className="w-full min-h-[calc(100vh-5rem)] relative overflow-hidden bg-gradient-to-br from-background via-background/90 to-blue-950/30">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-400/10 rounded-bl-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-600/5 rounded-tr-full blur-3xl" />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-8 md:py-24 relative z-10">
        <div className="flex-1 max-w-2xl mt-8 md:mt-0">
          <div className="relative">
            <div className="w-20 h-1 bg-blue-400 mb-6" />
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight mb-6">
              <span className="text-blue-400 font-light block">{t("title").split(' ')[0]}</span>
              <span className="text-white">{t("title").split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-xl font-light">
              {t("subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-5 sm:py-6 rounded-lg text-base sm:text-lg font-light tracking-wide"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t("bookButton")}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-6 sm:px-8 py-5 sm:py-6 rounded-lg text-base sm:text-lg font-light tracking-wide"
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t("learnMoreButton")}
              </Button>
            </div>
          </div>
        </div>

        <div className="flex-1 mt-12 md:mt-0 relative z-10 flex justify-center">
          <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/intro1.png"
              alt={t("imageAlt")}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 256px, 320px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
            <div className="absolute inset-0 border-4 border-blue-400/30 rounded-2xl z-20" />
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto fill-background/30">
          <path d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,69.3C672,64,768,96,864,96C960,96,1056,64,1152,48C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  )
}

