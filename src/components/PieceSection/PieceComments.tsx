import React from 'react';
import { Piece } from '@src/types';
import Rating from '@src/components/Rating';

interface PieceCommentsProps {
  piece: Piece;
}

const PieceComments: React.FC<PieceCommentsProps> = ({ piece }: PieceCommentsProps) => {
  console.log(piece.userToPieces);
  return (
    <div className="rounded-lg my-6 mx-6 lg:mx-auto p-4 bg-gray-700 flex flex-col text-white lg:w-11/12 xl:w-3/4">
      {piece.userToPieces?.map((relation) => {
        return (
          <>
            {relation.comment && (
              <>
                <div className="flex p-4 my-2" key={relation.userId}>
                  <img
                    className="rounded-full h-32"
                    src={relation.user?.picture}
                    alt={`${relation.user?.name} avatar`}
                  />
                  <div className="flex flex-col px-4">
                    <div className="flex">
                      <span className="text-lg font-medium">{relation.user?.name} </span>
                      <Rating edit={false} value={relation.rating || 0} className="mx-4" />
                    </div>
                    <div className="pb-4">
                      {relation.finishedTime && (
                        <span className="text-sm font-medium">
                          {relation.finishedTime.toString().split('T')[0]}{' '}
                        </span>
                      )}
                    </div>
                    <span className="hidden md:block">{relation.comment}</span>
                  </div>
                </div>
                <span className="block md:hidden">{relation.comment}</span>
              </>
            )}
          </>
        );
      })}
    </div>
  );
};

export default PieceComments;
