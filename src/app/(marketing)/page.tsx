import Features from "@/components/features"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import Newsletter from "@/components/newsletter"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"

export default function Page() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center px-4 py-8 md:px-0">
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <Newsletter />
    </section>
  )
}
