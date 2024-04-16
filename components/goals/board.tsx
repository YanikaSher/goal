"use client";

import { goalsSelector, update } from "@/redux/features/goal/goals";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { GoalsList } from "./goalsList";
import { AbsenceMessage } from "./absenceMessage";

export const GoalsBoard = ({ params }: { params: { slug: string[] } }) => {
  const goalsModule = useAppSelector(goalsSelector);
  const dispatch = useAppDispatch();
  return (
    <div className="gb-container flex flex-col p-4 ">
      <div className="gb-module-name border-b-3 border-l-3 border-b-pink-600 border-l-sky-600 dark:border-b-sky-600 dark:border-l-pink-600 p-4 mb-7">
        <h1 className="gb-header-name text-3xl font-bold">
          {goalsModule.name}
        </h1>
      </div>
      <div className="gb-module-description border-l-3 border-l-sky-600 dark:border-l-pink-600 px-4">
        <p className="gb-text-description">{goalsModule.description}</p>
      </div>
      <div className="gb-goalsList flex my-7 rounded-lg ">
        {goalsModule.goals.length ? <GoalsList params={params} /> : <AbsenceMessage />}
      </div>
    </div>
  );
};
