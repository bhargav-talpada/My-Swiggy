
import { TiStarFullOutline } from "react-icons/ti";
import { REST_IMG_URL } from "../utils/constants";

const OnlineFoodDeliveryCards = (props) => {

    const {resData} = props;

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla, areaName} = resData?.info;

  return (
    <div>
        <div data-testid="resCard" className=" res-carts mt-8 w-64 h-[415px]  rounded-md transition-all duration-300 hover:scale-95" >
            <img src={REST_IMG_URL+cloudinaryImageId} className=" cart-img rounded-xl w-full h-44" />
            <h3 className="font-bold mt-3 ml-3 text-xl">{name}</h3>
            <h4 className="flex items-center ml-3"><TiStarFullOutline className="text-2xl text-green-600 mr-1" /> {avgRating} • {sla.slaString}  </h4>
            <h4 className="my-1 font-semibold ml-3">{costForTwo}/-</h4> {/* ₹ = ctrl + alt + 4 */}
            <h4 className="my-1 text-gray-500 font-semibold ml-3">{cuisines.join(", ")}</h4>
            <h4 className="my-1 text-gray-500 font-semibold ml-3">{areaName}</h4>
        </div>
    </div>
  )
}

export default OnlineFoodDeliveryCards;