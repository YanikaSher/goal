export function updateModules(sid: string | undefined, dispatch: any, update: any) {
  if (sid) {
    fetch("http://localhost:5000/api/get/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sid: sid }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(update({ updatedModules: data.user.modules }));
      })
      .catch((error) => console.log(error));
  } else {
    console.log("нет кук");
  }
}
