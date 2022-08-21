import { useState } from "react";
import type { Key } from "react";
import { skills, SkillsType } from "../../utils/data";

const Skills = (): JSX.Element => {
  const [show, setShow] = useState<SkillsType>({} as SkillsType);

  const itemHandler = (item: SkillsType): void => {
    setShow(item);
  };
  
	return (
		<section className="h-fit max-h-max text-center lg:text-left py-12 lg:py-16" id="skills">
			<h1 className="font-primary uppercase font-medium md:text-lg lg:text-xl text-teal-400">
				Tools & Skills
			</h1>
			<h2 className="font-primary font-normal text-3xl md:text-5xl lg:text-5xl text-blue-200 my-5 lg:mt-5 relative after:absolute after:inset-x-0 after:-bottom-3 after:bg-teal-400 lg:after:w-32 after:h-[2px]">
				Tech Stack
			</h2>
			<p className="header-3 mt-6">
				Here are a few tools and skills that i've been used to build websites.
			</p>
			<div className="grid grid-cols-12 auto-rows-auto grid-flow-row gap-6">
				<div className="flex flex-col justify-center items-center gap-y-2 md:gap-y-12 py-16 px-8 col-span-12 md:col-span-6 row-span-6 md:row-span-5 xl:row-span-4 rounded-md border-[1px] border-blue-200/50 hover:border-blue-200 transition-all duration-300 text-blue-200/50 hover:text-blue-200">
          {Object.keys(show).length > 0 ? (
            <>
              <div className="w-full flex justify-evenly items-center flex-col-reverse lg:flex-row gap-y-5">
                <div className="basis-1/2">
                  {show.icon && <show.icon className="text-[10rem] mx-auto" />}
                </div>
                <div className="basis-1/2">
                  <p className="font-primary text-center text-xl">{show.name}</p>
                  <p className="font-primary text-center text-base text-blue-200/50">Type: {show.type}</p>
                  <p className="font-primary text-center text-base text-blue-200/50">Release Date: {show.releaseDate}</p>
                </div>
              </div>
              <div className="text-justify">
                <p>{show.desc}</p>
              </div>
            </>
          ) : (
              <p>Click item for more details</p>
          )}
        </div>
        {skills.map((item: SkillsType, idx: Key) => (
          <div onClick={itemHandler.bind(this, item)} key={idx} className="col-span-6 md:col-span-3 xl:col-span-2 row-span-1 h-36 rounded-md border-[1px] border-blue-200/50 hover:border-teal-400 hover:-translate-y-2 transition-all duration-300  text-blue-200/50 hover:text-teal-400 flex justify-center items-center hover:rounded-none hover:rounded-tl-2xl hover:rounded-br-2xl cursor-pointer">
            <p className="font-primary text-center text-xl cursor-pointer">{item.name}</p>
            {/* <item.icon className="text-7xl" /> */}
          </div>
        ))}
			</div>
		</section>
	);
};


export default Skills;
