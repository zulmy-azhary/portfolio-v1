import React, { createContext, useState } from 'react';
import type { ToggleCtx } from '../types';

export const ToggleContext = createContext<ToggleCtx>({} as ToggleCtx);

const ToggleProvider: React.FC<React.PropsWithChildren> = ({ children }): JSX.Element => {
  const [isOpen, setOpen] = useState(false);

  const isClosed = () => setOpen(false);

  return (
    <ToggleContext.Provider value={{ isOpen, setOpen, isClosed }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleProvider;