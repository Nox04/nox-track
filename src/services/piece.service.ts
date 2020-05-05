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

export const ratePiece = async (id: string, rating: number) => {
  return await APIService.updateData(`/piece/${id}/rate`, { rating: rating.toString() });
};
