const Biography = () => {
  return (
    <section className="h-fit max-h-max text-center lg:text-left py-12 lg:py-16" id="about">
      <h1 className="font-primary uppercase font-medium md:text-lg lg:text-xl text-teal-400">About Me</h1>
      <h2 className="font-primary font-normal text-3xl md:text-5xl lg:text-5xl text-blue-200 my-5 lg:mt-5 relative after:absolute after:inset-x-0 after:-bottom-3 after:bg-teal-400 lg:after:w-32 after:h-[2px]">
				Biography
      </h2>
      <p className="header-3 mt-6">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia voluptatum obcaecati sed, corrupti magnam impedit eius ipsum, quisquam expedita, rem consectetur? Deleniti doloribus sed laboriosam vero odio iusto facere at omnis culpa nisi nobis in pariatur ad, a facilis consequuntur dolor voluptates! Rem hic aut nihil amet dignissimos ducimus doloribus!
      </p>
      <div className="flex md:gap-x-24 lg:gap-x-52 mt-14 justify-between text-start md:text-center lg:text-start md:justify-center lg:justify-start">
        <div className="font-secondary font-medium lg:text-xl text-slate-500 flex flex-col gap-y-4 uppercase">
          <p>Name</p>
          <p>Birthday</p>
          <p>Age</p>
          <p>Address</p>
          <p>Phone</p>
          <p>Email</p>
        </div>
        <div className="font-secondary font-medium lg:text-xl text-slate-500 flex flex-col gap-y-4">
          <p>Zulmy Azhary</p>
          <p>April, 14th 1999</p>
          <p>23 Years</p>
          <p>Makassar, Indonesia</p>
          <p>(+62) 853 4361 2564</p>
          <p>zulmyazhary32@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default Biography;