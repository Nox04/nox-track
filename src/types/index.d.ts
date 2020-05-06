import { PieceType, ProgressStatus } from '@src/services/piece.service';

export interface User {
  id: string;
  email?: string;
  name?: string;
  picture?: string;
}

export interface UserPieceRelationship extends BaseEntity {
  rating: number;
  comment: string;
  status: ProgressStatus;
  userId: string;
  pieceId: string;
  finishedTime: Date;
  user?: User;
}

export interface Collection extends BaseEntity {
  name: string;
  picture: string;
  slug: string;
  pieces: Piece[];
  collections: Collection[];
  minutes: number;
  booksCount: number;
  moviesCount: number;
  description: string;
}

export interface BaseEntity {
  id: string;
  createdTime: Date;
  modifiedTime: Date;
}

export interface Piece extends BaseEntity {
  name: string;
  picture: string;
  slug: string;
  minutes: number;
  type: PieceType;
  progress?: UserPieceRelationship;
  description?: string;
  userToPieces?: UserPieceRelationship[];
}
