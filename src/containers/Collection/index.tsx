import React from 'react';
import Layout from '@src/components/layout';
import { useRouter } from 'next/router';

const Collection: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Layout>
      <h1 data-testid="helloH1" className="text-xl text-center m-4">
        {slug}
      </h1>
    </Layout>
  );
};

export default Collection;
