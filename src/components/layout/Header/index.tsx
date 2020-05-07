import React, { useState } from 'react';
import Link from 'next/link';
import { AuthStatus, useAuthContext } from '@src/contexts/AuthContext';

enum MenuState {
  COLLAPSED = 'COLLAPSED',
  EXPANDED = 'EXPANDED',
}

const Header: React.FC = () => {
  const { authStatus, userData } = useAuthContext();
  const [state, setState] = useState<MenuState>(MenuState.COLLAPSED);

  const MenuItems = () => {
    return (
      <>
        <Link
          href={authStatus === AuthStatus.LOGGED_IN ? '/user/[id]' : '/login'}
          as={authStatus === AuthStatus.LOGGED_IN ? `/user/${userData?.id}` : '/login'}
        >
          <li className="p-4 hover:bg-gray-700 leading-10 h-full w-full">
            <a href={authStatus === AuthStatus.LOGGED_IN ? `/user/${userData?.id}` : '/login'}>
              {authStatus === AuthStatus.LOGGED_IN ? 'Profile' : 'Login'}
            </a>
          </li>
        </Link>
        <Link href="/about" as="/about">
          <li className="p-4 hover:bg-gray-700 leading-10 h-full w-full">
            <a href="/about">About</a>
          </li>
        </Link>
      </>
    );
  };

  const switchMenu = () => {
    if (state === MenuState.EXPANDED) {
      setState(MenuState.COLLAPSED);
    } else if (state === MenuState.COLLAPSED) {
      setState(MenuState.EXPANDED);
    }
  };

  return (
    <header className="w-screen flex flex-col bg-gray-800 text-white">
      <nav className="w-full flex justify-between">
        <div className="p-4">
          <Link href="/">
            <a className="text-2xl uppercase">
              <img src="/title.png" alt="logo" />
            </a>
          </Link>
        </div>
        <div className="block md:hidden mt-5 mr-4">
          <button
            className="flex items-center px-3 py-2 border rounded text-purple-300 border-purple-400 hover:text-white hover:border-white"
            onClick={switchMenu}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex items-center justify-between uppercase cursor-pointer">
          <MenuItems />
        </ul>
      </nav>
      <ul
        className={`${
          state === MenuState.EXPANDED ? 'flex' : 'hidden'
        } flex-col md:hidden items-center justify-between uppercase cursor-pointer`}
      >
        <MenuItems />
      </ul>
    </header>
  );
};

export default Header;
