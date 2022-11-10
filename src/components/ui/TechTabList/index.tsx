import React from "react";
import styled, { css } from "styled-components";
import type { Dispatcher, TabList } from "types";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 1rem;
  row-gap: 1rem;
`;

const Button = styled.button<{ isSelected: boolean }>`
  border: none;
  cursor: pointer;
  padding: 0.5rem 1.25rem;
  border-radius: 5px;
  flex-grow: 1;
  font-family: Inter;

  ${({ isSelected }) =>
    isSelected
      ? css`
          color: rgb(var(--primary));
          background-color: rgb(var(--teal));
        `
      : css`
          color: rgb(var(--blue));
          background-color: rgb(var(--secondary) / 1);
          &:hover {
            background-color: rgb(var(--secondaryBackground));
          }
        `}
`;

interface Props {
  tabSelected: TabList;
  setTabSelected: Dispatcher<TabList>;
}

const TechTabList: React.FC<Props> = ({ tabSelected, setTabSelected }) => {
  return (
    <Wrapper>
      {tabList.map((tech: TabList) => (
        <Button key={tech} isSelected={tabSelected === tech} onClick={() => setTabSelected(tech)}>
          {tech}
        </Button>
      ))}
    </Wrapper>
  );
};

const tabList: TabList[] = [
  "View All",
  "Language",
  "Framework/Library",
  "UI Framework/Component",
  "DBMS",
  "Others",
];

export default TechTabList;
