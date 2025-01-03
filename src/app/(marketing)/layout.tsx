import { PropsWithChildren } from "react"

import Footer from "@/components/globals/footer"
import Navbar from "@/components/globals/navbar"

const MarketingLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex w-full flex-col items-center">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default MarketingLayout
