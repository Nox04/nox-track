import { clearLocalValue, getLocalValue, saveLocalValue } from '@src/services/local-store';
import decodeJwt from 'jwt-decode';

const SESSION_KEY = '_session';

export const getSessionValue = () => {
  return getLocalValue(SESSION_KEY);
};

export const saveSessionValue = (session: string | string[]) => {
  saveLocalValue(SESSION_KEY, session);
};

export function validToken(token: string) {
  const jwtInfo: any = decodeJwt(token);

  if (jwtInfo.exp) {
    const now = Date.now();
    const expires = jwtInfo.exp * 1000;

    if (expires < now) {
      return false;
    }
  }
  return true;
}

export const hasValidSession = () => {
  const session = getSessionValue();
  if (session) {
    return validToken(session);
  }
  return false;
};

export const clearSession = () => {
  clearLocalValue(SESSION_KEY);
};
