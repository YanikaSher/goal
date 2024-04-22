import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export async function getOwner(
  userSessionId: string | undefined | RequestCookie
) {
  if (userSessionId) {
    const url = "http://localhost:5000/api/get/user";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sid: userSessionId }),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data.user;
  } else {
    console.log("Session is not defined");
  }
}

export async function getProfile(
  sessionId: string | undefined,
  profileId: string | undefined
) {
  const url = "http://localhost:5000/api/get/profile";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ profileId: profileId, sessionId: sessionId }),
  };
  const response = await fetch(url, options);
  const data = await response.json();
  console.log('the query motherfucker')
  return data;
}
