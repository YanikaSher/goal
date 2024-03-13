import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const cookie = Cookies.get("connect.sid");
  const router = useRouter();
  useEffect(() => {
    if (cookie) {
      fetch("http://localhost:5000/api/auth/checkAuth", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sid: cookie }),
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
      }).then((data)=> {
        if (data.status) {
          router.push('signin');
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }else {
      router.push('/signin')
    }
    
  }, [cookie, router]);
  return <>{children}</>;
}

export default PrivateRoute;
