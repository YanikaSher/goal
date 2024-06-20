"use client";

import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { getOwner } from "./postFetch";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const userSessionId = Cookies.get("connect.sid");
  const {
    data: userData,
    isLoading,
    isSuccess,
  } = useQuery<any>({
    queryKey: ["defaultProfile"],
    queryFn: async function () {
      try {
        const userData = await getOwner(userSessionId);
        return userData;
      } catch (error: any) {
        throw new Error("Failed to fetch user data: " + error.message);
      }
    },
  });

  if (isLoading) {
    return (
      <h1>
        <b>Loading...</b>
      </h1>
    );
  }
  if (isSuccess) {
    const userId = userData._id;
    Cookies.set("user_id", userId);
    router.push(`/profile/${userId}`);
  }
}
