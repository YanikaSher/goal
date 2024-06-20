export async function removeSession(sessionData: { session_id: string }) {
  const url = "http://localhost:5000/api/auth/removesession";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sessionData),
  });
  const responseData = await response.json();
  return responseData;
}
