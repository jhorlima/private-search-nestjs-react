import { HTMLAttributes, PropsWithChildren } from "react";
import { joinClassNames } from "@utils/html.util";

type SearchHistoryListProps = HTMLAttributes<HTMLUListElement> &
  PropsWithChildren;

export const SearchHistoricList = ({
  children,
  className,
  ...props
}: SearchHistoryListProps) => {
  const joinedClassName = joinClassNames("list", className);

  return (
    <ul className={joinedClassName} {...props}>
      {children}
    </ul>
  );
};
