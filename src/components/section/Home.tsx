import { FC } from "react";
import { ReactComponent as Logo } from "../../assets/Zulmy Azhary.svg";

const Home: FC = (): JSX.Element => {
  return (
    <section className="min-h-screen flex justify-center flex-col text-center lg:text-left" id="home" tabIndex={0}>
			<p className="font-primary uppercase font-medium md:text-lg lg:text-xl text-teal-400">
        Introduction
			</p>
			<h2 className="font-primary font-normal text-4xl md:text-5xl lg:text-5xl text-blue-200 my-5 lg:mt-14 relative after:absolute after:inset-x-0 after:-bottom-3 after:bg-slate-400 md:after:w-56 after:h-[2px]">
				Front End Developer
			</h2>
			<p className="font-primary leading-loose font-normal text-slate-500 md:text-xl lg:text-3xl transition duration-300 hover:text-teal-400 mt-6 mb-7 lg:mb-12">
      I design and develop interactive websites specifically to make modern websites more stylish to increase productivity in your company and make users feel satisfied using it.
			</p>
			<Logo className="fill-slate-500" />
		</section>
  );
};

export default Home;