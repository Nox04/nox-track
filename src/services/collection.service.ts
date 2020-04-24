import { APIService } from '@src/services/api.service';

export const getAllCollections = async () => {
  return await APIService.getData('/collection');
};
