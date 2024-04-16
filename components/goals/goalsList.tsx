"use client";

import { goalsSelector } from "@/redux/features/goal/goals";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter, usePathname } from "next/navigation";

export const GoalsList = ({ params }: { params: { slug: string[] } }) => {
  const currentPathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const goalsModule = useAppSelector(goalsSelector);

  return (
    <div className="gl-container-list flex flex-col  bg-zinc-600/10 dark:bg-zinc-600/20 min-w-96">
      {goalsModule.goals.map((goal: any) => (
        <div
          className="gl-goal-item-square flex flex-col sm:flex-row h-52 border-3 rounded border-zinc-600 p-4 m-4 bg-zinc-600/10"
          key={goal.goalName}
        >
          <div className="gl-item flex flex-col h-2/3 sm:h-full sm:w-4/5 ">
            <p className="gl-header-name border-b-1 border-b-zinc-600/80 dark:border-b-zinc-100/30 p-1 mb-1">
              <b>{goal.goalName}</b>
            </p>
            <p className="gl-description-text overflow-auto scroll-m-0">
              {goal.description}
            </p>
          </div>
          <div className="gl-item-nav-group flex h-1/3 sm:h-full sm:flex-col sm:w-1/5 ">
            <button
              type="button"
              onClick={() => {
                router.push(
                  `http://localhost:3000/goals/${params.slug[0]}/${params.slug[1]}/${goal.id}`
                );
              }}
              className="gl-btn-open rounded-md grow border-1 w-1/3 h-10 sm:w-full text-xs md:text-base bg-lime-600/80 border-lime-600/40 m-1"
            >
              Открыть
            </button>
            <button
              type="button"
              className="gl-btn-edit rounded-md grow border-1 w-1/3 h-10 sm:w-full text-xs md:text-base bg-sky-600/80 border-sky-600/40 m-1"
            >
              Изменить
            </button>
            <button
              type="button"
              className="gl-btn-some rounded-md grow border-1 w-1/3 h-10 sm:w-full text-xs md:text-base bg-pink-600/80 border-pink-600/40 m-1"
            >
              что-то
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
