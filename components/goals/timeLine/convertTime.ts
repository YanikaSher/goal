import moment from "moment";

export function getTimePlace(time: string, inputTime: string) {
  const momentInputTime = moment(inputTime, "HH:mm");
  const minTime = moment(time, "HH:mm");
  const maxTime = moment(time, "HH:mm").add(30, "minutes");
  const isBetween = momentInputTime.isBetween(minTime, maxTime);
  const isSame = momentInputTime.isSame(minTime);
  return isBetween || isSame;
}

const rgbColors = [
  'rgb(29, 189, 139)',
  'rgb(226, 211, 253)',
  'rgb(243, 254, 226)',
  'rgb(26, 91, 170)',
  'rgb(206, 181, 27)',
  'rgb(250, 158, 153)',
  'rgb(177, 107, 243)',
  'rgb(230, 254, 141)',
  'rgb(127, 148, 251)',
  'rgb(71, 195, 235)',
  'rgb(13, 229, 103)',
  'rgb(108, 223, 253)',
  'rgb(253, 220, 64)',
  'rgb(171, 122, 255)',
  'rgb(208, 80, 88)',
  'rgb(63, 173, 59)',
  'rgb(221, 178, 237)',
  'rgb(129, 235, 255)',
  'rgb(207, 253, 201)',
  'rgb(247, 191, 147)',
  'rgb(205, 142, 43)',
  'rgb(209, 221, 250)',
  'rgb(106, 187, 240)',
  'rgb(152, 204, 94)',
];

export function storeTimePeriodsColors(
  periods: {
    startPeriod: string;
    endPeriod: string;
    id: string;
    name: string;
  }[]
) {
  const colorsByPeriodsId: any[] = [];
  periods.forEach((period, index) => {
    colorsByPeriodsId.push({ pid: period.id, color: rgbColors[index] });
  });
  localStorage.setItem(
    "rgb_colors_for_time_periods",
    JSON.stringify(colorsByPeriodsId)
  );
}

export function getMatchingColor(period: {
  startPeriod: string;
  endPeriod: string;
  id: string;
  name: string;
}) {
  const timePeriodsColors: { pid: string; color: string }[] = JSON.parse(
    localStorage.getItem("rgb_colors_for_time_periods") || "[]"
  );
  console.log(timePeriodsColors);
  const match = timePeriodsColors.find(
    (timePeriodColor) => timePeriodColor.pid === period.id
  );
  return match?.color;
}
