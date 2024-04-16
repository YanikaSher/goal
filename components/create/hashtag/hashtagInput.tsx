import { add, del, selectHashtag } from "@/redux/features/hashtag/hashtagSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import { validationAndSetupNewHashtag } from "./validationAndSetupNewHashtag";

export const HashTagInput = () => {
  const dispatch = useAppDispatch();
  const hashtags = useAppSelector(selectHashtag);
  const [hashtagName, setHashtagName] = useState<string>("");
  return (
    <div className="flex flex-col sm:flex-row pb-6">
      <div className="h-20 rounded-sm flex flex-col my-3 flex-1 ">
        <label
          className="font-normal text-sm ml-1 mb-3 text-zinc-500 dark:text-zinc-400"
          htmlFor="hashtag"
        >
          Введите хэштег цели
        </label>
        <div className="flex items-center h-full dark:hover:border-2 hover:border-2 dark:hover:border-sky-600/20 hover:border-pink-600/20 w-full rounded bg-zinc-100 dark:bg-zinc-700/70 ">
          <span className="pl-2 pt-1 ">
            <strong className="text-pink-600 dark:text-sky-600">&#35;</strong>
          </span>

          <input
            type="text"
            id="hashtag"
            className="rounded-none focus:outline-none  h-full w-11/12 bg-transparent appearance-none leading-tight"
            onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
              setHashtagName(event.target.value);
            }}
          />
          <button
          type='button'
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              validationAndSetupNewHashtag(hashtagName, dispatch);
            }}
            className="bg-pink-600/20 h-full w-1/12 dark:bg-sky-600/30"
          >
            <strong className="text-pink-600/80 dark:text-sky-600/80 text-3xl">
              &#43;
            </strong>
          </button>
        </div>
      </div>
      <div className="flex flex-1 rounded-md sm:pl-2 mb-3">
        <div className="flex flex-wrap rounded border-1.5 border-pink-700/20 bg-pink-700/10 h-full w-full dark:bg-sky-500/20 dark:border-sky-500/40 p-2">
          {hashtags.map((item: any) => (
            <p
              key={item.name}
              data-value="some"
              data-name={item.name}
              className="dark:bg-sky-600/10 m-1 px-1 h-7 rounded bg-pink-600/10"
            >
              <strong className="text-pink-600/80 dark:text-sky-600/80">
                #{item.name}
              </strong>
              <button
                type="button"
                id={item.name}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  const parentElement = (event.target as HTMLElement).closest(
                    '[data-value="some"]'
                  );
                  if (parentElement) {
                    const parentElemName =
                      parentElement.getAttribute("data-name");
                    if (parentElemName)
                      dispatch(del({ name: parentElemName, active: true }));
                  }
                }}
                className="text-blue-600/70 dark:text-pink-600/70 font-black text-xs ml-1"
              >
                &#9587;
              </button>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
