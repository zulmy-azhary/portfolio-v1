import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import { device } from "../../helper/devices";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const SIZE = 8;

const Circle = styled(motion.div)`
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  width: calc(${SIZE} * 2px);
  height: calc(${SIZE} * 2px);
  border: 2px solid rgb(var(--teal));
  border-radius: ${SIZE}px;
  mix-blend-mode: difference;
  pointer-events: none;
`;

const Cursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 50, stiffness: 300 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const isLaptop = useMediaQuery(device.laptop);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - SIZE);
      cursorY.set(e.clientY - SIZE);
    }

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      {isLaptop && <Circle id="cursor" style={{translateX: x, translateY: y}} />}
    </>
  )
}

export default Cursor;