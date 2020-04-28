import React from 'react';
import { Collection } from '@src/types';
import useWindowWidth from '@src/hooks/useWindowWidth';
import Rating from '@src/components/Rating';

interface CollectionHeaderProps {
  collection: Collection;
}
const CollectionHeader: React.FC<CollectionHeaderProps> = ({
  collection,
}: CollectionHeaderProps) => {
  const width = useWindowWidth();
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
                style={{ width: '45%' }}
              >
                45%
              </div>
            </div>
          </div>
        </div>
        <div className="flex p-4">
          Stephen Edwin King (born September 21, 1947) is an American author of horror, supernatural
          fiction, suspense, and fantasy novels. His books have sold more than 350 million copies,
          many of which have been adapted into films, television series, miniseries, and comic
          books. He has published 61 novels, including seven under the pen name Richard Bachman, and
          six non-fiction books.
        </div>
      </div>
    </div>
  );
};

export default CollectionHeader;
