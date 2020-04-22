import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { BACKEND_URL } from '@src/shared/constants';
import { clearSession, getSessionValue } from '@src/services/auth.service';

const api = axios.create({
  baseURL: `${BACKEND_URL}`,
});

const beforeRequest = (request: AxiosRequestConfig) => {
  const session = getSessionValue();
  if (session) {
    request.headers.Authorization = `Bearer ${session}`;
  }
  return request;
};

const onRequestSuccess = (response: AxiosResponse) => {
  return response.data;
};
const onRequestFailure = (err: any) => {
  const { response } = err;
  if (response?.status === 401) {
    clearSession();
  }
  throw err;
};

api.interceptors.request.use(beforeRequest);
api.interceptors.response.use(onRequestSuccess, onRequestFailure);

export class APIService {
  static async getData(url: string, params?: object): Promise<any> {
    return await api.get(url, { params });
  }

  static async postData(url: string, params?: object): Promise<any> {
    return await api.post(url, { ...params });
  }

  static async deleteData(url: string): Promise<any> {
    return await api.delete(url);
  }

  static async updateData(url: string, params?: object): Promise<any> {
    return await api.put(url, { ...params });
  }
}
