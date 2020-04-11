/**
 * Collection of functions to handle storage of the session
 */
export const SESSION_KEY = '_sessionInfo';
declare const window: any;

export const getLocalValue = (key: string) => {
  const localValue = window.localStorage.getItem(key);
  if (localValue === 'undefined' || localValue === undefined || localValue === null) {
    return null;
  }
  return localValue;
};

/**
 * Returns the stored session as json
 * @export
 * @returns {Object} the session value
 */
export const getSessionValues = () => {
  return getLocalValue(SESSION_KEY);
};

/**
 * Save the session value to easy access later
 * @export
 * @param {String} token the session to store
 */
export const saveSessionValues = (token: string) => {
  window.localStorage.setItem(SESSION_KEY, token);
};

/**
 * Clears all values related to the stored session
 * @export
 */
export const clearSession = () => {
  window.localStorage.removeItem(SESSION_KEY);
};
