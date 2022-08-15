import { FC, useContext } from "react";
import { ToggleContext } from "../../context";
import { useClickOutside } from "../../hooks/useClickOutside";
import { Link } from "react-scroll";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Navbar: FC = (): JSX.Element => {
  const { isOpen, setOpen, isClosed } = useContext(ToggleContext);
  const menuRef = useClickOutside(isClosed);
  console.log(isOpen);
  

  return (
    <nav className="fixed z-50 w-full flex justify-between items-center px-5 py-3 md:px-9 md:py-6">
			<Link to="home" smooth={true} duration={400} onClick={isClosed} tabIndex={0}>
				<Logo className="cursor-pointer transition-all duration-300 w-9 md:w-11 lg:w-12 fill-teal-400 hover:fill-blue-200 hover:animate-wiggle" />
      </Link>
      <div ref={menuRef as React.RefObject<HTMLDivElement>}>
        <aside className={`transition-all duration-500 fixed inset-y-0 bg-secondary-700 w-3/4 md:w-2/5 flex-center flex-col gap-14 list-none ${
					!isOpen ? "-right-1/2 invisible" : "right-0"}`}
        >
          <li tabIndex={0}>
            <Link className="nav-item" to="about" spy={true} smooth={"easeInOutQuart"} duration={900} onClick={isClosed}>
              About
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="projects" spy={true} smooth={"easeInOutQuart"} duration={900} onClick={isClosed}>
              Projects
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="competence" spy={true} smooth={"easeInOutQuart"} duration={900} onClick={isClosed}>
              Skills
            </Link>
          </li>
        </aside>
        <button className="text-white" onClick={() => setOpen(!isOpen)}>click</button>
      </div>
		</nav>
  );
};

export default Navbar;