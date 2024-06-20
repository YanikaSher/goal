export async function createGoal(goalData: any) {
  const url = "http://localhost:5000/api/create/goal";
  const response = await fetch(url, {
    method: "POST",
    body: goalData,
  });
  const data = await response.json();
  return data;
}
