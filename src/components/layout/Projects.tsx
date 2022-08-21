import { useEffect, useState } from "react";
import type { Key } from "react";

interface ProjectsType {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
}

const Projects = (): JSX.Element => {
  const [datas, setDatas] = useState([] as Array<ProjectsType>);

  useEffect(() => {
    (async () => {
      const res: Response = await fetch("https://api.github.com/users/zulmy-azhary/repos");
      const data: Array<ProjectsType> = await res.json();
      console.log(data);
      
      return setDatas(data);
      
    })()
  }, []);

  return (
    <section className="h-fit max-h-max text-center lg:text-left py-12 lg:py-16" id="projects">
      <h1 className="font-primary uppercase font-medium md:text-lg lg:text-xl text-teal-400">Portfolio</h1>
      <h2 className="font-primary font-normal text-3xl md:text-5xl lg:text-5xl text-blue-200 my-5 lg:mt-5 relative after:absolute after:inset-x-0 after:-bottom-3 after:bg-teal-400 lg:after:w-32 after:h-[2px]">
				Featured Projects
			</h2>
      <h3 className="header-3 mt-6">Here's something that I've built</h3>
      <div className="relative grid grid-cols-12 grid-flow-row gap-x-6 gap-y-12 px-4">
        {datas.map((item: ProjectsType, idx: Key) => (
          <div key={idx} className="col-span-12 md:col-span-6 text-center lg:col-span-4 group transition-all duration-300 rounded-md h-60 w-full lg:w-80 max-w-full hover:-translate-y-2 border-[1px] border-blue-200/50 hover:border-teal-400 hover:rounded-none hover:rounded-tl-2xl hover:rounded-br-2xl flex flex-col justify-center gap-y-3 px-4">
            {/* <img src={item.url} alt={item.title} className="rounded-t-md h-44 w-full lg:w-80 max-w-full" /> */}
            <a className="transition-all duration-300 font-primary font-medium text-xl text-blue-200/50 group-hover:text-sky-400 cursor-pointer" href={item.html_url} aria-label={item.name} target="_blank" rel="noreferrer">{item.name}</a>
            <p className="transition-all duration-300 font-primary font-light text-sm text-blue-200/50 group-hover:text-blue-200">{item.description}</p>
            <p className="mt-7 transition-all duration-300 font-primary text-sm text-blue-200/50 group-hover:text-blue-200">{item.language}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;