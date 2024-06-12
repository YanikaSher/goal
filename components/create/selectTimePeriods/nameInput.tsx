"use client";

import { useState } from "react";
import { isNameEmpty } from "./handleInput";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectorPeriod, setPeriodName } from "@/redux/features/period/period";

export function NameInput() {
  const dispatch = useAppDispatch();
  const period = useAppSelector(selectorPeriod);
  const [errorMessage, setErrorMessage] = useState<string>("");
  return (
    <input
      placeholder="Название отрезка времени"
      type="text"
      onChange={(event: any) => {
        const inputName = event.target.value;
        const emptyName = "";
        if (isNameEmpty(inputName)) {
          setErrorMessage("Веденное вами значение является пустой строкой");
          dispatch(setPeriodName(emptyName));
        } else {
          dispatch(setPeriodName(inputName));
        }
      }}
      onKeyDown={(event: any) => {}}
      id="timeRangeInput"
      className="ni-time-period-name-input border-gray-400/40 bg-gray-700/5 focus:outline-none focus:border-gray-600/60 rounded h-10 p-1 border-2"
    />
  );
}
