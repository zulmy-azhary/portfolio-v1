import { FaHeart } from "react-icons/fa";

const Footer = (): JSX.Element => {
  return (
    <footer className="transition-all duration-500 relative border-t-[1px] border-blue-200/50 hover:border-teal-400 text-center lg:text-start px-0 lg:px-20 xl:px-28 py-6 md:py-8 group">
      <p className="text-blue-200/50 group-hover:text-teal-400 duration-500">Copyright &copy; 2022. All rights reserved.</p>
      <p className="text-blue-200/50 mt-2 group-hover:text-teal-400 duration-500">Created with <FaHeart className="inline-block text-red-600" /> by Zulmy Azhary</p>
    </footer>
  );
};

export default Footer;