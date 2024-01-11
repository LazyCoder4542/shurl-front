import { Manrope } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
