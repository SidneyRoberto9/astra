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
  reverse,
  children,
  className,
  delay = 0.2,
}: ContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: reverse ? -20 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.4, delay, ease: "easeInOut" }}
      className={cn("h-full w-full", className)}
    >
      {children}
    </motion.div>
  )
}

export default Container
