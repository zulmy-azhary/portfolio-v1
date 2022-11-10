import React, { createContext, useState, useContext } from "react";
import type { Dispatcher } from "types";

interface ToggleCtx {
  isOpen: boolean;
  setOpen: Dispatcher<boolean>;
  isClosed: () => void;
}
export type Toggle = Pick<ToggleCtx, "isOpen">;

const ToggleContext = createContext<ToggleCtx>({} as ToggleCtx);
export const useToggle = (): ToggleCtx => useContext(ToggleContext);

const ToggleProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const isClosed = () => setOpen(false);

  return (
    <ToggleContext.Provider value={{ isOpen, setOpen, isClosed }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleProvider;
