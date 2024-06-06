import { evaluate } from "mathjs";

export function calculateFormula(arrFormula: string[], constants: any) {
  const newArrFormula = [...arrFormula];
  for (let i = 0; i < newArrFormula.length; i++) {
    if (newArrFormula[i] in constants) {
      newArrFormula[i] = constants[newArrFormula[i]];
    }
  }
  const stringFormula = newArrFormula.join(" ");
  try {
    const expression = evaluate(stringFormula);
    return expression;
  } catch (error) {
    console.log(error);
  }
}
