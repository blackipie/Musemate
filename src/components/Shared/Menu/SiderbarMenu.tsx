'use client'

import React from 'react'
import List from '@/components/Lists/ListOne';
import { usePathname } from 'next/navigation'
import { useMenu } from '../../Providers/MenuProvider';

import {

    LayoutDashboardIcon,
    X,
   FileStack,
    Users2,
    Code2
} from 'lucide-react';

const MenuSideBar = () => {
    const path = usePathname()
    const { showMenuVisibility } = useMenu();
    const menuItems = [
  { link: '/', icon: <LayoutDashboardIcon />, label: 'Home' },
  { link: '/docs', icon: <FileStack/>, label: 'Documents' },
  { link: '/our-team', icon: <Users2/>, label: 'Team Members' },
  { link: 'https://github.com/blackipie/Musemate', icon: <Code2/>, label: 'Code' },
];

  return (

      <div 
          className="flex relative flex-col font-semibold h-full p-5 sidebar rounded-xl  text-neutral-500  
          w-full overflow-y-auto scroll-style  "
            onClick={() => showMenuVisibility(false)}
        >
            <div className="block lg:hidden p-5 z-10 text-neutral-500 absolute right-0 top-0  cursor-pointer text-2xl">
                <X className={`text-neutral-500`} />
            </div>

          <div className='pt-12 lg:pt-0 '>
              {menuItems.map((item) => (
              <List link={item.link} effect="none" key={item.link}
     className={`font-semibold  ${ path===item.link?'ring-1 text-neutral-100 rounded-md ring-neutral-800 bg-neutral-800':''  }`}>
                {item.icon} {item.label}
              </List>

         ))}
         

      

        </div>
          </div>

    );
};

export default MenuSideBar