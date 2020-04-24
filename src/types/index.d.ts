export enum PieceType {
  BOOK = 'book',
  MOVIE = 'movie',
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
}
