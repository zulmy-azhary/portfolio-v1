import React from "react";
import type { IconType } from "react-icons";

export type BioTypes = {
	name: string;
	birthday: string;
	age: number;
	address: string;
	phone: string;
	email: string;
}

//? Social Media Types
export type SocialMediaTypes = {
	label: string;
	Icon: IconType;
	url: string;
}

//? Skill Item Types
export type SkillTypes = {
	id: number;
	name: string;
	type?: string;
	releaseDate?: number | string;
	icon: IconType;
	iconColor: string;
	desc: string;
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