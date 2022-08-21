const Home = (): JSX.Element => {
  return (
    <section className="min-h-screen flex justify-center flex-col text-center lg:text-left" id="home" tabIndex={0}>
			<p className="font-primary uppercase font-medium md:text-lg lg:text-xl text-teal-400">Introduction</p>
			<h2 className="font-primary font-normal text-3xl md:text-5xl lg:text-5xl text-blue-200 my-5 lg:mt-5 relative after:absolute after:inset-x-0 after:-bottom-3 after:bg-teal-400 lg:after:w-32 after:h-[2px]">
				Front End Developer
			</h2>
			<p className="font-secondary leading-loose font-medium text-slate-500 md:text-xl lg:text-3xl transition duration-300 hover:text-teal-400 mt-6 mb-7 lg:mb-12">
        Design, building, and maintaining interactive and responsive websites especially for modern websites.
      </p>
      <p className="text-blue-200 font-['Cookie'] text-5xl">Zulmy Azhary</p>
		</section>
  );
};

export default Home;