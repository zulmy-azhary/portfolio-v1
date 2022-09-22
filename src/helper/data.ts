import { SiWebcomponentsdotorg } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import type { BioTypes, TechTypes, SocialMediaTypes } from "../types";
import {
  BootstrapIcon,
  CssIcon,
  FigmaIcon,
  FirebaseIcon,
  HtmlIcon,
  JavascriptIcon,
  NextJSIcon,
  ReactJSIcon,
  ReduxIcon,
  SassIcon,
  TailwindIcon,
  TypescriptIcon,
} from "../assets/Icons";

//! Navbar
export const navLink: Array<string> = ["About", "Projects", "Technologies", "Contact"];

export const biography: BioTypes = {
  name: "Zulmy Azhary",
  birthday: "April, 14th 1999",
  age: 23,
  address: "Makassar, Indonesia",
  phone: "(+62) 853 4361 2564",
  email: "zulmyazhary32@gmail.com",
};

//! Social Media Link
export const socialMedia: Array<SocialMediaTypes> = [
  {
    label: "Github",
    Icon: AiFillGithub,
    url: "https://github.com/zulmy-azhary",
  },
  {
    label: "Facebook",
    Icon: AiFillFacebook,
    url: "https://www.facebook.com/zulmyazhary",
  },
  {
    label: "Instagram",
    Icon: AiOutlineInstagram,
    url: "https://www.instagram.com/zulmyazhary_",
  },
  {
    label: "LinkedIn",
    Icon: AiFillLinkedin,
    url: "https://www.linkedin.com/in/zulmy-azhary-7a0b04159",
  },
  {
    label: "Showwcase",
    Icon: SiWebcomponentsdotorg,
    url: "https://zulmyazhary.showwcase.com",
  },
];

//! Item Projects
export const teches: Array<TechTypes> = [
  {
    id: 1,
    name: "HTML",
    type: "Markup Language",
    releaseDate: 1993,
    Icon: HtmlIcon,
    iconColor: "#f06529",
    desc: "HTML is the language for describing the structure of Web pages. HTML gives authors the means to: Publish online documents with headings, text, tables, lists, photos, etc. Retrieve online information via hypertext links, at the click of a button.",
  },
  {
    id: 2,
    name: "CSS",
    type: "Stylesheet Language",
    releaseDate: 1996,
    Icon: CssIcon,
    iconColor: "#264de4",
    desc: "CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers. CSS is independent of HTML and can be used with any XML-based markup language.",
  },
  {
    id: 3,
    name: "JavaScript",
    type: "Programming Language",
    releaseDate: 1995,
    Icon: JavascriptIcon,
    iconColor: "yellow",
    desc: "JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user.",
  },
  {
    id: 4,
    name: "TypeScript",
    type: "Programming Language",
    releaseDate: 2012,
    Icon: TypescriptIcon,
    iconColor: "#2F72BC",
    desc: "TypeScript is a superset of typed JavaScript (optional) that can help build and manage large-scale JavaScript projects. It can be considered JavaScript with additional features like strong static typing, compilation, and object-oriented programming.",
  },
  {
    id: 5,
    name: "SASS",
    type: "CSS Preprocessor",
    releaseDate: 2006,
    Icon: SassIcon,
    iconColor: "#C36291",
    desc: 'Sass (which stands for "Syntactically awesome style sheets") is an extension of CSS that enables you to use things like variables, nested rules, inline imports and more. It also helps to keep things organised and allows you to create style sheets faster. Sass is compatible with all versions of CSS.',
  },
  {
    id: 6,
    name: "TailwindCSS",
    type: "CSS Framework",
    releaseDate: 2017,
    Icon: TailwindIcon,
    iconColor: "#35B3EB",
    desc: "Tailwind CSS is a \"utility-first\" CSS framework that provides a deep catalog of CSS classes and tools that let's you easily get started styling your website or application. Tailwind CSS makes it quicker to write and maintain the code of your application. By using this utility-first framework, you don't have to write custom CSS to style your application.",
  },
  {
    id: 7,
    name: "Bootstrap",
    type: "CSS Framework",
    releaseDate: 2011,
    Icon: BootstrapIcon,
    iconColor: "#6D10E9",
    desc: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
  },
  {
    id: 8,
    name: "React",
    type: "Javascript Library",
    releaseDate: 2013,
    Icon: ReactJSIcon,
    iconColor: "#00CDF2",
    desc: 'React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".',
  },
  {
    id: 9,
    name: "Next",
    type: "React Framework",
    releaseDate: 2016,
    Icon: NextJSIcon,
    iconColor: "#F2F2F2",
    desc: "Next.js is a JavaScript framework created by Vercel. It let's you build server-side rendering and static web applications using React. It's a great tool to build your next website. It has many great features and advantages, which can make Nextjs your first option for building your next web application.",
  },
  {
    id: 10,
    name: "Firebase",
    type: "Backend as a Service",
    releaseDate: 2012,
    Icon: FirebaseIcon,
    iconColor: "#F29E12",
    desc: "Firebase is a Backend-as-a-Service (BaaS) app development platform that provides hosted backend services such as a realtime database, cloud storage, authentication, crash reporting, machine learning, remote configuration, and hosting for your static files.",
  },
  {
    id: 11,
    name: "Redux",
    type: "State Management",
    releaseDate: 2015,
    Icon: ReduxIcon,
    iconColor: "#7046B2",
    desc: "Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments and are easy to test. Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React for building user interfaces.",
  },
  {
    id: 12,
    name: "Figma",
    type: "Design Tool",
    releaseDate: 2016,
    Icon: FigmaIcon,
    iconColor: "#BFDBFE",
    desc: "Figma is a collaborative browser-based interface design tool, with additional offline features enabled by desktop applications for macOS and Windows. The Figma mobile app for Android and iOS allows viewing and interacting with Figma prototypes in real-time on mobile and tablet devices.",
  },
];
