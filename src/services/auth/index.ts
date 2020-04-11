import { clearLocalValue, getLocalValue, setLocalValue } from '@src/services/localStore';

const SESSION_KEY = '_sessionInfo';

export const getSessionValues = () => {
  return getLocalValue(SESSION_KEY);
};

export const saveSessionValues = (token: string) => {
  setLocalValue(SESSION_KEY, token);
};

export const clearSession = () => {
  clearLocalValue(SESSION_KEY);
};
