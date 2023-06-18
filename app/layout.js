import Link from 'next/link'
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

      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>

      <body className={'min-h-screen flex flex-col relative ' + inter.className}>

        <header className='flex items-center justify-between sticky
        top-0 p-6 bg-slate-200 border-b border-solid border-blue-900
        shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8'>
          <Link href={'/'}>
            <h1 className='uppercase cursor-pointer hover:scale-110'>Shop</h1>
          </Link>
            <i className="fa-solid fa-cart-shopping cursor-pointer
              hover:text-slate-500"></i>
        </header>

        <div className="flex-1">
          {children}
        </div>

        <footer className='flex items-center flex-wrap justify-center
        border-t border-solid border-slate-300 p-4 md:p-8'>
          <div className="text-2xl sm:text-3xl md:text-4xl">
            <span className="pr-4">FOOTER</span>
            <Link href={'/'}
            target="_blank" rel="noopener noreferrer">
              <i className="fa-regular fa-envelope text-slate-700 hover:text-slate-500 cursor-pointer"></i>
            </Link>
            <Link href={'/'} 
            target="_blank" rel="noopener noreferrer">
              <i className="pl-4 fa-brands fa-github text-slate-700 hover:text-slate-500 cursor-pointer"></i>
            </Link>
          </div>
        </footer>

      </body>
    </html>
  )
}
