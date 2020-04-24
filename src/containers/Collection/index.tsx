import React, { useEffect, useState } from 'react';
import Layout from '@src/components/layout';
import { useRouter } from 'next/router';
import { getCollectionBySlug } from '@src/services/collection.service';
import { Collection } from '@src/types';
import CollectionHeader from '@src/components/CollectionSection/Header';

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
      {collection && (
        <>
          <CollectionHeader collection={collection} />
        </>
      )}
    </Layout>
  );
};

export default CollectionComponent;
