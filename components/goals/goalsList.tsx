"use client";

import { goalsSelector } from "@/redux/features/goal/goals";
import { useAppSelector } from "@/redux/hooks";
import { useRouter, useParams } from "next/navigation";

export const GoalsList = ({goals}: {goals: Array<IGoal>}) => {
  const params = useParams<{userId: string, moduleId:string}>()
  const router = useRouter();
  return (
    <div className="gl-container-list flex flex-col dark:bg-zinc-600/20 min-w-96">
      {goals.map((goal) => (
        <div
          className="gl-goal-item-square flex flex-col sm:flex-row h-52 border-3 rounded border-zinc-600 p-4 m-4"
          key={goal.goalName}
        >
          <div className="gl-item flex flex-col h-2/3 sm:h-full sm:w-4/5 ">
            <p className="gl-header-name border-b-1 border-b-zinc-600/80 dark:border-b-zinc-100/30 p-1 mb-1">
              <b>{goal.goalName}</b>
            </p>
            <textarea spellCheck={true}
              maxLength={4}
              readOnly={true}
              value={goal.description}
              name={goal.goalName}
              cols={50}
              rows={3}
              className="gl-description-text overflow-hidden outline-none resize-none caret-transparent">
              {goal.description}
            </textarea>
          </div>
          <div className="gl-item-nav-group flex h-1/3 sm:h-full sm:flex-col sm:w-1/5 ">
            <button
              type="button"
              onClick={() => {
                router.push(
                  `http://localhost:3000/profile/${params.userId}/${params.moduleId}/${goal.id}`
                );
              }}
              className="gl-btn-open rounded-md grow border-1 w-1/3 h-10 sm:w-full text-xs md:text-base bg-yellow-500 border-yellow-600/40 m-1"
            >
              Открыть
            </button>
            <button
              type="button"
              className="gl-btn-edit rounded-md grow border-1 w-1/3 h-10 sm:w-full text-xs md:text-base bg-sky-500 border-sky-500/40 m-1"
            >
              Изменить
            </button>
            <button
              type="button"
              className="gl-btn-some rounded-md grow border-1 w-1/3 h-10 sm:w-full text-xs md:text-base bg-pink-600 border-pink-600/40 m-1"
            >
              что-то
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
