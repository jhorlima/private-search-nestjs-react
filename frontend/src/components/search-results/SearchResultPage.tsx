import { useState, useEffect } from "react";

import { SearchResult } from "@api/search";
import { resultsRoute } from "@routes/results";
import { useAddToHistoric } from "@states/useHistoric";
import { useSearchResults } from "@states/useSearchResults";

import { SearchBoxWithSuggestions } from "@components/common/SearchBoxWithSuggestions";

import { SearchResultList } from "@components/search-results/SearchResultList";
import { SearchResultListItem } from "@components/search-results/SearchResultListItem";
import { SearchResultListError } from "@components/search-results/SearchResultListError";
import { SearchResultToastError } from "@components/search-results/SearchResultToastError";
import { SearchResultMoreResults } from "@components/search-results/SearchResultMoreResults";

export const SearchResultPage = () => {
  const navigate = resultsRoute.useNavigate();
  const { query, locale, safeSearchType } = resultsRoute.useSearch();

  const [offset, setOffset] = useState<number>(0);
  const [nextOffset, setNextOffset] = useState<number | null>(null);

  const [showToastError, setShowToastError] = useState(false);

  const [searchResults, setSearchResults] = useState<
    Record<string, SearchResult>
  >({});

  const { data, isLoading, error, refetch } = useSearchResults({
    query,
    locale,
    offset,
    safeSearch: safeSearchType,
  });
  const { mutateAsync: addToHistoric } = useAddToHistoric();

  const onSearch = (searchTerm: string) => {
    navigate({
      to: "/results",
      search: (search) => ({
        ...search,
        query: searchTerm,
      }),
    });
  };

  const loadMore = () => {
    if (nextOffset) {
      setOffset(offset + nextOffset);
    }
  };

  useEffect(() => {
    if (data) {
      addToHistoric(query);
      setNextOffset(data?.nextOffset ?? null);

      if (data.results?.length) {
        const newResult = Object.fromEntries(
          data.results.map((result) => [result.url, result])
        );

        setSearchResults({
          ...searchResults,
          ...newResult,
        });
      }
    }
  }, [data]);

  useEffect(() => {
    setSearchResults({});
  }, [query, locale, safeSearchType]);

  useEffect(() => {
    if (error) {
      setShowToastError(true);
      setTimeout(() => {
        setShowToastError(false);
      }, 3000);
    }
  }, [error]);

  const searchResultsList = Object.values(searchResults);
  const hasResults = searchResultsList.length > 0;
  const hasLoadMore = nextOffset !== null;
  const hasError = error !== undefined;
  const showError = hasError && !hasResults && !isLoading;

  return (
    <div className="flex flex-col flex-auto">
      <div className="flex flex-row bg-base-300 p-4">
        <SearchBoxWithSuggestions onSearch={onSearch} query={query} />
      </div>
      {!showError && (
        <>
          <div className="flex grow overflow-auto relative">
            <SearchResultList className="absolute" isLoading={isLoading}>
              {hasResults && (
                <>
                  <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                    {Object.values(searchResults).length} results loaded
                  </li>

                  {Object.values(searchResults).map((result) => (
                    <SearchResultListItem
                      key={result.url}
                      searchResult={result}
                    />
                  ))}
                </>
              )}
            </SearchResultList>
          </div>
          {hasLoadMore && (
            <SearchResultMoreResults
              isLoading={isLoading}
              onLoadMore={loadMore}
            />
          )}
        </>
      )}
      {showError && <SearchResultListError onTryAgain={refetch} />}
      {showToastError && <SearchResultToastError />}
    </div>
  );
};
