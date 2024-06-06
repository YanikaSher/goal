"use client";

import { useRouter } from "next/navigation";

import { Button } from "@nextui-org/react";

export function EmptyGoalList() {
    const router = useRouter()
  return (
    <div className="eg-container flex flex-col justify-items-start *:mt-3">
      <p className="eg-empty-goal-list-message">
        Обычно здесь хранятся цели...
      </p>
    </div>
  );
}
