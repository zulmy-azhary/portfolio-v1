import { useState } from "react";
import type { Key } from "react";
import { skills, SkillsType } from "../../helper/data";
import { AnimatePresence, motion } from "framer-motion";
import { Card, Container, Description, Heading, roundedMd, SubHeading } from "../../styles/SharedStyles";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-rows: auto;
  grid-auto-flow: row;
  gap: 1.5rem;
`;

const Content = styled(Card)`
  ${roundedMd}
  flex-direction: column;
  padding: 4rem 2rem;
`;

const Skills = (): JSX.Element => {
  const [show, setShow] = useState<SkillsType>({} as SkillsType);
  const [hover, setHover] = useState(false);

  const itemHandler = (item: SkillsType): void => {
    setShow(item);
  };
  
	return (
		<Container id="skills">
			<SubHeading>Tools & Skills</SubHeading>
			<Heading>Tech Stack</Heading>
			<Description>Here are a few tools and skills that i've been used to build websites.</Description>
			<Wrapper>
				<div className="card rounded-style-lg flex-col py-16 px-8 2xl:px-12 col-span-12 md:col-span-6 row-span-6 md:row-span-5 xl:row-span-4 group" onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)}>
          {Object.keys(show).length > 0 ? (
            <AnimatePresence mode="wait">
              <motion.div key={show.name} animate={{ opacity: 1, y: 0 }} transition={{ ease: 'easeOut', duration: 0.5, type: "linear" }} initial={{ opacity: 0, y: 30 }} exit={{ opacity: 0, y: 30 }} className="w-full flex flex-col gap-y-4 md:gap-y-12">
                <div className="w-full flex-center flex-col-reverse lg:flex-row gap-y-5">
                  <div className="basis-1/2">
                    {show.icon && <show.icon className="duration-300 text-[10rem] mx-auto group-hover:text-teal-400" fill={hover ? show.iconColor : "#637191"} />}
                  </div>
                  <div className="basis-1/2">
                    <p className="font-primary font-semibold duration-300 text-center text-2xl group-hover:text-teal-400">{show.name}</p>
                    <p className="font-primary duration-300 text-center text-base text-blue-200/50 group-hover:text-blue-200">Type: {show.type}</p>
                    <p className="font-primary duration-300 text-center text-base text-blue-200/50 group-hover:text-blue-200">Release Date: {show.releaseDate}</p>
                  </div>
                </div>
                <div className="text-justify duration-300 group-hover:text-teal-400">
                  <p className="text-lg">{show.desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            <p className="duration-300 group-hover:text-teal-400">Click item for more details</p>
          )}
        </div>
        {skills.map((item: SkillsType, idx: Key) => (
          <div onClick={itemHandler.bind(this, item)} key={idx} className="card rounded-style-md col-span-6 md:col-span-3 xl:col-span-2 row-span-1 h-36 hover:text-teal-400 cursor-pointer">
            <p className="font-primary text-center text-lg xl:text-base 2xl:text-xl cursor-pointer">{item.name}</p>
            {/* <item.icon className="text-7xl" /> */}
          </div>
        ))}
			</Wrapper>
		</Container>
	);
};


export default Skills;
