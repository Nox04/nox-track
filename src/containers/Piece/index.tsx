import React from 'react';
import Layout from '@src/components/layout';
import { useRouter } from 'next/router';
import PieceHeader from '@src/components/PieceSection/Header';
import useSWR from 'swr';
import { APIService } from '@src/services/api.service';
import Loading from '@src/components/Loading';

const CollectionComponent: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data: piece, error } = useSWR(`/piece/slug/${slug}`, APIService.getData);

  return (
    <Layout>
      {!piece && <Loading />}
      {piece && (
        <>
          <PieceHeader piece={piece} />
        </>
      )}
    </Layout>
  );
};

export default CollectionComponent;
