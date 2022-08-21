import { useContext } from "react";
import { ToggleContext } from "../../context";
import { useClickOutside } from "../../hooks/useClickOutside";
import { Link } from "react-scroll";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { HamburgerMenu } from "../utils";
import { navLink } from "../../utils/data";


const Navbar = (): JSX.Element => {
  const { isOpen, setOpen, isClosed } = useContext(ToggleContext);
  const menuRef = useClickOutside(isClosed);

  return (
    <nav className="fixed z-50 w-full flex justify-between items-center px-5 py-3 md:px-9 md:py-6">
			<Link to="home" smooth={true} duration={400} onClick={isClosed} tabIndex={0}>
				<Logo className="cursor-pointer transition-all duration-300 w-9 md:w-11 lg:w-12 hover:fill-blue-500/25" />
      </Link>
      <div ref={menuRef as React.RefObject<HTMLDivElement>}>
        <aside className={`transition-all duration-500 fixed inset-y-0 bg-secondary-700 w-3/4 md:w-1/2 lg:w-4/12 flex-center flex-col gap-14 list-none px-12 ${
					!isOpen ? "-right-1/4 invisible opacity-0" : "right-0"}`}
        >
          {navLink.map((item: string, idx: number): JSX.Element => {
            const styles = {
              opacity: 0,
              animation: "1s appear forwards",
              animationDelay: `${(idx + 1) * 0.2}s`,
            };
            return (
              <li key={idx} tabIndex={0} style={isOpen ? styles : {}}>
                <Link className="nav-item" to={item.toLowerCase()} spy={true} smooth={"easeInOutQuart"} duration={900} onClick={isClosed}>
                  {item}
                </Link>
              </li>
            )
          })}
        </aside>
        <HamburgerMenu onClick={() => setOpen(!isOpen)} />
      </div>
		</nav>
  );
};

export default Navbar;