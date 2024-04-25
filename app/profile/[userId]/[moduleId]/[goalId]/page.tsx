"use client";

import { getProfile } from "@/app/profile/postFetch";
import { DisplayGoal } from "@/components/goals/display";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import moment from "moment";

export default function Page({ params }: {params: {goalId: string, moduleId: string}}) {
  const now = moment();
  const sessionId = Cookies.get("connect.sid");
  const profileId = Cookies.get("profile_id");
  const { data, isLoading, isError, isSuccess, isFetched } = useQuery<IUser>({
    queryKey: ["profile"],
    queryFn: async function () {
      try {
        const profileData = await getProfile(sessionId, profileId);
        return profileData;
      } catch (error) {
        console.log(error);
      }
    },
  });
  if (isSuccess) {
    const moduleId = params.moduleId;
    const goalId = params.goalId;
    const moduleData: IModule = data.modules.find(
      (module: IModule) => module.id === moduleId
    );
    const goalData: any = moduleData.goals.find((goal: any) => goal.id === goalId);
    const some = goalData.dates.find(
      (day: {dates: string, isCompleted: boolean} | any) => day.dates === now.format("DD.MM.YYYY")
    );
    console.log(goalData);
    return (
      <div>
        {some ? (
          <DisplayGoal goal={goalData}></DisplayGoal>
        ) : (
          <p>Привет, скрок твоей цели закончен, хочешь продлить?</p>
        )}
      </div>
    );
  }
}
