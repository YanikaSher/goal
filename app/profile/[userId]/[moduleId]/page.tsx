"use client";

import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../postFetch";
import Cookies from "js-cookie";
import { useRouter, usePathname } from "next/navigation";

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
    const moduleData = data.modules.find(
      (module: any) => module.id === moduleId
    );
    console.log(moduleData);
    return (
      <div>
        <div>
          <h2 className="text-3xl mb-5">{moduleData.name}</h2>
          <label htmlFor="xyi">
            <textarea
              spellCheck={true}
              maxLength={4}
              readOnly={true}
              value={moduleData.description}
              name="xyi"
              cols={50}
              rows={3}
              className="overflow-hidden outline-none resize-none caret-transparent"
            >
              {moduleData.description}
            </textarea>
          </label>
        </div>
        <div>
          {moduleData.goals.map((goal: any) => (
            <div key={goal.goalName}>
              <p>{goal.goalName}</p>
              <button
                type="button"
                onClick={() => router.push(`${currentPath}/${goal.id}`)}
              >
                Open
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
