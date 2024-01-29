export const getLocalStorageItem = (key: string) => localStorage.getItem(key);

export const setLocalStorageItem = (key: string, value: string) =>
  localStorage.setItem(key, value);

export const removeLocalStorageItem = (key: string) => localStorage.removeItem(key);

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL as string;