'use client'

import { Button } from "@nextui-org/react";
import { TrackerSetup } from "./setup";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectSwitchTracker, switchIt } from "@/redux/features/tracker/switchSlice";

export const TrackerSwitch = () => {
    const dispatch = useAppDispatch();
    const isSwitched: any = useAppSelector(selectSwitchTracker)
  const handelClickBtn = () => {
    if (isSwitched.isOpen) {
      dispatch(switchIt({value: false}));
    } else {
      dispatch(switchIt({value: true}))
    }
  };
  return (
    <div className="">
      {isSwitched.isOpen ? (
        <Button onClick={handelClickBtn} className="my-3" color="danger" variant="flat">
          Отменить трекер
        </Button>
      ) : null}
      {isSwitched.isOpen ? null : (
        <Button onClick={handelClickBtn} className="my-3" color="default"  variant="flat">
          Создать трекер
        </Button>
      )}
      {isSwitched.isOpen ? <TrackerSetup /> : null}
    </div>
  );
};
