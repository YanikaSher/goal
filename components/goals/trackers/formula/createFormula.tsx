"use client";

import { PopupWithConstants } from "../constantsPopup";
import { useState } from "react";
import { FormulaList } from "./formulaList";
import {Button} from "@nextui-org/react";
import { InputFormulaNameModal } from "./inputFormulaNameModal";

const operators = {
  plus: "+",
  divide: "/",
  minus: "-",
  multiply: "*",
  openRoundBrackets: "(",
  closeRoundBrackets: ")",
};

export function CreateTrackerFormula() {
  
  const [formulaValues, setFormulaValues] = useState<any[] | string[]>([]);
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
    <div className="flex flex-col w-full h-full gap-3">
      <h2 className="text-xl">Создайте формулу </h2>
      <PopupWithConstants />
      <div className="flex flex-col w-full sm:flex-row h-96 sm:h-60">
        <div className="part-1-table-for-creating-formula sm:w-1/2 h-1/2 sm:h-full flex flex-col justify-center rounded-none">
          <div className="pl-2 flex h-2/6 w-full min-h-10 border-2 border-b-0 dark:border-zinc-600 border-zinc-300 ">
            <div className="flex w-10/12">
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
          <table className="ctf-button-group_calculate-panel w-full h-3/6">
            <tr
              onClick={handleClick}
              className="*:border-2 w-1/4 text-center align-middle *:border-zinc-300 rounded-md *:p1"
            >
              <td className=" hover:bg-zinc-300 dark:hover:bg-zinc-600 dark:border-zinc-600" data-value={"chars"}>chars</td>
              <td className=" hover:bg-zinc-300 dark:hover:bg-zinc-600 dark:border-zinc-600" data-value={"nums"}>
                nums
              </td>
              <td className=" hover:bg-zinc-300 dark:hover:bg-zinc-600 dark:border-zinc-600" data-value={"pastD"}>pastD</td>
              <td className=" hover:bg-zinc-300 dark:hover:bg-zinc-600 dark:border-zinc-600" data-value={"remD"}>remD</td>
            </tr>
            <tr
              onClick={handleClick}
              className="*:border-2 w-1/4 text-center align-middle *:border-zinc-300 rounded-md *:p1"
            >
              <td data-value={"qt"}>qt</td>
              <td className=" hover:bg-zinc-300 dark:hover:bg-zinc-600 dark:border-zinc-600" data-value={"qn"}>qn</td>
              <td className=" hover:bg-zinc-300 dark:hover:bg-zinc-600 dark:border-zinc-600" data-value={"qb"}>qb</td>
              <td className=" hover:bg-zinc-300 dark:hover:bg-zinc-600 dark:border-zinc-600" data-value={"allDays"}>allDays</td>
            </tr>
            <tr
              onClick={handleClick}
              className="*:border-2 w-1/4 text-center align-middle *:border-zinc-300 rounded-md *:p1"
            >
              <td className=" hover:bg-zinc-300 dark:hover:bg-zinc-600 dark:border-zinc-600" data-value={"+"}>+</td>
              <td className=" hover:bg-zinc-300 dark:hover:bg-zinc-600 dark:border-zinc-600" data-value={"-"}>-</td>
              <td className=" hover:bg-zinc-300 dark:hover:bg-zinc-600 dark:border-zinc-600" data-value={"/"}>/</td>
              <td className=" hover:bg-zinc-300 dark:hover:bg-zinc-600 dark:border-zinc-600" data-value={"*"}>*</td>
            </tr>
            <tr
              onClick={handleClick}
              className="*:border-2 w-1/4 text-center align-middle *:border-zinc-300 rounded-md *:p1"
            >
              <td className=" hover:bg-zinc-300 dark:hover:bg-zinc-600 dark:border-zinc-600" data-value={"("}>{"("}</td>
              <td className=" hover:bg-zinc-300 dark:hover:bg-zinc-600 dark:border-zinc-600" data-value={")"}>{")"}</td>
            </tr>
          </table>
          
          <InputFormulaNameModal formulaValues={formulaValues} />
        </div>
        <FormulaList />
      </div>
    </div>
  );
}
