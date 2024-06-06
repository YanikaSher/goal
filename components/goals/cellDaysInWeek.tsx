"use client";

import { useParams } from "next/navigation";

export function CellDaysInWeek({
  dates,
}: {
  dates: { date: string; id: string; completedTrackers: [] }[];
}) {
  const params = useParams<{ goalId: string }>();

  return (
    <div>
      <div className="flex justify-center flex-wrap my-5 ">
        {dates.map((date) => (
          <div
            className="flex flex-col border-2 p-2 rounded dark:border-zinc-600"
            key={date.id}
          >
            <p className="dc-tracker-name border-b-2">{date.date}</p>
            <ul>
              {date.completedTrackers.map(
                (tracker: {
                  name: string;
                  format: string;
                  id: string;
                  resolve: string;
                }) => (
                  <li key={tracker.id}>{' + '}{tracker.name}</li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
