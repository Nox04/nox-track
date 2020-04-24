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
    <div className="rounded-lg my-6 mx-auto p-4 bg-gray-700 md:flex text-white w-full lg:w-11/12 xl:w-3/4">
      <div
        className="bg-center bg-cover bg-no-repeat inline-block p-4"
        style={{
          backgroundImage: `url(${collection.picture})`,
          height: width > 768 ? 350 : 420,
          width: 250,
        }}
      />
      <div className="flex px-4 flex-col">
        <h2 className="text-4xl font-medium">{collection.name}</h2>
        <h2 className="text-xl">Books: {collection.booksCount}</h2>
        <h2 className="text-xl">Movies: {collection.moviesCount}</h2>
        <h2 className="text-xl">Approximated time: {(collection.minutes / 60).toFixed(1)} hours</h2>
      </div>
      <div className="flex flex-grow px-4 justify-end">
        <h2 className="text-2xl">Your progress</h2>
      </div>
    </div>
  );
};

export default CollectionHeader;
