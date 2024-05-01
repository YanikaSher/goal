"use client";

import moment from "moment";
import { ChangeEvent, useState } from "react";
import { isEndPointShort } from "./handleInput";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectorPeriod, setEndPeriod } from "@/redux/features/period/period";

export function EndInput() {
  const dispatch = useAppDispatch();
  const period = useAppSelector(selectorPeriod);

  return (
    <div className="flex">
      <label className="rounded h-10 w-24 p-1 border-2" htmlFor="end-time">
        Start time:
      </label>

      <input
        name="end-time"
        type="time"
        id="end-time"
        className=" border-gray-400/40 bg-blue-500/10 hover:border-blue-500 rounded h-10 w-24 p-1 border-2"
        onInput={(event: ChangeEvent<HTMLInputElement>) => {
          const endTime = event.target.value;
          const emptyTime = "";
          if (isEndPointShort(endTime, period.startPeriod)) {
            dispatch(setEndPeriod(emptyTime));
          } else {
            dispatch(setEndPeriod(endTime));
          }
        }}
      />
    </div>
  );
}
