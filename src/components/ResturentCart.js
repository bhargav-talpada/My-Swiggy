import React from "react";
import { FaStar } from "react-icons/fa6";
import { REST_IMG_URL } from "../utils/constants";

const ResturentCart = (props) =>{
    const {resData} = props;

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla, areaName} = resData?.info;
    
    return(
        <div data-testid="resCard" className=" res-carts m-4 p-4 w-60 h-[415px]  rounded-md transition-all duration-300 hover:scale-95" >
            <img src={REST_IMG_URL+cloudinaryImageId} className=" cart-img rounded-lg w-full h-36" />
            <h3 className="font-bold py-4 text-2xl">{name}</h3>
            <h4 className="flex items-center"><FaStar className="text-green-600 mr-1" /> {avgRating} - {sla.deliveryTime} Minutes </h4>
            <h4 className="my-1">{costForTwo}/-</h4> {/* ₹ = ctrl + alt + 4 */}
            <h4 className="my-1 text-gray-500">{cuisines.join(", ")}</h4>
            <h4 className="my-1 text-gray-500">{areaName}</h4>
        </div>
    )
}

// Higher Order Components

export const promotedLabel = (ResturentCart) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-gray-700 text-white p-2 m-2 rounded-md">Promoted</label>
                <ResturentCart {...props} />
            </div>
        )
    }
}

export default ResturentCart;