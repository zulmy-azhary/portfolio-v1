import type { IconType } from "react-icons";
import type { ScrollCtx, ToggleCtx } from "../context";

type ID = number;
type Name = string;
export type Toggle = Pick<ToggleCtx, "isOpen">;
export type Scroll = Pick<ScrollCtx, "scrollState">;

export type BioTypes = {
	name: Name;
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

//? Project Types
export type ProjectTypes = {
	id: ID;
	name: Name;
	image: string;
	description: string;
	tech: string[];
	repo: string;
	liveUrl: string;
}

//? Skill Item Types
export type TechTypes = {
	id: ID;
	name: Name;
	type?: string;
	releaseDate?: number | string;
	Icon: IconType | (() => JSX.Element);
	iconColor: string;
	desc: string;
}

