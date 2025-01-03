"use client"

import { motion } from "framer-motion"
import { PropsWithChildren } from "react"

import { cn } from "@/lib/utils"

interface ContainerProps extends PropsWithChildren {
  className?: string
  delay?: number
  reverse?: boolean
}

const Container = ({
  children,
  className,
  delay = 0.2,
  reverse,
}: ContainerProps) => {
  return (
    <motion.div
      className={cn("h-full w-full", className)}
      initial={{ opacity: 0, y: reverse ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: delay, duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  )
}

export default Container
