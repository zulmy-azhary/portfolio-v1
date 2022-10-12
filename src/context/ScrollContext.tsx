import React, { createContext, useContext, useEffect, useState } from "react";
import { useToggle } from ".";

export interface ScrollCtx {
	scrollState: boolean;
	setScrollState: React.Dispatch<React.SetStateAction<boolean>>;
}

const ScrollContext = createContext<ScrollCtx>({} as ScrollCtx);

export const useScroll = (): ScrollCtx => useContext(ScrollContext);

const ScrollProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [scrollState, setScrollState] = useState(false);
  const { setOpen } = useToggle();

  const scrollHandler = (): void => {
    window.scrollY && setOpen(false);
    window.scrollY >= 200 ? setScrollState(true) : setScrollState(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  return (
    <ScrollContext.Provider value={{ scrollState, setScrollState }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
