import { useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { flexCenter, rotateAnimation } from "../../styles/SharedStyles";
import { ImSpinner9 } from "react-icons/im";

const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999999;
  ${flexCenter}
  color: rgb(var(--blue));
  background-color: var(--mainBackground);
`;

const Icon = styled(ImSpinner9)`
  animation: 1s ${rotateAnimation} linear infinite;
  font-size: 1.5rem;
`;

const wrapperVariants = {
  exit: {
    opacity: 0,
    y: "-30%",
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
}

interface Props {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Loader = ({ setLoading }: Props): JSX.Element => {

  useEffect(() => {
    setLoading(true);

    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <Wrapper variants={wrapperVariants} exit="exit">
      <Icon />
    </Wrapper>
  )
}

export default Loader;