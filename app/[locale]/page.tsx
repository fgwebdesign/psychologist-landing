import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Services from "@/components/sections/services"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"
import ProfessionalMemberships from "@/components/sections/professionalMemberships"
import Experience from "@/components/sections/experience"
import { Testimonials } from "@/components/Testimonials"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <About />
      <Experience />
      <ProfessionalMemberships />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  )
}

