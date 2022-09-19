import logo from "../../assets/profile_pic.png";
import { useContext } from "react";
import { ScrollContext } from "../../context";
import { socialMedia } from "../../helper/data";
import type { ScrollCtx, SocialMediaTypes } from "../../types";
import styled from "styled-components";
import { device } from "../../helper/devices";

const Container = styled.section<Partial<ScrollCtx>>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition-duration: 500ms;
  top: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;

  @media ${device.laptop} {
    position: fixed;
    padding: 0 3rem;
    width: 33.333333%;
  }

  @media ${device.laptopL} {
    padding: 0 4%;

    width: ${props => props.scrollState ? 25 : 33.333333}%;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1.75rem;
  padding: 6rem 2.5rem;

  &:before, &:after {
    content: "";
    position: absolute;
    border: 1px solid rgb(var(--blue) / 0.5);
    transition-duration: 300ms;
  }

  &:before {
    top: 1.75rem;
    bottom: 1.75rem;
    left: -1.75rem;
    right: -1.75rem;
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

const Profile = (): JSX.Element => {
  const { scrollState } = useContext(ScrollContext);

  return (
    <Container scrollState={scrollState}>
			<Wrapper>
        <img
          className="grayscale group-hover:grayscale-0 w-40 md:w-60 lg:w-full xl:w-72 mx-auto cursor-pointer select-none duration-300 group-hover:rounded-tl-3xl group-hover:rounded-br-3xl rounded-none"
          src={logo} alt="Profile"
        />
				<div className="text-center mt-3">
					<p className="font-secondary font-semibold xl:text-lg text-blue-200/50 group-hover:text-teal-400 duration-300">
						Hi there! I'am
					</p>
					<h2 className="font-secondary font-medium xl:text-2xl text-blue-200/50 group-hover:text-blue-200 duration-300">
						Zulmy Azhary
					</h2>
        </div>
			</Wrapper>
      <div className="flex-between gap-4 xl:gap-6 mt-6 lg:mt-12 text-blue-200">
        {socialMedia.map(({ label, url, Icon }: SocialMediaTypes) => (
          <a key={label} href={url} aria-label={label} target="_blank" rel="noreferrer">
            <Icon className="social-media-icon" />
          </a>
        ))}
      </div>
		</Container>
  );
};


export default Profile;