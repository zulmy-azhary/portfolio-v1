import { useContext } from "react";
import { ScrollContext } from "../../context";
import { Profile, Home } from "../section";
import { Biography, Projects, Skills, Footer } from "./";

const Content = (): JSX.Element => {
  const { scrollState } = useContext(ScrollContext);

  return (
    <main className="transition-all duration-500 flex flex-col-reverse lg:flex-row">
      <div className={`duration-500 ${scrollState ? "lg:basis-9/12" : "lg:basis-8/12"}`}>
        <div className="px-5 md:px-20 lg:px-20 xl:px-28">
          <Home />
          <Biography />
          <Projects />
          <Skills />
        </div>
        <Footer />
      </div>
      <div className={`group relative flex-center duration-500 py-16 lg:py-0 w-full lg:border-l-[1px] border-blue-200/30 hover:border-teal-400 lg:basis-4/12 ${scrollState ? "xl:basis-3/12" : "xl:basis-4/12"}`}>
        <Profile />
      </div>
    </main>
  );
};

export default Content;