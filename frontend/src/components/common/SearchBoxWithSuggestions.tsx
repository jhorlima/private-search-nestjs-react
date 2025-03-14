import { useEffect, useState } from "react";

import { useDebounce } from "@hooks/useDebounce";
import { useSuggestions } from "@states/useSuggestions";

import { SearchIcon } from "./Icons/SearchIcon";

type SearchBoxWithSuggestionsProps = {
  query?: string;
  onSearch: (search: string) => void;
};

export const SearchBoxWithSuggestions = ({
  query,
  onSearch = () => null,
}: SearchBoxWithSuggestionsProps) => {
  const [search, setSearch] = useState(query || "");
  const [isFocused, setIsFocused] = useState(false);
  const debouncedSearch = useDebounce(search, 500);
  const debouncedFocused = useDebounce(isFocused, 250);

  const [limitedSuggestions, setLimitedSuggestions] = useState<string[]>([]);

  const { data: suggestions, refetch } = useSuggestions({
    query: debouncedSearch,
  });

  const selectSuggestion = (suggestion: string) => {
    setSearch(suggestion);
    onSearch(suggestion);
    setIsFocused(false);
  };

  useEffect(() => {
    if (isFocused && debouncedSearch?.length >= 3) {
      refetch();
    }
  }, [isFocused, debouncedSearch, refetch]);

  useEffect(() => {
    if (suggestions?.results?.length) {
      setLimitedSuggestions(
        suggestions.results.slice(0, 4).map((s) => s.phrase)
      );
    }
  }, [suggestions]);

  useEffect(() => {
    setSearch(query || "");
  }, [query]);

  return (
    <div className="relative">
      <div className="join relative w-full z-20">
        <label className="input join-item w-full">
          <SearchIcon />
          <input
            type="search"
            value={search}
            className="grow"
            placeholder="Search..."
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSearch(search);
              }
            }}
          />
        </label>
        <button
          className="btn btn-primary join-item"
          onClick={() => onSearch(search)}
          disabled={debouncedSearch.length < 3}
        >
          Search
        </button>
      </div>
      {debouncedFocused && limitedSuggestions.length > 0 && (
        <div className="absolute top-0 left-0 right-0 animate-fade-in-down z-10">
          <ul className="menu bg-base-100 rounded-4xl w-full pt-12 gap-2 shadow-md">
            {limitedSuggestions.map((suggestion) => (
              <li key={suggestion} onClick={() => selectSuggestion(suggestion)}>
                <a>{suggestion}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
