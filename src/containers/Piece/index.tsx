import React, { useEffect, useState } from 'react';
import Layout from '@src/components/layout';
import { useRouter } from 'next/router';
import { getCollectionBySlug } from '@src/services/collection.service';
import { Piece } from '@src/types';
import PieceHeader from '@src/components/PieceSection/Header';

const CollectionComponent: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [collection, setCollection] = useState<Piece>();

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
          <PieceHeader piece={collection} />
        </>
      )}
    </Layout>
  );
};

export default CollectionComponent;
