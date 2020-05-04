import React, { useEffect, useState } from 'react';
import Layout from '@src/components/layout';
import { useRouter } from 'next/router';
import CollectionHeader from '@src/components/CollectionSection/Header';
import PieceCollection from '@src/components/CollectionSection/PieceCollection';
import useSWR from 'swr';
import { APIService } from '@src/services/api.service';
import Loading from '@src/components/Loading';
import { useAuthContext } from '@src/contexts/AuthContext';
import { Piece, UserPieceRelationship } from '@src/types';
import cloneDeep from 'lodash/cloneDeep';
import { getPiecesFromCollection } from '@src/utils/collections';

const CollectionComponent: React.FC = () => {
  const router = useRouter();
  const { userData } = useAuthContext();
  const { slug } = router.query;

  const [pieces, setPieces] = useState<Piece[]>([]);
  const { data: collection, error } = useSWR(`/collection/slug/${slug}`, APIService.getData);
  const { data: progress, error: errorProgress } = useSWR(
    `/user/${userData?.id}/collection-status/${slug}`,
    APIService.getData,
  );

  useEffect(() => {
    const cloned = cloneDeep(collection);
    if (cloned) {
      const mappedPieces: Piece[] = getPiecesFromCollection(cloned).map((piece) => {
        const pieceProgress = progress?.userToPieces.find(
          (progressItem: UserPieceRelationship) => progressItem.pieceId === piece.id,
        );
        return { ...piece, progress: pieceProgress };
      });

      setPieces(mappedPieces);
    }
  }, [collection, progress]);

  return (
    <Layout>
      {!collection && <Loading />}
      {collection && (
        <>
          <CollectionHeader collection={collection} pieces={pieces} />
          <PieceCollection pieces={pieces} />
        </>
      )}
    </Layout>
  );
};

export default CollectionComponent;
