import "@/styles/globals.css"

import { Inter } from "next/font/google"
import { PropsWithChildren } from "react"

import { SITE_CONFIG } from "@/config"
import { cn } from "@/lib/utils"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata = SITE_CONFIG

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
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
    </ClerkProvider>
  )
}
