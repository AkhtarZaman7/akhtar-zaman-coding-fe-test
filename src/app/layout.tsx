import type { Metadata } from 'next'

import '@styles/main.scss'
import Header from '@components/header'
import Footer from '@components/footer'
import BreadCrumb from '@components/bread-crum'
import ProductsContextProvider from './context/products'

export const metadata: Metadata = {
  title: 'VideoShops Marketplace',
  description: 'VideoShops Marketplace',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ProductsContextProvider>
          <Header />
          <BreadCrumb />
          {children}
          <Footer />
        </ProductsContextProvider>
      </body>
    </html>
  )
}
