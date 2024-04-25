"use client";

import { useState } from "react";
import { TimeLine } from "./timeLine";
import { ShowDescription } from "./showDescription";
import { GoalTrackers } from "./trackers";

export const DisplayGoal = function ({ goal }: { goal: IGoal }) {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    isClicked ? setIsClicked(false) : setIsClicked(true);
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-col mb-4 p-2 border-x-3 border-pink-600 border-y-3 rounded border-y-sky-500">
        <h2 className="text-3xl self-center font-medium">
          {goal.goalName === "" ? "Цель без названия и много другого текста супер пупер дупер" : goal.goalName}
        </h2>
      </div>

      <TimeLine datasets={goal.chartDatasets}></TimeLine>
      <button
        type="button"
        className="px-1 border-3 border-zinc-500/20 text-zinc-600 dark:text-zinc-400 dark:border-zinc-400/30 bg-zinc-600/20 rounded-lg my-2"
        onClick={handleClick}
      >
        Смотреть описание {">"}
      </button>
      {isClicked ? (
        <ShowDescription descriptionText={goal.description} />
      ) : null}
      <GoalTrackers trackers={goal.tracker}></GoalTrackers>
    </div>
  );
};
