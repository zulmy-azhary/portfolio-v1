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
	SiWebcomponentsdotorg,
} from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import type { SocialMediaType } from "../types";

//! Navbar
export const navLink: Array<string> = ["About", "Projects", "Skills", "Contact"];

//! Social Media Link
export const socialMedia: Array<SocialMediaType> = [
	{
		label: "Github",
		icon: AiFillGithub,
		url: "https://github.com/zulmy-azhary",
	},
	{
		label: "Facebook",
		icon: AiFillFacebook,
		url: "https://www.facebook.com/zulmyazhary",
	},
	{
		label: "Instagram",
		icon: AiOutlineInstagram,
		url: "https://www.instagram.com/zulmyazhary_",
	},
	{
		label: "LinkedIn",
		icon: AiFillLinkedin,
		url: "https://www.linkedin.com/in/zulmy-azhary-7a0b04159",
	},
	{
		label: "Showwcase",
		icon: SiWebcomponentsdotorg,
		url: "https://zulmyazhary.showwcase.com",
	},
];

//? Items Project Types
export interface SkillsType {
	id: number;
	name: string;
	type?: string;
	releaseDate?: number | string;
	icon: IconType;
	iconColor?: string | any;
	desc: string;
}

//! Item Projects
export const skills: Array<SkillsType> = [
	{
		id: 1,
		name: "HTML",
		type: "Markup Language",
		releaseDate: 1993,
		icon: FaHtml5,
		iconColor: "#f06529",
		desc: "HTML is the language for describing the structure of Web pages. HTML gives authors the means to: Publish online documents with headings, text, tables, lists, photos, etc. Retrieve online information via hypertext links, at the click of a button.",
	},
	{
		id: 2,
		name: "CSS",
		type: "Stylesheet Language",
		releaseDate: 1996,
		icon: IoLogoCss3,
		iconColor: "#264de4",
		desc: "CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers. CSS is independent of HTML and can be used with any XML-based markup language.",
	},
	{
		id: 3,
		name: "JavaScript",
		type: "Programming Language",
		releaseDate: 1995,
		icon: SiJavascript,
		iconColor: "yellow",
		desc: "JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user.",
	},
	{
		id: 4,
		name: "PHP",
		type: "Programming Language",
		releaseDate: 1995,
		icon: SiPhp,
		iconColor: "#7175AA",
		desc: "PHP (Hypertext Preprocessor) is known as a general-purpose scripting language that can be used to develop dynamic and interactive websites. It was among the first server-side languages that could be embedded into HTML, making it easier to add functionality to web pages without needing to call external files for data.",
	},
	{
		id: 5,
		name: "TypeScript",
		type: "Programming Language",
		releaseDate: 2012,
		icon: SiTypescript,
		iconColor: "#2F72BC",
		desc: "TypeScript is a superset of typed JavaScript (optional) that can help build and manage large-scale JavaScript projects. It can be considered JavaScript with additional features like strong static typing, compilation, and object-oriented programming.",
	},
	{
		id: 6,
		name: "SASS",
		type: "CSS Preprocessor",
		releaseDate: 2006,
		icon: FaSass,
		iconColor: "#C36291",
		desc: "Sass (which stands for \"Syntactically awesome style sheets\") is an extension of CSS that enables you to use things like variables, nested rules, inline imports and more. It also helps to keep things organised and allows you to create style sheets faster. Sass is compatible with all versions of CSS.",
	},
	{
		id: 7,
		name: "TailwindCSS",
		type: "CSS Framework",
		releaseDate: 2017,
		icon: SiTailwindcss,
		iconColor: "#35B3EB",
		desc: "Tailwind CSS is a \"utility-first\" CSS framework that provides a deep catalog of CSS classes and tools that let's you easily get started styling your website or application. Tailwind CSS makes it quicker to write and maintain the code of your application. By using this utility-first framework, you don't have to write custom CSS to style your application.",
	},
	{
		id: 8,
		name: "Bootstrap",
		type: "CSS Framework",
		releaseDate: 2011,
		icon: FaBootstrap,
		iconColor: "#6D10E9",
		desc: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
	},
	{
		id: 9,
		name: "React",
		type: "Javascript Library",
		releaseDate: 2013,
		icon: FaReact,
		iconColor: "#00CDF2",
		desc: "React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called \"components\".",
	},
	{
		id: 10,
		name: "Nextjs",
		type: "React Framework",
		releaseDate: 2016,
		icon: SiNextdotjs,
		iconColor: "#F2F2F2",
		desc: "Next.js is a JavaScript framework created by Vercel. It let's you build server-side rendering and static web applications using React. It's a great tool to build your next website. It has many great features and advantages, which can make Nextjs your first option for building your next web application.",
	},
	{
		id: 11,
		name: "Chakra UI",
		type: "UI Component Library",
		releaseDate: "-",
		icon: SiChakraui,
		iconColor: "#2ABFB3",
		desc: "Chakra UI is a component-based library. It's made up of basic building blocks that can help you build the front-end of your web application. It is customizable and reusable, and most importantly it supports ReactJs, along with some other libraries too.",
	},
	{
		id: 12,
		name: "Firebase",
		type: "Backend as a Service",
		releaseDate: 2012,
		icon: SiFirebase,
		iconColor: "#F29E12",
		desc: "Firebase is a Backend-as-a-Service (BaaS) app development platform that provides hosted backend services such as a realtime database, cloud storage, authentication, crash reporting, machine learning, remote configuration, and hosting for your static files.",
	},
	{
		id: 13,
		name: "MariaDB",
		type: "Relational Database",
		releaseDate: 2009,
		icon: SiMariadb,
		iconColor: "#BA9266",
		desc: "MariaDB Server is one of the most popular open source relational databases. It's made by the original developers of MySQL and guaranteed to stay open source. It is part of most cloud offerings and the default in most Linux distributions.",
	},
	{
		id: 14,
		name: "Redux",
		type: "State Management",
		releaseDate: 2015,
		icon: SiRedux,
		iconColor: "#7046B2",
		desc: "Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments and are easy to test. Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React for building user interfaces.",
	},
	{
		id: 15,
		name: "Laravel",
		type: "PHP Framework",
		releaseDate: 2011,
		icon: FaLaravel,
		iconColor: "#F22B1E",
		desc: "Laravel attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as authentication, routing, sessions, and caching. Laravel aims to make the development process a pleasing one for the developer without sacrificing application functionality.",
	},
	{
		id: 16,
		name: "Figma",
		type: "Design Tool",
		releaseDate: 2016,
		icon: FaFigma,
		iconColor: "#BFDBFE",
		desc: "Figma is a collaborative browser-based interface design tool, with additional offline features enabled by desktop applications for macOS and Windows. The Figma mobile app for Android and iOS allows viewing and interacting with Figma prototypes in real-time on mobile and tablet devices.",
	},
];
