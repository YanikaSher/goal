"use client";

import { Button } from "@nextui-org/react";
import { PopupWithConstantsForTheFormula } from "./constants";
import { useState } from "react";
import { useParams } from "next/navigation";
import { calculateFormula } from "./convert/calculateFormula";
import { creatingConstants } from "./convert/creatingConstants";
import { now } from "moment";

const operators = {
  plus: "+",
  divide: "/",
  minus: "-",
  multiply: "*",
  openRoundBrackets: "(",
  closeRoundBrackets: ")",
};

export function CreateTrackerFormula() {
  const [formula, setFormula] = useState<{ f: string; id: string }[] | any[]>(
    []
  );
  const params = useParams<{ goalId: string }>();
  const [formulaValues, setFormulaValues] = useState<string[] | any[]>([]);
  useState<string[] | any[]>([]);

  const [isRoundBracketsOpen, setIsRoundBracketsOpen] =
    useState<boolean>(false);
  function handleClick(event: any) {
    const targetCell = event.target as HTMLElement;
    const dataValueTargetCell = targetCell.getAttribute("data-value");
    const lastItem = formulaValues[formulaValues.length - 1];
    if (
      lastItem === operators.openRoundBrackets ||
      lastItem === operators.closeRoundBrackets ||
      lastItem === operators.divide ||
      lastItem === operators.plus ||
      lastItem === operators.minus ||
      lastItem === operators.multiply ||
      formulaValues.length === 0
    ) {
      if (
        dataValueTargetCell === operators.divide ||
        dataValueTargetCell === operators.plus ||
        dataValueTargetCell === operators.openRoundBrackets ||
        dataValueTargetCell === operators.minus ||
        dataValueTargetCell === operators.multiply
      ) {
        if (
          dataValueTargetCell === operators.divide ||
          dataValueTargetCell === operators.plus ||
          dataValueTargetCell === operators.divide ||
          dataValueTargetCell === operators.plus
        ) {
        } else {
          setFormulaValues([...formulaValues, dataValueTargetCell]);
        }
      } else {
        setFormulaValues([...formulaValues, dataValueTargetCell]);
      }
    } else {
      if (
        dataValueTargetCell === operators.divide ||
        dataValueTargetCell === operators.plus ||
        dataValueTargetCell === operators.minus ||
        dataValueTargetCell === operators.openRoundBrackets ||
        dataValueTargetCell === operators.closeRoundBrackets ||
        dataValueTargetCell === operators.multiply
      ) {
        setFormulaValues([...formulaValues, dataValueTargetCell]);
      }
    }
  }

  return (
    <div className="flex flex-col w-full">
      <h2 className="mb-3">Создайте формулу </h2>
      <div className="flex w-full">
        <div className="part-1-table-for-creating-formula w-1/2 flex flex-col justify-center border-1 border-zinc-600 rounded-none">
          <div className="pl-2 flex w-full min-h-10">
            <div className="w-10/12">
              {formulaValues.length === 0
                ? null
                : formulaValues.map((value: string, index) => (
                    <span key={index}>{value}</span>
                  ))}
            </div>
            <Button
              color="danger"
              variant="ghost"
              className="w-2/12 rounded-none"
              onClick={() => setFormulaValues([])}
            >
              Delete
            </Button>
          </div>
          <table className="ctf-button-group_calculate-panel w-full">
            <tr
              onClick={handleClick}
              className="*:border-1 w-1/4 text-center align-middle *:hover:bg-zinc-600 justify-center *:border-zinc-600 rounded-md *:p1"
            >
              <td data-value={"chars"}>chars</td>
              <td className="" data-value={"nums"}>
                nums
              </td>
              <td data-value={"pastD"}>pastD</td>
              <td data-value={"remD"}>remD</td>
            </tr>
            <tr
              onClick={handleClick}
              className="*:border-1 w-1/4 text-center align-middle *:hover:bg-zinc-600 justify-center *:border-zinc-600 rounded-md *:p1"
            >
              <td data-value={"qt"}>qt</td>
              <td data-value={"qn"}>qn</td>
              <td data-value={"qb"}>qb</td>
              <td data-value={"allDays"}>allDays</td>
            </tr>
            <tr
              onClick={handleClick}
              className="*:border-1 w-1/4 text-center align-middle *:hover:bg-zinc-600 justify-center *:border-zinc-600 rounded-md *:p1"
            >
              <td data-value={"+"}>+</td>
              <td data-value={"-"}>-</td>
              <td data-value={"/"}>/</td>
              <td data-value={"*"}>*</td>
            </tr>
            <tr
              onClick={handleClick}
              className="*:border-1 w-1/4 text-center align-middle *:hover:bg-zinc-600 justify-center *:border-zinc-600 rounded-md *:p1"
            >
              <td data-value={"("}>{"("}</td>
              <td data-value={")"}>{")"}</td>
            </tr>
          </table>
          <Button
            color="primary"
            className="w-full rounded-none"
            onClick={() => {
              const sentence = formulaValues.join(" ");
              const url = "http://localhost:5000/api/create/formula";
              const options = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  goalId: params.goalId,
                  formula: sentence,
                }),
              };
              fetch(url, options)
                .then((response) => response.json())
                .then((data) => {
                  const constants = creatingConstants(data.dates);
                  const expression = calculateFormula(formulaValues, constants);
                  console.log(expression);
                  console.log(data);
                  setFormula(data.formula);
                });
            }}
          >
            Create
          </Button>
        </div>
        <div className="part-2-list-of-formula flex w-1/2 px-2 flex-wrap justify-start gap-5 content-between">
          {formula.map((formula) => (
            <div key={formula.id} className="formula-list flex h-10">
              <p className="formula-string">{formula.f}</p>
              <button
                type="button"
                onClick={() => {
                  const url = "http://localhost:5000/api/delete/formula";
                  const options = {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      goalId: params.goalId,
                      formulaId: formula.id,
                    }),
                  };
                  fetch(url, options)
                    .then((response) => {
                      return response.json();
                    })
                    .then((data) => {
                      console.log(data);
                    });
                }}
                className="w-10 h-10 text-xl border-1 border-red-600"
              >
                {"x"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
