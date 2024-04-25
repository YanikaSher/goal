export interface IGoalState {
  trackers: Array<ITrackerState>;
  periods: ISelectPeriodState;
  hashtags: Array<IHashtagState>;
  allocatedTime: IPieChartState;
}

export interface PayloadNewModule {
  newModule: {
    name: string;
    description: string;
    author: string;
    id: string;
    goals: any;
  };
}
export interface ITrackerState {
  format: string;
  mode: string;
  name: string;
  id: string;
}

export interface ITrackerSwitchState {
  isOpen: boolean;
}

export interface ISelectPeriodState {
  label: string;
  value: string;
  id: number;
  deadlines: Array<string>;
  selectedDeadline: string;
}
export interface IHashtagState {
  name: string;
  active: boolean;
}
export interface IPieChartState {
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
  gaps: Array<any>
}
