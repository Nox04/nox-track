import { Collection, Piece } from '@src/types';

export const getPiecesFromCollection = (collection: Collection): Piece[] => {
  let pieces: Piece[] = [];
  pieces = collection.pieces;

  collection.collections?.forEach((recursiveCollection) => {
    getPiecesFromCollection(recursiveCollection)?.forEach((recursivePiece) => {
      pieces.push(recursivePiece);
    });
  });

  return pieces;
};
