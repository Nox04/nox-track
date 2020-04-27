import React, { useEffect, useState } from 'react';
import Layout from '@src/components/layout';
import { useRouter } from 'next/router';
import { getCollectionBySlug } from '@src/services/collection.service';
import { Collection } from '@src/types';
import CollectionHeader from '@src/components/CollectionSection/Header';
import PieceCollection from '@src/components/CollectionSection/PieceCollection';
import { Mixpanel } from '@src/services/mix-panel.service';

const CollectionComponent: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [collection, setCollection] = useState<Collection>();

  useEffect(() => {
    const getData = async () => {
      if (typeof slug === 'string') {
        const collection = await getCollectionBySlug(slug);
        Mixpanel.track('Visited Collection', { name: collection.name });
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
          <PieceCollection collection={collection} />
        </>
      )}
    </Layout>
  );
};

export default CollectionComponent;
