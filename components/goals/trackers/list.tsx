"use client";
const uuid = require("uuid").v4;

import { Input, Textarea } from "@nextui-org/input";
import { Button, Checkbox } from "@nextui-org/react";
import Cookies from "js-cookie";
import moment from "moment";
import { useParams } from "next/navigation";
import { ChangeEvent, useState } from "react";

const trackerFormat = { text: "text", number: "number", checkbox: "checkbox" };

export const GoalTrackers = ({ goal }: { goal: any }) => {
  const params = useParams<{ goalId: string }>();
  const [inputValueText, setInputValueText] = useState<string>("");
  const [inputValueNumber, setInputValueNumber] = useState<number>(NaN);
  const [inputValueBoolean, setInputValueBoolean] = useState<boolean>(false);
  function handleClick(tracker: {
    format: string;
    id: string;
    name: string;
    resolve: string | boolean;
  }) {
    const id: string = uuid();
    const now = moment();
    const currentDate = goal.dates.find((date: any) => {
      const momentDate = moment(date.date, "DD.MM.YYYY");
      const isSame = momentDate.isSame(now, "day");
      return isSame ? date : false;
    });

    currentDate &&
      fetch("http://localhost:5000/api/create/tracker", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          goalId: params.goalId,
          dateId: currentDate.id,
          solvedTracker: tracker,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data: any) => {
          console.log(data);
        })
        .catch((error) => console.log(error));
  }
  return (
    <div className="flex flex-col p-2 *:mb-3">
      <div className="flex flex-col">
        {goal.trackers &&
          goal.trackers.map((tracker: any) => (
            <div key={tracker.id} className="mt-3">
              {tracker.format === trackerFormat.text ? (
                <div>
                  <Textarea
                    label={tracker.name}
                    onInput={(event: ChangeEvent<HTMLInputElement>) => {
                      setInputValueText(event.target.value);
                    }}
                    name="text-format"
                    variant="bordered"
                  />
                  <Button
                    data-tracker-id={tracker.id}
                    onClick={(event: any) => {
                      handleClick({
                        ...tracker,
                        resolve: inputValueText,
                        formulas: [],
                      });
                    }}
                    type={"button"}
                  >
                    Save
                  </Button>
                </div>
              ) : null}
            </div>
          ))}
      </div>

      <div className="flex flex-wrap ">
        {goal.trackers &&
          goal.trackers.map((tracker: any) => (
            <div key={tracker.id} className="flex">
              {tracker.format === trackerFormat.number ? (
                <div className=" mr-3">
                  <label htmlFor="number-format">{tracker.name}</label>
                  <Input
                    onInput={(event: any) =>
                      setInputValueNumber(event.target.value)
                    }
                    name="number-format"
                    type="number"
                    variant="faded"
                  />
                  <Button
                    data-tracker-id={tracker.id}
                    onClick={() => {
                      handleClick({
                        ...tracker,
                        resolve: inputValueNumber,
                        formulas: [],
                      });
                    }}
                    type={"button"}
                  >
                    Save
                  </Button>
                </div>
              ) : null}
            </div>
          ))}
      </div>

      <div className="flex flex-col">
        {goal.trackers &&
          goal.trackers.map((tracker: any) => (
            <div key={tracker.id} className="flex">
              {tracker.format === trackerFormat.checkbox ? (
                <Checkbox>{tracker.name}</Checkbox>
              ) : null}
            </div>
          ))}
      </div>
    </div>
  );
};
