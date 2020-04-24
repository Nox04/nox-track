import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faFilm, faClock } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import useWindowWidth from '@src/hooks/useWindowWidth';
import { Collection } from '@src/types';

interface CollectionCardProps {
  collection: Collection;
}

const CollectionCard: React.FC<CollectionCardProps> = (props) => {
  const width = useWindowWidth();
  return (
    <div className="my-1 p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 lg:my-4 xl:w-1/5">
      <article className="overflow-hidden rounded-lg shadow-lg bg-purple-900 w-full">
        <Link
          href={`/collection/${props?.collection.slug}`}
          as={`/collection/${props?.collection.slug}`}
        >
          <a
            className="bg-center bg-cover bg-no-repeat w-full inline-block"
            style={{
              backgroundImage: `url(${props?.collection.picture})`,
              height: width > 768 ? 350 : 420,
            }}
          />
        </Link>
        <header className="flex items-center justify-between p-2 md:p-4 uppercase">
          <Link
            href={`/collection/${props?.collection.slug}`}
            as={`/collection/${props?.collection.slug}`}
          >
            <a className="text-center w-full no-underline hover:underline text-white font-bold">
              {props?.collection.name}
            </a>
          </Link>
        </header>
        <footer className="flex items-center leading-none p-2 lg:p-4">
          <div className="flex flex-1 justify-around">
            <span>
              <FontAwesomeIcon icon={faBook} className="text-blue-400" />
              <span className="text-center text-white pl-2">{props?.collection.booksCount}</span>
            </span>
            <span>
              <FontAwesomeIcon icon={faFilm} className="text-orange-400" />
              <span className="text-center text-white pl-2">{props?.collection.moviesCount}</span>
            </span>
            <span>
              <FontAwesomeIcon icon={faClock} className="text-yellow-400" />
              <span className="text-center text-white pl-2">
                {(props?.collection.minutes / 60).toFixed(1)}
              </span>
            </span>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default CollectionCard;
