import { APIService } from '@src/services/api.service';

export const getUserData = async () => {
  return await APIService.getData('/auth/me');
};
