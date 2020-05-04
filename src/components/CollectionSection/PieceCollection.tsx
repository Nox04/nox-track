import React from 'react';
import { Piece } from '@src/types';
import PieceCard from '@src/components/CollectionSection/PieceCard';

interface PieceCollectionProps {
  pieces: Piece[];
}

const PieceCollection: React.FC<PieceCollectionProps> = ({ pieces }: PieceCollectionProps) => {
  return (
    <div className="rounded-lg my-6 mx-6 lg:mx-auto p-4 bg-gray-700 sm:flex flex-wrap text-white lg:w-11/12 xl:w-3/4">
      {pieces?.map((piece, index) => {
        return <PieceCard piece={piece} key={index} />;
      })}
    </div>
  );
};

export default PieceCollection;
