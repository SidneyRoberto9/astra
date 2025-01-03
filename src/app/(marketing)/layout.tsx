import { PropsWithChildren } from "react"

import Navbar from "@/components/globals/navbar"

const MarketingLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex w-full flex-col items-center">
      <Navbar />
      {children}
    </div>
  )
}

export default MarketingLayout
