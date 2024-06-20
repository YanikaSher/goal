"use client";

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
import { useState } from "react";
import { MailIcon, LockIcon } from "@/components/icons";
import { validateEmail } from "../validation";
import Cookies from "js-cookie";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "./requests";

export function LoginWin() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userErrorInfo, setUserErrorInfo] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data.message) {
        setUserErrorInfo(data?.message);
      }

      queryClient.invalidateQueries({ queryKey: ["login"] });
      const sid = Cookies.get("connect.sid");
      sid ? window.localStorage.setItem("connect.sid", sid) : null;
      location.reload();
    },
  });
  return (
    <form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        mutation.mutate({ email: email, password: password });
      }}
    >
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
            color={validateEmail(email) ? "primary" : "warning"}
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
