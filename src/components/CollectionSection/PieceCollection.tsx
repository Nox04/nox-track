import React from 'react';
import { Collection, Piece } from '@src/types';
import PieceCard from '@src/components/CollectionSection/PieceCard';

interface PieceCollectionProps {
  collection: Collection;
}

const getPieces = (collection: Collection): Piece[] => {
  let pieces: Piece[] = [];

  pieces = collection.pieces;

  collection.collections?.forEach((recursiveCollection) => {
    getPieces(recursiveCollection)?.forEach((recursivePiece) => {
      pieces.push(recursivePiece);
    });
  });

  return pieces;
};

const PieceCollection: React.FC<PieceCollectionProps> = ({ collection }: PieceCollectionProps) => {
  const pieces: Piece[] = getPieces(collection);
  return (
    <div className="rounded-lg my-6 mx-6 lg:mx-auto p-4 bg-gray-700 sm:flex flex-wrap text-white lg:w-11/12 xl:w-3/4">
      {pieces.map((piece) => {
        return <PieceCard piece={piece} key={piece.id} />;
      })}
    </div>
  );
};

export default PieceCollection;
