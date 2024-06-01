import React, { useEffect, useState } from "react";
import { MdStars } from "react-icons/md";
import { REST_IMG_URL } from "../utils/constants";

const ResturentCart = (props) =>{

    const {resData} = props;

    const [truncatedResTitle, setTruncatedResTitle] = useState('');

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla, areaName} = resData?.info;


    useEffect(() => {
        setTruncatedResTitle(truncate(name, 25)); // Adjust the length as needed
      }, [name]);

    const truncate = (input, length) => {
        if (input.length > length) {
          return input.substring(0, length) + '...';
        }
        return input;
      };
    
    return(
        <div data-testid="resCard" className=" res-carts mx-4 mt-8 w-64 h-[415px]  rounded-md transition-all duration-300 hover:scale-95" >
            <img src={REST_IMG_URL+cloudinaryImageId} className=" cart-img rounded-xl w-full h-44" />
            <h3 className="font-bold mt-3 ml-3 text-xl">{truncatedResTitle}</h3>
            <h4 className="flex items-center ml-3"><MdStars className="text-2xl text-green-600 mr-1" /> {avgRating} • {sla.slaString}  </h4>
            <h4 className="my-1 font-semibold ml-3">{costForTwo}/-</h4> {/* ₹ = ctrl + alt + 4 */}
            <h4 className="my-1 text-gray-500 font-semibold ml-3">{cuisines.join(", ")}</h4>
            <h4 className="my-1 text-gray-500 font-semibold ml-3">{areaName}</h4>
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