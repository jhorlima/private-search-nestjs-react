export const localeRegex = /^[a-z]{2}(?:-[A-Z]{2})?$/;

export const getBrowserLocale = () => {
  return navigator.language || "en-US";
};
