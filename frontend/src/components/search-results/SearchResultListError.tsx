import { Link } from "@tanstack/react-router";
import { WarningIcon } from "@components/common/Icons/WarningIcon";
import { ArrowLeftIcon } from "@components/common/Icons/ArrowLeftIcon";

type ResultListErrorProps = {
  onTryAgain: () => void;
};

export const SearchResultListError = ({ onTryAgain }: ResultListErrorProps) => {
  return (
    <div className="bg-base-200 p-4">
      <div className="container flex items-center px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className="p-3 text-sm font-medium text-warning rounded-full bg-base-300">
            <WarningIcon />
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-warning-content md:text-3xl">
            Something went wrong
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Check your network connection and try again.
          </p>

          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <Link className="btn btn-neutral" to="/">
              <ArrowLeftIcon />
              <span>Go home</span>
            </Link>

            <button className="btn btn-accent" onClick={onTryAgain}>
              Try again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
