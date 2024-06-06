'use client'

export const getGoal = async (sessionId: string, goalId: string) => {
  const url = "http://localhost:5000/api/get/goal";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ sid: sessionId, goalId: goalId }),
  };
  const response = await fetch(url, options);
  const goalData = await response.json();
  return goalData;
};
