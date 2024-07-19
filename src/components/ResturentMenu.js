import Shimmer from '../components/ShimmerUI'
import useResturentMenu from '../hooks/useResturentMenu';
import { useParams } from 'react-router-dom'
import { MdStars } from "react-icons/md";
import RestaurantCategory from './RestaurantCategory';
import { IoIosBicycle } from "react-icons/io";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import DealsForYou from './DealsForYou';

const ResturentMenu = () => {

    const {resId} = useParams();

    const resInfo = useResturentMenu(resId);

    if(resInfo === null) return <Shimmer />

    const { name, costForTwoMessage, cuisines, areaName, avgRating, totalRatingsString, sla, feeDetails } = resInfo?.cards[2]?.card?.card?.info;
    const { slaString } = sla;
    const { message } = feeDetails;

    const deals = resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;

    // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c => c.card?.["card"]?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    
    return(
        <div className="menu w-full flex justify-center pt-[90px]">
            <div className='w-6/12'>
                <h1 className='font-bold text-4xl ml-4 mt-5 '>{name}</h1>
                <div className='w12/12 h-60 p-4 bg-gradient-to-t from-gray-300 rounded-[30px]'>
                    <div className='w-12/12 h-52 py-2 px-4 border-2 rounded-2xl bg-white '>
                        <h3 className='text-xl flex items-center font-semibold'> <MdStars className='text-green-600 mr-1' /> {avgRating} ({totalRatingsString}) • {costForTwoMessage}</h3>
                        <p className='text-base text-red-500 ml-1 font-semibold'>{cuisines.join(", ")}</p> 
                        <div className='pl-5 mt-2'>
                            <p className='text-lg font-semibold'>Outlet<span className=' text-gray-400 ml-4 font-semibold'>{areaName}</span></p>
                            <p className='text-lg font-semibold'>{slaString}</p>
                        </div>
                        <hr className='my-4' />
                        <p className='text-lg font-semibold mr-4 flex items-center'> <IoIosBicycle className='mr-2' /> {message}</p>
                    </div>
                </div>
                {/* Deals For you section */}
                <div className='py-3'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-bold text-3xl ml-4 mt-5 '>Deals for you</h1>
                        <div className="flex justify-center text-3xl mr-3">
                            <BsArrowLeftCircleFill  className="text-gray-500 transition-all duration-700 hover:scale-125 cursor-pointer"/>
                            <BsArrowRightCircleFill className="ml-4 text-gray-500 transition-all duration-700 hover:scale-125 cursor-pointer" />
                        </div>
                    </div>
                    <div className=''>
                        {
                            deals.map((offer) => 
                                <DealsForYou key={offer.info.Ids} dealsInfo={offer} />
                            )
                        }
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