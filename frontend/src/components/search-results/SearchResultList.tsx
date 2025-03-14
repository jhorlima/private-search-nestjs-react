import { HTMLAttributes, PropsWithChildren } from "react";
import { joinClassNames } from "@utils/html.util";
import { SearchResultListItemSkeleton } from "@components/search-results/SearchResultListItemSkeleton";

type SearchResultListProps = PropsWithChildren &
  HTMLAttributes<HTMLUListElement> & {
    isLoading: boolean;
  };

export const SearchResultList = ({
  isLoading,
  children,
  className,
  ...props
}: SearchResultListProps) => {
  return (
    <ul
      className={joinClassNames("list", "bg-base-100", "w-full", className)}
      {...props}
    >
      {isLoading && (
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Loading results...
        </li>
      )}
      {children}
      {isLoading &&
        Array.from(Array(3).keys()).map((key) => (
          <SearchResultListItemSkeleton key={key} />
        ))}
    </ul>
  );
};
