import moment from "moment";
const uuid = require("uuid").v4;

export function getArrayOfPeriods(selectedGoalPeriod: string) {
  const nowDate = moment();
  const startDate = moment(nowDate, "DD.MM.YY");
  const endDate = moment(nowDate, "DD.MM.YY").add(selectedGoalPeriod, "days");
  let dates = [];
  while (startDate.isSameOrBefore(endDate)) {
    const dateId: string = uuid();
    if (!dates[0]) {
      dates.push({
        date: startDate.format("DD.MM.YYYY"),
        completedTrackers: [],
        id: dateId,
      });
      startDate.add(1, "days");
    }
    dates.push({
      date: startDate.format("DD.MM.YYYY"),
      completedTrackers: [],
      id: dateId,
    });
    startDate.add(1, "days");
  }
  return dates;
}
