import moment from "moment";

export const convertTimeToPercentage = (milliseconds: number) => {
  const millisecondsInDay = 86400000;
  const timeToPercentage = (milliseconds / millisecondsInDay) * 100;
  return timeToPercentage.toFixed(1);
};

export const convertTimeToHours = (milliseconds: number) => {
  const duration = moment.duration(milliseconds);
  const hours = Math.floor(duration.asHours());
  const minutes = Math.floor(duration.asMinutes()) - hours * 60;
  return `${hours}h. ${minutes}m.`;
};

export const convertTimeToHAnM = (milliseconds?: number)=> {
  const now = moment();
  const currentTime = now.format('HH:mm');
  return currentTime
}

export const convertTimeTo = (nowTime: string, arrayOfDates: Array<Object>) => {
  const closestDate:any = arrayOfDates.reduce(function(prev:any, curr:any) {
    return (Math.abs(moment(curr.date, 'HH:mm').diff(nowTime)) < Math.abs(moment(prev.date, 'HH:mm').diff(nowTime)) ? curr : prev);
  });
  
  console.log(": " + closestDate.date);
}