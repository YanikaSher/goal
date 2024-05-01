"use client";

import { useState } from "react";

export const ShowDescription = ({
  descriptionText,
}: {
  descriptionText: string;
}) => {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    isClicked ? setIsClicked(false) : setIsClicked(true);
  }
  return (
    <div className="flex flex-col">
      <button
        type="button"
        className="px-1 border-3 border-zinc-500/20 text-zinc-600 dark:text-zinc-400 dark:border-zinc-400/30 bg-zinc-600/20 rounded-lg my-2"
        onClick={handleClick}
      >
        Смотреть описание {">"}
      </button>
      {isClicked ? (
        <div className="flex flex-col border-x-3 dark:border-pink-600 border-sky-500 p-2 mb-2">
          <p>{descriptionText}</p>
        </div>
      ) : null}
    </div>
  );
};
