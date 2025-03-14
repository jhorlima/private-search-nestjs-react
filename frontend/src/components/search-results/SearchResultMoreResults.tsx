type SearchResultMoreResultsProps = {
  isLoading: boolean;
  onLoadMore: () => void;
};
export const SearchResultMoreResults = ({
  isLoading,
  onLoadMore,
}: SearchResultMoreResultsProps) => {
  return (
    <div className="flex justify-center p-4">
      <button
        className="btn btn-soft btn-accent"
        onClick={() => onLoadMore()}
        disabled={isLoading}
      >
        {isLoading && <span className="loading loading-spinner"></span>}
        More results
      </button>
    </div>
  );
};
