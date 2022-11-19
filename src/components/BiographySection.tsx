import React from "react";
import styled from "styled-components";
import { Container, Text, Heading, SubHeading } from "@styles/SharedComponents";

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3.5rem;
  text-align: start;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    column-gap: 6rem;
    text-align: center;
    justify-content: center;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    column-gap: 13rem;
    text-align: start;
    justify-content: flex-start;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  font-family: var(--comicNeue);
  font-weight: 500;
  color: rgb(var(--slate));

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

const Label = styled(Main)`
  text-transform: uppercase;
`;

const Biography: React.FC = () => {
  return (
    <Container id="about">
      <SubHeading>About Me</SubHeading>
      <Heading>Biography</Heading>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia voluptatum obcaecati sed,
        corrupti magnam impedit eius ipsum, quisquam expedita, rem consectetur? Deleniti doloribus
        sed laboriosam vero odio iusto facere at omnis culpa nisi nobis in pariatur ad, a facilis
        consequuntur dolor voluptates! Rem hic aut nihil amet dignissimos ducimus doloribus!
      </Text>
      {/* <Content>
        <Label>
          <p>Name</p>
          <p>Birthday</p>
          <p>Age</p>
          <p>Address</p>
          <p>Phone</p>
          <p>Email</p>
        </Label>
        <Main>
          <p>Zulmy Azhary</p>
          <p>April, 14th 1999</p>
          <p>23 Years</p>
          <p>Makassar, Indonesia</p>
          <p>(+62) 853 4361 2564</p>
          <p>zulmyazhary32@gmail.com</p>
        </Main>
      </Content> */}
    </Container>
  );
};

export default Biography;
