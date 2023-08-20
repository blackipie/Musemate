'use client';
import { FC } from 'react';
import MenuSideBar from './Menu/SiderbarMenu';
import Footer from './Footer';
import { useMenu } from '../Providers/MenuProvider';

interface SideBarProps {}

const SideBar: FC<SideBarProps> = ({}) => {
    const { showMenu } = useMenu();
    return (
        <aside
            className={`${
                showMenu ? 'flex' : 'hidden'
            } lg:flex h-screen fixed w-screen sm:w-[300px] z-30 `}
        >
            {/* Sidebar Container */}

            <div className=" bg-neutral-900 lg:bg-inherit flex flex-col lg:m-5 w-full ">
                <MenuSideBar />
                <Footer/>

            </div>
            
        </aside>
    );
};

export default SideBar;