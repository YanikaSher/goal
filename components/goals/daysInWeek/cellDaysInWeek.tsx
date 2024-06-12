"use client";

import {
  calculateWeek,
  convertIndexToDayOfWeek,
  getCurrentWeekArr,
} from "./calculateWeek";

export function CellDaysInWeek({
  dates,
}: {
  dates: { date: string; id: string; completedTrackers: [] }[];
}) {
  const periodOfCurrentWeek = calculateWeek();
  const currentWeek = getCurrentWeekArr(dates, periodOfCurrentWeek);
  return (
    <div>
      <div className="flex justify-center flex-wrap my-5 ">
        {currentWeek.map((date) => (
          <div
            className="flex flex-col border-2 p-2 rounded dark:border-zinc-600"
            key={date.index}
          >
            <p className="dc-tracker-name border-b-2 text-center w-full">
              {date.date}{" "}
              <b className="text-green-600">
                {convertIndexToDayOfWeek(date.index)}
              </b>
            </p>
            <ul>
              {date.completedTrackers.map(
                (tracker: {
                  name: string;
                  format: string;
                  id: string;
                  resolve: string;
                }) => (
                  <li
                    className="flex *:dark:text-zinc-600 *:text-zinc-500"
                    key={tracker.id}
                  >
                    <b className=" w-1/6">{"o"}</b>
                    <p className=" w-5/6">{tracker.name}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
