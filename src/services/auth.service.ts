import { clearLocalValue, getLocalValue, saveLocalValue } from '@src/services/local-store.service';
import decodeJwt from 'jwt-decode';

const SESSION_KEY = '_session';

export const getSessionValue = () => {
  return getLocalValue(SESSION_KEY);
};

export const saveSessionValue = (session: string | string[]) => {
  saveLocalValue(SESSION_KEY, session);
};

export function validToken(token: string | string[]) {
  if (typeof token === 'string' && token.length > 0) {
    try {
      const jwtInfo: any = decodeJwt(token);
      if (jwtInfo.exp) {
        const now = Date.now();
        const expires = jwtInfo.exp * 1000;

        return expires >= now;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
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
