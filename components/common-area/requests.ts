export async function getContent(git: string | undefined) {
  const url = "http://localhost:5000/api/get/recommendation-goals";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      git: git ?? undefined,
    }),
  });
  const goalData = await response.json();
  return goalData;
}
export async function uploadAvatar(formData: any) {
  const url = "http://localhost:5000/api/create/upload-avatar";
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });
  const fileData = await response.json();
  return fileData;
}
