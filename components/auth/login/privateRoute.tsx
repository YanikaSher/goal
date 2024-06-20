"use client";

import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React from "react";
import { checkAuth } from "./requests";
function PrivateRoute({ children }: { children: React.ReactNode }) {
  const cookies = Cookies.get("connect.sid");
  const router = useRouter();
  const query = useQuery({
    queryKey: ["check_auth"],
    queryFn: () => checkAuth(cookies),
  });
  if (query.isSuccess) {
    if (!query.data.isAuth) {
      router.push("/signin");
    }
    return <>{children}</>;
  }
  if (query.isError) {
    return (
      <div>
        <h2>Ошибка при запросе</h2>
        <h2>Перезагрузите страницу</h2>
      </div>
    );
  }
}
export default PrivateRoute;
