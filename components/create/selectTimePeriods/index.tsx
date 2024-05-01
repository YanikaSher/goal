"use client";
import { useState } from "react";
import {
  selectorPeriodsArray,
  setupPeriod,
} from "@/redux/features/period/periodsArray";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { StartInput } from "./startInput";
import { selectorPeriod, setPeriodId } from "@/redux/features/period/period";
import { EndInput } from "./endInput";
import { isPeriodCompleted } from "./handleAddBtn";
import { NameInput } from "./nameInput";
const uuid = require("uuid").v4;

export const SelectTimePeriods = () => {
  const periods = useAppSelector(selectorPeriodsArray);
  const period = useAppSelector(selectorPeriod);
  const dispatch = useAppDispatch();

  return (
    <div className="mpc-pie_chart-section flex flex-col my-2 p-2 bg-sky-600/10 dark:bg-sky-600/20 rounded-md">
      <div className="my-2 mx-2 flex flex-col">
        <label
          htmlFor="timeRangeInput"
          className="mpc-pie_chart-label text-pink-600 dark:text-sky-600 text-xl py-2"
        >
          <strong>Распределите время:</strong>
        </label>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row">
            <NameInput></NameInput>
            <StartInput></StartInput>
            <EndInput></EndInput>
          </div>

          <button
            type="button"
            onClick={() => {
              if (isPeriodCompleted(period, periods)) {
                const periodId: string = uuid();
                console.log(periodId);
                dispatch(setPeriodId(periodId));
                dispatch(setupPeriod(period));
              }
            }}
            className="px-3 rounded border-2 border-lime-500/40 h-10 bg-lime-400/40 hover:bg-lime-400/20 "
          >
            Добавить
          </button>
          <button
            type="button"
            onClick={() => {
              console.log(period);
              console.log(periods);
            }}
          >
            show
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center rounded h-36 p-3 overflow-y-auto dark:bg-sky-600/10 dark:shadow-zinc-950 shadow-sky-700/40 shadow-[inset_0px_0px_10px_0px_rgba(0,0,0,0.3)] bg-sky-800/10">
        {periods.map((period) => (
          <div key={period.id} className="m">
            {period.startPeriod}:{period.endPeriod}
          </div>
        ))}
      </div>
    </div>
  );
};
