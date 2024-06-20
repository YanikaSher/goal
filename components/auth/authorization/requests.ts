


export async function registration(userData: any) {
  const url = " http://localhost:5000/api/auth/registration";
  const response = await fetch(url, {
    method: "POST",
    credentials: "include",
    headers: {
        "User-Agent": navigator.userAgent,
        "Accept-Language": navigator.language,
        "Content-Type": "application/json",
      },
    body: JSON.stringify(userData),
  });
  const responseData = await response.json();
  return responseData;
}
