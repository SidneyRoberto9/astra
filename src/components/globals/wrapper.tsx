import { PropsWithChildren } from "react"

import { cn } from "@/lib/utils"

interface WrapperProps extends PropsWithChildren {
  className?: string
}

const Wrapper = ({ className, children }: WrapperProps) => {
  return (
    <div
      className={cn(
        "mx-auto h-full w-full max-w-screen-xl px-4 md:px-0",
        className
      )}
    >
      {children}
    </div>
  )
}

export default Wrapper
