import React from 'react';
import Layout from '@src/components/layout';
import CollectionCard from '@src/components/CollectionCard';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="my-8 mx-2 px-4 md:px-12">
        <input
          type="text"
          className="bg-gray-800 w-full text-white text-2xl p-2 md:p-4 rounded-lg"
          placeholder="What collections do you want to track..."
        />
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
        </div>
        <div className="flex w-auto text-white justify-center">
          <ul className="flex max-w-xl h-10 rounded items-center">
            <li>
              <a className=" hover:text-white hover:bg-blue text-blue px-3 py-4" href="#">
                {'<<'}
              </a>
            </li>
            <li>
              <a className=" hover:text-white hover:bg-blue text-blue px-3 py-2" href="#">
                {'<'}
              </a>
            </li>
            <li>
              <a className=" hover:text-white hover:bg-blue text-blue px-3 py-2" href="#">
                1
              </a>
            </li>
            <li>
              <a className=" hover:text-white hover:bg-blue text-blue px-3 py-2" href="#">
                2
              </a>
            </li>
            <li>
              <a className=" hover:text-white hover:bg-blue text-blue px-3 py-2" href="#">
                3
              </a>
            </li>
            <li>
              <a className=" hover:text-white hover:bg-blue text-blue px-3 py-2" href="#">
                4
              </a>
            </li>
            <li>
              <a className=" hover:text-white hover:bg-blue text-blue px-3 py-2" href="#">
                {'>'}
              </a>
            </li>
            <li>
              <a className=" hover:text-white hover:bg-blue text-blue px-3 py-2" href="#">
                {'>>'}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
