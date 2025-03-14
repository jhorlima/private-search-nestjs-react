import { useQuery } from "@tanstack/react-query";
import { SuggestionsOptions, getSuggestionsResults } from "@api/suggestions";

const SUGGESTIONS_KEY = "suggestions";

export const useSuggestions = ({ query }: SuggestionsOptions) => {
  return useQuery({
    queryKey: [SUGGESTIONS_KEY, query],
    queryFn: () => {
      return getSuggestionsResults({
        query,
      });
    },
    retry: 3,
    enabled: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
  });
};
