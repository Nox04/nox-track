import React from 'react';
import { Collection } from '@src/types';
import useWindowWidth from '@src/hooks/useWindowWidth';

interface CollectionHeaderProps {
  collection: Collection;
}
const CollectionHeader: React.FC<CollectionHeaderProps> = ({
  collection,
}: CollectionHeaderProps) => {
  const width = useWindowWidth();
  return (
    <div className="rounded-lg my-6 mx-6 lg:mx-auto p-4 bg-gray-700 sm:flex sm:flex-wrap text-white lg:w-11/12 xl:w-3/4">
      <div
        className="bg-center bg-cover bg-no-repeat inline-block p-4 rounded-lg"
        style={{
          backgroundImage: `url(${collection.picture})`,
          height: width > 768 ? 350 : 420,
          width: width > 640 ? 250 : '100%',
        }}
      />
      <div className="flex px-4 flex-col">
        <h2 className="text-4xl font-medium text-center sm:text-left">{collection.name}</h2>
        <h2 className="text-xl">Books: {collection.booksCount}</h2>
        <h2 className="text-xl">Movies: {collection.moviesCount}</h2>
        <h2 className="text-xl">Approximated time: {(collection.minutes / 60).toFixed(1)} hours</h2>
      </div>
      <div className="flex flex-grow px-4 py-4 md:py-0 justify-start md:justify-end font-medium">
        <h2 className="text-2xl">Your progress</h2>
      </div>
    </div>
  );
};

export default CollectionHeader;
