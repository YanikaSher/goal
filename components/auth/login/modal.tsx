'use client'

import { useAppSelector } from "@/redux/hooks";
import { LoginWin } from "./loginWin";
import { SuccessLoginWin } from "./successLoginWin";
import { selectLoginSuccessful } from "@/redux/features/auth/loginSuccessful";

export const ModalLogin = () => {
  const isLoginSuccessful = useAppSelector(selectLoginSuccessful);
  console.log(isLoginSuccessful)
  return <div>{isLoginSuccessful ? <SuccessLoginWin /> : <LoginWin />}</div>;
};
