import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";

const SIZE = 8;

const Circle = styled(motion.div)`
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  width: ${SIZE * 2}px;
  height: ${SIZE * 2}px;
  border: 2px solid rgb(var(--teal));
  border-radius: ${SIZE}px;
  mix-blend-mode: difference;
  pointer-events: none;

  /* &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background-color: rgb(var(--teal));
    border-radius: 2.5px;
    transform: translate(-50%, -50%);
  } */
`;

const Cursor = (): JSX.Element => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 50, stiffness: 300 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - SIZE);
      cursorY.set(e.clientY - SIZE);
    }

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <Circle id="cursor" style={{translateX: x, translateY: y}} />
  )
}

export default Cursor;