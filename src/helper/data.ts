import { AiFillGithub, AiFillFacebook, AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { SiWebcomponentsdotorg } from "react-icons/si";
import type { Biography, Project, SocialMedia, Technology } from "types";
import easyBank from "assets/projects/easybank.jpg";
import spaceTourism from "assets/projects/space-tourism.jpg";
import fakeStore from "assets/projects/shopping-cart.jpg";
import {
  BootstrapIcon,
  CssIcon,
  FigmaIcon,
  FirebaseIcon,
  GraphQLIcon,
  HtmlIcon,
  JavascriptIcon,
  LaravelIcon,
  MongoDBIcon,
  MuiIcon,
  MySQLIcon,
  NextJSIcon,
  NodeJSIcon,
  PhpIcon,
  PostmanIcon,
  ReactJSIcon,
  ReduxIcon,
  SassIcon,
  TailwindIcon,
  TypescriptIcon,
  ViteIcon,
  VsCodeIcon,
} from "assets/customIcons";

//! Nav Link
export const navLink: string[] = ["About", "Projects", "Technologies", "Contact"];

//! Biography
export const biography: Biography = {
  name: "Zulmy Azhary",
  birthday: "April, 14th 1999",
  age: 23,
  address: "Makassar, Indonesia",
  phone: "(+62) 853 4361 2564",
  email: "zulmyazhary32@gmail.com",
};

//! Project
export const projects: Project[] = [
  {
    id: 1,
    name: "Space Tourism",
    image: spaceTourism,
    description: "",
    tech: ["Typescript", "Styled Components", "NextJS", "Framer Motion"],
    repo: "https://github.com/zulmy-azhary/space-tourism",
    liveUrl: "https://zoel-space-tourism.vercel.app",
  },
  {
    id: 2,
    name: "Easy Bank",
    image: easyBank,
    description: "",
    tech: ["Html", "Css", "Javascript", "ReactJS"],
    repo: "https://github.com/zulmy-azhary/easybank-landingpage",
    liveUrl: "https://ezbank.vercel.app",
  },
  {
    id: 3,
    name: "Fake Store",
    image: fakeStore,
    description: "",
    tech: ["Typescript", "ReactJS", "Material UI"],
    repo: "https://github.com/zulmy-azhary/fake-store",
    liveUrl: "https://fake-store-demo.vercel.app",
  },
];

//! Social Media
export const socialMedia: SocialMedia[] = [
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

//! Technology
export const technologies: Technology[] = [
  {
    id: 1,
    name: "HTML",
    type: "Language",
    releaseDate: 1993,
    Icon: HtmlIcon,
    desc: "HTML is the language for describing the structure of Web pages. HTML gives authors the means to: Publish online documents with headings, text, tables, lists, photos, etc. Retrieve online information via hypertext links, at the click of a button.",
  },
  {
    id: 2,
    name: "CSS",
    type: "Language",
    releaseDate: 1996,
    Icon: CssIcon,
    desc: "CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers. CSS is independent of HTML and can be used with any XML-based markup language.",
  },
  {
    id: 3,
    name: "JavaScript",
    type: "Language",
    releaseDate: 1995,
    Icon: JavascriptIcon,
    desc: "JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user.",
  },
  {
    id: 4,
    name: "TypeScript",
    type: "Language",
    releaseDate: 2012,
    Icon: TypescriptIcon,
    desc: "TypeScript is a superset of typed JavaScript (optional) that can help build and manage large-scale JavaScript projects. It can be considered JavaScript with additional features like strong static typing, compilation, and object-oriented programming.",
  },
  {
    id: 5,
    name: "SASS",
    type: "Framework/Library",
    releaseDate: 2006,
    Icon: SassIcon,
    desc: 'Sass (which stands for "Syntactically awesome style sheets") is an extension of CSS that enables you to use things like variables, nested rules, inline imports and more. It also helps to keep things organised and allows you to create style sheets faster. Sass is compatible with all versions of CSS.',
  },
  {
    id: 6,
    name: "TailwindCSS",
    type: "UI Framework/Component",
    releaseDate: 2017,
    Icon: TailwindIcon,
    desc: "Tailwind CSS is a \"utility-first\" CSS framework that provides a deep catalog of CSS classes and tools that let's you easily get started styling your website or application. Tailwind CSS makes it quicker to write and maintain the code of your application. By using this utility-first framework, you don't have to write custom CSS to style your application.",
  },
  {
    id: 7,
    name: "Bootstrap",
    type: "UI Framework/Component",
    releaseDate: 2011,
    Icon: BootstrapIcon,
    desc: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
  },
  {
    id: 8,
    name: "React",
    type: "Framework/Library",
    releaseDate: 2013,
    Icon: ReactJSIcon,
    desc: 'React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".',
  },
  {
    id: 9,
    name: "Next",
    type: "Framework/Library",
    releaseDate: 2016,
    Icon: NextJSIcon,
    desc: "Next.js is a JavaScript framework created by Vercel. It let's you build server-side rendering and static web applications using React. It's a great tool to build your next website. It has many great features and advantages, which can make Nextjs your first option for building your next web application.",
  },
  {
    id: 10,
    name: "Firebase",
    type: "DBMS",
    releaseDate: 2012,
    Icon: FirebaseIcon,
    desc: "Firebase is a Backend-as-a-Service (BaaS) app development platform that provides hosted backend services such as a realtime database, cloud storage, authentication, crash reporting, machine learning, remote configuration, and hosting for your static files.",
  },
  {
    id: 11,
    name: "Redux",
    type: "Others",
    releaseDate: 2015,
    Icon: ReduxIcon,
    desc: "Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments and are easy to test. Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React for building user interfaces.",
  },
  {
    id: 12,
    name: "Figma",
    type: "Others",
    releaseDate: 2016,
    Icon: FigmaIcon,
    desc: "Figma is a collaborative browser-based interface design tool, with additional offline features enabled by desktop applications for macOS and Windows. The Figma mobile app for Android and iOS allows viewing and interacting with Figma prototypes in real-time on mobile and tablet devices.",
  },
  {
    id: 13,
    name: "Material UI",
    type: "UI Framework/Component",
    releaseDate: 2014,
    Icon: MuiIcon,
    desc: "Material-UI is simply a library that allows us to import and use different components to create a user interface in our React applications. This saves a significant amount of time since the developers do not need to write everything from scratch. MUI provides a simple, customizable, and accessible library of React components.",
  },
  {
    id: 14,
    name: "Vite",
    type: "Others",
    releaseDate: 0,
    Icon: ViteIcon,
    desc: 'Vite (French word for "quick", pronounced /vit/ , like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects. Vite can be used to develop JavaScript/TypeScript applications with support for popular libraries such as React, Svelte, Preact, and even vanilla JavaScript.',
  },
  {
    id: 15,
    name: "NodeJS",
    type: "Framework/Library",
    Icon: NodeJSIcon,
  },
  {
    id: 16,
    name: "MySQL",
    type: "DBMS",
    Icon: MySQLIcon,
  },
  {
    id: 17,
    name: "Vs Code",
    type: "Others",
    Icon: VsCodeIcon,
  },
  {
    id: 18,
    name: "Postman",
    type: "Others",
    Icon: PostmanIcon,
  },
  {
    id: 19,
    name: "Php",
    type: "Language",
    Icon: PhpIcon,
  },
  {
    id: 20,
    name: "Laravel",
    type: "Framework/Library",
    Icon: LaravelIcon,
  },
  {
    id: 21,
    name: "Mongo DB",
    type: "DBMS",
    Icon: MongoDBIcon,
  },
  {
    id: 22,
    name: "GraphQL",
    type: "DBMS",
    Icon: GraphQLIcon,
  },
];
