export const escapeUnsafeHtmlTags = (
  html: string,
  allowedTags: string[]
): string => {
  const allowed = allowedTags.map((tag) => tag.toLowerCase());

  return html.replace(
    /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
    (match: string, tagName: string) => {
      if (allowed.includes(tagName.toLowerCase())) {
        return match;
      } else {
        return match.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }
    }
  );
};

export const joinClassNames = (...classNames: unknown[]) => {
  return classNames.filter((className) => className).join(" ");
};
