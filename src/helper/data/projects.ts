import { ProjectTypes } from "../../types";
import easyBank from "../../assets/projects/easybank.jpg";
import spaceTourism from "../../assets/projects/space-tourism.jpg";
import fakeStore from "../../assets/projects/shopping-cart.jpg";

export const projects: ProjectTypes[] = [
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
]