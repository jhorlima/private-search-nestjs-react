import { z } from "zod";
import { createRoute } from "@tanstack/react-router";
import { fallback, zodValidator } from "@tanstack/zod-adapter";

import { RouteRoot } from "@routes/__root";

import { SafeSearchType } from "@api/search";
import { getBrowserLocale, localeRegex } from "@utils/locale.util";

import { SearchPage } from "@components/search";

const homeSearchSchema = z.object({
  query: z.string().optional(),
  locale: fallback(z.string().regex(localeRegex), getBrowserLocale()).default(
    getBrowserLocale()
  ),
  safeSearchType: fallback(
    z.nativeEnum(SafeSearchType),
    SafeSearchType.MODERATE
  ).default(SafeSearchType.MODERATE),
});

export const homeRoute = createRoute({
  getParentRoute: () => RouteRoot,
  path: "/",
  component: SearchPage,
  validateSearch: zodValidator(homeSearchSchema),
});
