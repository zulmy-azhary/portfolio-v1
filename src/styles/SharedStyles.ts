import { css, keyframes } from "styled-components";

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const roundedSm = css`
  border-radius: 0;
  border-top-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;

export const roundedMd = css`
  border-radius: 0;
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

export const roundedLg = css`
  border-radius: 0;
  border-top-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
`;

export const appearAnimation = keyframes`
  0% { 
    transform: translateY(20px);
    opacity: 0;
  }
  100% { 
    transform: translateY(0);
    opacity: 1;
  }
`;

export const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;