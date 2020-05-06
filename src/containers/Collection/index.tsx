import React, { useEffect, useState } from 'react';
import Layout from '@src/components/layout';
import { useRouter } from 'next/router';
import CollectionHeader from '@src/components/CollectionSection/Header';
import PieceCollection from '@src/components/CollectionSection/PieceCollection';
import useSWR, { mutate } from 'swr';
import { APIService } from '@src/services/api.service';
import Loading from '@src/components/Loading';
import { useAuthContext } from '@src/contexts/AuthContext';
import { Piece, UserPieceRelationship } from '@src/types';
import cloneDeep from 'lodash/cloneDeep';
import { getPiecesFromCollection } from '@src/utils/collections';
import { getInitialUserId } from '@src/services/auth.service';
import { PieceType } from '@src/services/piece.service';
import { clone } from '@babel/types';

const CollectionComponent: React.FC = () => {
  const router = useRouter();
  const { userData } = useAuthContext();
  const { slug } = router.query;
  const [pieces, setPieces] = useState<Piece[]>([]);
  const [userId, setUserId] = useState(() => getInitialUserId());

  const { data: collection, error } = useSWR(
    slug ? `/collection/slug/${slug}` : null,
    APIService.getData,
  );
  const { data: progress, error: errorProgress } = useSWR(
    slug ? `/user/${userId}/collection-status/${slug}` : null,
    APIService.getData,
  );

  useEffect(() => {
    if (userData?.id) {
      setUserId(userData.id);
    }
  }, [userData]);

  const validateData = async () => {
    await mutate(slug ? `/user/${userId}/collection-status/${slug}` : null);
  };

  useEffect(() => {
    const cloned = cloneDeep(collection);
    if (cloned) {
      const mappedPieces: Piece[] = getPiecesFromCollection(cloned).map((piece) => {
        const pieceProgress = progress?.userToPieces.find(
          (progressItem: UserPieceRelationship) => progressItem.pieceId === piece.id,
        );
        return { ...piece, progress: pieceProgress };
      });

      mappedPieces.sort((a, b) => {
        return a.year - b.year;
      });
      setPieces(cloneDeep(mappedPieces));
    }
  }, [collection, progress]);

  return (
    <Layout>
      {!collection && <Loading />}
      {collection && (
        <>
          <CollectionHeader collection={collection} pieces={pieces} />
          <PieceCollection pieces={pieces} onUpdateCard={validateData} type={PieceType.BOOK} />
          <PieceCollection pieces={pieces} onUpdateCard={validateData} type={PieceType.MOVIE} />
        </>
      )}
    </Layout>
  );
};

export default CollectionComponent;
