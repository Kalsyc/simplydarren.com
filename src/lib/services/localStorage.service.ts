import { browser } from '$app/environment';

export const setItemInLocal = (key: string, value: string): void => {
  if (!browser) {
    return;
  }
  localStorage.setItem(key, value);
};

export const getItemInLocal = (key: string): string => {
  if (!browser) {
    return '';
  }
  const item = localStorage.getItem(key);
  return item ? item : '';
};
