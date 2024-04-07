"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";
// import { intervalSession } from "./intervalSession";
function PrivateRoute({ children }: { children: React.ReactNode }) {
  const cookies = Cookies.get("connect.sid");
  const router = useRouter();

  const checkAuth = (cookies: string | undefined) => {
    if (cookies) {
      fetch("http://localhost:5000/api/auth/checkAuth", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sid: cookies }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return {
              message: "Ошибка при коммуникации с сервером",
              status: false,
            };
          }
        })
        .then((data) => {
          if (!data.status && typeof window !== "undefined") {
            router.push("signin");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      if (typeof window !== "undefined") {
        router.push("/signin");
      }
    }
  };

  useEffect(() => {
    checkAuth(cookies);
    let intervalId = setInterval(() => {
      const cookiesSid = Cookies.get("connect.sid");
      const localSid = window.localStorage.getItem("sid");
      if (!cookiesSid) {
        router.push("/signin");
        if (localSid) {
          fetch("http://localhost:5000/api/auth/checksession", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ sid: localSid }),
          });
        }
      }
    }, 30000);

    return () => clearInterval(intervalId);
  }, [cookies, router]);

  return <>{children}</>;
}
export default PrivateRoute;
