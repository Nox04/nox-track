import React from 'react';
import { NextPage } from 'next';

import CollectionPage from '@src/containers/Collection';
import { useRouter } from 'next/router';

const Collection: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <CollectionPage slug={slug} />;
};

export default Collection;
