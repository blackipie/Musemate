'use client';
import {
    FC,
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';


interface MenuProviderProps {
    children: ReactNode;
}

const MenuContext = createContext({
    showMenu: false,
    showMenuVisibility: (_status: boolean) => {},
});

export const MenuProvider: FC<MenuProviderProps> = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false);
    useEffect(() => {
        showMenu
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'auto');
    }, [showMenu]);

    const showMenuVisibility = (status: boolean) => {
        setShowMenu(status);
    };
    return (
        <MenuContext.Provider value={{ showMenu, showMenuVisibility }}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => useContext(MenuContext);