"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RadioGroup, Radio, Input } from "@nextui-org/react";
import { selectTrackers, add } from "@/redux/features/tracker/trackersSlice";
const uuid = require("uuid").v4;

import { useState } from "react";
import { trackerSettings } from "./settings";

export function TrackerSetup() {
  const dispatch = useAppDispatch();
  const [isStringEmpty, setIsStringEmpty] = useState(false);
  const [characters, setCharacters] = useState<20 | 50 | 100 | 300 | 1000>(20);
  const [format, setFormat] = useState<"text" | "number" | "checkbox">("text");
  const [name, setName] = useState<string>("Вести запись каждого дня");
  const [mode, setMode] = useState<any>("");
  const trackers: any = useAppSelector(selectTrackers);
  return (
    <div className="bg-lime-400/10 flex flex-col dark:bg-purple-800/20 rounded-sm p-3 mb-6">
      <Input
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const inputValue = event.target.value;
          if (inputValue.trim()) {
            setIsStringEmpty(false);
          } else {
            setIsStringEmpty(true);
          }
          setName(event.target.value);
        }}
        type="text"
        color="success"
        placeholder="Введите название трекера"
        variant="underlined"
        size={"sm"}
        className="w-100 mb-3 px-2"
        value={name}
      ></Input>
      <div className="rounded mb-3 w-full flex flex-col sm:flex-row">
        <RadioGroup
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const formatInputVale = event.target.value as
              | "text"
              | "number"
              | "checkbox";
            setFormat(formatInputVale);
            setMode('')
          }}
          className="mb-3"
          label="Выберете формат трекера"
        >
          {trackerSettings.map((tracker) => (
            <Radio key={tracker.format} value={tracker.format}>
              {tracker.format}
            </Radio>
          ))}
        </RadioGroup>
        {format === "text" ? (
          <RadioGroup
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const elem = event.target.value;
              setMode(event.target.value);
            }}
            className="mx-3 mb-3"
            label="Выберите количество символов"
          >
            <div className="*:mr-2">
              <Radio value="20">sm (20)</Radio>
              <Radio value="50">md (50)</Radio>
              <Radio value="100">lg (100)</Radio>
            </div>
            <div className="*:mr-2">
              <Radio value="300">xl (300)</Radio>
              <Radio value="1000">3xl (1000)</Radio>
            </div>
          </RadioGroup>
        ) : null}
        {format === "number" ? (
          <RadioGroup
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const elem = event.target.value;
              setMode(event.target.value);
            }}
            className="mx-3 mb-3"
            label="Выберите в чем можно рассчитать"
          >
            <div className="*:mr-2">
              <Radio value="percentage">проценты %</Radio>
              <Radio value="weight">вес в кило kg</Radio>
            </div>
            <div className="*:mr-2">
              <Radio value="calories">калории kal</Radio>
              <Radio value="custom">своя величина</Radio>
            </div>
          </RadioGroup>
        ) : null}
      </div>
      <center>
        <button
          type="button"
          className="rounded bg-zinc-600/80 text-white h-8 w-24 hover:bg-zinc-600/70 "
          onClick={() => {
            const id: string = uuid();
            const tracker = {
              format: format,
              name: name,
              id: id,
            };
            if (!isStringEmpty) {
              dispatch(add({ tracker: tracker }));
            }
          }}
        >
          Создать
        </button>
      </center>
    </div>
  );
}
