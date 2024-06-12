import moment from "moment";
import { getMatchingColor, getTimePlace, storeTimePeriodsColors } from "./convertTime";
import { arrOf24hours, time } from "./consts";

export const TimeLine = function ({ timePeriods }: { timePeriods: any[] }) {
  storeTimePeriodsColors(timePeriods);
  return (
    <div className="flex flex-col">
      <div className="some flex">
        {arrOf24hours.map((time: string, index: number) => (
          <div
            className="flex justify-center items-center h-8 border-1 border-zinc-300 dark:border-zinc-800"
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
            className="flex justify-center border-1 border-zinc-300 dark:border-zinc-800 items-center h-4 md:h-6"
            style={{
              width: `2.08%`,
            }}
            key={index}
          >
            {timePeriods &&
              timePeriods.map((period) =>
                getTimePlace(time, period.startPeriod) ? (
                  <div key={time} style={{backgroundColor: getMatchingColor(period)}} className="h-full w-full"></div>
                ) : null 
              )}
          </div>
        ))}
      </div>
      <div className="flex">
        {time.map((time: string, index: number) => (
          <div
            className="flex justify-center border-1 border-zinc-300 dark:border-zinc-800 items-center h-4 md:h-6"
            style={{
              width: `2.08%`,
            }}
            key={index}
          >
            {getTimePlace(time, moment().format("HH:mm")) ? (
              <div className=" border-red-500 border-2 h-full w-full " key={time}></div>
            ) : null}
          </div>
        ))}
      </div>
      <div className="flex">
        {time.map((time: string, index: number) => (
          <div
            className="flex justify-center border-1 border-zinc-300 dark:border-zinc-800 items-center h-4 md:h-6"
            style={{
              width: `2.08%`,
            }}
            key={index}
          >
            {timePeriods &&
              timePeriods.map((period) =>
                getTimePlace(time, period.endPeriod) ? (
                  <div
                  style={{backgroundColor: getMatchingColor(period)}} 
                    className="w-full h-full flex justify-center"
                    key={time}
                  ></div>
                ) : null
              )}
          </div>
        ))}
      </div>
    </div>
  );
};
