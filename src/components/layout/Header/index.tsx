import React from 'react';
import Link from 'next/link';
import { useAuthContext } from '@src/contexts/AuthContext';

const Header: React.FC = () => {
  const { userData } = useAuthContext();
  return (
    <header className="w-screen flex bg-gray-800">
      <nav className="w-full flex justify-between">
        <div className="p-4">
          <Link href="/">
            <a className="text-2xl uppercase">
              <img src="/title.png" alt="logo" />
            </a>
          </Link>
        </div>
        <div className="block md:hidden mt-5 mr-4">
          <button className="flex items-center px-3 py-2 border rounded text-purple-300 border-purple-400 hover:text-white hover:border-white">
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
          <Link href={userData ? '/profile' : '/login'}>
            <li className="p-4 hover:bg-gray-900 leading-10 h-full">
              <a>{userData ? 'Profile' : 'Login'}</a>
            </li>
          </Link>
          <Link href="/about">
            <li className="p-4 hover:bg-gray-900 leading-10 h-full">
              <a>About</a>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
