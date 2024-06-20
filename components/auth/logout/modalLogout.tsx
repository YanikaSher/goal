"use client";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeSession } from "./requests";
import { session_id_name } from "@/config/globalConsts";
import Cookies from "js-cookie";
import { useState } from "react";

export function ModalLogout() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const session = Cookies.get(session_id_name);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: removeSession,
    onSuccess: (sessionData) => {
      if (sessionData.errorServerMessage) {
        setErrorMessage(sessionData.errorServerMessage);
      } else {
        location.reload();
      }
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  return (
    <Modal
      isOpen={true}
      hideCloseButton={true}
      backdrop={"blur"}
      placement="top-center"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          Вы уверены, что хотите выйти из сессии?
        </ModalHeader>
        <ModalBody>
          <Button
            type="button"
            color="danger"
            onClick={() => {
              if (session) {
                mutation.mutate({ session_id: session });
              } else {
                setErrorMessage("У вас нет зарегистрированной сессии");
              }
            }}
          >
            Выйти
          </Button>
          <ModalFooter>
            <center>
              <p>{errorMessage}</p>
            </center>
          </ModalFooter>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
