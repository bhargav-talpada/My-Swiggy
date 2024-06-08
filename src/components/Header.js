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

export const Header = () => {

    const [btnName, setBtnName] = useState('Sign In')
    
    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items)

    return(
        <div className="flex justify-evenly items-center bg-slate-100">
            <div className="">
                <a href="/"><img className="logo w-10" src={LOGO_URL} /></a>
            </div>
            <div className="flex gap-3">
                <h1 className="text-gray-700 border-b-2 border-gray-700 hover:text-orange-600 hover:border-orange-600  cursor-pointer font-bold text-xl">Other</h1>
                <h1 className="text-gray-500 font-semibold text-xl cursor-pointer">Rajkot, Gujarat</h1>
            </div>
            <div className="nav-items">
                <ul className="flex justify-center items-center p-4 m-4">
                    <li className="px-4"> {onlineStatus ? "🟢" : "🔴"} </li>
                    <li className="px-6 text-xl cursor-pointer flex items-center gap-2 hover:text-orange-600"><RiHome6Line /><Link to="/">Home</Link></li>
                    <li className="px-6 text-xl cursor-pointer flex items-center gap-2 hover:text-orange-600"><CgToolbox /><Link  to="/about">Swiggy Corporate</Link></li>
                    <li className="px-6 text-xl cursor-pointer flex items-center gap-2 hover:text-orange-600"><RiDiscountPercentLine /><Link>Offers</Link></li>
                    <li className="px-6 text-xl cursor-pointer flex items-center gap-2 hover:text-orange-600"><IoHelpBuoyOutline /><Link to="/contact">Help<sup className="text-orange-600 ml-1">NEW</sup></Link></li>
                    <button onClick={()=>{btnName === 'Sign In' ? setBtnName("Sign Out") : setBtnName("Sign In")}} className="px-6 text-xl hover:text-orange-600 cursor-pointer flex gap-2 items-center"><CiUser />{btnName}</button>
                    <li className="px-6 text-xl cursor-pointer flex items-center gap-2 hover:text-orange-600"><FaOpencart className="text-2xl" /><Link to="/cart">Cart ({cartItems.length})</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;