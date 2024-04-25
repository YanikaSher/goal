"use client";

import { useQuery } from "@tanstack/react-query";
import { getOwner, getProfile } from "../postFetch";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { ProfileInfo } from "@/components/profile/profileInfo";

export default function Page({ params }: any) {
  const router = useRouter();
  const sessionId = Cookies.get("connect.sid");
  const {
    data: profileData,
    isLoading,
    isError,
    isSuccess,
    isFetched,
  } = useQuery<IUser>({
    queryKey: ["profile"],
    queryFn: async function () {
      try {
        const profileData = await getProfile(sessionId, params.userId);
        return profileData;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (isSuccess) {
    return (
      <div className="p-profile-container">
        <ProfileInfo profileData={profileData}/>
       
        <div>
          {profileData.modules.map((module) => (
            <div className="flex flex-col" key={module.id}>
              <h2>-{module.name}</h2>
              <p>{module.description}</p>
              <button
                className=" border-2 rounded"
                type="button"
                onClick={() => {
                  router.push(`/profile/${params.userId}/${module.id}`);
                }}
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
