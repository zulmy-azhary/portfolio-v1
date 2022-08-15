import { useEffect, useRef } from "react";

export let useClickOutside = (handler: any): React.MutableRefObject<HTMLDivElement | undefined> => {
	let menuRef = useRef<HTMLDivElement>();

  useEffect(() => {
		let handlerEvent = (e: { target: any; }): void => {
			if (!menuRef.current?.contains(e.target)) {
				handler();
			}
		};

    document.addEventListener("mousedown", handlerEvent);
    // Clean Up
		return () => {
			document.removeEventListener("mousedown", handlerEvent);
		};
	});

	return menuRef;
};
