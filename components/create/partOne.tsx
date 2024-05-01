// "use client";
import React, { useState } from "react";
import { Textarea, Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useAppSelector } from "@/redux/hooks";
import moment from "moment";
const uuid = require("uuid").v4;

import { HashTagInput } from "./hashtag/hashtagInput";
import { SelectPeriod } from "./selectPeriod/selectPeriodOfGoal";
import { selectSelectPeriod } from "@/redux/features/select/periodSlice";
import { SelectModule } from "./selectModule/selectModule";
import { selectorSelectModule } from "@/redux/features/select/moduleSlice";
import Cookies from "js-cookie";
import { selectTrackers } from "@/redux/features/tracker/trackersSlice";
import { SelectTimePeriods } from "./selectTimePeriods";

export function CreatePartOne() {
  const selectedModule = useAppSelector(selectorSelectModule);
  const tracker = useAppSelector(selectTrackers);
  const [description, setDescription] = useState("");
  const [goalName, setGoalName] = useState("");
  const periods = useAppSelector(selectSelectPeriod);
 
  return (
    <div className="flex-1 px-3 ">
      <div className="w-full flex flex-col gap-4">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 gap-4">
          <Input
            type="text"
            variant={"underlined"}
            placeholder="Введите название цели"
            onInput={(event: any) => {
              setGoalName(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="w-full flex gap-4 mb-6">
        <Textarea
          radius="sm"
          variant={"flat"}
          labelPlacement="inside"
          placeholder="Введите описание цели"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
          width={"lg"}
          onInput={(event: any) => {
            setDescription(event.target.value);
          }}
        />
      </div>
      <SelectModule />

      <div className="flex-col mb-6 sm:flex-row md:flex-row lg:flex-row">
        <HashTagInput />
        <SelectPeriod />

        <SelectTimePeriods />
        <Button
          onClick={() => {
            const id: string = uuid();

            const selectedDeadline = periods.selectedDeadline;
            const nowDate = moment();
            const startDate = moment(nowDate, "DD.MM.YY");
            const endDate = moment(nowDate, "DD.MM.YY").add(
              selectedDeadline,
              "days"
            );
            const dates = [];
            while (startDate.isBefore(endDate)) {
              dates.push({
                dates: startDate.format("DD.MM.YYYY"),
                isCompleted: false,
              });
              startDate.add(1, "days");
            }

            const data = {
              selectedModuleID: selectedModule,
              goal: {
                description,
                goalName,
                tracker,
                periods,
                abortAt: endDate,
                dates,
                id: id,
              },
              sid: Cookies.get("connect.sid"),
            };
            console.log(data);
            fetch("http://localhost:5000/api/create/goal", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((response) => {
                return response.json();
              })
              .then((data: any) => {
                console.log(data);
              });
          }}
        >
          Создать цель
        </Button>
      </div>
    </div>
  );
}
