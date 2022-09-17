import { useEffect, useRef, useCallback } from "react";

export let useClickOutside = (
  state: boolean,
  handler: () => void
): React.MutableRefObject<HTMLElement | undefined> => {
  let menuRef = useRef<HTMLElement>();

  // When user click outside
  let handlerEvent = useCallback(
    (e: Event): void => {
      if (!menuRef.current?.contains(e.target as HTMLElement) && state) {
        handler();
      }
    },
    [state]
  );

  // When user press esc key
  const handleEscKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && state) {
        handler();
      }
    },
    [state]
  );

  useEffect(() => {
    if (!state) return;

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
