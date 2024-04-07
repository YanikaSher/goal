import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { MailIcon, LockIcon } from "@/components/icons";
import { validateEmail } from "./validation";
import { useAppDispatch } from "@/redux/hooks";
import { setup } from "@/redux/features/auth/loginSuccessful";
import Cookies from "js-cookie";

export function LoginWin() {
  const dispatch = useAppDispatch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userErrorInfo, setUserErrorInfo] = useState("");
  const router = useRouter();
  function signInHandleClick(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    fetch("http://localhost:5000/api/auth/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "User-Agent": navigator.userAgent,
        "Accept-Language": navigator.language,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => {
        if (response.ok) {
          dispatch(setup(true));
          return response.json();
        } else if (response.status >= 400) {
          return false;
        }
      })
      .then((data) => {
        if (!data) {
          setUserErrorInfo(data.message);
        } else {
          const sid = Cookies.get("connect.sid");
          sid
            ? window.localStorage.setItem("sid", sid)
            : console.log("кука не установилась");
        }
      });
  }
  const isInvalidEmail = useMemo(() => {
    return validateEmail(email);
  }, [email]);

  return (
    <form onSubmit={signInHandleClick}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Вход</ModalHeader>
        <ModalBody>
          <Input
            autoFocus
            endContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            label="Email"
            placeholder="Введите вашу почту"
            variant="bordered"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
            color={isInvalidEmail ? "primary" : "warning"}
          />
          <Input
            endContent={
              <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            label="Password"
            placeholder="Введите пароль"
            type="password"
            variant="bordered"
            value={password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
          />
          <div className="text-red-600 text-sm">{userErrorInfo}</div>
          <div className="flex py-2 px-1 justify-between">
            <Checkbox
              classNames={{
                label: "text-small",
              }}
            >
              Запомни меня
            </Checkbox>
            <Link color="primary" href="#" size="sm">
              Не помню пароль
            </Link>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="primary">
            Отправить
          </Button>
        </ModalFooter>
      </ModalContent>
    </form>
  );
}
