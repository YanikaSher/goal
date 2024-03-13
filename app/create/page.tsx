"use client";

import { title } from "@/components/primitives";
import { Input, Button } from "@nextui-org/react";
import { CreatePartOne } from "@/components/create/partOne";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { CreatePartTwo } from "@/components/create/partTwo";

export default function DocsPage() {
  const dispatch = useAppDispatch();
  const tracker: any = useAppSelector((state) => state.trackers);

  return (
    <div className="">
      <h1 className={title({ color: "cyan",})}>Создайте цель</h1>
      <div className="flex flex-col lg:flex-row">
        <CreatePartOne />
        <CreatePartTwo />
        {/* {tracker.format}
        {tracker.some} */}
      </div>
      <center>
        <Button
          className="font-sans mt-5"
          size="md"
          variant="flat"
          color="secondary"
          type="submit"
          onClick={() => {
            console.log("goal");
          }}
        >
          <b>Создать</b>
        </Button>
      </center>
    </div>
  );
}
