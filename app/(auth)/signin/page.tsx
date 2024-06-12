import { Modal } from "@nextui-org/modal";
import { ModalLogin } from "@/components/auth/login/modal";

export default function SignInPage() {
  return (
    <div className="flex-col">
      <Modal isOpen={true} hideCloseButton={true} backdrop={"blur"} placement="top-center" >
        <ModalLogin />
      </Modal>
    </div>
  );
}
