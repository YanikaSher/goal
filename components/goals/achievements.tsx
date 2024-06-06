"use client";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
} from "@nextui-org/react";
import moment from "moment";
import { ChangeEvent, useState } from "react";
import { SelectTrackerFormula } from "./trackers/selectFormula";

export function GoalAchievements({
  dates,
}: {
  dates: { date: string; id: string; completedTrackers: any[] }[];
}) {
  const [inputDate, setInputDate] = useState<string>("");
  const [searchedDates, setSearchedDates] = useState<any[]>([]);
  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor="search-goal-day-by-date"
        className="ga-search-label w-full py-2"
      >
        Поиск по дате
      </label>
      <div className="ga-search-fields flex h-14">
        <Input
          name="search-goal-day-by-date"
          className="ga-input-field-for-date w-4/5"
          type="date"
          onInput={(event: ChangeEvent<HTMLInputElement>) => {
            const inputDateValue = event.target.value;
            setInputDate(inputDateValue);
          }}
        ></Input>
        <Button
          className="ga-day-search-button w-1/5 flex self-center justify-center h-full"
          type="button"
          variant="ghost"
          color="secondary"
          onClick={() => {
            const arrOfSearchedDates = dates.filter((date) => {
              const inputDateInMoment = moment(inputDate, "YYYY-MM-DD");
              const dateOfStoreInMoment = moment(date.date, "DD.MM.YYYY");
              if (inputDateInMoment.isSame(dateOfStoreInMoment)) {
                return date;
              }
            });
            setSearchedDates(arrOfSearchedDates);
          }}
        >
          Search
        </Button>
      </div>
      {searchedDates.map((date) => (
        <Card key={date.id} className="max-w-[400px] flex my-3">
          <CardHeader className="flex gap-3">
            <p className="text-md">{date.date}</p>
          </CardHeader>
          <Divider />
          <CardBody>
            {date.completedTrackers.length !== 0 ? (
              date.completedTrackers.map(
                (tracker: { name: string; format: string; id: string }) => (
                  <div key={tracker.id}>{tracker.name}</div>
                )
              )
            ) : (
              <p>пусто..</p>
            )}
          </CardBody>
        </Card>
      ))}

      <SelectTrackerFormula />
    </div>
  );
}
