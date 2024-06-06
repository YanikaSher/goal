"use client";

const uuid = require("uuid").v4;
import {
  Modal,
  Input,
  Textarea,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Cookies from "js-cookie";
import { useState } from "react";

export function CreateModuleModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const sessionId = Cookies.get("connect.sid");
  return (
    <div className="cmm-container flex">
          <button
            onClick={() => {
              onOpen();
            }}
            className="my-5 p-2 rounded-lg bg-lime-600"
            type="button"
          >
            Создать модуль
          </button>

      <Modal backdrop={"opaque"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Окно создания модуля
              </ModalHeader>
              <ModalBody>
                <Input
                  onInput={(event: any) => setName(event.target.value)}
                  type="text"
                  placeholder="Введите название модуля"
                />
                <Textarea
                  onInput={(event: any) => setDescription(event.target.value)}
                  placeholder="Опишите модуль"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Закрыть окно
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    const moduleId: string = uuid();
                    const url = "http://localhost:5000/api/create/module";
                    const options = {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        sid: sessionId,
                        newModule: {
                          name: name,
                          description: description,
                          id: moduleId,
                        },
                      }),
                    };
                    fetch(url, options)
                      .then((response) => response.json())
                      .then((data) => console.log(data));
                    onClose();
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
}
