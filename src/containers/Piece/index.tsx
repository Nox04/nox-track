import React, { useEffect, useState } from 'react';
import Layout from '@src/components/layout';
import { useRouter } from 'next/router';
import PieceHeader from '@src/components/PieceSection/Header';
import useSWR, { mutate } from 'swr';
import { APIService } from '@src/services/api.service';
import Loading from '@src/components/Loading';
import { useAuthContext } from '@src/contexts/AuthContext';
import { getInitialUserId } from '@src/services/auth.service';
import { Piece } from '@src/types';

const CollectionComponent: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { userData } = useAuthContext();
  const [userId, setUserId] = useState(() => getInitialUserId());
  const [formattedPiece, setFormattedPiece] = useState<Piece>();

  const { data: piece, error } = useSWR(slug ? `/piece/slug/${slug}` : null, APIService.getData);
  const { data: progress, error: errorProgress } = useSWR(
    slug ? `/user/${userId}/piece-status/${slug}` : null,
    APIService.getData,
  );

  useEffect(() => {
    if (userData?.id) {
      setUserId(userData.id);
    }
  }, [userData]);

  useEffect(() => {
    setFormattedPiece({ ...piece, progress });
  }, [piece, progress]);

  const validateData = async () => {
    await mutate(slug ? `/user/${userId}/piece-status/${slug}` : null);
  };

  return (
    <Layout>
      {!piece && <Loading />}
      {piece && (
        <>
          <PieceHeader piece={formattedPiece ? formattedPiece : piece} onUpdate={validateData} />
        </>
      )}
    </Layout>
  );
};

export default CollectionComponent;
