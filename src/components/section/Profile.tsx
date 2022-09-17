import logo from "../../assets/profile_pic.png";
import React, { useContext } from "react";
import { ScrollContext } from "../../context";
import { socialMedia } from "../../helper/data";
import type { SocialMediaType } from "../../types";

const Profile: React.FC = (): JSX.Element => {
  const { scrollState } = useContext(ScrollContext);

  return (
    <section className={`flex-center flex-col duration-500 lg:fixed inset-y-0 right-0 lg:px-12 xl:px-[4%] mx-auto lg:w-4/12 ${scrollState ? "xl:w-3/12" : "xl:w-4/12"}`}>
			<div className="flex-center flex-col gap-y-7 after:duration-300 before:duration-300 px-10 lg:px-7 xl:px-10 py-24 relative after:absolute before:absolute after:border-[1px] before:border-[1px] after:border-blue-200/50 before:border-blue-200/50 after:group-hover:border-teal-400 before:group-hover:border-teal-400 after:inset-0 before:inset-y-7 before:-inset-x-7">
        <img
          className="grayscale group-hover:grayscale-0 w-40 md:w-60 lg:w-full xl:w-72 mx-auto cursor-pointer select-none duration-300 group-hover:rounded-tl-3xl group-hover:rounded-br-3xl rounded-none"
          src={logo} alt="Profile"
        />
				<div className="text-center mt-3">
					<p className="font-secondary uppercase font-bold xl:text-lg text-blue-200/50 group-hover:text-teal-400 duration-300">
						Hi there! I'am
					</p>
					<h2 className="font-primary font-semibold xl:text-2xl text-blue-200/50 group-hover:text-blue-200 duration-300">
						Zulmy Azhary
					</h2>
        </div>
			</div>
      <div className="flex-between gap-4 xl:gap-6 mt-6 lg:mt-12 text-blue-200">
        {socialMedia.map((item: SocialMediaType) => (
          <a key={item.label} href={item.url} aria-label={item.label} target="_blank" rel="noreferrer">
            <item.icon className="social-media-icon" />
          </a>
        ))}
      </div>
		</section>
  );
};


export default Profile;