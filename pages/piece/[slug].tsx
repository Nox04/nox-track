import React from 'react';
import { NextPage } from 'next';
import PiecePage from '@src/containers/Piece';

const Piece: NextPage = () => {
  return <PiecePage />;
};

Piece.getInitialProps = async ({ ...ctx }) => {
  return {};
};

export default Piece;
