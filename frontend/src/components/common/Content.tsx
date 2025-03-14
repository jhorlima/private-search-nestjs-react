import { HTMLAttributes, PropsWithChildren } from "react";
import { joinClassNames } from "@utils/html.util";

type ContentProps = PropsWithChildren & HTMLAttributes<HTMLDivElement>;

export const Content = ({ children, className, ...props }: ContentProps) => {
  return (
    <main
      className={joinClassNames(
        "flex",
        "grow",
        "w-full",
        "h-full",
        "p-4",
        className
      )}
      {...props}
    >
      <div className="flex flex-auto justify-stretch bg-base-200 rounded-box shadow-sm overflow-auto">
        {children}
      </div>
    </main>
  );
};
