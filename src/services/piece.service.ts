import { APIService } from '@src/services/api.service';

export const getPieceBySlug = async (slug: string) => {
  return await APIService.getData(`/piece/slug/${slug}`);
};
