import logo from "../../assets/profile_pic.png";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { SiWebcomponentsdotorg } from "react-icons/si";
import { Key, useContext } from "react";
import { ScrollContext } from "../../context";

interface socialMediaType {
  label: string;
  icon: any;
  url: string;
};

const Profile = (): JSX.Element => {
  const { scrollState } = useContext(ScrollContext);

  return (
    <section className={`duration-500 lg:fixed inset-y-0 right-0 flex-center flex-col lg:px-[3%] xl:px-[4%] mx-auto ${scrollState ? "lg:w-3/12" : "lg:w-4/12"}`}>
			<div className="flex-center flex-col gap-y-7 after:duration-300 before:duration-300 px-10 py-24 relative after:absolute before:absolute after:border-[1px] before:border-[1px] after:border-blue-200/50 before:border-blue-200/50 after:group-hover:border-teal-400 before:group-hover:border-teal-400 after:inset-0 before:inset-y-7 before:-inset-x-7">
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
      <div className="app__contact-social-media-link mt-6 lg:mt-12 text-blue-200 flex justify-between gap-4 xl:gap-6 px-12">
        {socialMedia.map((item: socialMediaType, idx: Key) => (
          <a key={idx} href={item.url} aria-label={item.label} target="_blank" rel="noreferrer">
            <item.icon className="social-media-icon" />
          </a>
        ))}
      </div>
		</section>
  );
};

const socialMedia: Array<socialMediaType> = [
  {
    label: "Github",
    icon: AiFillGithub,
    url: "https://github.com/zulmy-azhary"
  },
  {
    label: "Facebook",
    icon: AiFillFacebook,
    url: "https://www.facebook.com/zulmyazhary"
  },
  {
    label: "Instagram",
    icon: AiOutlineInstagram,
    url: "https://www.instagram.com/zulmyazhary_"
  },
  {
    label: "LinkedIn",
    icon: AiFillLinkedin,
    url: "https://www.linkedin.com/in/zulmy-azhary-7a0b04159"
  },
  {
    label: "Showwcase",
    icon: SiWebcomponentsdotorg,
    url: "https://zulmyazhary.showwcase.com"
  },
]

export default Profile;