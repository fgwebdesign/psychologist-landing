"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Footer from "@/components/sections/footer"

export default function FAQ() {
  const t = useTranslations("FAQ")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const questions = [
    { id: "q1", question: t("questions.q1.question"), answer: t("questions.q1.answer") },
    { id: "q2", question: t("questions.q2.question"), answer: t("questions.q2.answer") },
    { id: "q3", question: t("questions.q3.question"), answer: t("questions.q3.answer") },
    { id: "q4", question: t("questions.q4.question"), answer: t("questions.q4.answer") },
    { id: "q5", question: t("questions.q5.question"), answer: t("questions.q5.answer") },
    { id: "q6", question: t("questions.q6.question"), answer: t("questions.q6.answer") },
    { id: "q7", question: t("questions.q7.question"), answer: t("questions.q7.answer") },
    { id: "q8", question: t("questions.q8.question"), answer: t("questions.q8.answer") },
    { id: "q9", question: t("questions.q9.question"), answer: t("questions.q9.answer") },
    { id: "q10", question: t("questions.q10.question"), answer: t("questions.q10.answer") },
    { id: "q11", question: t("questions.q11.question"), answer: t("questions.q11.answer") }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center">
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
            <Accordion type="single" collapsible className="w-full">
              {questions.map((q, index) => (
                <motion.div
                  key={q.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  variants={fadeIn}
                >
                  <AccordionItem value={q.id} className="bg-card rounded-lg border border-blue-400/20 mb-4 overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 hover:bg-blue-400/5 text-left font-medium data-[state=open]:text-blue-400 data-[state=open]:bg-blue-400/10">
                      {q.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 text-muted-foreground">
                      {q.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
} 