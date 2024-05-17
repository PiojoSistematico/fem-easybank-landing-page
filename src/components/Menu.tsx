import { Button } from "react-aria-components";
import CustomModal from "./CustomModal";
import { IconLogo } from "./Icons";

const Menu = () => {
  return (
    <header className="flex flex-row items-center justify-between bg-neutral-4 p-4 font-PublicSans text-lg font-normal text-neutral-1 md:px-16">
      <a href="#" className="text-primary-1">
        <IconLogo></IconLogo>
      </a>

      <CustomModal></CustomModal>
      <nav className="hidden md:block">
        <ul className="flex h-16 flex-row items-center justify-center gap-4">
          <li className="flex h-full flex-row items-center justify-center border-neutral-4 bg-gradient-to-r from-primary-2 to-primary-3 hover:pb-1 hover:text-primary-1">
            <a
              href="#"
              className="flex h-full w-full flex-row items-center justify-center bg-neutral-4"
            >
              Home
            </a>
          </li>
          <li className="flex h-full flex-row items-center justify-center bg-gradient-to-r from-primary-2 to-primary-3 hover:pb-1 hover:text-primary-1">
            <a
              href="#"
              className="flex h-full w-full flex-row items-center justify-center bg-neutral-4"
            >
              About
            </a>
          </li>
          <li className="flex h-full flex-row items-center justify-center bg-gradient-to-r from-primary-2 to-primary-3 hover:pb-1 hover:text-primary-1">
            <a
              href="#"
              className="flex h-full w-full flex-row items-center justify-center bg-neutral-4"
            >
              Contact
            </a>
          </li>
          <li className="flex h-full flex-row items-center justify-center bg-gradient-to-r from-primary-2 to-primary-3 hover:pb-1 hover:text-primary-1">
            <a
              href="#"
              className="flex h-full w-full flex-row items-center justify-center bg-neutral-4"
            >
              Blog
            </a>
          </li>
          <li className="flex h-full flex-row items-center justify-center bg-gradient-to-r from-primary-2 to-primary-3 hover:pb-1 hover:text-primary-1">
            <a
              href="#"
              className="flex h-full w-full flex-row items-center justify-center bg-neutral-4"
            >
              Careers
            </a>
          </li>
        </ul>
      </nav>
      <Button className="hidden rounded-3xl bg-gradient-to-r from-primary-2 to-primary-3 px-6 py-2 text-neutral-4 hover:from-primary-2/60 hover:to-primary-3/60 md:block">
        Request invite
      </Button>
    </header>
  );
};

export default Menu;
