export const periods = {
  short: ["7", "14", "21", "28"],
  medium: ["30", "91", "128", "274", "365"],
  long: ["365", "456", "547"],

};

export const goalSelections = [
  {
    label: "Краткосрочная цель",
    value: "Краткосрочная цель",
    id: 1,
    deadlines: periods.short,
    selectedDeadline: '7'
  },
  {
    label: "Среднесрочная цель",
    value: "Среднесрочная цель",
    id: 12,
    deadlines: periods.medium,
    selectedDeadline: '91'
  },
  {
    label: "Долгосрочная цель",
    value: "Долгосрочная цель",
    id: 123,
    deadlines: periods.long,
    selectedDeadline: '365'
  },
];
