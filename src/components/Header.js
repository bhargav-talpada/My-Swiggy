import React, { useContext, useState } from "react"
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { FaOpencart } from "react-icons/fa";
import { useSelector } from "react-redux";

export const Header = () => {

    const [btnName, setBtnName] = useState('LogIn')
    
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items)
    // console.log(cartItems);

    return(
        <div className="header flex justify-between items-center bg-pink-100 shadow-xl m-2 sm:bg-yellow-100">
            <div className="">
                <img className="logo w-36" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex justify-center items-center p-4 m-4">
                    <li className="px-4"> {onlineStatus ? "🟢" : "🔴"} </li>
                    <li className="px-4 text-xl cursor-pointer"><Link to="/">Home</Link></li>
                    <li className="px-4 text-xl cursor-pointer"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 text-xl cursor-pointer"><Link to="/about">About</Link></li>
                    <li className="px-4 text-xl cursor-pointer"><Link to="/contact">Contact</Link></li>
                    <li className="px-4 text-xl cursor-pointer flex gap-2"><FaOpencart className="text-2xl" /><Link to="/cart">Cart ({cartItems.length})</Link></li>
                    <button onClick={()=>{btnName === 'LogIn' ? setBtnName("LogOut") : setBtnName("LogIn")}} className="btnlogin bg-green-500 px-6 py-2 rounded-md text-xl cursor-pointer">{btnName}</button>
                    <li className="px-4 font-bold text-2xl text-blue-600">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;