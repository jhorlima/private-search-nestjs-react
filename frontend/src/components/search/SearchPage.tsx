import { homeRoute } from "@routes/home";
import { SearchBoxWithSuggestions } from "@components/common";

export const SearchPage = () => {
  const navigate = homeRoute.useNavigate();
  const { query } = homeRoute.useSearch();

  const onSearch = (searchTerm: string) => {
    navigate({
      to: "/results",
      search: (search) => ({
        ...search,
        query: searchTerm,
      }),
    });
  };

  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Private Search</h1>
          <p className="py-6">
            Search the web securely and privately. No tracking, no search
            history, just the results you need with complete privacy and
            anonymity.
          </p>
          <SearchBoxWithSuggestions onSearch={onSearch} query={query} />
        </div>
      </div>
    </div>
  );
};
