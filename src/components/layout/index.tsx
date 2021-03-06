import React from 'react';
import Header from '@src/components/layout/Header';

const Layout: React.FC = (props) => {
  return (
    <div className="m-0 flex flex-col w-screen">
      <Header />
      <main className="container mx-auto w-full">{props.children}</main>
    </div>
  );
};

export default Layout;
