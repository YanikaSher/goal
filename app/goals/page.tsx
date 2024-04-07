import { ModulesBoard } from "@/components/goalsModule/board";
import { GoalsNav } from "@/components/goalsModule/nav";
import { title } from "@/components/primitives";

export default function GoalsPage() {
  return (
    <div className="flex flex-col">
      <h1 className={title()}>Ваши цели</h1>
      <div className="flex my-3">
        <ModulesBoard />
      </div>
    </div>
  );
}
