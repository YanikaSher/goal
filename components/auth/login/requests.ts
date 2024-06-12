export async function checkAuth(cookies: string | undefined) {
  const url = "http://localhost:5000/api/auth/checkAuth";
  const response = await fetch(url, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ sid: cookies }),
  });
  const data = await response.json();
  return data;
}

export async function login(
  userData: { email: string; password: string }
) {
  const response = await fetch("http://localhost:5000/api/auth/login", {
    credentials: "include",
    method: "POST",
    headers: {
      "User-Agent": navigator.userAgent,
      "Accept-Language": navigator.language,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();
  return data;
}
