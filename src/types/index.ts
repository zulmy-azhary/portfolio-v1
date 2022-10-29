import type { IconType } from "react-icons";
import React from "react";

type ID = number;
type Name = string;
type TechList = "Language" | "Framework/Library" | "UI Framework/Component" | "DBMS" | "Others";
export type TabList = "View All" | TechList;
export type Dispatcher<T> = React.Dispatch<React.SetStateAction<T>>;

//? About Me
export type Biography = {
  name: Name;
  birthday: string;
  age: number;
  address: string;
  phone: string;
  email: string;
};

//? Social Media Types
export type SocialMedia = {
  label: string;
  Icon: IconType;
  url: string;
};

//? Project Types
export type Project = {
  id: ID;
  name: Name;
  image: string;
  description: string;
  tech: string[];
  repo: string;
  liveUrl: string;
};

//? Skill Item Types
export type Technology = {
  id: ID;
  name: Name;
  type: TechList;
  releaseDate?: number | string;
  Icon: IconType | (() => JSX.Element);
  desc: string;
};
