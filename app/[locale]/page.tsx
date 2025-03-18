import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Services from "@/components/sections/services"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"
import ProfessionalMemberships from "@/components/sections/professionalMemberships"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <About />
      <ProfessionalMemberships />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}

