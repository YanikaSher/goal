import Cookies from "js-cookie";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export function SignInBtn() {
  const router = useRouter();
  const [settings, setSettings] = useState("hidden");

  useEffect(() => {
    const cookie = Cookies.get("connect.sid");
    if (!cookie) {
      setSettings("flex");
    }else {
        setSettings('hidden')
    }
  }, []);

  return (
    <>
        <Button
          className={settings}
          color="danger"
          onPress={() => {
            router.push("/signin");
          }}
        >
          Войти
        </Button>
    </>
  );
}
