import React from 'react';
import Link from 'next/link';
import { Piece } from '@src/types';
import useWindowWidth from '@src/hooks/useWindowWidth';
import { PieceType } from '@src/services/piece.service';

interface PieceCardProps {
  piece: Piece;
}

const PieceCard: React.FC<PieceCardProps> = ({ piece }: PieceCardProps) => {
  const width = useWindowWidth();
  return (
    <div className="my-1 p-4 sm:p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 lg:my-4 xl:w-1/4 rounded">
      <article className="overflow-hidden rounded-lg shadow-lg bg-purple-900 w-full relative">
        <span
          className={`absolute ${
            piece.type === PieceType.MOVIE ? 'bg-purple-700' : 'bg-blue-700'
          } px-8 ribbon capitalize shadow-x truncate`}
          style={{ transform: 'rotate(-45deg)', marginLeft: '-30px', top: 20, width: 120 }}
        >
          {(piece.minutes / 60).toFixed(1)} hours
        </span>
        <Link href={`/piece/[slug]`} as={`/piece/${piece.slug}`}>
          <a
            className="bg-center bg-cover bg-no-repeat w-full inline-block"
            style={{
              backgroundImage: `url(${piece.picture})`,
              height: width > 768 ? 350 : 420,
            }}
          />
        </Link>
        <header className="flex items-center justify-between p-2 md:p-4 uppercase">
          <Link href={`/piece/[slug]`} as={`/piece/${piece.slug}`}>
            <a className="text-center w-full no-underline hover:underline text-white font-bold truncate">
              {piece.name}
            </a>
          </Link>
        </header>
      </article>
    </div>
  );
};

export default PieceCard;
