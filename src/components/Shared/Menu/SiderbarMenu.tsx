'use client'

import React from 'react'
import List from '@/components/Lists/ListOne';
import { usePathname } from 'next/navigation'
import { useMenu } from '../../Providers/MenuProvider';

import {

    LayoutDashboardIcon,
    X,
    Users2,
    Code2,
    Files
} from 'lucide-react';

const MenuSideBar = () => {
    const path = usePathname()
    const { showMenuVisibility } = useMenu();
    const menuItems = [
  { link: '/', icon: <LayoutDashboardIcon />, label: 'Home' },
  { link: '/docs', icon: <Files />, label: 'Documents' },
  { link: '/our-team', icon: <Users2 />, label: 'Team Members' },
  { link: 'https://github.com/blackipie/Musemate', icon: <Code2 />, label: 'Code' },
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
     className={`font-semibold  ${ path===item.link?' text-white rounded-md  bg-neutral-800':''  }`}>
                 <span className={`${path===item.link&&' text-red-600'}`}> {item.icon}</span>
                  {item.label}
              </List>

         ))}
         

      

        </div>
          </div>

    );
};

export default MenuSideBar