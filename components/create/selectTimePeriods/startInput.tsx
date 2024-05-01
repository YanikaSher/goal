"use client";

import { ChangeEvent, FocusEvent, useState } from "react";
import { isStartInputSame } from "./handleInput";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {setStartPeriod } from "@/redux/features/period/period";
import { selectorPeriodsArray } from "@/redux/features/period/periodsArray";

export function StartInput() {
  const periods = useAppSelector(selectorPeriodsArray);
  const dispatch = useAppDispatch();

  return (
    <div className="flex">
      <label className="rounded h-10 w-24 p-1 border-2" htmlFor="start-time">
        Start time:
      </label>
      <input
        name="start-time"
        type="time"
        id="start-time"
        className=" border-gray-400/40 bg-blue-500/10 hover:border-sky-500 rounded h-10 w-24 p-1 border-2"
        onInput={(event: ChangeEvent<HTMLInputElement>) => {
          const startTime = event.target.value;
          const emptyTime = "";
          if (isStartInputSame(periods, startTime)) {
            dispatch(setStartPeriod(emptyTime));
          } else {
            dispatch(setStartPeriod(startTime));
          }
        }}
      />
    </div>
  );
}
