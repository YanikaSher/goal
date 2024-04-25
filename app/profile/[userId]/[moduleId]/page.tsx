"use client";

import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../postFetch";
import Cookies from "js-cookie";
import { useRouter, usePathname } from "next/navigation";
import { ShowDescription } from "@/components/goals/showDescription";
import { GoalsList } from "@/components/goals/goalsList";

export default function Page({ params }: any) {
  const currentPath = usePathname();
  const router = useRouter();
  const sessionId = Cookies.get("connect.sid");
  const profileId = Cookies.get("profile_id");
  const { data, isLoading, isError, isSuccess, isFetched } = useQuery<IUser>({
    queryKey: ["profile"],
    queryFn: async function () {
      try {
        const profileData = await getProfile(sessionId, profileId);
        return profileData;
      } catch (error: any) {
        console.log(error);
      }
    },
  });
  if (isSuccess) {
    const moduleId = params.moduleId;
    const moduleData = data.modules.find(
      (module: IModule) => module.id === moduleId
    );
    console.log(moduleData);
    return (
      <div className="module-entrails">
        <div className="flex flex-col mb-4 p-2 border-x-3 border-pink-600 border-y-3 rounded border-y-sky-500">
          <h2 className="text-3xl self-center font-medium">
            {moduleData.name}
          </h2>
        </div>
        <ShowDescription descriptionText={moduleData.description}></ShowDescription>
        <GoalsList goals={moduleData.goals}></GoalsList>
      </div>
    );
  }
}
