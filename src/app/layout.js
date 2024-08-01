import { Manrope } from 'next/font/google'
import '@/styles/globals.css'
import { HeaderProvider } from '@/hooks/useHeader'
import {AuthProvider} from '@/hooks/useAuth'
import { Layout } from '@/components/Layouts/Main'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata = {
  title: 'Qlnkr',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <AuthProvider>
          <HeaderProvider>
            <Layout>
              {children}
            </Layout>
          </HeaderProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
