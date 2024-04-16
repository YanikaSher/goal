"use client";
import { useEffect } from "react";
// можно реализовать временное храненние данных профиля прям
//на сайте в куках, чтобы постоянно не делать запрос на сервер
//но делать постоянные обновления данных при их изменении соответственно
import { requestModuleId } from "./request";
import Cookies from "js-cookie";
export default function GoalPage({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  const sid = Cookies.get("connect.sid");
  const url = "http://localhost:5000/api/get/module";
  useEffect(() => {
    console.log(params.slug)
    if (sid) {
      requestModuleId(url, sid, params);
    } else {
      console.log("sid отсутствует");
    }
  }, []);
  return <div>SOme goal page hellooooooooooo{params.slug}</div>;
}
