import { Select, SelectItem } from "@nextui-org/react";
import { goalSelections } from "./periods";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  ISelectPeriod,
  selectSelectPeriod,
  selectPeriod,
  selectDeadline,
} from "@/redux/features/selectPeriod/selectPeriodSlice";

export const SelectPeriod = () => {
  const dispatch = useAppDispatch();
  const periods: any = useAppSelector(selectSelectPeriod);
  return (
    <div>
      <Select
        label="Выберите характер цели"
        className="sm:w-1/2 sm:pr-1 pb-3"
        color="default"
        radius="sm"
        defaultSelectedKeys={[periods[0].value]}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          goalSelections.forEach((item) => {
            if (item.value === event.target.value) {
              dispatch(selectPeriod({ selectedPeriod: item }));
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
          periods[0].selectedDeadline
        ]}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          dispatch(selectDeadline({ deadline: event.target.value }));
        }}
      >
        {periods[0].deadlines.map((period: string) => (
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
