export const formatDateWithTime = (date: Date, locale?: string) => {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "short",
    timeStyle: "short",
  }).format(date);
};
