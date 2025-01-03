import "@/styles/globals.css"

import { Inter } from "next/font/google"
import { PropsWithChildren } from "react"

import { cn } from "@/lib/utils"

import type { Metadata } from "next"
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Astra",
  description: "A Landing Page App",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background text-foreground min-h-screen max-w-full overflow-x-hidden antialiased",
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  )
}
