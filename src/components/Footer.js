import { SiSwiggy } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-[550px] bg-[#02060C]">
        <div>
            <h1 className="flex items-center text-[#ffffffeb] gap-1 text-3xl"><SiSwiggy className="text-[#ffffffeb] text-4xl" /> Swiggy </h1>
            <p> <FaRegCopyright /> 2024 Bhargav Talpada </p>
        </div>
    </div>
  )
}

export default Footer;