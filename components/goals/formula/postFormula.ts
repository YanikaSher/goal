export async function postFormula(idList: {
  formula_id: string;
  goal_id: string;
}) {
  console.log("first step");
  const url = "http://localhost:5000/api/delete/formula";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(idList),
  };
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
  return data;
}

export async function getFormula(goal_id: string) {
  const url = "http://localhost:5000/api/get/formula";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ gid: goal_id }),
  };
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
  return data;
}

export async function createFormula(bodyData: {
  goalId: string;
  formula: string;
  formulaName: string;
}) {
  const url = "http://localhost:5000/api/create/formula";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  };
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
  return data;
}
