import { MdStar } from "react-icons/md";
import { REST_IMG_URL } from "../utils/constants";
import { FaStopCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item))                                                                                                                                                                                                                                                                            
    }

    return(
        <div className="">
            {items.map((item) => 
                <div data-testid="foodItems" key={item.card.info.id} className="flex justify-between items-center p-2 m-1 border-b-2 border-gray-300" >
                    <div className="flex flex-col text-left w-[450px]">
                        <div className="flex flex-col py-2">
                            <span className="my-2">{item.card.info.itemAttribute.vegClassifier == "VEG" ? <FaStopCircle className="text-green-500 text-xl" /> : <FaStopCircle className="text-red-500 text-xl" />}</span>
                            <span className="text-xl">{item.card.info.name}</span>
                            <span className="text-xl">₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                            <span className="flex"><MdStar className="text-green-400 mr-1" />{item.card.info.ratings.aggregatedRating.rating} ({item.card.info.ratings.aggregatedRating.ratingCountV2})</span>
                        </div>
                        <p className=" text-gray-500 mb-10">{item.card.info.description}</p>
                    </div>
                    <div className=" mb-10">
                        <div className="absolute">
                            <button onClick={() => handleAddItem(item)} className="mx-7 my-32 px-10 rounded-md p-2 text-green-500 text-xl bg-white shadow-2xl duration-500 hover:bg-gray-200 m-auto">Add</button>
                        </div>
                        <img src={REST_IMG_URL + item.card.info.imageId} className="w-40 h-36 rounded-xl" alt="Customizable" />
                    </div>
                </div>
                
            )}
            
        </div>
    )
}

export default ItemList;