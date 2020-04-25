import React from 'react';
import { Piece } from '@src/types';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faClock, faFilm } from '@fortawesome/free-solid-svg-icons';
import useWindowWidth from '@src/hooks/useWindowWidth';

interface PieceCardProps {
  piece: Piece;
}

const PieceCard: React.FC<PieceCardProps> = ({ piece }: PieceCardProps) => {
  const width = useWindowWidth();
  return (
    <div className="my-1 p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 lg:my-4 xl:w-1/4 rounded">
      <article className="overflow-hidden rounded-lg shadow-lg bg-purple-900 w-full">
        <Link href={`/piece/${piece.slug}`} as={`/piece/${piece.slug}`}>
          <a
            className="bg-center bg-cover bg-no-repeat w-full inline-block"
            style={{
              backgroundImage: `url(${piece.picture})`,
              height: width > 768 ? 350 : 420,
            }}
          />
        </Link>
        <header className="flex items-center justify-between p-2 md:p-4 uppercase">
          <Link href={`/piece/${piece.slug}`} as={`/piece/${piece.slug}`}>
            <a className="text-center w-full no-underline hover:underline text-white font-bold">
              {piece.name}
            </a>
          </Link>
        </header>
        <footer className="flex items-center leading-none pb-4 pt-2">
          <div className="flex flex-1 justify-around">
            <span>
              <FontAwesomeIcon icon={faClock} className="text-yellow-400" />
              <span className="text-center text-white pl-2">{(piece.minutes / 60).toFixed(1)}</span>
            </span>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default PieceCard;
