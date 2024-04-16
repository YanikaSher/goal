"use client";
import { ChangeEvent, useState } from "react";
import moment from "moment";
import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import {
  selectChartData,
  selectChart,
  selectChartLabels,
} from "@/redux/features/chart/pieDataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateStateOfLabels } from "./updateStateOfLabels";
import { handleInput, isTimeUnique } from "./handleInput";

ChartJS.register(ArcElement, Legend, Tooltip);

const MyPieChart = ({ options }: any) => {
  const dispatch = useAppDispatch();
  const labels= useAppSelector(selectChartLabels);
  const freeTime = useAppSelector(selectChartData);
  const chart = useAppSelector(selectChart);
  // const [isPartSubmit, setBoolValueOfPart] = useState<boolean>(false)
  const [periodsOfTime, setPeriodOfTime]: any = useState([]);
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const [label, setLabel] = useState();
  const handleClick = async () => {
    const isStartTimeUnique = isTimeUnique(periodsOfTime, timeStart);
    const isEndTimeUnique = isTimeUnique(periodsOfTime, timeEnd);
    if (timeStart && timeEnd && label && isStartTimeUnique && isEndTimeUnique) {
      const start = moment(timeStart, "HH:mm");
      const end = moment(timeEnd, "HH:mm");
      await setPeriodOfTime([
        ...periodsOfTime,
        { start: timeStart, end: timeEnd },
      ]);
      const diffMilliseconds = Math.abs(start.diff(end));
      updateStateOfLabels(freeTime, diffMilliseconds, label, dispatch);
    } else {
      console.log(
        "Ошибка: одно из трех введенных значений не были введены или были введены некорректно!"
      );
    }
  };
  return (
    <div className="flex flex-col my-2 p-2 bg-pink-600/10 dark:bg-sky-600/20 rounded-md">
      <div className="my-2 mx-2 flex flex-col">
        <label
          htmlFor="timeRangeInput"
          className=" text-pink-600 dark:text-sky-600 text-xl py-2"
        >
          <strong>Распределите время:</strong>
        </label>
        <div className="flex  flex-col sm:flex-row">
          <div className="flex">
            <input
              type="time"
              id="timeRangeInput"
              className=" border-gray-400/40 bg-blue-500/10 focus:border-blue-500 rounded h-10 w-24 p-1 border-2"
              onInput={(event: ChangeEvent<HTMLInputElement>) => {
                handleInput(
                  event.target.value,
                  periodsOfTime,
                  setTimeStart,
                  timeStart
                );
              }}
            />
            <input
              type="time"
              id="timeRangeInput"
              className=" border-gray-400/40 bg-blue-500/10 focus:border-blue-500 rounded h-10 w-24 p-1 border-2"
              onInput={(event: ChangeEvent<HTMLInputElement>) => {
                handleInput(
                  event.target.value,
                  periodsOfTime,
                  setTimeEnd,
                  timeEnd
                );
              }}
            />
          </div>

          <input
            placeholder="Название отрезка времени"
            type="text"
            onChange={(event: any) => {
              setLabel(event.target.value);
            }}
            onKeyDown={(event: any) => {
              if (event.key === "Enter") {
                handleClick();
              }
            }}
            id="timeRangeInput"
            className=" border-gray-400/40 bg-gray-700/5 focus:outline-none focus:border-gray-600/60 rounded h-10 p-1 border-2"
          />
          <button
            onClick={handleClick}
            className="px-3 rounded border-2 border-lime-500/40 h-10 bg-lime-400/40 hover:bg-lime-400/20 "
          >
            Добавить
          </button>
        </div>
      </div>
      <div className="h-36 w-36">
        <Pie
          data={chart}
          options={options}
        />
      </div>
      <button
        onClick={() => {
          console.log(freeTime);
          console.log(labels);
          console.log(periodsOfTime);
        }}
      >
        CLICK ME BITCH
      </button>
    </div>
  );
};

export default MyPieChart;
