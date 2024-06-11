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
  try {
    const expression = evaluate(stringFormula);
    return expression.toFixed(1);
  } catch (error) {
    console.log(error);
  }
}
