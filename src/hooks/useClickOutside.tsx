import { useEffect, useRef } from "react";

export const useClickOutside = (
  state: boolean,
  handler: () => void
): React.MutableRefObject<HTMLElement | undefined> => {
  let menuRef = useRef<HTMLElement | undefined>(undefined);

  
  useEffect(() => {
    if (!state) return;
    // When user click outside
    const handlerEvent = (e: MouseEvent): void => {
      if (!menuRef.current?.contains(e.target as HTMLElement) && state) {
        handler();
      }
    };
  
    // When user press esc key
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && state) {
        handler();
      }
    };

    document.addEventListener("mousedown", handlerEvent);
    document.addEventListener("keydown", handleEscKey);

    // Clean Up
    return () => {
      document.removeEventListener("mousedown", handlerEvent);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [state]);

  return menuRef;
};
