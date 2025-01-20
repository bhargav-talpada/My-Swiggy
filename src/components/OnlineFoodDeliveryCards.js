import { MdStars } from "react-icons/md";
import { REST_IMG_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const OnlineFoodDeliveryCards = (props) => {

    const {resData} = props;

    const [truncatedResTitle, setTruncatedResTitle] = useState('');
    const [truncatedResCuisines, setTruncatedResCuisines] = useState('');

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla, areaName} = resData?.info;

    useEffect(() => {
        setTruncatedResTitle(truncate(name, 25));
        setTruncatedResCuisines(truncate(cuisines.join(", "), 30));
      }, [name,cuisines]);

    const truncate = (input, length) => {
        if (input.length > length) {
          return input.substring(0, length) + '...';
        }
        return input;
      };

  return (
    <div>
        <div data-testid="resCard" className=" res-carts mt-8 w-64 h-auto rounded-md hover:scale-105 duration-200" >
            <img src={REST_IMG_URL+cloudinaryImageId} className=" cart-img rounded-xl w-full h-44" alt="food" />
            <h3 className="font-bold mt-3 ml-4 text-xl">{ truncatedResTitle}</h3>
            <h4 className="flex items-center ml-4 text-lg"><MdStars className="text-2xl text-green-600 mr-1" /> {avgRating} • {sla.slaString}  </h4>
            <h4 className="my-1 font-semibold ml-4 text-lg">{costForTwo}/-</h4> {/* ₹ = ctrl + alt + 4 */}
            <h4 className="my-1 text-gray-500 font-semibold ml-4 text-lg w-full">{truncatedResCuisines}</h4>
            <h4 className="my-1 text-gray-500 font-semibold ml-4 text-lg w-full flex justify-between">{areaName} <span className="mr-5 font-semibold">{sla.lastMileTravelString}</span></h4>
        </div>
    </div>
  )
}

export default OnlineFoodDeliveryCards;