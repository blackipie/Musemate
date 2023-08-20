'use client';
import { Contact,  Kanban,  Menu, Underline } from 'lucide-react';
import { FC } from 'react';
import { useMenu } from '../../Providers/MenuProvider';
import Button from '../../Buttons/ButtonOne';
import { useRouter } from 'next/navigation';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
    
    const router = useRouter()
    const { showMenu, showMenuVisibility } = useMenu();
    return (
        <>
        
       <nav className="flex sticky mb-4 gap-x-2 shadow-md bg-body top-0 z-20 p-5  justify-between">
         <div className=''>
         <div className='flex items-center cursor-pointer hover:opacity-80  text-neutral-100 font-extrabold text-md sm:text-2xl'
                        onClick={() => router.push('/')} >
               <Kanban color='red' strokeWidth={3.5} size={28}/>  <span className='flex items-center'>usemate.</span>
                </div>   
          </div>
            <div className="flex items-center gap-5">
                <Button onClick={() => router.push('https://shafin.vercel.app')}  formTarget='_blank'>
                    Contact <Contact size={16}/>
                </Button>

                <button
                    onClick={() => showMenuVisibility(!showMenu)}
                    type="button"
                >
                    <Menu className="flex lg:hidden cursor-pointer hover:text-primary transition-colors" />
                </button>
            </div>
            </nav>

        </>
    );
};

export default Navbar;