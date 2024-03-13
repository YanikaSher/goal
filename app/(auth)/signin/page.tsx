"use client";

import { Modal } from "@nextui-org/modal";
import { ModalLogin } from "@/components/auth/login/modal";
import { useState } from "react";

export default function SignInPage() {
  const [isUserLogin, setIsUserLogin] = useState(false)
  return (
    <div className="flex-col">
      <Modal isOpen={true} hideCloseButton={true} backdrop={"blur"} placement="top-center" >
        <ModalLogin />
      </Modal>
    </div>
  );
}
