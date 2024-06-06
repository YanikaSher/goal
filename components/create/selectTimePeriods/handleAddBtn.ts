import moment from "moment";
import {
  isEndPointShort,
  isStartInputSame,
  isStartLessThanEnd,
} from "./handleInput";

export function isPeriodCompleted(
  period: {
    startPeriod: string;
    endPeriod: string;
    name: string;
    id: string;
  },
  periods: Array<{
    startPeriod: string;
    endPeriod: string;
    name: string;
    id: string;
  }>
) {
  const isStartLess = isStartLessThanEnd(period.startPeriod, period.endPeriod);
  const isPeriodSame = isStartInputSame(periods, period.startPeriod);
  const isPeriodShort = isEndPointShort(period.endPeriod, period.startPeriod);
  if (
    period.endPeriod &&
    period.startPeriod &&
    period.name &&
    !isPeriodSame &&
    !isPeriodShort &&
    isStartLess
  ) {
    return true;
  } else {
    return false;
  }
}
