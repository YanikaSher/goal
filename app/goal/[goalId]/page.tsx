"use client";

import { useQuery } from "@tanstack/react-query";

import Cookies from "js-cookie";

import { DisplayFullGoal } from "@/components/goals/displayFull";
import { DisplayLessGoal } from "@/components/goals/displayLess";

import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";

import { getGoal } from "./getGoal";
import { isOwnerSelector, setIsOwner } from "@/redux/features/goal/isOwner";
import { GoalTrackers } from "@/components/goals/trackers/list";
import { GoalTools } from "@/components/goals/trackers/formula/tools";
import { ShowFormula } from "@/components/goals/trackers/formula/showFormula";

export interface ILessGoalInfo {
  goalName: string;
  description: string;
  authorName: string;
  isOwner: boolean;
  refToAuthor: string;
}

export interface IFullGoalInfo {
  goalName: string;
  description: string;
  id: string;
  selectedModulesID: string;
  periods: [];
  timePeriods: [];
  dates: [];
  tracker: [];
  hrefToOwner: string;
  isOwner: boolean;
}

export default function Page({ params }: { params: { goalId: string } }) {
  const [selected, setSelected] = useState<any>("base-info");
  const isOwner = useAppSelector(isOwnerSelector);
  const dispatch = useAppDispatch();

  const sessionId = Cookies.get("connect.sid");
  const goalId = params.goalId;
  useEffect(() => {
    const selectedTab = sessionStorage.getItem("defaultSelectedTab");
    setSelected(selectedTab ?? "base-info");
  }, []);

  const { data, isLoading, isError, isSuccess, isFetched } = useQuery<
    ILessGoalInfo | IFullGoalInfo
  >({
    queryKey: ["goal"],
    queryFn: async function () {
      try {
        if (sessionId) {
          const goalData = await getGoal(sessionId, goalId);
          dispatch(setIsOwner(goalData.isOwner));
          return goalData;
        } else {
          throw new Error("Ошибка, нет сессионных кук");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  if (isSuccess) {
    return (
      <div className="p-goal-page w-full h-full">
        <div className="flex flex-col mb-4 p-2 w-full h-1/6">
          <h2 className="text-2xl self-start font-medium h-full">
            {data.goalName === ""
              ? "Цель без названия и много другого текста супер пупер дупер"
              : data.goalName}
          </h2>
        </div>
        {isOwner ? (
          <Tabs
            aria-label="Options"
            selectedKey={selected}
            onSelectionChange={(key: any) => {
              sessionStorage.setItem("defaultSelectedTab", key);
              setSelected(key);
            }}
            className="w-full self-center justify-self-center h-1/6"
          >
            <Tab key="tools" title="tools" className="w-full h-4/6">
            <Card className="mb-4">
                <CardBody>
                  <ShowFormula goal={data} />
                </CardBody>
              </Card>
              <Card className="w-full h-full">
                <CardBody className="w-full h-full ">
                  <GoalTools dates={(data as IFullGoalInfo).dates} />
                </CardBody>
              </Card>
            </Tab>
            <Tab key="base-info" title="base info" className="w-full h-4/6">
              <Card>
                <CardBody>
                  <DisplayFullGoal goal={data as IFullGoalInfo} />
                </CardBody>
              </Card>
            </Tab>
            <Tab key="trackers" title="trackers" className="w-full h-4/6">
             
              <Card>
                <CardBody>
                  <GoalTrackers goal={data} />
                </CardBody>
              </Card>
            </Tab>
            {/* <Tab  key="formula" title="formula" className="w-full h-4/6">
              <Card>
                <CardBody>

                </CardBody>
              </Card>
            </Tab> */}
          </Tabs>
        ) : (
          <DisplayLessGoal goal={data as ILessGoalInfo} />
        )}
      </div>
    );
  }
}
