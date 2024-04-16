"use client";

import { selectModules, update } from "@/redux/features/goal/module";
import { addId } from "@/redux/features/select/moduleSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateModules } from "@/utils/updateModules";
import { Select, SelectItem } from "@nextui-org/react";
import Cookies from "js-cookie";
import { useEffect } from "react";

export const SelectModule = () => {
  const dispatch = useAppDispatch();
  const targetModule = useAppSelector(selectModules);
  useEffect(() => {
    const sid = Cookies.get("connect.sid");
    updateModules(sid, dispatch, update);
  }, []);
  return (
    <Select
      label="Уточните срок цели в днях"
      className="sm:w-1/2 sm:pl-1 pb-3"
      color="default"
      radius="sm"
      defaultSelectedKeys={[]}
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedModuleId = event.target.value;
        dispatch(addId({ id: selectedModuleId } ));
      }}
    >
      {targetModule.modules.map((module) => (
        <SelectItem
          className="sm-select-item rounded"
          textValue={module.name}
          value={module.name}
          key={module.id}
        >
          <p>{module.name}</p>
          <p>{module.id}</p>
        </SelectItem>
      ))}
    </Select>
  );
};
