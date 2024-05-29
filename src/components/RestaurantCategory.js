import { IoIosArrowDown } from "react-icons/io";
import ItemList from "./ItemList";
import { useState } from "react";


const RestaurantCategory = ({data}) => {

    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
    }

    return(
        <div>
            {/* Header */}
            <div className=" items-center bg-gray-50 my-4 mx-auto shadow-lg shadow-gray-400 rounded-xl p-4 cursor-pointer">
                <div className="flex justify-between items-center" onClick={handleClick}>
                    <span className="text-xl font-bold">{data.title} ({data.itemCards.length})</span>
                    <span className=""><IoIosArrowDown /> </span>
                </div>
                {/* Accordian Body */}
                { showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    ) 
}

export default RestaurantCategory;
