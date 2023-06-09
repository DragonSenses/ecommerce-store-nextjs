import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-commerce store',
  description: 'E-commerce store made with NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={
        'min-h-screen flex flex-col relative ' + inter.className
      }>
        <header className=''>HEADER</header>
        <div className="flex-1">
          {children}
        </div>
        <footer className=''>FOOTER</footer>
      </body>
    </html>
  )
}
