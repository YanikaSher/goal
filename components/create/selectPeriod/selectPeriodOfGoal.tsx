import { Select, SelectItem } from "@nextui-org/react";
import { goalSelections } from "./periods";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectSelectPeriod,
  selectPeriod,
  selectDeadline,
} from "@/redux/features/select/periodSlice";

export const SelectPeriod = () => {
  const dispatch = useAppDispatch();
  const periods = useAppSelector(selectSelectPeriod);
  return (
    <div>
      <Select
        label="Выберите характер цели"
        className="sm:w-1/2 sm:pr-1 pb-3"
        color="default"
        radius="sm"
        defaultSelectedKeys={[periods.value]}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          const selectedPeriodName = event.target.value;
          goalSelections.forEach((period) => {
            if (period.value === selectedPeriodName) {
              dispatch(selectPeriod({ selectedPeriod: period }));
            }
          });
        }}
      >
        {goalSelections.map((selections) => (
          <SelectItem
            key={selections.value}
            value={selections.value}
            textValue={selections.label}
          >
            {selections.label}
          </SelectItem>
        ))}
      </Select>

      <Select
        label="Уточните срок цели в днях"
        className="sm:w-1/2 sm:pl-1 pb-3"
        color="default"
        radius="sm"
        defaultSelectedKeys={[
          periods.selectedDeadline
        ]}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          const selectedDeadline = event.target.value;
          dispatch(selectDeadline({ deadline: selectedDeadline }));
        }}
      >
        {periods.deadlines.map((period: string) => (
          <SelectItem
            textValue={period}
            value={period}
            key={period}
          >
            {period} days
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
