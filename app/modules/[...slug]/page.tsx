"use client";
import { GoalsBoard } from "@/components/goals/board";
import { update } from "@/redux/features/goal/goals";
import { useAppDispatch } from "@/redux/hooks";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function Page({
  params,
}: {
  params: {
    slug: string[];
};
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const moduleId = params.slug[1]
    const authorId = params.slug[0]
    console.log(moduleId + ' ' + authorId)
    const sid = Cookies.get("connect.sid");
    if (sid) {
      fetch("http://localhost:5000/api/get/module", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ moduleId: moduleId, authorId: authorId ,
          sid: sid,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(update({ newModule: data.body }));
        });
    } else {
      console.log("the sid is not found");
    }
  }, []);
  return <GoalsBoard params={params}></GoalsBoard>;
}
