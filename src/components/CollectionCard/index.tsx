import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faFilm, faGamepad, faDumbbell } from '@fortawesome/free-solid-svg-icons';

const CollectionCard: React.FC = () => {
  return (
    <div className="my-1 p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 lg:my-4 xl:w-1/6">
      <article className="overflow-hidden rounded-lg shadow-lg bg-purple-900">
        <a href="#">
          <img
            alt="Collection Image"
            className="block h-auto w-full"
            src="https://images.gr-assets.com/authors/1362814142p8/3389.jpg"
          />
        </a>
        <header className="flex items-center justify-between p-2 md:p-4 uppercase">
          <a
            className="text-center w-full no-underline hover:underline text-white font-bold"
            href="#"
          >
            Stephen King
          </a>
        </header>
        <footer className="flex items-center leading-none p-2 md:p-4">
          <div className="flex flex-1 justify-around">
            <FontAwesomeIcon icon={faBook} className="text-blue-400" />
            <FontAwesomeIcon icon={faFilm} className="text-orange-400" />
            <FontAwesomeIcon icon={faGamepad} className="text-red-400" />
          </div>
          <div className="flex flex-1 justify-center">
            <FontAwesomeIcon icon={faDumbbell} className="text-white" />
            <span className="text-center text-white pl-2">89</span>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default CollectionCard;
