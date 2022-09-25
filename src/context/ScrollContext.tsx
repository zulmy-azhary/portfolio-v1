import React, { createContext, useContext, useEffect, useState } from "react";
import { ToggleContext } from "./ToggleContext";
import type { ScrollCtx } from "../types";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { device } from "../helper/devices";

export const ScrollContext = createContext<ScrollCtx>({} as ScrollCtx);

const ScrollProvider: React.FC<React.PropsWithChildren> = ({ children }): JSX.Element => {
  const [scrollState, setScrollState] = useState(false);
  const { setOpen } = useContext(ToggleContext);
  const isLaptopL = useMediaQuery(device.laptopL);

  const scrollHandler = (): void => {
    window.scrollY && setOpen(false)
		window.scrollY >= 200 ? setScrollState(true) : setScrollState(false);
	}

	useEffect(() => {
		window.addEventListener("scroll", scrollHandler);
		return () => {
			window.removeEventListener("scroll", scrollHandler);
		}
  });
  
  return (
    <ScrollContext.Provider value={{ scrollState, setScrollState }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;