import Shimmer from '../components/ShimmerUI'
import useResturentMenu from '../utils/useResturentMenu';
import { useParams } from 'react-router-dom'
import { MdStars } from "react-icons/md";
import RestaurantCategory from './RestaurantCategory';
const ResturentMenu = () => {

    const {resId} = useParams();

    const resInfo = useResturentMenu(resId);

    if(resInfo === null) return <Shimmer />

    const { name, costForTwoMessage, cuisines, areaName, avgRating } = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c => c.card?.["card"]?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    
    return(
        <div className="menu text-center">
            <h1 className='font-bold text-4xl my-6'>{name}</h1>
            <h3 className='text-2xl m-2 flex items-center justify-center'> <MdStars className='text-green-600 mr-1' /> {avgRating} • {costForTwoMessage}</h3>
            <p className='text-lg m-2 text-red-500'>{cuisines.join(", ")}</p> 
            <p className='text-lg m-2 text-gray-400'>{areaName}</p>
            {/* Categories accordians */}
            {
                categories.map((category) => 
                    <RestaurantCategory 
                        key={category?.card?.card?.title} 
                        data={category?.card?.card} 
                    />
                )
            }
        </div>
    )
}

export default ResturentMenu;