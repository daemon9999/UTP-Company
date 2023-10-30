import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Button from "../button";
import { NavItem } from "src/layouts/header";

export default function Menu({ setIsOpen }) {
  return (
    <div className="fixed w-full h-screen bg-white z-50 flex items-center justify-center">
      <span className="absolute w-12 h-12 flex items-center justify-center text-dark-red top-0 right-0">
        <IoMdClose onClick={() => setIsOpen((prev) => !prev)} size={24} />
      </span>

      <div className="flex flex-col gap-y-4 items-center">
        <NavItem as={'link'} href={'/#about-project'} onClick={() => setIsOpen(prev => !prev)}>About</NavItem>
        <NavItem as={'link'} href={'/#mainpoints'} onClick={() => setIsOpen(prev => !prev)}>Main Points</NavItem>
        <Button as="a" href="https://wa.me/+994505429229" target="_bl ank">
          Contact Us
        </Button>
        <Button as="a" href="/team">
          Team Members
        </Button>
      </div>
    </div>
  );
}
