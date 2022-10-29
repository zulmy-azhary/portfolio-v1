import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { type Scroll, useScroll } from "context";
import { socialMedia } from "helper/data";
import { device } from "helper/devices";
import type { SocialMedia } from "types";
import { flexCenter, roundedMd, roundedSm } from "styles/SharedStyles";
import logo from "assets/profile-pic.jpg";

const Wrapper = styled.div`
  ${flexCenter}
  max-width: 100%;
  position: relative;
  flex-direction: column;
  row-gap: 1.75rem;
  padding: 6rem 2.5rem;

  &:before,
  &:after {
    content: "";
    position: absolute;
    border: 1px solid rgb(var(--blue) / 0.75);
    transition-duration: 300ms;
    z-index: -1;
  }

  &:before {
    top: 1.25rem;
    bottom: 1.25rem;
    left: -1.25rem;
    right: -1.25rem;
  }

  &:after {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  @media ${device.laptop} {
    padding-left: 1.75rem;
    padding-right: 1.75rem;
  }

  @media ${device.laptopL} {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;

const Image = styled.img`
  filter: grayscale(100%);
  width: 10rem;
  margin: 0 auto;
  pointer-events: none;
  user-select: none;
  transition-duration: 300ms;
  outline: 0 solid rgb(var(--teal));

  @media ${device.tablet} {
    width: 15rem;
  }

  @media ${device.laptop} {
    width: 100%;
  }

  @media ${device.laptopL} {
    max-width: 18rem;
  }
`;

const ProfileSubText = styled.p`
  font-family: "Comic Neue";
  font-weight: 500;
  color: rgb(var(--blue) / 0.75);
  transition-duration: 300ms;

  @media ${device.laptopL} {
    font-size: 1.125rem;
  }
`;

const ProfileMainText = styled(ProfileSubText)`
  font-weight: 600;

  @media ${device.laptopL} {
    font-size: 1.5rem;
  }
`;

const SocialMediaIcon = styled.a`
  line-height: 0;
  transition-duration: 300ms;
  color: rgb(var(--blue));
  font-size: 1.5rem;
  color: rgb(var(--blue) / 0.75);
  border: 1px solid rgb(var(--blue) / 0.75);
  padding: 0.3rem;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    ${roundedSm}
    transform: scale(1.2);

    * {
      cursor: pointer;
    }
  }

  @media ${device.laptop} {
    font-size: 1.6rem;
  }

  @media ${device.laptopL} {
    font-size: 1.75rem;
  }
`;

const Container = styled.section<Scroll>`
  ${flexCenter}
  flex-direction: column;
  top: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;
  width: max-content;
  border: 0 solid rgb(var(--blue) / 0.75);
  padding: 7rem 0;

  &:hover {
    ${Wrapper} {
      &:before,
      &:after {
        border-color: rgb(var(--teal));
      }
    }

    ${Image} {
      ${roundedMd}
      filter: grayscale(0);
      outline-width: 1px;
      outline-offset: 5px;
    }

    ${ProfileSubText} {
      color: rgb(var(--teal));
    }

    ${ProfileMainText} {
      color: rgb(var(--blue));
    }

    ${SocialMediaIcon} {
      border: 1px solid rgb(var(--teal));
      color: rgb(var(--teal));
    }
  }

  @media ${device.tablet} {
    padding: 9rem 0;
  }

  @media ${device.laptop} {
    border-left-width: 1px;
    border-color: rgb(var(--blue) / 0.75);
    position: fixed;
    padding: 0 3rem;
    width: 30%;

    &:hover {
      border-color: rgb(var(--teal));
    }
  }

  @media ${device.laptopL} {
    padding: 0 4%;
    transition-duration: 500ms;
    width: ${(props) => (props.scroll ? 25 : 35)}%;
  }
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  width: 100%;
  padding: 0 1.25rem;

  @media ${device.laptop} {
    padding: 0;
    margin-top: 3rem;
  }

  @media ${device.laptopL} {
    padding: 0 1rem;
    justify-content: space-evenly;
  }
`;

const ProfileDescWrapper = styled.div`
  text-align: center;
  margin-top: 0.75rem;
`;

const Profile: React.FC = () => {
  const { scroll } = useScroll();

  return (
    <Container scroll={scroll}>
      <Wrapper>
        <Image src={logo} alt="Profile" />
        <ProfileDescWrapper>
          <ProfileSubText>Hi there! I'am</ProfileSubText>
          <ProfileMainText as={motion.h2}>Zulmy Azhary</ProfileMainText>
        </ProfileDescWrapper>
      </Wrapper>
      <SocialMediaWrapper>
        {socialMedia.map(({ label, url, Icon }: SocialMedia) => (
          <SocialMediaIcon key={label} href={url} title={label} target="_blank" rel="noreferrer">
            <Icon />
          </SocialMediaIcon>
        ))}
      </SocialMediaWrapper>
    </Container>
  );
};

export default Profile;
