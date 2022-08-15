import { FC, useEffect, useState } from "react";
import { About, Home } from "../section";

const Content: FC = (): JSX.Element => {
  const [scrollState, setScrollState] = useState(false);

	const scrollHandler = () => {
		window.scrollY >= 100 ? setScrollState(true) : setScrollState(false);
	}

	useEffect(() => {
		window.addEventListener("scroll", scrollHandler);
		return () => {
			window.removeEventListener("scroll", scrollHandler);
		}
	})

  return (
    <main className="transition-all duration-500 flex flex-col-reverse lg:flex-row">
      <div className={`duration-500 px-5 md:px-20 lg:px-28 ${scrollState ? "basis-9/12" : "basis-3/5"}`}>
        <Home />
      </div>
      <div className={`duration-500 py-16 lg:py-0 flex justify-center lg:border-l-[1px] border-blue-200/30 group ${scrollState ? "basis-3/12" : "basis-2/5"}`}>
        <About />
      </div>
    </main>
  );
};

export default Content;