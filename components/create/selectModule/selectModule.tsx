"use client";

import { selectModules, update } from "@/redux/features/module/module";
import { selectDeadline } from "@/redux/features/select/periodSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateModules } from "@/utils/updateModules";
import { Select, SelectItem } from "@nextui-org/react";
import Cookies from "js-cookie";
import { useEffect } from "react";

export const SelectModule = () => {
  const dispatch = useAppDispatch();
  const targetModule = useAppSelector(selectModules)
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
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {}}
    >
      {targetModule.modules.map((module) => (
        <SelectItem textValue={module.name} value={module.name} key={module.id}>
          {module.name}
        </SelectItem>
      ))}
    </Select>
  );
};
