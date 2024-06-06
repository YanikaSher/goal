"use client";

import { useState } from "react";
import { TimeLine } from "./timeLine";
import { ShowDescription } from "./showDescription";
import { GoalTrackers } from "./trackers/list";
import { IFullGoalInfo } from "@/app/goal/[goalId]/page";
import { CellDaysInWeek } from "./cellDaysInWeek";

export const DisplayFullGoal = function ({ goal }: { goal: IFullGoalInfo }) {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    isClicked ? setIsClicked(false) : setIsClicked(true);
  }
  return (
    <div className="flex flex-col">
      

      <TimeLine timePeriods={goal.timePeriods} />
      <CellDaysInWeek dates={goal.dates} />
      <ShowDescription descriptionText={goal.description} />
    </div>
  );
};
