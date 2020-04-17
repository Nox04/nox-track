import React from 'react';
import { NextPage } from 'next';

import CollectionPage from '@src/containers/Collection';

const Collection: NextPage = () => {
  return <CollectionPage />;
};

Collection.getInitialProps = async ({ ...ctx }) => {
  return {};
};

export default Collection;
