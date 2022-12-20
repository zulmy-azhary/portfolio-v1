import React, { useEffect } from "react";
import { Transition, motion } from "framer-motion";
import styled from "styled-components";
import { flexCenter } from "@styles/SharedStyles";
import type { Dispatcher } from "@types";

const Wrapper = styled(motion.span)`
  position: fixed;
  inset: 0;
  z-index: 999999;
  ${flexCenter}
  color: var(--sky);
  background-color: var(--bgMain);
  column-gap: 0.25rem;
`;

const Dot = styled(motion.div)`
  --size: 10px;
  width: var(--size);
  height: var(--size);
  background-color: var(--teal);
  border-radius: 50%;
`;

interface Props {
  setLoading: Dispatcher<boolean>;
}

const Loader: React.FC<Props> = ({ setLoading }) => {
  useEffect(() => {
    setLoading(true);

    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <Wrapper variants={wrapperVariants} animate="animate" exit="exit">
      <Dot variants={dotVariants} transition={dotTransition} />
      <Dot variants={dotVariants} transition={dotTransition} />
      <Dot variants={dotVariants} transition={dotTransition} />
    </Wrapper>
  );
};

const wrapperVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const dotVariants = {
  animate: {
    y: [0, 15],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.5,
      },
    },
  },
};

const dotTransition: Transition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: "reverse",
};

export default Loader;
