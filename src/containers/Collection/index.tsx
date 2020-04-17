import React from 'react';
import Layout from '@src/components/layout';

interface CollectionProps {
  slug: string | string[];
}

const Collection: React.FC<CollectionProps> = (props: CollectionProps) => {
  return (
    <Layout>
      <h1 data-testid="helloH1" className="text-xl text-center m-4">
        {props.slug}
      </h1>
    </Layout>
  );
};

export default Collection;
