import React from "react";
import styled from "styled-components";
import { Dispatcher, TabList } from "types";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  align-items: center;
  column-gap: 1rem;
  row-gap: 1rem;
`;

const Button = styled.button<{ isSelected: boolean }>`
  color: rgb(var(--${(props) => (props.isSelected ? "primary" : "blue")}));
  border: none;
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  background-color: rgb(${(props) => (props.isSelected ? "var(--teal)" : "var(--secondary) / 1")});
  /* flex-basis: 25%; */

  &:hover {
    background-color: rgb(var(--${(props) => (props.isSelected ? "" : "secondaryBackground")}));
  }
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
