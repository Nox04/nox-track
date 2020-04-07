import React from 'react';
import Layout from '@src/components/layout';

const About: React.FC = () => {
  return (
    <Layout>
      <h1 data-testid="helloH1" className="text-xl text-center m-4">
        Let's go.
      </h1>
    </Layout>
  );
};

export default About;
