import React from 'react';
import { Collection, Piece } from '@src/types';
import useWindowWidth from '@src/hooks/useWindowWidth';
import Rating from '@src/components/Rating';
import { ProgressStatus } from '@src/services/piece.service';

interface CollectionHeaderProps {
  collection: Collection;
  pieces: Piece[];
}
const CollectionHeader: React.FC<CollectionHeaderProps> = ({
  collection,
  pieces,
}: CollectionHeaderProps) => {
  const width = useWindowWidth();
  let minutesExpended = 0;
  pieces.forEach((piece) => {
    if (piece.progress?.status === ProgressStatus.FINISHED) {
      minutesExpended += piece.minutes;
    }
  });
  const progressPercentage = Math.round((minutesExpended * 100) / collection.minutes);
  return (
    <div className="rounded-lg my-6 mx-6 lg:mx-auto p-4 bg-gray-700 sm:flex text-white lg:w-11/12 xl:w-3/4">
      <div
        className="bg-center bg-cover bg-no-repeat inline-block p-4 rounded-lg"
        style={{
          backgroundImage: `url(${collection.picture})`,
          height: width > 768 ? 350 : 420,
          minWidth: width > 640 ? 250 : '100%',
        }}
      />
      <div className="flex flex-grow flex-col">
        <div className="flex flex-col md:flex-row">
          <div className="flex px-4 flex-col flex-grow">
            <h2 className="text-4xl font-medium text-center sm:text-left">{collection.name}</h2>
            <Rating />
            <div className="mt-2">
              <h2 className="text-xl">Books: {collection.booksCount}</h2>
              <h2 className="text-xl">Movies: {collection.moviesCount}</h2>
              <h2 className="text-xl">
                Approximated time: {(collection.minutes / 60).toFixed(1)} hours
              </h2>
            </div>
          </div>
          <div className="flex px-4 py-8 md:py-0 items-start md:items-end font-medium flex-col">
            <h2 className="text-2xl">Your Progress</h2>
            <div className="shadow w-full bg-white mt-2">
              <div
                className="bg-purple-700 text-xs leading-none py-1 text-center text-white"
                style={{ width: `${progressPercentage}%` }}
              >
                {progressPercentage}%
              </div>
            </div>
          </div>
        </div>
        <div className="flex p-4">{collection.description}</div>
      </div>
    </div>
  );
};

export default CollectionHeader;
