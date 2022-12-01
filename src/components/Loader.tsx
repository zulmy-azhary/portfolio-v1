import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { ImSpinner9 } from "react-icons/im";
import { flexCenter, rotateAnimation } from "@styles/SharedStyles";
import type { Dispatcher } from "@types";

const Wrapper = styled(motion.span)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999999;
  ${flexCenter}
  color: rgb(var(--blue));
  background-color: var(--bgMain);
`;

const Icon = styled(ImSpinner9)`
  animation: 1s ${rotateAnimation} linear infinite;
  font-size: 1.5rem;
`;

const wrapperVariants = {
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

interface Props {
  setLoading: Dispatcher<boolean>;
}

const Loader: React.FC<Props> = ({ setLoading }) => {
  useEffect(() => {
    setLoading(true);

    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <Wrapper variants={wrapperVariants} exit="exit">
      <Icon />
    </Wrapper>
  );
};

export default Loader;
