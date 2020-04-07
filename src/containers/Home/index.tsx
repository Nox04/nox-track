import React from 'react';
import Layout from '@src/components/layout';
import CollectionCard from '@src/components/CollectionCard';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="my-8 mx-2 px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
