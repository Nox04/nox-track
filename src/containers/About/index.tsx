import React from 'react';
import Layout from '@src/components/layout';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="text-white flex justify-center">
        <h4 data-testid="helloH1" className="text-xl text-center m-4 w-full md:w-2/3">
          Noxtracking is a project to helping people to track their collections progress. It was
          originated by my personal frustration trying to find an application which allowed me to
          track my progress reading Stephen King books. I hope you enjoy it. You can make
          suggestions writing to:{' '}
          <a href="mailto:juan.angarita.11@gmail.com" className="text-blue-300">
            juan.angarita.11@gmail.com
          </a>
        </h4>
      </div>
    </Layout>
  );
};

export default About;
