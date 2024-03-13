"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RadioGroup, Radio, Input } from "@nextui-org/react";
import {
  selectTrackers,
  add,

} from "@/redux/features/tracker/trackersSlice";
const uuid = require('uuid').v4;

import { useState } from "react";

export function TrackerSetup() {
  const dispatch = useAppDispatch();
  const [isStringEmpty, setIsStringEmpty] = useState(false)
  const [format, setFormat] = useState("text");
  const [name, setName] = useState("Вести запись каждого дня");
  const [mode, setMode] = useState("free");
  const trackers: any = useAppSelector(selectTrackers);
  return (
    <div className="bg-lime-400/10 dark:bg-purple-800/20 rounded-sm p-3 mb-6">
      <Input
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
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
      <div className="rounded mb-3 flex flex-col sm:flex-row">
        <RadioGroup
        defaultValue={mode}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setFormat(event.target.value);
          }}
          className="mb-3"
          label="Выберете формат трекера"
        >
          <Radio value="text">Текст</Radio>
          <Radio value="file">Файл</Radio>
        </RadioGroup>
        <RadioGroup
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const elem = event.target.value;
            if (elem.trim()) {
              setIsStringEmpty(true);
            }else {
              setIsStringEmpty(false)
            }
              setMode(event.target.value);
         
          }}
          className="mx-3 mb-3"
          label="Выберите режим трекера"
        >
          <Radio value="strict">Строгий</Radio>
          <Radio value="free">Свободный</Radio>
        </RadioGroup>
      </div>
      <center>
        <button
          type="button"
          className="rounded bg-zinc-600/80 text-white h-8 w-24 hover:bg-zinc-600/70 "
          onClick={() => {
            const id:string = uuid()
            const tracker = {
              format: format,
              name: name,
              mode: mode,
              id: id,
            };
            if (!isStringEmpty) {
              dispatch(add({ tracker: tracker }));
            console.log(trackers)
            console.log(tracker)
            }
            
     
          }}
        >
          Создать
        </button>
      </center>
    </div>
  );
}
