import moment from "moment";

export function somed(time: string, inputTime: string) {
  const momentInputTime = moment(inputTime, "HH:mm");
  const minTime = moment(time, "HH:mm");
  const maxTime = moment(time, "HH:mm").add(1, 'hours');
  const isBetween = momentInputTime.isBetween(minTime, maxTime);
  const isSame = momentInputTime.isSame(minTime)
  return isBetween || isSame;
}
