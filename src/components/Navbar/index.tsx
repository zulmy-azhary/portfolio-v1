import React, { useContext } from "react";
import { ToggleContext } from "../../context";
import { useClickOutside } from "../../hooks/useClickOutside";
import { Link } from "react-scroll";
import { HamburgerMenu } from "../";
import { navLink } from "../../helper/data";
import styled, { css, keyframes } from "styled-components";
import { device } from "../../helper/devices";
import type { ToggleCtx } from "../../types";
import Logo from "../Logo";

const Header = styled.header`
  width: 100%;
  position: fixed;
  z-index: 9999;
`;

const Nav = styled.nav<Partial<ToggleCtx>>`
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

    ${({ isOpen }) => isOpen ? css`
      width: 25%;
    ` : css`
      width: 0;
      opacity: 0;
    `}
  }

  @media ${device.tablet} {
    padding: 1.5rem 2.25rem;

    &:before {
      ${({ isOpen }) => isOpen && css`
        width: 50%;
      `}
    }
  }

  @media ${device.laptop} {
    &:before {
      ${({ isOpen }) => isOpen && css`
        width: 66.666667%;
      `}
    }
  }
`;

const BrandLogo = styled(Logo)`
  position: relative;
  cursor: pointer;
  width: 2.25rem;
  z-index: 9999;

  @media ${device.tablet} {
    width: 2.75rem;
  }

  @media ${device.laptop} {
    width: 3rem;
  }
`;

const AsideContainer = styled.div`

`;

const Aside = styled.aside<Partial<ToggleCtx>>`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: rgb(var(--secondary));
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
  column-gap: 3.5rem;
  list-style-type: none;
  padding: 0 3rem;

  ${({ isOpen }) => !isOpen ? css`
    right: -25%;
    visibility: hidden;
    opacity: 0;
  ` : css` right: 0; `}

  @media ${device.tablet} {
    width: 50%;
    row-gap: 3.5rem;
  }

  @media ${device.laptop} {
    width: 30%;
  }

  @media ${device.laptopL} {
    width: 35%;
  }
`;

const NavItem = styled.li<Partial<ToggleCtx> & { order: number }>`
  font-weight: 500;
  color: rgb(var(--blue));
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition-duration: 300ms;
  padding: 0.75rem 2.5rem;

  ${(props) => props.isOpen && css`
    opacity: 0;
    animation: 1s ${appearAnimation} forwards;
    animation-delay: ${(props.order + 1) * 0.2}s;
  `}

  a {
    cursor: pointer;
    width: 100%;
  }

  &:hover {
    color: rgb(var(--teal));
  }

  @media ${device.tablet} {
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding: 0;
  }

  @media ${device.laptop} {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

const appearAnimation = keyframes`
  0% { 
    transform: translateY(20px);
    opacity: 0;
  }
  100% { 
    transform: translateY(0);
    opacity: 1;
  }
`;


const Navbar = (): JSX.Element => {
  const { isOpen, setOpen, isClosed } = useContext(ToggleContext);
  const menuRef = useClickOutside(isOpen, isClosed);

  return (
    <Header>
      <Nav isOpen={isOpen}>
        <Link to="home" spy={true} smooth={"easeInOutQuart"} duration={900} onClick={isClosed} tabIndex={0}>
          <BrandLogo />
        </Link>
        <AsideContainer ref={menuRef as React.RefObject<HTMLDivElement>}>
          <Aside isOpen={isOpen}>
            {navLink.map((item: string, idx: number): JSX.Element => (
              <NavItem isOpen={isOpen} order={idx} key={idx} tabIndex={0}>
                <Link to={item.toLowerCase()} spy={true} smooth={"easeInOutQuart"} duration={900} onClick={isClosed}>
                  {item}
                </Link>
              </NavItem>
            ))}
          </Aside>
          <HamburgerMenu onClick={() => setOpen(!isOpen)} />
        </AsideContainer>
      </Nav>
    </Header>
  );
};

export default Navbar;