import moment from "moment";
import { getTimePlace } from "./convertTime";

const time = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];
export const TimeLine = function ({ timePeriods }: { timePeriods: any[] }) {
  return (
    <div className="flex flex-col">
      <div className="flex">
        {time.map((time: string, index: number) => (
          <div
            className="flex justify-center items-center h-8"
            style={{
              width: `4.16%`,
            }}
            key={index}
          >
            {moment(time, "HH:mm").format("HH")}
          </div>
        ))}
      </div>
      <div className="flex rounded-md ">
        {time.map((time: string, index: number) => (
          <div
            className="flex justify-center border-1 border-zinc-300 dark:border-zinc-800 items-center h-8"
            style={{
              width: `4.16%`,
            }}
            key={index}
          >
            {timePeriods &&
              timePeriods.map((period) =>
                getTimePlace(time, period.startPeriod) ? (
                  <div key={time}>{"|"}</div>
                ) : null
              )}
          </div>
        ))}
      </div>
      <div className="flex">
        {time.map((time: string, index: number) => (
          <div
            className="flex justify-center border-1 border-zinc-300 dark:border-zinc-800 items-center h-8"
            style={{
              width: `4.16%`,
            }}
            key={index}
          >
            {getTimePlace(time, moment().format("HH:mm")) ? (
              <div className=" text-red-600" key={time}>
                {"|"}
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <div className="flex">
        {time.map((time: string, index: number) => (
          <div
            className="flex justify-center border-1 border-zinc-300 dark:border-zinc-800 items-center h-8"
            style={{
              width: `4.16%`,
            }}
            key={index}
          >
            {timePeriods &&
              timePeriods.map((period) =>
                getTimePlace(time, period.endPeriod) ? (
                  <div
                    className="w-full h-full flex justify-center"
                    key={time}
                  >
                    {"|"}
                  </div>
                ) : null
              )}
          </div>
        ))}
      </div>
    </div>
  );
};
