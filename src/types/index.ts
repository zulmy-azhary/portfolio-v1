import React from "react";

export type SocialMediaType = {
	label: string;
	icon: any;
	url: string;
}

export interface ToggleCtx {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isClosed: () => void;
}

export interface ScrollCtx {
	scrollState: boolean;
	setScrollState: React.Dispatch<React.SetStateAction<boolean>>;
}