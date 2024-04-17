import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import Theme from '@/components/theme'
import ActiveSectionContextProvider from '@/context/active-section'
// import ActiveSectionContextProvider from '@/context/active-section'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Seths Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900`}>
        <ActiveSectionContextProvider>
          <Header/>
          {children}
        </ActiveSectionContextProvider>
        <Theme/>
        </body>
    </html>
  )
}
