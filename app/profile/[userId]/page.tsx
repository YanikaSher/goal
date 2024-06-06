"use client";

const uuid = require("uuid").v4;

import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../postFetch";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { ProfileInfo } from "@/components/profile/profileInfo";
import { CreateModuleModal } from "@/components/profile/createModuleModal";

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
        <ProfileInfo profileData={profileData} />

        <div>
          <CreateModuleModal />
          {profileData.modules.map((module) => (
            <div className="flex flex-col" key={module.id}>
              <h2 className=" font-bold text-sky-600">{module.name}</h2>
              <p>{module.description}</p>
              <button
                className=" mt-2 p-1 bg-zinc-400/10 rounded hover:bg-zinc-400/20"
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
        <center></center>
      </div>
    );
  }
}
