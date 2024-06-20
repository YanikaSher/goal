"use client";
import { useQuery } from "@tanstack/react-query";
import { getContent } from "./requests";
import { session_id_name } from "@/config/globalConsts";
import Cookies from "js-cookie";
import Image from "next/image";
import { Divider, Link } from "@nextui-org/react";

export function ContentOfArea() {
  const uid = Cookies.get(session_id_name);
  const query = useQuery({
    queryKey: ["content"],
    queryFn: () => getContent(uid),
  });

  if (query.isSuccess) {
    return (
      <div className="coa-recommendation-goals-list flex flex-col gap-6">
        {query.data.map((goal: any) => (
          <article
            className="flex flex-col sm:flex-row gap-4 p-4 w-full"
            key={goal._id}
          >
            <header className="flex sm:flex-col gap-4 sm:w-1/6 justify-between sm:justify-normal bg-sky-600/10 p-2 rounded-lg">
              <h1 className=" text-large">{goal.goalName}</h1>
              <div className="flex flex-col gap-4">
                <Image
                  className="coa-avatar-for-goal hidden sm:flex rounded-md border-zinc-300 dark:border-zinc-800 border-3 w-24 h-24"
                  loader={() => `http://127.0.0.1:5000/api/uploads/${goal._id}`}
                  src={`http://127.0.0.1:5000/api/uploads/${goal._id}`}
                  alt={"Avatar"}
                  width={100}
                  height={100}
                />
                <p className="coa-respects-score bg-green-600/20 p-2 size-12 rounded-lg justify-center items-center">
                  <center>
                    <b className="text-green-600">
                      &#174; {goal.respectsScore}
                    </b>
                  </center>
                </p>
              </div>
            </header>
            <main className="bg-zinc-800/10 dark:bg-zinc-300/10 sm:w-5/6 p-3 rounded-md flex sm:flex-col justify-around gap-3">
              <div className="text-zinc-300 self-start p-3 w-full h-full bg-zinc-800/10 dark:bg-zinc-300/10 rounded-lg gap-3">
                <p className="dark:text-zinc-300 text-zinc-800 ">{goal.description}</p>
                <Divider />
                <div className="coa-contact flex sm:hidden justify-items-center align-center gap-3">
                  <p className="text-zinc-500">Владелец: </p>
                  <Link>{goal.hrefToOwner.userName}</Link>
                </div>
              </div>
              <Image
                className="coa-avatar-for-goal flex sm:hidden rounded-md border-zinc-300 dark:border-zinc-800 border-3 w-24 h-24"
                loader={() => `http://127.0.0.1:5000/api/uploads/${goal._id}`}
                src={`http://127.0.0.1:5000/api/uploads/${goal._id}`}
                alt={"Avatar"}
                width={100}
                height={100}
              />
              <div className="coa-contact hidden sm:flex justify-items-center align-center gap-3">
                <p>Владелец: </p>
                <Link>{goal.hrefToOwner.userName}</Link>
              </div>
            </main>
          </article>
        ))}
      </div>
    );
  }
}
