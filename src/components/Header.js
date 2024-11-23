import React, { useState } from "react"
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { FaOpencart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CgToolbox } from "react-icons/cg";
import { RiHome6Line } from "react-icons/ri";
import { HiBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

export const Header = () => {

    const [btnName, setBtnName] = useState('Sign In');
    const [isHeader, setIsHeader] = useState(false);

    const handleHeader = () => {
        setIsHeader(!isHeader);
    }
    
    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items)

    return(
        <div className="">

            <div className="w-full hidden fixed md:flex justify-evenly bg-white items-center shadow-lg px-12 z-50">
                <div className="">
                    <a href="/"><img className="w-10" src={LOGO_URL} alt="swiggy" /></a>
                </div>
                <div className="flex gap-3">
                    <h1 className="text-gray-700 border-b-2 border-gray-700 hover:text-orange-600 hover:border-orange-600  cursor-pointer font-bold text-xl">Other</h1>
                    <h1 className="text-gray-500 font-semibold text-xl cursor-pointer">Rajkot, Gujarat</h1>
                </div>
                <div className="nav-items pr-0">
                    <ul className="flex justify-center items-center p-4 m-4">
                        <li className="px-4"> {onlineStatus ? "🟢" : "🔴"} </li>
                        <li className="px-6 text-xl cursor-pointer flex items-center gap-2 hover:text-orange-600"><RiHome6Line /><Link to="/">Home</Link></li>
                        <li className="px-6 text-xl cursor-pointer flex items-center gap-2 hover:text-orange-600"><CgToolbox /><Link  to="/">Swiggy Corporate</Link></li>
                        <button onClick={()=>{btnName === 'Sign In' ? setBtnName("Sign Out") : setBtnName("Sign In")}} className="px-6 text-xl hover:text-orange-600 cursor-pointer flex gap-2 items-center"><CiUser />{btnName}</button>
                        <li className="px-6 text-xl cursor-pointer flex items-center gap-2 hover:text-orange-600"><FaOpencart className="text-2xl" /><Link to="/cart">Cart ({cartItems.length})</Link></li>
                    </ul>
                </div>
            </div>
            {/* Mobile View */}
            <div className="fixed w-full bg-white flex md:hidden justify-evenly items-center shadow-md m-0 p-2">
                <div className="">
                    <a href="/"><img className="w-7" src={LOGO_URL} alt="" /></a>
                </div>
                <div className="flex gap-3">
                    <h1 className="text-gray-700 border-b-2 border-gray-700 hover:text-orange-600 hover:border-orange-600  cursor-pointer font-bold text-base">Other</h1>
                    <h1 className="text-gray-500 font-semibold text-base cursor-pointer">Rajkot, Gujarat</h1>
                </div>
                        <li className="px-4 list-none"> {onlineStatus ? "🟢" : "🔴"} </li>
                <div className="nav-items">
                        {isHeader ? <RxCross1 className="block md:hidden text-2xl cursor-pointer" onClick={handleHeader} /> : <HiBars3 className="block md:hidden text-2xl cursor-pointer" onClick={handleHeader} />}
                    { isHeader &&    
                    <ul className="absolute left-0 w-full gap-2 flex flex-col justify-center items-center p-4 m-4 bg-white transition-all mt-5">
                        <li className="px-6 text-xl cursor-pointer flex items-center gap-2 hover:text-orange-600"><RiHome6Line /><Link to="/">Home</Link></li>
                        <li className="px-6 text-xl cursor-pointer flex items-center gap-2 hover:text-orange-600"><CgToolbox /><Link  to="/">Swiggy Corporate</Link></li>
                        <li className="px-6 text-xl cursor-pointer flex items-center gap-2 hover:text-orange-600"><RiDiscountPercentLine /><Link to="/">Offers</Link></li>
                        <li className="px-6 text-xl cursor-pointer flex items-center gap-2 hover:text-orange-600"><IoHelpBuoyOutline /><Link to="/">Help<sup className="text-orange-600 ml-1">NEW</sup></Link></li>
                        <button onClick={()=>{btnName === 'Sign In' ? setBtnName("Sign Out") : setBtnName("Sign In")}} className="px-6 text-xl hover:text-orange-600 cursor-pointer flex gap-2 items-center"><CiUser />{btnName}</button>
                        <li className="px-6 text-xl cursor-pointer flex items-center gap-2 hover:text-orange-600"><FaOpencart className="text-2xl" /><Link to="/cart">Cart ({cartItems.length})</Link></li>
                    </ul>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;