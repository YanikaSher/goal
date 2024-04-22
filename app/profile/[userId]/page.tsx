"use client";

import { useQuery } from "@tanstack/react-query";
import { getOwner, getProfile } from "../postFetch";
import Cookies from "js-cookie";
import { useParams, useRouter } from "next/navigation";

export default function Page({ params }: any) {
  const router = useRouter();
  const sessionId = Cookies.get("connect.sid");
  const {
    data: whatTheFuck,
    isLoading,
    isError,
    isSuccess,
    isFetched,
  } = useQuery<any>({
    queryKey: ["profile"],
    queryFn: async function () {
      try {
        const profileData = await getProfile(sessionId, params.userId);
        return profileData;
      } catch (error: any) {
        console.log(error);
      }
    },
  });

  if (isSuccess) {
    return (
      <div>
        <p>Profile name: {whatTheFuck.userName}</p>
        <div>
          {whatTheFuck.modules.map((module: any) => (
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