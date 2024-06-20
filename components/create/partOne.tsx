// "use client";
import React, { useState } from "react";
import Cookies from "js-cookie";

const uuid = require("uuid").v4;

import { Textarea, Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useAppSelector } from "@/redux/hooks";

import { HashTagInput } from "./hashtag/hashtagInput";
import { SelectPeriod } from "./selectPeriod/selectPeriodOfGoal";
import { selectSelectPeriod } from "@/redux/features/select/periodSlice";
import { SelectModule } from "./selectModule/selectModule";
import { selectorSelectModule } from "@/redux/features/select/moduleSlice";
import { selectTrackers } from "@/redux/features/tracker/trackersSlice";
import { SelectTimePeriods } from "./selectTimePeriods";
import { getArrayOfPeriods } from "./getArrayOfPeriods";
import { selectorPeriodsArray } from "@/redux/features/period/periodsArray";
import { selectHashtag } from "@/redux/features/hashtag/hashtagsSlice";
import { createGoal } from "./requests";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { SetupAvatarInput } from "./avatar/setupAvatarInput";
import { session_id_name } from "@/config/globalConsts";

export function CreatePartOne() {
  const hashtags = useAppSelector(selectHashtag);
  const selectedModule = useAppSelector(selectorSelectModule);
  const trackers = useAppSelector(selectTrackers);
  const [description, setDescription] = useState("");
  const [avatarFile, setAvatarFile] = useState<any>(null);
  const [goalName, setGoalName] = useState("");
  const selectPeriod = useAppSelector(selectSelectPeriod);
  const timePeriods = useAppSelector(selectorPeriodsArray);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: createGoal,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["profile", "defaultProfile"],
      });
    },
  });
  return (
    <form className="flex flex-col px-3 gap-4">
      <Input
        type="text"
        variant={"underlined"}
        placeholder="Введите название цели"
        onInput={(event: any) => {
          setGoalName(event.target.value);
        }}
      />

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

      <SetupAvatarInput setAvatarFile={setAvatarFile} />

      <SelectModule />

      <div className="flex-col mb-6 sm:flex-row md:flex-row lg:flex-row">
        <HashTagInput />
        <SelectPeriod />
        <SelectTimePeriods />
        <Button
          onClick={async () => {
            console.log(avatarFile)
            const sid = Cookies.get(session_id_name)
            const id: string = uuid();
            const dates = getArrayOfPeriods(selectPeriod.selectedDeadline);
            const formData = new FormData();
            const data = {
              selectedModuleID: selectedModule,
              goal: {
                description,
                goalName,
                selectPeriod,
                dates,
                id,
                trackers,
                timePeriods,
                hashtags,
              }, 
              sid: sid,
            }; 
            formData.append("avatar", avatarFile);
            formData.append("data", JSON.stringify(data));
            mutation.mutate(formData);
          }}
        >
          Создать цель
        </Button>
      </div>
    </form>
  );
}
