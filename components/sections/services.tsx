"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserRound, Building2, Brain, FileText, HandHelping, Lightbulb, Presentation, ListChecks, ArrowRight } from "lucide-react"

export default function Services() {
  const t = useTranslations("Services")

  const individualServices = [
    {
      icon: <Brain className="h-12 w-12 text-blue-400" />,
      title: "individual.psychotherapy.title",
      description: "individual.psychotherapy.description",
      items: [
        "individual.psychotherapy.items.anxiety",
        "individual.psychotherapy.items.depression",
        "individual.psychotherapy.items.ocd",
        "individual.psychotherapy.items.emotional",
        "individual.psychotherapy.items.mood",
        "individual.psychotherapy.items.schizophrenia",
        "individual.psychotherapy.items.ptsd"
      ]
    },
    {
      icon: <FileText className="h-12 w-12 text-blue-400" />,
      title: "individual.psychodiagnosis.title",
      description: "individual.psychodiagnosis.description",
    },
    {
      icon: <HandHelping className="h-12 w-12 text-blue-400" />,
      title: "individual.counseling.title",
      description: "individual.counseling.description",
      items: [
        "individual.counseling.items.personal",
        "individual.counseling.items.decision",
        "individual.counseling.items.social",
        "individual.counseling.items.resilience",
        "individual.counseling.items.professional",
        "individual.counseling.items.stress"
      ]
    }
  ]

  const businessServices = [
    {
      icon: <Lightbulb className="h-12 w-12 text-blue-400" />,
      title: "business.reflective.title",
      description: "business.reflective.description",
    },
    {
      icon: <Presentation className="h-12 w-12 text-blue-400" />,
      title: "business.workshops.title",
      description: "business.workshops.description",
      subtitle: "business.workshops.catalog",
      items: [
        "business.workshops.items.emotional",
        "business.workshops.items.anxiety",
        "business.workshops.items.burnout",
        "business.workshops.items.communication",
        "business.workshops.items.feedback",
        "business.workshops.items.conflict",
        "business.workshops.items.intelligence",
        "business.workshops.items.team",
        "business.workshops.items.custom"
      ]
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="services" className="w-full py-20 px-4 md:px-12 bg-gradient-to-b from-muted to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4  tracking-tight bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
            {t("title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            {t("subtitle")}
          </p>
        </motion.div>

        <Tabs defaultValue="individual" className="w-full mb-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 p-1 bg-blue-950/20">
            <TabsTrigger 
              value="individual" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white px-8 py-3 transition-all duration-300"
            >
              <UserRound className="h-5 w-5" />
              {t("forIndividuals")}
            </TabsTrigger>
            <TabsTrigger 
              value="business" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white px-8 py-3 transition-all duration-300"
            >
              <Building2 className="h-5 w-5" />
              {t("forCompanies")}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="individual">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {individualServices.map((service, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="group h-full transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 border border-blue-900/10 bg-background/50 backdrop-blur overflow-hidden">
                    <CardHeader className="relative">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500" />
                      <div className="relative z-10">
                        <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                          {service.icon}
                        </div>
                        <CardTitle className="text-2xl font-serif bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                          {t(service.title)}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4 relative z-10">
                      <CardDescription className="text-base font-light">
                        {t(service.description)}
                      </CardDescription>
                      
                      {service.items && (
                        <div className="mt-6">
                          <ul className="space-y-3">
                            {service.items.map((item, idx) => (
                              <li key={idx} className="flex items-start group/item">
                                <ArrowRight className="mr-2 h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover/item:translate-x-1" />
                                <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                                  {t(item)}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="business">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {businessServices.map((service, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="group h-full transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 border border-blue-900/10 bg-background/50 backdrop-blur overflow-hidden">
                    <CardHeader className="relative">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500" />
                      <div className="relative z-10">
                        <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                          {service.icon}
                        </div>
                        <CardTitle className="text-2xl font-serif bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                          {t(service.title)}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4 relative z-10">
                      <CardDescription className="text-base font-light">
                        {t(service.description)}
                      </CardDescription>
                      
                      {service.subtitle && (
                        <h4 className="font-medium text-lg mt-6 text-foreground font-serif">
                          {t(service.subtitle)}
                        </h4>
                      )}
                      
                      {service.items && (
                        <div className="mt-4">
                          <ul className="space-y-3">
                            {service.items.map((item, idx) => (
                              <li key={idx} className="flex items-start group/item">
                                <ArrowRight className="mr-2 h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0 transition-transform duration-300 group-hover/item:translate-x-1" />
                                <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                                  {t(item)}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
        
        <motion.div
          className="mt-12 text-center p-8 bg-blue-500/5 rounded-2xl border border-blue-400/10 max-w-3xl mx-auto backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-base font-light text-muted-foreground">
            {t("locationNote")}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

