import { Button } from "@nextui-org/button";
import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Checkbox } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "postcss";
import { MailIcon, LockIcon } from "../../icons";

export const SuccessLoginWin = () => {
  return (
    <ModalContent>
      <ModalBody>
        <div className="py-4">
          <center>
            <div className="flex justify-center items-center sm:mb-5">
              <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
                <path
                  clip-rule="evenodd"
                  d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <p>
                <b>ACME</b>
              </p>
            </div>

            <p className="text-green-600">Вход произведен успешно!</p>
            <Link className=" border-b-1 dark:hover:text-zinc-600 hover:border-none hover:text-zinc-600/70" href={"/"}>
            {'>'}Вернуться на главную страницу!{'<'}
            </Link>
          </center>
        </div>
      </ModalBody>
    </ModalContent>
  );
};
