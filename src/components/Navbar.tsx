import React from "react";
import { Link } from "react-scroll";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { HamburgerMenu } from "@components";
import Logo from "@components/Logo";
import { navLink } from "@data";
import { type Toggle, useToggle } from "@context";
import { useClickOutside } from "@hooks";

const Header = styled.header`
  width: 100%;
  position: fixed;
  z-index: 9999;
  background-color: var(--bgMain);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    background-color: transparent;
    box-shadow: none;
  }
`;

const Nav = styled.nav<Toggle>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.25rem;

  &:before {
    content: "";
    position: fixed;
    transition-duration: 500ms;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: rgb(var(--primary) / 0.2);
    backdrop-filter: blur(4px);
    z-index: 9;

    ${({ isOpen }) =>
      isOpen
        ? css`
            width: 25%;
          `
        : css`
            width: 0;
            opacity: 0;
          `}
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 1.5rem 2.25rem;

    &:before {
      width: ${({ isOpen }) => isOpen && "50%"};
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    &:before {
      width: ${({ isOpen }) => isOpen && "70%"};
    }
  }
  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    &:before {
      width: ${({ isOpen }) => isOpen && "65%"};
    }
  }
`;

const BrandLogo = styled(Logo)`
  position: relative;
  cursor: pointer;
  width: 2.25rem;
  z-index: 9999;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 2.75rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    width: 3rem;
  }
`;

const List = styled(({ isOpen, ...props }) => <motion.ul {...props} />)<Toggle>`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
  column-gap: 3.5rem;
  list-style-type: none;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    row-gap: 3.5rem;
  }

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 75%;
  padding: 0 3rem;
  background-color: rgb(var(--secondary));

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 50%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    width: 30%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptopL}) {
    width: 35%;
  }
`;

const NavItem = styled(({ isOpen, ...props }) => <motion.li {...props} />)<Toggle>`
  font-family: Inter;
  font-weight: 400;
  color: rgb(var(--blue));
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.75rem 2.5rem;

  a {
    cursor: pointer;
    width: 100%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding: 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

const Navbar: React.FC = () => {
  const { isOpen, setOpen, isClosed } = useToggle();
  const menuRef = useClickOutside(isOpen, isClosed);

  return (
    <Header as={motion.header} initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}>
      <Nav isOpen={isOpen}>
        <Link
          href="#home"
          to="home"
          spy={true}
          smooth={"easeInOutQuart"}
          duration={900}
          onClick={isClosed}
          tabIndex={0}
          aria-label="My personal logo"
        >
          <BrandLogo />
        </Link>
        <aside ref={menuRef as React.RefObject<HTMLElement>}>
          <List
            isOpen={isOpen}
            variants={variants}
            initial={false}
            animate={isOpen ? "opened" : "closed"}
          >
            {navLink.map((item: string) => (
              <NavItem key={item} variants={navItemVariants} isOpen={isOpen} tabIndex={0}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  to={item.toLowerCase()}
                  spy={true}
                  smooth={"easeInOutQuart"}
                  duration={900}
                  onClick={isClosed}
                >
                  {item}
                </Link>
              </NavItem>
            ))}
          </List>
          <HamburgerMenu onClick={() => setOpen((prev: boolean) => !prev)} />
        </aside>
      </Nav>
    </Header>
  );
};

const variants = {
  opened: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delayChildren: 0.1,
      duration: 0.5,
    },
    right: 0,
  },
  closed: {
    transition: {
      staggerDirection: -1,
      duration: 0.5,
    },
    right: "-100%",
  },
};

const navItemVariants = {
  opened: {
    x: 0,
    opacity: 1,
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export default Navbar;
