"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
  Input,
  Link,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registration } from "./requests";
import moment from "moment";

export function RegistrationModalWindow() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isRemember, setIsRemember] = useState<boolean>(false);
  const [userData, setUserData] = useState<{
    password: string | undefined;
    email: string | undefined;
    userName: string | undefined;
    age: string | undefined;
    gender: string | undefined;
  }>({ password: "", email: "", userName: "", age: "", gender: "other" });
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: registration,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["registration"] });
    },
  });
  return (
    <>
      <Modal isOpen={true} hideCloseButton={true} placement="top-center">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Registration
          </ModalHeader>
          <ModalBody>
            <Input
              onInput={(event: any) => {
                const inputEmail = event.target.value;
                // if (validateEmail(inputEmail)) {
                //   setUserData({ ...userData, email: inputEmail });
                // } else {
                //   setUserData({ ...userData, email: undefined });
                // }
                setUserData({ ...userData, email: inputEmail });
              }}
              isRequired
              autoFocus
              label="Email"
              placeholder="Enter your email"
              variant="bordered"
            />
            <Input
              onInput={(event: any) => {
                const inputPassword = event.target.value;
                // if (validatePassport(inputPassword)) {
                //   setUserData({ ...userData, password: inputPassword });
                // } else {
                //   setUserData({ ...userData, password: undefined });
                // }
                setUserData({ ...userData, password: inputPassword });
              }}
              isRequired
              label="Password"
              placeholder="Enter your password"
              type="password"
              variant="bordered"
            />
            <Input
              onInput={(event: any) =>
                setUserData({ ...userData, userName: event.target.value })
              }
              autoFocus
              label="Username"
              variant="underlined"
            />
            <RadioGroup
              label="Выберете ваш пол"
              onInput={(event: any) => {
                console.log(event.target.value);
                setUserData({ ...userData, gender: event.target.value });
              }}
            >
              <Radio value="male">Мужской</Radio>
              <Radio value="female">Женский</Radio>
              <Radio value="other">Другое</Radio>
            </RadioGroup>

            <Input
              name="dataOfBirth"
              onInput={(event: any) => {
                const inputDate = moment(event.target.value, "YYYY-MM-DD");
                const minDate = moment("14.02.1950", "DD.MM.YYYY");
                const now = moment();
                const isValidDate = inputDate.isBetween(minDate, now);
                if (isValidDate) {
                  setUserData({ ...userData, age: event.target.value });
                } else {
                  setUserData({ ...userData, age: undefined });
                }
              }}
              type="date"
              autoFocus
              variant="faded"
            />

            <div className="flex py-2 px-1 justify-between">
              <Checkbox
                className="text-sm"
                onChange={(event: any) => {
                  console.log(event.target.value);
                }}
                onValueChange={(isSelected) => {
                  setIsRemember(isSelected);
                }}
              >
                Remember me
              </Checkbox>
              {/* <Link color="primary" href="#" size="sm">
                Forgot password?
              </Link> */}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              type="submit"
              onClick={(event: any) => {
                event.preventDefault();
                // if (userData.email && userData.password) {
                mutation.mutate(userData);
                console.log(userData);
                // } else {
                //   setErrorMessage("Неправильно введены почта и/или пароль");
                // }
              }}
            >
              Sign in
            </Button>
            <p className="text-red-600">{errorMessage}</p>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
