import "@/styles/globals.css"

import { Inter } from "next/font/google"
import { PropsWithChildren } from "react"

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
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  )
}
