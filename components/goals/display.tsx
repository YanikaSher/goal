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
        <ShowDescription descriptionText={goal.description} />
      <GoalTrackers trackers={goal.tracker}></GoalTrackers>
    </div>
  );
};
