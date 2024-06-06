"use client";

import { useState } from "react";
import { TimeLine } from "./timeLine";
import { ShowDescription } from "./showDescription";
import { ILessGoalInfo } from "@/app/goal/[goalId]/page";

export const DisplayLessGoal = function ({ goal }: { goal: ILessGoalInfo }) {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    isClicked ? setIsClicked(false) : setIsClicked(true);
  }
  return (
    <div className="flex flex-col">
     

      <ShowDescription descriptionText={goal.description} />
    </div>
  );
};
