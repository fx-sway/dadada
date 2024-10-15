import "./globals.css"

import { Metadata } from "next"

import localFont from "next/font/local"
import ReactQueryProvider from "@/components/providers/react-query-provider"

const geistSansFont = localFont({
  src: "../utils/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 200 300 400 500 600 700 800 900",
})

const geistMonospace = localFont({
  src: "../utils/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 200 300 400 500 600 700 800 900",
})

export const metadata: Metadata = {
  title: "Prisma | Добро пожаловать",
}

interface Properties {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: Readonly<Properties>) {
  const fontClassName = `${geistSansFont.variable} ${geistMonospace.variable} antialiased`

  return (
    <html lang="en">
      <body className={fontClassName}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  )
}
