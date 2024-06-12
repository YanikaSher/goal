"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createFormula } from "./postFormula";
import { useParams } from "next/navigation";
import { ChangeEvent, useState } from "react";

export function InputFormulaNameModal({
  formulaValues,
}: {
  formulaValues: string[];
}) {
  const [formulaName, setFormulaName] = useState<string>("");
  const sentence = formulaValues.join(" ");
  const params = useParams<{ goalId: string }>();
  const queryClient = useQueryClient();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const mutation = useMutation({
    mutationFn: createFormula,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["goal", "formula"] });
    },
  });
  return (
    <div className="ifnm-container h-1/6">
      <Button
        color="primary"
        className="w-full rounded-none"
        onPress={onOpen}
      >
        Create
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add a title
              </ModalHeader>
              <ModalBody>
                <Input
                  onInput={(event: ChangeEvent<HTMLInputElement>) => {
                    const inputValue = event.target.value;
                    setFormulaName(inputValue);
                  }}
                  placeholder="add a name for formula"
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  onClick={() => {}}
                >
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={onClose}
                  onClick={() => {
                    mutation.mutate({
                      goalId: params.goalId,
                      formula: sentence,
                      formulaName: formulaName,
                    });
                  }}
                >
                  Ок
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
