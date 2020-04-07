import React from 'react';

const CollectionCard: React.FC = () => {
  return (
    <div className="my-1 p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 lg:my-4 xl:w-1/6">
      <article className="overflow-hidden rounded-lg shadow-lg">
        <a href="#">
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            src="https://images.gr-assets.com/authors/1362814142p8/3389.jpg"
          />
        </a>
        <header className="flex items-center justify-between p-2 md:p-4 uppercase bg-purple-900">
          <a className="text-center w-full no-underline hover:underline text-white" href="#">
            Stephen King
          </a>
        </header>
        <footer className="flex items-center justify-around leading-none p-2 md:p-4">
          <div className="flex text-white">
            <i className="gg-heart ml-3"></i>
            <i className="gg-heart ml-3"></i>
            <i className="gg-heart ml-3"></i>
            <i className="gg-heart ml-3"></i>
            <i className="gg-heart ml-3"></i>
          </div>
          <div className="flex">
            <i className="gg-track"></i>
            <span className="text-center text-white pl-4">89</span>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default CollectionCard;
