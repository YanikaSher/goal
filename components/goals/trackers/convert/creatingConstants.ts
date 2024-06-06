import moment from "moment";

export function creatingConstants(
  dates: {
    date: string;
    id: string;
    completedTrackers:
      | { format: string; id: string; name: string; resolve: string }[]
      | any[];
  }[]
) {
  const trackers = divideTrackerByFormat(dates);
  const constants = {
    chars: getCharsConst(trackers),
    pastD: getPastDays(dates),
    remD: getRemainingDays(dates),
    nums: getAllNumbers(trackers),
    allDays: getAllDays(dates),
    qt: trackers.text.length,
    qn: trackers.number.length,
    qb: trackers.bool.length,
  };
  console.log(constants);
  return constants;
}

function divideTrackerByFormat(
  dates: {
    date: string;
    id: string;
    completedTrackers:
      | { format: string; id: string; name: string; resolve: string }[]
      | any[];
  }[]
) {
  const completedDates = dates.filter((date) => {
    return date.completedTrackers.length > 0;
  });
  const trackers: { text: any[]; number: any[]; bool: any[] } = {
    text: [],
    number: [],
    bool: [],
  };
  completedDates.forEach((completedDate, index) => {
    return completedDate.completedTrackers.forEach((completedTracker) => {
      if (completedTracker.format === "text")
        trackers.text.push(completedTracker);
      if (completedTracker.format === "number")
        trackers.number.push(completedTracker);
      if (completedTracker.format === "boolean")
        trackers.bool.push(completedTracker);
    });
  });
  return trackers;
}

function getCharsConst(trackers: { text: any[]; number: any[]; bool: any[] }) {
  if (trackers.text.length > 0) {
    const charsArr = trackers.text.map((trackerTypeText) => {
      return trackerTypeText.resolve.length;
    });
    const sumChars = charsArr.reduce((acc, curr) => acc + curr);
    return sumChars;
  } else {
    return 0;
  }
}

function getPastDays(
  dates: {
    date: string;
    completedTrackers: any[];
    id: string;
  }[]
) {
  const startDay = moment(dates[0].date, "DD.MM.YYYY");
  const now = moment(moment(), "DD.MM.YYYY");
  const pastDays = now.diff(startDay, "days");
  if (pastDays > 0) {
    console.log(startDay);
    return pastDays;
  }
}

function getRemainingDays(
  dates: {
    date: string;
    completedTrackers: any[];
    id: string;
  }[]
) {
  const now = moment().format("DD.MM.YYYY");
  const nowDay = moment(now, "DD.MM.YYYY");
  const endDay = moment(dates[dates.length - 1].date, "DD.MM.YYYY");
  const remainingDays = endDay.diff(nowDay, "days");
  console.log(remainingDays);
  if (remainingDays > 0) {
    return remainingDays;
  }
}

function getAllNumbers(trackers: { text: any[]; bool: any[]; number: any[] }) {
  if (trackers.number.length > 0) {
    const numsArr = trackers.number.map((trackerTypeNumber) => {
      return trackerTypeNumber.resolve;
    });
    const sumNums = numsArr.reduce((acc, curr) => acc + curr);
    return sumNums;
  } else {
    return 0;
  }
}

function getAllDays(
  dates: {
    date: string;
    completedTrackers: any[];
    id: string;
  }[]
) {
  return dates.length;
}
