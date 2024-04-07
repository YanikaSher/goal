"use client";

import { useState } from "react";

export const goals = [
  {
    id: '33',
    moduleName: "to be starboy",
    description:
      "some words for description i dont know what to say there so i say bullshit",
    sources: [
      {
        name: "1Learn Eaddddddddt Meat",
      },
      { name: "1Learn English" },
      { name: "1Learn Beer" },
      { name: "1Learn Suck" },
    ],
  },
  {
    id: '23',
    moduleName: "to be a rockstar",
    description:
      "some words for description i dont know what to say there so i say bullshit",
    sources: [
      { name: "2Learn English" },
      { name: "2Learn Eat Meat" },
      { name: "2Learn Beer" },
      { name: "2Learn Suck" },
    ],
  },
  {
    id: '213',
    moduleName: "Hate all world",
    description:
      "some words for description i dont know what to say there so i say bullshit",
    sources: [
      { name: "3Learn English" },
      { name: "3Learn Eat Meat" },
      { name: "3Learn Beer" },
      { name: "3Learn Suck" },
    ],
  },
  {
    id: '233',
    moduleName: "suck dick",
    sources: [
      { name: "4Learn English" },
      { name: "4Learn Eat Meat" },
      { name: "4Learn Beer" },
      { name: "4Learn Suck" },
    ],
  },
  {
    id: '223',
    moduleName: "fuck your mother",
    description:
      "some words for description i dont know what to say there so i say bullshit",
    sources: [
      { name: "5Learn English" },
      { name: "5Learn Eat Meat" },
      { name: "5Learn Beer" },
      { name: "5Learn Suck" },
    ],
  },
  {
    id: '33',
    moduleName: "to be starboy",
    description:
      "some words for description i dont know what to say there so i say bullshit",
    sources: [
      {
        name: "1Learn Eaddddddddt Meat",
      },
      { name: "1Learn English" },
      { name: "1Learn Beer" },
      { name: "1Learn Suck" },
    ],
  },
  {
    id: '23',
    moduleName: "to be a rockstar",
    description:
      "some words for description i dont know what to say there so i say bullshit",
    sources: [
      { name: "2Learn English" },
      { name: "2Learn Eat Meat" },
      { name: "2Learn Beer" },
      { name: "2Learn Suck" },
    ],
  },
  {
    id: '213',
    moduleName: "Hate all world",
    description:
      "some words for description i dont know what to say there so i say bullshit",
    sources: [
      { name: "3Learn English" },
      { name: "3Learn Eat Meat" },
      { name: "3Learn Beer" },
      { name: "3Learn Suck" },
    ],
  },
  {
    id: '233',
    moduleName: "suck dick",
    description:
      "some words for description i dont know what to say there so i say bullshit",
    sources: [
      { name: "4Learn English" },
      { name: "4Learn Eat Meat" },
      { name: "4Learn Beer" },
      { name: "4Learn Suck" },
    ],
  },
  {
    id: '223',
    moduleName: "fuck your mother",
    description:
      "some words for description i dont know what to say there so i say bullshit",
    sources: [
      { name: "5Learn English" },
      { name: "5Learn Eat Meat" },
      { name: "5Learn Beer" },
      { name: "5Learn Suck" },
    ],
  },
];

export const GoalsNav = () => {
  return (
    <nav className="flex flex-col w-1/5 border-l-3 border-zinc-900 dark:border-zinc-300 items-center justify-items-center">
      {goals.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-items-start items-start"
        >
          <button
          type="button"
            data-id={item.id}
            onClick={(e: any) => {
              console.log("click");
              const moduleElement = e.target as HTMLButtonElement;
              const moduleElementId = moduleElement.getAttribute("data-id");
              if (moduleElementId) {
                if (moduleElementId === item.id) {
                  const submoduleId = item.id;
                  const submoduleElement = document.querySelector(
                    `[data-subid="${submoduleId}"]`
                  ) as HTMLUListElement;

                  if (submoduleElement.style.display === "none") {
                    submoduleElement.style.display = "flex";
                  } else {
                    submoduleElement.style.display = "none";
                  }
                }
              }
            }}
            className="m-3 w-40 border-zinc-900 border-b-2 font-bold text-zinc-600 text-md  dark:border-zinc-100 dark:text-zinc-100 dark:hover:border-sky-600 dark:hover:text-sky-600 hover:border-sky-600 hover:text-sky-600 "
          >
          some text
          </button>
          {item.sources.map((subGoal) => (
              <ul key={item.id}
              data-subid={item.id}
              >
                 <li
                style={{ display: "none" }}
                className="flex justify-start border-black border-2 rounded-2xl w-auto h-auto p-1 mx-3 my-1"
              >
                {subGoal.name}
              </li>
              </ul>
             
            ))}
        </div>
      ))}
    </nav>
  );
};
