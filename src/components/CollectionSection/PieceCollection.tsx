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
    <div className="rounded-lg my-6 mx-auto p-4 bg-gray-700 md:flex text-white w-full lg:w-11/12 xl:w-3/4">
      <ul>
        {pieces.map((piece) => {
          return (
            <li key={piece.id}>
              <PieceCard piece={piece} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PieceCollection;
