export const getLocalValue = (key: string) => {
  const localValue = window.localStorage.getItem(key);
  if (localValue === 'undefined' || localValue === undefined || localValue === null) {
    return null;
  }
  return localValue;
};

export const saveLocalValue = (key: string, value: any) => {
  window.localStorage.setItem(key, value);
};

export const clearLocalValue = (key: string) => {
  window.localStorage.removeItem(key);
};
