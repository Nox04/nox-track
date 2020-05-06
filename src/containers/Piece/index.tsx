import React, { useEffect, useState } from 'react';
import Layout from '@src/components/layout';
import { useRouter } from 'next/router';
import PieceHeader from '@src/components/PieceSection/Header';
import useSWR, { mutate } from 'swr';
import { APIService } from '@src/services/api.service';
import Loading from '@src/components/Loading';
import { Piece } from '@src/types';
import PieceComments from '@src/components/PieceSection/PieceComments';

const CollectionComponent: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [formattedPiece, setFormattedPiece] = useState<Piece>();

  const { data: piece, error } = useSWR(slug ? `/piece/slug/${slug}` : null, APIService.getData);
  const { data: progress, error: errorProgress } = useSWR(
    slug ? `/piece/piece-status/${slug}` : null,
    APIService.getData,
  );

  useEffect(() => {
    setFormattedPiece({ ...piece, progress: progress?.userToPieces[0] });
  }, [piece, progress]);

  const validateData = async () => {
    await mutate(slug ? `/piece/piece-status/${slug}` : null);
  };

  return (
    <Layout>
      {!piece && <Loading />}
      {piece && (
        <>
          <PieceHeader piece={formattedPiece ? formattedPiece : piece} onUpdate={validateData} />
          <PieceComments piece={formattedPiece ? formattedPiece : piece} />
        </>
      )}
    </Layout>
  );
};

export default CollectionComponent;
