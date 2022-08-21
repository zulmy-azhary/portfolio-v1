import { useContext, useEffect, useState } from "react";
import { ToggleContext } from "../../context";
import { Profile, Home } from "../section";
import { Biography, Projects, Skills, Footer } from "./";

const Content = (): JSX.Element => {
  const [scrollState, setScrollState] = useState(false);
  const { setOpen } = useContext(ToggleContext)

  const scrollHandler = () => {
    window.scrollY && setOpen(false)
		window.scrollY >= 200 ? setScrollState(true) : setScrollState(false);
	}

	useEffect(() => {
		window.addEventListener("scroll", scrollHandler);
		return () => {
			window.removeEventListener("scroll", scrollHandler);
		}
	});

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
      <div className={`duration-500 py-16 lg:py-0 relative w-full flex justify-center lg:border-l-[1px] border-blue-200/30 group hover:border-teal-400 ${scrollState ? "lg:basis-3/12" : "lg:basis-4/12"}`}>
        <Profile />
      </div>
    </main>
  );
};

export default Content;