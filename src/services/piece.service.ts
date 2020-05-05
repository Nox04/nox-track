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

export interface UpdateProgressOnPieceDto {
  rating?: string;
  comment?: string;
  status?: string;
  finishedTime?: string;
}

export const ratePiece = async (id: string, rating: number) => {
  return await APIService.updateData(`/piece/${id}/rate`, { rating: rating.toString() });
};

export const updateProgressOnPiece = async (id: string, data: UpdateProgressOnPieceDto) => {
  return await APIService.postData(`/piece/${id}/save-progress`, { ...data });
};
