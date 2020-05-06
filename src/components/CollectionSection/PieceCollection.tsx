import React from 'react';
import { Piece } from '@src/types';
import PieceCard from '@src/components/CollectionSection/PieceCard';
import { PieceType } from '@src/services/piece.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faFilm } from '@fortawesome/free-solid-svg-icons';

interface PieceCollectionProps {
  pieces: Piece[];
  onUpdateCard: () => {};
  type: PieceType;
}

interface SectionTitleProps {
  type: PieceType;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ type }: SectionTitleProps) => {
  if (type === PieceType.BOOK) {
    return (
      <h1 className="font-bold uppercase text-2xl w-full px-4 pb-2">
        <FontAwesomeIcon icon={faBook} size="sm" className="text-blue-400" />
        <span className="mx-2">books</span>
      </h1>
    );
  } else if (type === PieceType.MOVIE) {
    return (
      <h1 className="font-bold uppercase text-2xl w-full px-4 pb-2">
        <FontAwesomeIcon icon={faFilm} size="sm" className="text-orange-400" />
        <span className="mx-2">movies</span>
      </h1>
    );
  }
  return <></>;
};

const PieceCollection: React.FC<PieceCollectionProps> = ({
  pieces,
  onUpdateCard,
  type,
}: PieceCollectionProps) => {
  return (
    <>
      <div className="rounded-lg my-6 mx-6 lg:mx-auto p-4 bg-gray-700 sm:flex flex-wrap text-white lg:w-11/12 xl:w-3/4">
        <SectionTitle type={type} />
        {pieces?.map((piece, index) => {
          return (
            <>
              {piece.type === type && (
                <PieceCard piece={piece} key={index} onUpdateCard={onUpdateCard} />
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default PieceCollection;
