import { HTMLAttributes } from "react";

import { HistoricItem } from "@api/history";
import { joinClassNames } from "@utils/html.util";
import { formatDateWithTime } from "@utils/date.util";

import { MenuIcon } from "@components/common/Icons/MenuIcon";
import { SearchIcon } from "@components/common/Icons/SearchIcon";
type SearchHistoryListItemProps = HTMLAttributes<HTMLLIElement> & {
  historyItem: HistoricItem;
  openQueryResult: (query: string) => void;
  removeHistoryItem: (id: string) => void;
};

export const SearchHistoricListItem = ({
  className,
  historyItem,
  openQueryResult,
  removeHistoryItem,
  ...props
}: SearchHistoryListItemProps) => {
  const eventStopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const openHistoryItem = (e: React.MouseEvent<HTMLLIElement>) => {
    eventStopPropagation(e);
    openQueryResult(historyItem.query);
  };

  const openHistoryItemMenuInfo = (e: React.MouseEvent<HTMLLIElement>) => {
    eventStopPropagation(e);
    const modal = document.getElementById(`info-modal-${historyItem.id}`);

    if (modal instanceof HTMLDialogElement) {
      modal?.showModal();
    }
  };

  const openHistoryItemMenuDelete = (e: React.MouseEvent<HTMLLIElement>) => {
    eventStopPropagation(e);

    const modal = document.getElementById(`delete-modal-${historyItem.id}`);

    if (modal instanceof HTMLDialogElement) {
      modal?.showModal();
    }
  };

  const confirmRemoveHistoryItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    eventStopPropagation(e);
    removeHistoryItem(historyItem.id);
  };

  return (
    <li
      className={joinClassNames(
        "list-row",
        "hover:bg-base-200",
        "hover:cursor-pointer",
        className
      )}
      onClick={openHistoryItem}
      {...props}
    >
      <div className="avatar avatar-placeholder">
        <div className="bg-base-200 w-8 h-8 rounded-full">
          <SearchIcon />
        </div>
      </div>
      <div>
        <div className="text-xs font-semibold opacity-70">
          {historyItem.query}
        </div>
        <div className="text-xs opacity-50">
          {formatDateWithTime(historyItem.lastAccessAt)}
        </div>
      </div>
      <div
        className="dropdown dropdown-bottom dropdown-end"
        onClick={eventStopPropagation}
      >
        <div tabIndex={0} role="button" className="btn btn-square btn-ghost">
          <MenuIcon />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-300 rounded-box z-1 w-40 p-2 shadow-md"
        >
          <li onClick={openHistoryItemMenuInfo}>
            <a>View Details</a>
          </li>
          <li onClick={openHistoryItemMenuDelete}>
            <a>Remove</a>
          </li>
        </ul>
      </div>
      <dialog id={`info-modal-${historyItem.id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Search History Details</h3>
          <p className="py-4">
            Search term: <strong>{historyItem.query}</strong>
            <br />
            Total searches: {historyItem.totalRequests}
            <br />
            Last searched: {formatDateWithTime(historyItem.lastAccessAt)}
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id={`delete-modal-${historyItem.id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Delete Search History: {historyItem.query}
          </h3>
          <p className="py-4">Are you sure you want to delete this search?</p>
          <div className="modal-action">
            <form method="dialog" className="flex gap-2">
              <button
                className="btn btn-soft btn-error"
                onClick={confirmRemoveHistoryItem}
              >
                Remove
              </button>
              <button className="btn" onClick={eventStopPropagation}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </li>
  );
};
