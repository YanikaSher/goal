"use client";

import { update } from "@/redux/features/module/module";
import { useAppDispatch } from "@/redux/hooks";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
} from "@nextui-org/react";
import Cookies from "js-cookie";
import { useState } from "react";
const uuid = require("uuid").v4;

export const ModalCreateModule = ({
  isOpen,
  onOpenChange,
  updateModules,
}: any) => {
  const [moduleName, setModuleName] = useState("");
  const [moduleDescription, setModuleDescription] = useState("");
  const dispatch = useAppDispatch();
  
  const handleClickCreateBtn = () => {
    const sid = Cookies.get("connect.sid")
    const id: string = uuid();
    fetch("http://localhost:5000/api/create/module", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: moduleName,
        description: moduleDescription,
        id: id,
        sid: sid,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        updateModules(sid, dispatch, update);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement={"top-center"}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Создать модуль
              </ModalHeader>
              <ModalBody>
                <Input
                  type="text"
                  variant={"underlined"}
                  placeholder="Введите название модуля"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setModuleName(event.target.value);
                  }}
                ></Input>
                <Textarea
                  placeholder="Введите описание модуля"
                  variant={"bordered"}
                  onChange={(event: React.ChangeEvent<any>) => {
                    setModuleDescription(event.target.value);
                  }}
                ></Textarea>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Закрыть
                </Button>
                <Button
                  color="default"
                  onPress={onClose}
                  onClick={() => {
                    handleClickCreateBtn();
                  }}
                >
                  Создать
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
