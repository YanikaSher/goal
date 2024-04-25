interface IModule {
  author: string;
  description: string;
  goals: Array<IGoal>;
  id: string;
  name: string;
}

interface IGoal {
  description: string;
  goalName: string;
  tracker: Array<any>;
  periods: Object;
  chartDatasets: IDataSets;

  chartLabels: Array<any>;
  abortAt: string;
  dates: Array<string>;
  id: string;
}

interface IDataSets {
  backgroundColor: Array<string>;
  borderColor: Array<string>;
  borderWidth: number;
  data: Array<number>;
  label: string;
}
