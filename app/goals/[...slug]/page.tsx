"use client";
import { selectModules, update } from "@/redux/features/module/module";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  // const dispatch = useAppDispatch()
  // const moduleAuthor = useAppSelector(selectModules);
  const [module, setModule] = useState({name: '', description: '', id: '', author: '', goals: []})
  useEffect(() => {
    const sid = Cookies.get("connect.sid");
    if (sid) {
      console.log("i have sid!!!");
      fetch("http://localhost:5000/api/get/module", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          moduleSlugsInfo: params.slug,
          sid: sid,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setModule(data)
          console.log(data);
        });
    } else {
      console.log("i havent sid((((");
    }
  }, []);
  return <div>
    
    {/* {module.goals.map((goal)=> (
      <div key={goal.id}>{goal.name}</div>
    ))} */}
    
    </div>;
}
