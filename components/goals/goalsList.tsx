"use client";

import { goalsSelector } from "@/redux/features/goal/goals";
import { useAppSelector } from "@/redux/hooks";
import { useRouter, useParams } from "next/navigation";

export const GoalsList = ({ goals }: { goals: Array<IGoal> }) => {
  const params = useParams<{ userId: string; moduleId: string }>();
  const router = useRouter();
  function handleClickButton(goalId: string) {
    console.log("step one");
    const url = "http://localhost:5000/api/delete/goal";
    const oprions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ goalId: goalId, moduleId: params.moduleId }),
    };
    fetch(url, oprions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="gl-container-list flex flex-col dark:bg-zinc-600/20 min-w-96">
      {goals.map((goal) => (
        <div
          className="gl-goal-item-square flex flex-col sm:flex-row h-52 border-3 rounded p-4 m-4"
          key={goal.goalName}
        >
          <div className="gl-item flex flex-col h-2/3 sm:h-full sm:w-4/5 ">
            <p className="gl-header-name border-b-1   p-1 mb-1">
              <b>{goal.goalName}</b>
            </p>
            <textarea
              spellCheck={true}
              maxLength={4}
              readOnly={true}
              value={goal.description}
              name={goal.goalName}
              cols={50}
              rows={3}
              className="gl-description-text  overflow-hidden outline-none resize-none caret-transparent"
            >
              {goal.description}
            </textarea>
          </div>
          <div className="gl-item-nav-group flex h-1/3 sm:h-full sm:flex-col sm:w-1/5 ">
            <button
              type="button"
              onClick={() => {
                router.push(`http://localhost:3000/goal/${goal.ref}`);
              }}
              className="gl-btn-open rounded-md grow border-1 w-1/3 h-10 sm:w-full text-xs md:text-base bg-sky-500/10 border-sky-600/40 m-1"
            >
              Открыть
            </button>
            <button
              onClick={() => {
                handleClickButton(goal.ref);
              }}
              className="gl-btn-open rounded-md grow border-1 w-1/3 h-10 sm:w-full text-xs md:text-base bg-red-500/10 border-red-600/40 m-1"
              type="button"
            >
              Удалить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
