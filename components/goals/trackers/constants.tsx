"use client";

import {
  Popover,
  Button,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

export function PopupWithConstantsForTheFormula() {
  return (
    <Popover key={"constants"} placement="bottom" color={"foreground"}>
      <PopoverTrigger>
        <Button color={"primary"} className="capitalize">
          Константы
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="ctf-list-of-constants">
          <table className=" border-1 *:rounded-md *:border-1 *:border-black">
            <tr className="*:border-1 items-center justify-center *:border-black rounded-md *:p1">
              <th>Название константы</th>
              <th>Значение </th>
            </tr>
            <tr className="*:border-1 items-center justify-center *:border-black rounded-md *:p1">
              <td>chars</td>
              <td>Количество написанных символов</td>
            </tr>
            <tr className="*:border-1 items-center justify-center *:border-black rounded-md *:p1">
              <td>nums</td>
              <td>Сумма вводимых чисел</td>
            </tr>
            <tr className="*:border-1 items-center justify-center *:border-black rounded-md *:p1">
              <td>pastD</td>
              <td>Все прошедшие дни</td>
            </tr>
            <tr className="*:border-1 items-center justify-center *:border-black rounded-md *:p1">
              <td>remD</td>
              <td>Все оставшиеся дни</td>
            </tr>
            <tr className="*:border-1 items-center justify-center *:border-black rounded-md *:p1">
              <td>qt</td>
              <td>Все прошедшие дни</td>
            </tr>
            <tr className="*:border-1 items-center justify-center *:border-black rounded-md *:p1">
              <td>qn</td>
              <td>Количество пройденных трекеров типа number</td>
            </tr>
            <tr className="*:border-1 items-center justify-center *:border-black rounded-md *:p1">
              <td>qb</td>
              <td>Количество пройденных трекеров типа boolean</td>
            </tr>
            <tr className="*:border-1 items-center justify-center *:border-black rounded-md *:p1">
              <td>pastD</td>
              <td>Количество пройденных трекеров типа text</td>
            </tr>
          </table>
        </div>
      </PopoverContent>
    </Popover>
  );
}
