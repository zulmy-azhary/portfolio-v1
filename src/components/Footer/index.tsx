import { FaHeart } from "react-icons/fa";
import styled from "styled-components";
import { device } from "../../helper/devices";

const Credit = styled.p`
  color: rgb(var(--blue) / 0.5);
  transition-duration: 500ms;
`;

const Author = styled(Credit)`
  margin-top: 0.5rem;
`;

const Wrapper = styled.footer`
  transition-duration: 500ms;
  position: relative;
  border-top-width: 1px;
  border-top-style: solid;
  border-color: rgb(var(--blue) / 0.5);
  text-align: center;
  padding: 1.5rem 0;

  &:hover {
    border-color: rgb(var(--teal));
    ${Credit}{
      color: rgb(var(--teal));
    }
  }

  @media ${device.tablet} {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  @media ${device.laptop} {
    text-align: start;
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media ${device.laptopL} {
    padding-left: 7rem;
    padding-right: 7rem;
  }
`;

const Footer = (): JSX.Element => {
  return (
    <Wrapper>
      <Credit>Copyright &copy; 2022. All rights reserved.</Credit>
      <Author>Created with <FaHeart style={{ display: "inline-block", color: "red" }} /> by Zulmy Azhary</Author>
    </Wrapper>
  );
};

export default Footer;