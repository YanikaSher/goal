"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ModalCreateModule } from "./create";
import { useDisclosure } from "@nextui-org/react";
import Cookies from "js-cookie";
import { selectModules, update } from "@/redux/features/goal/module";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateModules } from "@/utils/updateModules";
export const ModulesBoard = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const modules = useAppSelector(selectModules);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const sid = Cookies.get("connect.sid");
    updateModules(sid, dispatch, update);
  }, []);
  return (
    <main className="flex flex-col">
      <ModalCreateModule
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        updateModules={updateModules}
      />
      <div className="flex p-3 border-b-3 border-zinc-900 dark:border-zinc-300">
        <button
          className="rounded-md m-1 border-zinc-900 font-bold text-zinc-900 text-md  dark:border-zinc-100 dark:text-zinc-100 dark:hover:border-sky-600 dark:hover:text-sky-600 border-3 w-40 h-12 hover:border-sky-600 hover:text-sky-600 "
          type="button"
          onClick={() => {
            router.push("/create");
          }}
        >
          Создать цель
        </button>
        <button
          className="rounded-md m-1 border-zinc-900 font-bold text-zinc-900 text-md  dark:border-zinc-100 dark:text-zinc-100 dark:hover:border-sky-600 dark:hover:text-sky-600 border-3 w-40 h-12 hover:border-sky-600 hover:text-sky-600 "
          type="button"
          onClick={onOpen}
        >
          Создать модуль
        </button>
      </div>
      <div className="flex flex-wrap justify-items-start">
        {modules.modules.map((module) => (
          <div
            className="border-3 border-zinc-900 dark:border-zinc-300 rounded-lg h-auto w-32 sm:w-40 p-3 m-3 "
            key={module.name}
            onClick={() => {
              router.push(`/modules/${module.author}/${module.id}`);
            }}
          >
            <div>
              <b>{module.name}</b>
            </div>
            <div>{module.description}</div>
          </div>
        ))}
      </div>
    </main>
  );
};
