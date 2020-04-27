import { APIService } from '@src/services/api.service';

export enum PieceType {
  BOOK = 'book',
  MOVIE = 'movie',
}

export const getPieceBySlug = async (slug: string) => {
  return await APIService.getData(`/piece/slug/${slug}`);
};
