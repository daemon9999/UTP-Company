import { Link, NavLink } from "react-router-dom";
import Button from "../../components/button";
import { useMediaQuery } from "react-responsive";
import ResponsiveHeader from "src/components/responsive-header";

export default function Header({setIsOpen}) {

  const isTablet = useMediaQuery({
    query: '(max-width:768px)'
  })

  if (isTablet) return <ResponsiveHeader setIsOpen={setIsOpen}/>
  return (
    <header className="bg-primary h-20">
      <div className="container w-5/6 mx-auto flex items-center justify-between h-full">
        <Link to={"/"} className="block h-20 w-auto "><img className="h-full w-auto" src="/images/logo.png"/></Link>

        <div className="flex items-center gap-x-4 lg:gap-x-8">
          <NavItem href={"/"}>Home</NavItem>
          <NavItem as="link" href={"/#about-project"}>About</NavItem>
         
          <NavItem as="link" href={"/#mainpoints"}>
            Main Points
          </NavItem>
         
        </div>

        <div className="flex items-center gap-x-4 lg:gap-x-8">
          <Button as="a" href="https://wa.me/+994505429229" target="_blank">
            Contact Us
          </Button>
          <Button as="a" href="/team">
            Team Members
          </Button>
        </div>
      </div>
    </header>
  );
}

export function NavItem({ as, href, children, ...props }) {
  if (as === "link") {
    return (
      <a href={href} {...props} className={"text-black font-bold"}>
        {children}
      </a>
    );
  }
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        " font-bold " + (isActive ? "text-dark-red" : "text-black")
      }
    >
      {children}
    </NavLink>
  );
}
