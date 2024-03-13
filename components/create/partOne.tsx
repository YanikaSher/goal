// "use client";
import React, { useState } from "react";
import { Textarea, Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useAppSelector } from "@/redux/hooks";
import MyPieChart from "./pieChart/pieChart";
import { HashTagInput } from "./hashtag/hashtagInput";
import { SelectPeriod } from "./selectPeriod/selectPeriodOfGoal";
import { selectSelectPeriod } from "@/redux/features/selectPeriod/selectPeriodSlice";
import { selectChart } from "@/redux/features/chart/pieDataSlice";

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      maxHeight: 50,
      onClick: (e: any, legendItem: any, legend: any) => {
        // e.preventDefault();
        console.log("legend");
        console.log(legendItem);
        console.log(legend);
      },
    },
  },
};

export function CreatePartOne() {
  const tracker: any = useAppSelector((state) => state.trackers);
  const [description, setDescription] = useState("");
  const [nameGoal, setNameGoal] = useState("");
  const periods: any = useAppSelector(selectSelectPeriod);
  const chart: any = useAppSelector(selectChart);
  return (
    <div className="flex-1 px-3 ">
      <div className="w-full flex flex-col gap-4">
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 gap-4">
          <Input
            type="text"
            variant={"underlined"}
            placeholder="Введите название цели"
            onInput={(event: any) => {
              setNameGoal(event.target.value);
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
      <div className="flex-col mb-6 sm:flex-row md:flex-row lg:flex-row">
        <HashTagInput />
        <SelectPeriod/>
        <MyPieChart options={options} />

        <Button
          onClick={() => {
            const data = {
              description,
              nameGoal,
              tracker,
              periods,
              chart,
              
            };
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
