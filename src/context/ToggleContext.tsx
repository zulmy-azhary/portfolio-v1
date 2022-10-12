import React, { createContext, useState, useContext } from 'react';

export interface ToggleCtx {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isClosed: () => void;
}

const ToggleContext = createContext<ToggleCtx>({} as ToggleCtx);

export const useToggle = (): ToggleCtx => useContext(ToggleContext);

const ToggleProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const isClosed = () => setOpen(false);

  return (
    <ToggleContext.Provider value={{ isOpen, setOpen, isClosed }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleProvider;