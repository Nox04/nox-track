import React from 'react';
import Link from 'next/link';
import { Piece } from '@src/types';
import useWindowWidth from '@src/hooks/useWindowWidth';
import { ProgressStatus } from '@src/services/piece.service';

interface PieceCardProps {
  piece: Piece;
}

const PieceCard: React.FC<PieceCardProps> = ({ piece }: PieceCardProps) => {
  const width = useWindowWidth();
  const ribbonColor = (status: string) => {
    switch (status) {
      case ProgressStatus.IN_PROGRESS:
        return 'bg-purple-700';
      case ProgressStatus.FINISHED:
        return 'bg-green-700';
      default:
        return 'bg-blue-700';
    }
  };
  return (
    <div className="my-1 p-4 sm:p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 lg:my-4 xl:w-1/4 rounded">
      <article className="overflow-hidden rounded-lg shadow-lg bg-purple-900 w-full relative">
        <span
          className={`absolute ${ribbonColor(
            piece.progress?.status || 'Pending',
          )} px-8 ribbon capitalize shadow-x truncate`}
          style={{ transform: 'rotate(-45deg)', marginLeft: '-30px', top: 20, width: 120 }}
        >
          {piece.progress?.status || 'Pending'}
        </span>
        <Link href={`/piece/[slug]`} as={`/piece/${piece.slug}`}>
          <a
            className={`bg-center bg-cover bg-no-repeat w-full inline-block ${
              piece.progress?.status === ProgressStatus.FINISHED ? '' : 'opacity-50'
            } hover:opacity-100`}
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
