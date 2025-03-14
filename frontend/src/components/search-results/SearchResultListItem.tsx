import { HTMLAttributes } from "react";
import { SearchResult } from "@api/search";
import { escapeUnsafeHtmlTags, joinClassNames } from "@utils/html.util";

type ResultListItemProps = HTMLAttributes<HTMLLIElement> & {
  searchResult: SearchResult;
};

export const SearchResultListItem = ({
  className,
  searchResult,
  ...props
}: ResultListItemProps) => {
  const joinedClassName = joinClassNames("list-row", "gap-0", "p-4", className);

  return (
    <li className={joinedClassName} {...props}>
      <div className="flex flex-col gap-3">
        <div className="flex row gap-2 items-center">
          <div className="avatar avatar-placeholder">
            <div className="bg-base-200 w-8 h-8 rounded-full">
              <img className="size-10 rounded-box" src={searchResult.icon} />
            </div>
          </div>
          <div>
            <div className="font-medium text-sm">{searchResult.title}</div>
            <div className="text-xs opacity-60">
              <a
                className="link link-neutral"
                href={searchResult.url}
                target="_blank"
              >
                {searchResult.url}
              </a>
            </div>
          </div>
        </div>
        <p
          className="list-col-wrap text-sm"
          dangerouslySetInnerHTML={{
            __html: escapeUnsafeHtmlTags(searchResult.description, ["b", "br"]),
          }}
        ></p>
      </div>
    </li>
  );
};
