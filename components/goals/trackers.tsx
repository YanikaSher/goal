"use client";

export const GoalTrackers = ({
  trackers,
}: {
  trackers: Array<{
    format: string;
    id: string;
    mode: "strict" | "free";
    name: string;
  }>;
}) => {
  return (
    <div className="flex flex-col p-2">
      {trackers.map((tracker) => (
        <div key={tracker.id} className="p-3 rounded-md flex flex-col border-y-3 border-x-3">
          <label htmlFor="tracker">{tracker.name}:</label>
          <input
          type={tracker.format}
            name={tracker.name}
            className="border-2 rounded-md p-1 border-zinc-700"
          ></input>
        </div>
      ))}
    </div>
  );
};
