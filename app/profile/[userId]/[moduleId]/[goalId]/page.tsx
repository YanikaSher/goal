"use client";

import { getProfile } from "@/app/profile/postFetch";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";

export default function Page({ params }: any) {
  const currentPath = usePathname();
  const router = useRouter();
  const sessionId = Cookies.get("connect.sid");
  const profileId = Cookies.get("profile_id");
  const { data, isLoading, isError, isSuccess, isFetched } = useQuery<any>({
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
    const goalId = params.goalId;
    const moduleData = data.modules.find(
      (module: any) => module.id === moduleId
    );
    console.log(moduleData);
    const goalData = moduleData.goals.find((goal: any) => goal.id === goalId);
    console.log(goalData);
    return (
      <div>
        <p>{goalData.goalName}</p>
        <p>{goalData.description}</p>
      </div>
    );
  }
}
