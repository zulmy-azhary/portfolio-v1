import styled from 'styled-components';
import { device } from '../../helper/devices';
import { Container, Description, Heading, SubHeading } from "../../styles/SharedComponents";

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3.5rem;
  text-align: start;

  @media ${device.tablet} {
    column-gap: 6rem;
    text-align: center;
    justify-content: center;
  }

  @media ${device.laptop} {
    column-gap: 13rem;
    text-align: start;
    justify-content: flex-start;
  }
`;

const Biography = (): JSX.Element => {
  return (
    <Container id="about">
      <SubHeading>About Me</SubHeading>
      <Heading>Biography</Heading>
      <Description>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia voluptatum obcaecati sed, corrupti magnam impedit eius ipsum, quisquam expedita, rem consectetur? Deleniti doloribus sed laboriosam vero odio iusto facere at omnis culpa nisi nobis in pariatur ad, a facilis consequuntur dolor voluptates! Rem hic aut nihil amet dignissimos ducimus doloribus!
      </Description>
      <Content>
        <div className="font-secondary font-medium lg:text-xl text-slate-500 flex flex-col gap-y-4 uppercase">
          <p>Name</p>
          <p>Birthday</p>
          <p>Age</p>
          <p>Address</p>
          <p>Phone</p>
          <p>Email</p>
        </div>
        <div className="font-secondary font-medium lg:text-xl text-slate-500 flex flex-col gap-y-4">
          <p>Zulmy Azhary</p>
          <p>April, 14th 1999</p>
          <p>23 Years</p>
          <p>Makassar, Indonesia</p>
          <p>(+62) 853 4361 2564</p>
          <p>zulmyazhary32@gmail.com</p>
        </div>
      </Content>
    </Container>
  );
};

export default Biography;