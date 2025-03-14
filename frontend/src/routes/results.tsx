import { z } from "zod";
import { createRoute, redirect } from "@tanstack/react-router";
import { fallback, zodValidator } from "@tanstack/zod-adapter";

import { RouteRoot } from "@routes/__root";

import { SafeSearchType } from "@api/search";
import { getBrowserLocale, localeRegex } from "@utils/locale.util";

import { SearchResultPage } from "@components/search-results";

const resultSchema = z.object({
  query: fallback(z.string().min(3).trim(), "").default(""),
  locale: fallback(z.string().regex(localeRegex), getBrowserLocale()).default(
    getBrowserLocale()
  ),
  safeSearchType: fallback(
    z.nativeEnum(SafeSearchType),
    SafeSearchType.MODERATE
  ).default(SafeSearchType.MODERATE),
});

export const resultsRoute = createRoute({
  getParentRoute: () => RouteRoot,
  path: "/results",
  component: SearchResultPage,
  shouldReload: false,
  validateSearch: zodValidator(resultSchema),
  beforeLoad: ({ search: { query } }) => {
    if (query.length < 3) {
      throw redirect({ to: "/", replace: true });
    }
  },
});
