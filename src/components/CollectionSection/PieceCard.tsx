import React from 'react';
import Link from 'next/link';
import { Piece } from '@src/types';
import useWindowWidth from '@src/hooks/useWindowWidth';
import { ProgressStatus, ratePiece } from '@src/services/piece.service';
import Rating from '@src/components/Rating/index';
import { AuthStatus, useAuthContext } from '@src/contexts/AuthContext';

interface PieceCardProps {
  piece: Piece;
  onUpdateCard: () => {};
}

const PieceCard: React.FC<PieceCardProps> = ({ piece, onUpdateCard }: PieceCardProps) => {
  const width = useWindowWidth();
  const { authStatus } = useAuthContext();

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

  const updateRating = async (id: string, rating: number) => {
    await ratePiece(id, rating);
    onUpdateCard();
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
        <header className="flex items-center justify-between p-1 md:p-2 uppercase flex-col">
          <Link href={`/piece/[slug]`} as={`/piece/${piece.slug}`}>
            <a className="text-center w-full no-underline hover:underline text-white font-bold truncate">
              {piece.name}
            </a>
          </Link>
          {authStatus === AuthStatus.LOGGED_IN && (
            <div className="flex justify-around w-full py-1">
              <button className="bg-transparent hover:bg-purple-500 text-white px-1 border border-purple-500 hover:border-transparent rounded">
                Update Progress
              </button>
              <Rating
                value={piece.progress?.rating}
                edit={authStatus === AuthStatus.LOGGED_IN}
                onChange={(rating: number) => updateRating(piece.id, rating)}
              />
            </div>
          )}
        </header>
      </article>
    </div>
  );
};

export default PieceCard;
