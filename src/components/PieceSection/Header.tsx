import React from 'react';
import { Piece } from '@src/types';
import useWindowWidth from '@src/hooks/useWindowWidth';
import { minutesToHours } from '@src/utils/time';

interface PieceHeaderProps {
  piece: Piece;
}
const PieceHeader: React.FC<PieceHeaderProps> = ({ piece }: PieceHeaderProps) => {
  const width = useWindowWidth();
  return (
    <div className="rounded-lg my-6 mx-6 lg:mx-auto p-4 bg-gray-700 sm:flex sm:flex-wrap text-white lg:w-11/12 xl:w-3/4">
      <div
        className="bg-center bg-cover bg-no-repeat inline-block p-4 rounded-lg"
        style={{
          backgroundImage: `url(${piece.picture})`,
          height: width > 768 ? 350 : 420,
          width: width > 640 ? 250 : '100%',
        }}
      />
      <div className="flex px-4 flex-col">
        <h2 className="text-4xl font-medium text-center sm:text-left">{piece.name}</h2>
        <h2 className="text-xl">Approximated time: {minutesToHours(piece.minutes)} hours</h2>
      </div>
    </div>
  );
};

export default PieceHeader;
