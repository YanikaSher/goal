import {
  calculateFreeTime,
  setupLabels,
} from "@/redux/features/chart/pieDataSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";


export const updateStateOfLabels = (
  arrOfAllParts: Array<number>,
  partOfDay: number,
  label: string | undefined,
  dispatch: ThunkDispatch<any, any, any>
) => {
  const freeTime = arrOfAllParts[0];
  if (partOfDay > freeTime) {
    return;
  } else {
    dispatch(calculateFreeTime({ partOfDay: partOfDay }));
    dispatch(setupLabels({ labels: label }));
  }
};
