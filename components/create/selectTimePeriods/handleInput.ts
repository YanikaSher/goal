import moment from "moment";

export const isEndPointShort = (
  endTimeInput: string,
  startTimeInput: string
) => {
  const momentEndTime = moment(endTimeInput, "HH:mm");
  const momentStartTime = moment(startTimeInput, "HH:mm");
  const diff = Math.abs(momentStartTime.diff(momentEndTime));
  const halfHour = 1800000;
  console.log(endTimeInput);
  console.log(diff < halfHour);
  return diff < halfHour;
};
export function isStartLessThanEnd(start: string, end: string) {
  const momentEndTime = moment(end, "HH:mm");
  const momentStartTime = moment(start, "HH:mm");
  return momentEndTime.isSameOrAfter(momentStartTime);
}

export const isStartInputSame = (
  arrayOfPeriods: { startPeriod: string; endPeriod: string }[],
  inputStartTime: string
) => {
  const isSame = arrayOfPeriods.find((period) => {
    const momentInputTime = moment(inputStartTime, "HH:mm");
    const momentPeriodTime = moment(period.startPeriod, "HH:mm");
    return momentInputTime.isSame(momentPeriodTime);
  });
  if (isSame) {
    return true;
  } else {
    false;
  }
};

export const isEndInputSame = ( arrayOfPeriods: { startPeriod: string; endPeriod: string }[],
  inputEndPeriod: string) => {
  const isSame = arrayOfPeriods.find((period) => {
    const momentInputTime = moment(inputEndPeriod, "HH:mm");
    const momentPeriodTime = moment(period.endPeriod, "HH:mm");
    return momentInputTime.isSame(momentPeriodTime);
  });
  if (isSame) {
    return true;
  } else {
    false;
  }
}
export const isNameEmpty = (inputName: string) => {
  const strWithoutSpaces = inputName.trim();
  if (strWithoutSpaces === "") {
    return true;
  } else {
    return false;
  }
};
