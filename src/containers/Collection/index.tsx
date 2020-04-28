import React from 'react';
import Layout from '@src/components/layout';
import { useRouter } from 'next/router';
import CollectionHeader from '@src/components/CollectionSection/Header';
import PieceCollection from '@src/components/CollectionSection/PieceCollection';
import useSWR from 'swr';
import { APIService } from '@src/services/api.service';
import Loading from '@src/components/Loading';

const CollectionComponent: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data: collection, error } = useSWR(`/collection/slug/${slug}`, APIService.getData);

  return (
    <Layout>
      {!collection && <Loading />}
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
