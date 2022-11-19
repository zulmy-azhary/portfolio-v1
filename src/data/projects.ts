import type { Project } from "@types";

//! Projects
export const projects: Project[] = [
  {
    id: 1,
    name: "Space Tourism",
    image: "/assets/projects/space-tourism.jpg",
    description: "",
    tech: ["Typescript", "Styled Components", "NextJS", "Framer Motion"],
    repo: "https://github.com/zulmy-azhary/space-tourism",
    liveUrl: "https://zoel-space-tourism.vercel.app",
  },
  {
    id: 2,
    name: "Easy Bank",
    image: "/assets/projects/easybank.jpg",
    description: "This is my simple SPA project",
    tech: ["Html", "Css", "Javascript", "ReactJS"],
    repo: "https://github.com/zulmy-azhary/easybank-landingpage",
    liveUrl: "https://ezbank.vercel.app",
  },
  {
    id: 3,
    name: "Fake Store",
    image: "/assets/projects/fake-store.jpg",
    description: "",
    tech: ["Typescript", "ReactJS", "Material UI"],
    repo: "https://github.com/zulmy-azhary/fake-store",
    liveUrl: "https://fake-store-demo.vercel.app",
  },
  {
    id: 4,
    name: "Rest Countries",
    image: "/assets/projects/rest-countries.jpg",
    description: "",
    tech: ["Typescript", "NextJS", "Styled Components"],
    repo: "https://github.com/zulmy-azhary/rest-countries",
    liveUrl: "https://zoel-restcountries.vercel.app/",
  },
];