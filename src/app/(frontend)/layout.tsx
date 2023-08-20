
import './globals.css'
import type { Metadata } from 'next'
import {  Montserrat } from 'next/font/google'
import SideBar from '@/components/Shared/Sidebar'
import { MenuProvider } from '@/components/Providers/MenuProvider'
import Navbar from '@/components/Shared/Menu/Header'
const Monts = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Musemate',
  description: 'Helpful tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo-t.svg" type="image/x-icon" />
      </head>
    <body className={`${Monts.className} text-neutral-50 w-full h-full`} >

     <MenuProvider>
          <div className="flex w-full ">
              <SideBar />
               <main className="flex-1 w-full lg:pl-[300px]  p-4 pb-8">
                 <Navbar/>        
                   {children}
                </main>
          </div> 
      </MenuProvider>

      </body>
    </html>
  )
}
