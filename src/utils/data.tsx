import type { IconType } from "react-icons";
import { FaHtml5, FaSass, FaBootstrap, FaReact, FaLaravel, FaFigma } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import {
	SiJavascript,
	SiPhp,
	SiTypescript,
	SiTailwindcss,
	SiNextdotjs,
	SiChakraui,
	SiFirebase,
	SiMariadb,
	SiRedux,
} from "react-icons/si";

// Navbar
export const navLink: Array<string> = ["About", "Projects", "Skills", "Contact"];

// Items Project Types
export interface SkillsType {
	id: number;
	name: string;
	type?: string;
	releaseDate?: number | string;
	icon: IconType;
	desc: string;
}

// Item Projects
export const skills: Array<SkillsType> = [
	{
		id: 1,
		name: "HTML",
		type: "Markup Language",
		releaseDate: 1993,
		icon: FaHtml5,
		desc: "",
	},
	{
		id: 2,
		name: "CSS",
		type: "Stylesheet Language",
		releaseDate: 1996,
		icon: IoLogoCss3,
		desc: "",
	},
	{
		id: 3,
		name: "JavaScript",
		type: "Programming Language",
		releaseDate: 1995,
		icon: SiJavascript,
		desc: "",
	},
	{
		id: 4,
		name: "PHP",
		type: "Programming Language",
		releaseDate: 1995,
		icon: SiPhp,
		desc: "",
	},
	{
		id: 5,
		name: "TypeScript",
		type: "Programming Language",
		releaseDate: 2012,
		icon: SiTypescript,
		desc: "",
	},
	{
		id: 6,
		name: "SASS",
		type: "CSS Preprocessor",
		releaseDate: 2006,
		icon: FaSass,
		desc: "",
	},
	{
		id: 7,
		name: "TailwindCSS",
		type: "CSS Framework",
		releaseDate: 2017,
		icon: SiTailwindcss,
		desc: "",
	},
	{
		id: 8,
		name: "Bootstrap",
		type: "CSS Framework",
		releaseDate: 2011,
		icon: FaBootstrap,
		desc: "",
	},
	{
		id: 9,
		name: "React",
		type: "Javascript Library",
		releaseDate: 2013,
		icon: FaReact,
		desc: "",
	},
	{
		id: 10,
		name: "Nextjs",
		type: "React Framework",
		releaseDate: 2016,
		icon: SiNextdotjs,
		desc: "Next.js is a JavaScript framework created by Vercel. It lets you build server-side rendering and static web applications using React. It’s a great tool to build your next website. It has many great features and advantages, which can make Nextjs your first option for building your next web application.",
	},
	{
		id: 11,
		name: "Chakra UI",
		type: "UI Component Library",
		releaseDate: "-",
		icon: SiChakraui,
		desc: "",
	},
	{
		id: 12,
		name: "Firebase",
		type: "Backend as a Service",
		releaseDate: 2012,
		icon: SiFirebase,
		desc: "Firebase is a Backend-as-a-Service (BaaS) app development platform that provides hosted backend services such as a realtime database, cloud storage, authentication, crash reporting, machine learning, remote configuration, and hosting for your static files.",
	},
	{
		id: 13,
		name: "MariaDB",
		type: "Relational Database",
		releaseDate: 2009,
		icon: SiMariadb,
		desc: "",
	},
	{
		id: 14,
		name: "Redux",
		type: "State Management",
		releaseDate: 2015,
		icon: SiRedux,
		desc: "",
	},
	{
		id: 15,
		name: "Laravel",
		type: "PHP Framework",
		releaseDate: 2011,
		icon: FaLaravel,
		desc: "",
	},
	{
		id: 16,
		name: "Figma",
		type: "Design Tool",
		releaseDate: 2016,
		icon: FaFigma,
		desc: "",
	},
];
