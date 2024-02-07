import {
  Button,
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import { IconClose, IconMenu } from "./Icons";

const CustomModal = () => {
  return (
    <DialogTrigger>
      <Button className="md:hidden">
        <IconMenu></IconMenu>
      </Button>
      <ModalOverlay className="fixed bottom-0 left-0 right-0 top-[84px] z-20 bg-primary-1 bg-opacity-30">
        <Modal className="fixed left-1/2 top-24 z-20 w-[calc(100%-6rem)] -translate-x-1/2 rounded-xl bg-neutral-4 px-8 text-primary-1">
          <Dialog className="flex flex-col items-center">
            {({ close }) => (
              <>
                <Button
                  onPress={close}
                  className="absolute right-0 top-0 h-8 w-8 -translate-y-[70px] translate-x-1 bg-neutral-4"
                >
                  <IconClose></IconClose>
                </Button>

                <ul className="flex w-full flex-col items-center gap-4 p-8">
                  <li className="w-full text-center text-xl hover:text-primary-2">
                    <a href="#">Home</a>
                  </li>

                  <li className="w-full text-center text-xl hover:text-primary-2">
                    <a href="#">About</a>
                  </li>
                  <li className="w-full text-center text-xl hover:text-primary-2">
                    <a href="#">Contact</a>
                  </li>

                  <li className="w-full text-center text-xl hover:text-primary-2">
                    <a href="#">Blog</a>
                  </li>
                  <li className="w-full text-center text-xl hover:text-primary-2">
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};

export default CustomModal;
