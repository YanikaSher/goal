import { evaluate } from "mathjs";

export function calculateFormula(strFormula: string, constants: any) {
  const arrFormula = strFormula.split(" ");
  const newArrFormula = [...arrFormula];
  for (let i = 0; i < newArrFormula.length; i++) {
    if (newArrFormula[i] in constants) {
      newArrFormula[i] = constants[newArrFormula[i]];
    }
  }
  const stringFormula = newArrFormula.join(" ");
  const expression = evaluate(stringFormula);
  if (Number.isNaN(expression)) {
    return "not calculated";
  } else {
    return expression.toFixed(1);
  }
}
