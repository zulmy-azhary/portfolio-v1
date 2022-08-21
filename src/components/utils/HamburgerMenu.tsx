import { useContext } from "react";
import { ToggleContext } from "../../context";

type Props = {
  onClick: () => void,
}

const HamburgerMenu = ({ onClick }: Props) => {
  const { isOpen } = useContext(ToggleContext);

  return (
    <div onClick={onClick} className="w-6 h-6 flex flex-col gap-1 justify-evenly relative z-50 cursor-pointer">
      <div style={{ 
        transform: isOpen ? "rotate(-45deg) translateX(-1px)" : "none"
       }} className="h-[2px] transition-all duration-300 bg-blue-200 origin-top-right" />
      <div style={{ 
        transform: isOpen ? "translateX(20px)" : "none",
        opacity: !isOpen ? 1 : 0,
       }} className="h-[2px] transition-all duration-300 bg-blue-200" />
      <div style={{ 
        transform: isOpen ? "rotate(45deg) translateX(1px)" : "none"
       }} className="h-[2px] transition-all duration-300 bg-blue-200 origin-top-right" />
    </div>
  );
};

export default HamburgerMenu;