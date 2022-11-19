import type { SocialMedia } from "@types";
import { AiFillGithub, AiFillFacebook, AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { SiWebcomponentsdotorg } from "react-icons/si";

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