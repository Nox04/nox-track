import React from 'react';
import Layout from '@src/components/layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <h1 data-testid="helloH1" className="text-xl m-4 text-center">
        Home
      </h1>
    </Layout>
  );
};

export default Home;
