import moment from "moment";
import { convertTimeTo, convertTimeToHAnM, convertTimeToHours, convertTimeToPercentage } from "./convertTime";

export const TimeLine = function ({ datasets }: { datasets: IDataSets }) {
  return (
    <div className="flex flex-col">
      <div className="flex rounded-md border-1 border-sky-600/40">
        {datasets.data.map((time: number, index: number) => (
          <div
            className="flex justify-center items-center"
            style={{
              width: `${convertTimeToPercentage(time)}%`,
              backgroundColor: datasets.backgroundColor[index],
            }}
            key={time}
          >
            <center>{convertTimeToHours(time)}</center>
          </div>
        ))}
      </div>

    </div>
  );
};
