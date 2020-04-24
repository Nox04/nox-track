import React, { useEffect, useState } from 'react';
import Layout from '@src/components/layout';
import { useRouter } from 'next/router';
import { getCollectionBySlug } from '@src/services/collection.service';
import { Collection } from '@src/types';

const CollectionComponent: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [collection, setCollection] = useState<Collection>();

  useEffect(() => {
    const getData = async () => {
      if (typeof slug === 'string') {
        const collection = await getCollectionBySlug(slug);
        setCollection(collection);
      }
    };
    getData();
  }, [slug]);

  return (
    <Layout>
      <h1 data-testid="helloH1" className="text-xl text-center m-4 text-white">
        {collection?.name}
      </h1>
    </Layout>
  );
};

export default CollectionComponent;
