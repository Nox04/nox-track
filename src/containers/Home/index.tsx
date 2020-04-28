import React, { ChangeEvent, useEffect, useState } from 'react';
import Layout from '@src/components/layout';
import CollectionCard from '@src/components/CollectionCard';
import { Collection } from '@src/types';
import useSWR from 'swr';
import { APIService } from '@src/services/api.service';
import Loading from '@src/components/Loading';

const Home: React.FC = () => {
  const [filteredCollections, setFilteredCollections] = useState<Collection[]>();
  const [query, setQuery] = useState<string>();
  const { data: collections, error } = useSWR('/collection', APIService.getData);

  useEffect(() => {
    setFilteredCollections(collections);
  }, [collections]);

  useEffect(() => {
    const filtered = collections?.filter((collection: any) => {
      return query ? collection.name?.toLowerCase().indexOf(query.toLowerCase()) !== -1 : true;
    });
    setFilteredCollections(filtered);
  }, [query, collections]);

  const searchInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <Layout>
      <div className="my-8 mx-2 px-4 md:px-12">
        <input
          type="text"
          className="bg-gray-800 w-full text-white text-2xl p-2 md:p-4 rounded-lg"
          placeholder="What collections do you want to track..."
          onChange={searchInputHandler}
          aria-label="Search bar"
        />
        {!collections && <Loading />}
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {filteredCollections?.map((collection) => {
            return <CollectionCard key={collection.id} collection={collection} />;
          })}
        </div>
        {/*<div className="flex w-auto text-white justify-center">*/}
        {/*  <ul className="flex max-w-xl h-10 rounded items-center">*/}
        {/*    <li>*/}
        {/*      <a className=" hover:text-white hover:bg-blue text-blue px-3 py-4" href="#">*/}
        {/*        {'<<'}*/}
        {/*      </a>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <a className=" hover:text-white hover:bg-blue text-blue px-3 py-2" href="#">*/}
        {/*        {'<'}*/}
        {/*      </a>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <a className=" hover:text-white hover:bg-blue text-blue px-3 py-2" href="#">*/}
        {/*        1*/}
        {/*      </a>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <a className=" hover:text-white hover:bg-blue text-blue px-3 py-2" href="#">*/}
        {/*        2*/}
        {/*      </a>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <a className=" hover:text-white hover:bg-blue text-blue px-3 py-2" href="#">*/}
        {/*        3*/}
        {/*      </a>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <a className=" hover:text-white hover:bg-blue text-blue px-3 py-2" href="#">*/}
        {/*        4*/}
        {/*      </a>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <a className=" hover:text-white hover:bg-blue text-blue px-3 py-2" href="#">*/}
        {/*        {'>'}*/}
        {/*      </a>*/}
        {/*    </li>*/}
        {/*    <li>*/}
        {/*      <a className=" hover:text-white hover:bg-blue text-blue px-3 py-2" href="#">*/}
        {/*        {'>>'}*/}
        {/*      </a>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</div>*/}
      </div>
    </Layout>
  );
};

export default Home;
