import React from 'react';
import { Piece } from '@src/types';

interface PieceCardProps {
  piece: Piece;
}

const PieceCard: React.FC<PieceCardProps> = ({ piece }: PieceCardProps) => {
  return <div>{piece.name}</div>;
};

export default PieceCard;
