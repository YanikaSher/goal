import { formatForDate } from "@/config/globalConsts";
import moment, { Moment } from "moment";

export function calculateWeek() {
  const now = moment().startOf("day");
  const startWeek = now.startOf("isoWeek");
  const endWeek = moment(startWeek).endOf("isoWeek"); // Используем moment(startWeek)
  const some = getWeekArray(now, endWeek);
  console.log(some);
  return some;
}
function getWeekArray(
  now: Moment,
  end: Moment,
  someArr: any[] = [],
  index = 0
) {
  if (now.isSameOrAfter(end)) {
    return someArr;
  } else {
    someArr.push({
      date: now.format(formatForDate),
      index: index,
      completedTrackers: [],
    });
    const updateNow = now.add(1, "day");
    const updateIndex = index + 1;
    return getWeekArray(updateNow, end, someArr, updateIndex);
  }
}

export function getCurrentWeekArr(
  datesArrOfGoal: { date: string; id: string; completedTrackers: any[] }[],
  arrOfCurrentWeek: any[]
) {
  const currentWeek: any[] = [...arrOfCurrentWeek];
  const week = convertArrDayOfWeekToObjectOfMoments(arrOfCurrentWeek);
  datesArrOfGoal.forEach((dateOfGoal) => {
    const dateOfGoalInMoment = moment(dateOfGoal.date, formatForDate).startOf(
      "day"
    );
    if (dateOfGoalInMoment.isSame(week.mon)) {
      currentWeek[0].completedTrackers = dateOfGoal.completedTrackers;
    }
    if (dateOfGoalInMoment.isSame(week.tues)) {
      currentWeek[1].completedTrackers = dateOfGoal.completedTrackers;
    }
    if (dateOfGoalInMoment.isSame(week.wed)) {
      currentWeek[2].completedTrackers = dateOfGoal.completedTrackers;
    }
    if (dateOfGoalInMoment.isSame(week.thurs)) {
      currentWeek[3].completedTrackers = dateOfGoal.completedTrackers;
    }
    if (dateOfGoalInMoment.isSame(week.fri)) {
      currentWeek[4].completedTrackers = dateOfGoal.completedTrackers;
    }
    if (dateOfGoalInMoment.isSame(week.sat)) {
      currentWeek[5].completedTrackers = dateOfGoal.completedTrackers;
    }
    if (dateOfGoalInMoment.isSame(week.sun)) {
      currentWeek[6].completedTrackers = dateOfGoal.completedTrackers;
    }
  });
  const compareFn = (a: any, b: any) => a.index - b.index;
  return currentWeek.sort(compareFn);
}

function convertArrDayOfWeekToObjectOfMoments(arrOfCurrentWeek: any[]) {
  return {
    mon: moment(arrOfCurrentWeek[0].date, formatForDate).startOf("day"),
    tues: moment(arrOfCurrentWeek[1].date, formatForDate).startOf("day"),
    wed: moment(arrOfCurrentWeek[2].date, formatForDate).startOf("day"),
    thurs: moment(arrOfCurrentWeek[3].date, formatForDate).startOf("day"),
    fri: moment(arrOfCurrentWeek[4].date, formatForDate).startOf("day"),
    sat: moment(arrOfCurrentWeek[5].date, formatForDate).startOf("day"),
    sun: moment(arrOfCurrentWeek[6].date, formatForDate).startOf("day"),
  };
}

export function convertIndexToDayOfWeek(index: number) {
  if (index === 0) {
    return "mon";
  }
  if (index === 1) {
    return "tues";
  }
  if (index === 2) {
    return "wed";
  }
  if (index === 3) {
    return "thurs";
  }
  if (index === 4) {
    return "fri";
  }
  if (index === 5) {
    return "sat";
  }
  if (index === 6) {
    return "sun";
  }
}
