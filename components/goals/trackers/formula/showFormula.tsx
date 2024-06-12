"use client";

import { creatingConstants } from "../convert/creatingConstants";
import { calculateFormula } from "../convert/calculateFormula";

export function ShowFormula({ goal }: any) {
  const constants = creatingConstants(goal.dates);

  return (
    <div
      className="sf-container flex gap-4 flex-wrap"
      onClick={() => console.log("click")}
    >
      {goal.formula.map((formula: any) => (
        <div key={formula.id}>
          <h2 className="text-xl">
            {formula.name}
            {" = "}
            <b className="text-cyan-600">
              {calculateFormula(formula.f, constants)}
            </b>
          </h2>
        </div>
      ))}
    </div>
  );
}
