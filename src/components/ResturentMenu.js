import Shimmer from '../components/ShimmerUI'
import useResturentMenu from '../hooks/useResturentMenu';
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
        <div className="menu w-full flex justify-center">
            <div className='w-6/12'>
                <h1 className='font-bold text-4xl my-6'>{name}</h1>
                <div className='w12/12 h-44 p-4 bg-gradient-to-t from-gray-300 rounded-[30px]'>
                    <div className='w-12/12 h-36 py-2 px-4 border-2 rounded-2xl bg-white'>
                        <h3 className='text-2xl m-2 flex items-center'> <MdStars className='text-green-600 mr-1' /> {avgRating} • {costForTwoMessage}</h3>
                        <p className='text-lg m-2 text-red-500'>{cuisines.join(", ")}</p> 
                        <p className='text-lg m-2 text-gray-400'>{areaName}</p>
                    </div>
                </div>
                {/* Categories accordians */}
                <div className='mt-12'>
                    {
                        categories.map((category) => 
                            <RestaurantCategory 
                                key={category?.card?.card?.title} 
                                data={category?.card?.card} 
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ResturentMenu;