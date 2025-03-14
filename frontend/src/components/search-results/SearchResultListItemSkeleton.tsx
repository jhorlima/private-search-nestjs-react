export const SearchResultListItemSkeleton = () => {
  return (
    <li className="list-row gap-0 p-4 grid-cols-none">
      <div className="flex flex-col gap-3">
        <div className="flex row gap-2 items-center">
          <div className="skeleton w-8 h-8 shrink-0 rounded-full"></div>
          <div className="flex flex-col gap-2">
            <div className="skeleton h-3 w-30 max-w-full"></div>
            <div className="skeleton h-3 w-50 max-w-full"></div>
          </div>
        </div>
        <div className="list-col-wrap">
          <div className="skeleton h-20 w-full min-w-full"></div>
        </div>
      </div>
    </li>
  );
};
