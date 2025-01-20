import { MdStars } from "react-icons/md";
import { REST_IMG_URL } from "../utils/constants";
import { FaStopCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearCart } from "../redux/cartSlice";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ItemList = ({items}) => {

    const [itemsIDs, setItemsIDs] = useState([])

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item))                                                                                                                                                                                                                                                                            
    }

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item))                                                                                                                                                                                                                                                                            
    }

    const location = useLocation();
    const isCart = location.pathname === '/cart';

    // console.log("items", cartItems); 

    // useEffect(() => {
    //     console.log(cartItems.length);
    //     setItemsIDs(cartItems.map((itemsid) => itemsid.card.info.id));
    //     console.log("items id",itemsIDs);
    // }, []);

    return(
        <div className="">
            {items.map((item) => 
                <div data-testid="foodItems" key={item.card.info.id} className="flex flex-col sm:flex-row justify-between items-center p-2 m-1 border-b-2 border-gray-300" >
                    <div className="flex flex-col text-left w-full sm:w-[450px]">
                        <div className="flex flex-col py-2">
                            <span className="my-2">{item.card.info.itemAttribute.vegClassifier == "VEG" ? <FaStopCircle className="text-green-500 text-lg sm:text-xl" /> : <FaStopCircle className="text-red-500 text-lg sm:text-xl" />}</span>
                            <span className="text-base sm:text-xl">{item.card.info.name}</span>
                            <span className="text-base sm:text-xl">₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                            <span className="flex items-center font-semibold"><MdStars className="text-green-400 mr-1 text-xl sm:text-2xl" />{item.card.info.ratings.aggregatedRating.rating} ({item.card.info.ratings.aggregatedRating.ratingCountV2})</span>
                        </div>
                        {item.card.info.description && <p className=" text-gray-500 mb-10 font-semibold">{item.card.info.description}</p>}
                    </div>
                    <div className=" mb-10">
                        <div className="absolute">
                            <button onClick={() => handleAddItem(item)} className={item.card.info.imageId ? "mx-7 my-32 px-10 rounded-md p-2 text-green-500 text-xl bg-white shadow-2xl duration-500 hover:bg-gray-200 m-auto" : "mx-[-130px] my-30 px-10 rounded-md p-2 text-green-500 text-xl bg-white shadow-2xl duration-500 hover:bg-gray-200 m-auto"}>Add</button>
                        </div>
                        {item.card.info.imageId && <img src={REST_IMG_URL + item.card.info.imageId} className="w-40 h-36 rounded-xl" alt="Customizable" />}
                    </div>
                    { isCart && cartItems.length != 0 && <MdDelete className="mt-52 text-xl text-red-600 cursor-pointer" onClick={() => handleRemoveItem(item)} />}
                </div>
            )}
            
        </div>
    )
}

export default ItemList;