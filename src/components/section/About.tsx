import { FC } from "react";
import logo from "../../assets/profile_pic.png";

const About: FC = (): JSX.Element => {
  return (
    <section className="lg:fixed inset-y-0 flex-center lg:px-16 xl:px-24">
			<div className="flex-center flex-col gap-y-7 duration-300 before:duration-300 cursor-pointer px-10 py-24 border-[1px] border-blue-200/50 group-hover:border-teal-400 relative before:absolute before:border-[1px] before:border-blue-200/50 before:group-hover:border-teal-400 before:inset-y-6 before:-inset-x-7">
			<img
				className="grayscale blur-sm group-hover:grayscale-0 group-hover:blur-none w-40 md:w-60 lg:w-72 mx-auto cursor-pointer select-none duration-300"
				src={logo} alt="Profile"
				/>
				<div className="text-center">
					<p className="font-secondary uppercase font-bold text-lg text-blue-200/50 group-hover:text-teal-400 duration-300">
						Hi there! I'am
					</p>
					<h2 className="font-primary font-semibold text-2xl text-blue-200/50 group-hover:text-blue-200 duration-300">
						Zulmy Azhary
					</h2>
				</div>
			</div>
		</section>
  );
};

export default About;