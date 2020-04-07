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
        <ul className="flex items-center justify-between uppercase cursor-pointer">
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
