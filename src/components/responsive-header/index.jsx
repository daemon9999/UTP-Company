import { Link } from "react-router-dom";
import Menu from "../menu";
import { AiOutlineMenu } from "react-icons/ai";

export default function ResponsiveHeader({setIsOpen}) {
  return (
    <header className="bg-primary">
      <div className="container mx-auto w-5/6 flex items-center justify-between">
        <Link to={"/"} className="h-20 w-auto"><img src="/images/logo.png" className="w-full h-full" alt="UTP Logo"/></Link>

        <span  className="w-12 h-12 flex items-center justify-center text-dark-red">
          <AiOutlineMenu onClick={() => setIsOpen(prev => !prev)} size={26} />
        </span>
      </div>
    </header>
  );
}
