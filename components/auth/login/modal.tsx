"use client";

import Cookies from "js-cookie";
import { LoginWin } from "./loginWin";
import { SuccessLoginWin } from "./successLoginWin";
import { session_id_name } from "@/config/globalConsts";

export const ModalLogin = () => {
  const session = Cookies.get(session_id_name);
    return <div>{session ? <SuccessLoginWin /> : <LoginWin />}</div>;
};
