
export interface IGoal {
  trackers: Array<ITracker>;
  periods: ISelectPeriod;
  hashtags: Array<IHashtag>;
  allocatedTime: IPieChart;
}


export interface ITracker {
  format: string;
  mode: string;
  name: string;
  id: string;
}

export interface ITrackerSwitch {
  isOpen: boolean;
}

export interface ISelectPeriod {
  label: string;
  value: string;
  id: number;
  description: string;
  deadlines: Array<string>;
  selectedDeadline: string;
}
export interface IHashtag {
  name: string;
  active: boolean;
}
export interface IPieChart {
  labels: Array<String>;
  datasets: [
    {
      label: string;
      data: Array<number>;
      backgroundColor: Array<string>;
      borderColor: Array<string>;
      borderWidth: number;
    }
  ];
}
