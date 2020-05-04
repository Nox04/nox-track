import { APIService } from '@src/services/api.service';

export enum PieceType {
  BOOK = 'book',
  MOVIE = 'movie',
}

export enum ProgressStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in-progress',
  FINISHED = 'finished',
}

export const getPieceBySlug = async (slug: string) => {
  return await APIService.getData(`/piece/slug/${slug}`);
};
