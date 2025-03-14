import { useQuery } from "@tanstack/react-query";
import { SearchOptions, getSearchResults } from "@api/search";

const SEARCH_RESULTS_KEY = "search-results";
export const useSearchResults = ({
  query,
  locale,
  offset,
  safeSearch,
}: SearchOptions) => {
  return useQuery({
    queryKey: [SEARCH_RESULTS_KEY, query, locale, offset, safeSearch],
    queryFn: () => {
      return getSearchResults({
        query: query,
        locale: locale,
        offset: offset,
        safeSearch: safeSearch,
      });
    },
    retry: 3,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
  });
};
