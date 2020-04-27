import { APIService } from '@src/services/api.service';

export const getAllCollections = async () => {
  return await APIService.getData('/collection');
};

export const getCollectionBySlug = async (slug: string) => {
  return await APIService.getData(`/collection/slug/${slug}`);
};