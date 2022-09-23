import { useContext } from "react";
import styled from "styled-components";
import { ToggleContext } from "../../context";
import type { ToggleCtx } from "../../types";

const Container = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  justify-content: space-evenly;
  position: relative;
  z-index: 9999;
  cursor: pointer;
`;

const Line = styled.div<Partial<ToggleCtx>>`
  cursor: pointer;
  height: 2px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  background-color: rgb(var(--teal));
`;

const TopLine = styled(Line)`
  transform-origin: top right;
  transform: ${({ isOpen }) => isOpen && "rotate(-45deg) translateX(-1px)"};
`;

const CenterLine = styled(Line)`
  transform: ${({ isOpen }) => isOpen && "translateX(20px)"};
  opacity: ${({ isOpen }) => isOpen ? 0 : 1};
`;

const BottomLine = styled(Line)`
  transform-origin: top right;
  transform: ${({ isOpen }) => isOpen && "rotate(45deg) translateX(1px)"};
`;

interface Props {
  onClick: () => void,
}

const HamburgerMenu = ({ onClick }: Props): JSX.Element => {
  const { isOpen } = useContext(ToggleContext);

  return (
    <Container onClick={onClick}>
      <TopLine isOpen={isOpen} />
      <CenterLine isOpen={isOpen} />
      <BottomLine isOpen={isOpen} />
    </Container>
  );
};

export default HamburgerMenu;