"use client";

export const ModulesList = ({ modules }: { modules: Array<IModule> }) => {
  return (
    <div className="ml-modules-list hidden md:flex w-1/3">
      <div className="ml-fast-modules-navigation border-3 rounded-md border-zinc-500 flex flex-col h-72 w-full h-42 overflow-y-scroll no-scrollbar">
        {modules.map((module) => (
          <button
            type="button"
            className="rounded-md m-2 p-1 dark:bg-zinc-700"
            key={module.id}
          >
            {module.name}
          </button>
        ))}
      </div>
    </div>
  );
};
