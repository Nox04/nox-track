import React from 'react';
import Layout from '@src/components/layout';
import { useAuthContext } from '@src/contexts/AuthContext';

const Home: React.FC = () => {
  const { userData } = useAuthContext();

  return (
    <Layout>
      <h1 data-testid="helloH1" className="text-xl m-4 text-center">
        {userData?.email || 'Guest'}
      </h1>
    </Layout>
  );
};

export default Home;
