export const requestModuleId = async (
  url: string,
  sid: string,
  params: any
) => {
  const moduleId = params.slug[1]
  const authorId = params.slug[0]
  const goalId = params.slug[2]
  let targetGoal;
  // fetch(url, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     sid: sid,
  //     moduleId: moduleId,
  //     authorId: authorId,
  //   }),
  // })
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data: any) => {
  //     console.log(data);
  //     targetGoal = data.body.goals.find((goal: any) => {
  //       return goal.id === goalId;
  //     });
  //   });

  const response = await fetch(url, {method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }) 
  console.log(targetGoal);
  console.log(response);
};
