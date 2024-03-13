import { del, selectTrackers } from "@/redux/features/tracker/trackersSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TrackerSwitch } from "./switch";
import { PseudoMandatoryTrackerGroup } from "./pseudoMandatoryGroup";

export const TrackerBoard = () => {
  const dispatch = useAppDispatch();
  const trackers: any = useAppSelector(selectTrackers);
  return (
    <div className="flex flex-col">
      <h1 className="text-xl text-center border-3 rounded-lg border-pink-600/20 dark:border-sky-600/20 font-medium text-pink-600 dark:text-sky-500 py-3">
        Доска трекеров
      </h1>
      <p className="my-3 text-center  text-zinc-500 dark:text-zinc-400">
        Создайте персональный трекер для лучшего прогресса
      </p>

      <div className="flex"></div>

      <TrackerSwitch />

      <div className="snap-y bg-pink-600/10 dark:bg-sky-600/20 place-content-center rounded p-4 h-200">
        {trackers &&
          trackers.map((tracker: any) => (
            <div
              className="flex bg-pink-600/20 p-2 rounded-l border-sky-600 mb-2 border-r-3 justify-between dark:bg-sky-600/20 items-center"
              key={tracker.id}
            >
              <p>{tracker.name}</p>{" "}
              <button
                data-id={tracker.id}
                className="rounded-md border-2 border-zinc-600/30 bg-zinc-600/20 p-1"
                type="button"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  const element = event.target as HTMLButtonElement;
                  const targetId = element.getAttribute("data-id");
                  if (targetId) {
                    dispatch(del({ targetId: targetId }));
                  }
                }}
              >
                удалить
              </button>
            </div>
          ))}
        {trackers.length > 2 ? null : <PseudoMandatoryTrackerGroup />}
      </div>
    </div>
  );
};
