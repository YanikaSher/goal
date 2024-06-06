interface IModule {
  author: string;
  description: string;
  goals: Array<IGoal>;
  id: string;
  name: string;
}

interface IGoal {
  goalName: string,
  description: string,
  id: string,
  ref: string,
}

interface IDataSets {
  backgroundColor: Array<string>;
  borderColor: Array<string>;
  borderWidth: number;
  data: Array<number>;
  label: string;
}
