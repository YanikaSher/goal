import moment from "moment";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export const handleInput = (
  inputValue: string,
  periodsOfTime: Array<{ start: string; end: string }>,
  setTime: Dispatch<SetStateAction<string>>,
  time: string,
) => {
  if (!periodsOfTime[0]) {
    setTime(inputValue);
  } else {
    const isBetween = isTimeUnique(periodsOfTime, inputValue);
    if (isBetween) {
      setTime(inputValue);
    } else {
      setTime("");
      console.log(
        "Введите число, которое не входит в ранее написанные промежутки"
      );
    }
  }
};

export const isTimeUnique = (
  periodsOfTime: Array<{ start: string; end: string }>,
  inputValue: string
) => {
  let isBetween;
  periodsOfTime.forEach((item: { start: string; end: string }) => {
    const startTime = moment(item.start, "HH:mm");
    const endTime = moment(item.end, "HH:mm");
    const inputTime = moment(inputValue, "HH:mm");

    isBetween = inputTime.isBetween(endTime, startTime, undefined, "(]");
  });
  return !isBetween;
};
