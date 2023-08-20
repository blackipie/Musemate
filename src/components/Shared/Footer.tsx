import { Copyright } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
      <>
      
      <footer className='p-2 pt-4 lg:pb-0 lg:bottom-0'>
         <div className='flex text-xs gap-x-1 text-neutral-600'>
         Copyright <Copyright size={16}/> {new Date().getFullYear()}  Devsects  
        </div>
     </footer>
      
      
      </>
  )
}

export default Footer