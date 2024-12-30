import React, { useState, useEffect, useRef } from "react";
import ResturentCart, { promotedLabel } from "./ResturentCart";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { RiWifiOffLine } from "react-icons/ri";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import OnYourMindCardList from "./OnYourMindCardList";
import OnlineFoodDeliveryCards from "./OnlineFoodDeliveryCards";
import BestPlaceEatInCities from "./BestPlaceEatInCities";
import { FaAngleDown } from "react-icons/fa6";
import BestCuisinesNear from "./BestCuisinesNear";
import ResturentNearMe from "./ResturentNearMe";
import { REST_IMG_URL, SWIGGY_MAIN_API } from "../utils/constants";
import Footer from "./Footer";


const Body = () => {

    const [resturentList, setResturentList] = useState([]);      
    const [filterdResturent, setFilterdResturent] = useState([]);
    const [resRowHeader, setResRowHeader] = useState("");
    const [searchText, setSearchText] = useState("");
    const [whatOnYourMindData, setWhatOnYourMindData] = useState([]);
    const [onYourMindTitle, setOnYourMindTitle] = useState("");
    const [onlineFoodTitle, setOnlineFoodTitle] = useState("");
    const [onlineFoodData, setOnlineFoodData] = useState([]);
    const [bestPlaceEatCities, SetBestPlaceEatCities] = useState([]);
    const [bestPlaceEatTitle, setBestPlaceEatTitle] = useState('');
    const [showAll, setShowAll] = useState(false);
    const [bestCuisinesNearMe, setBestCuisinesNearMe] = useState([]);
    const [bestCuisinesTitle, setBestCuisinesTitle] = useState('');
    const [showAllCuisines, setShowAllCuisines] = useState(false);
    const [resturentNearMe, setResturentNearMe]= useState([]);
    const [resturentNearMeTitle, setResturentNearMeTitle]= useState('');
    const [downloadAppNow, setDownloadAppNow] = useState([]);
    const [downloadAppNowTitle, setDownloadAppNowTitle] = useState('');

    const scrollRef = useRef(null);
    const mindscrollRef = useRef(null);
    
    const ResturentCartPromoted = promotedLabel(ResturentCart);

    useEffect(()=>{
      fetchData();
    }, []);

    // All fetch resturent data

    const fetchData = async () => {
      try {
        const data = await fetch(SWIGGY_MAIN_API);
        if (!data.ok) {
          throw new Error(`HTTP error! status: ${data.status}`)
        }
        if (!data.headers.get('Content-Type').includes('application/json')) {
          throw new Error('Response is not JSON');
        }
        const json = await data.json();
        // console.log("all data",json);
  
        //Optional Chaining
        setResturentList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterdResturent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setResRowHeader(json?.data?.cards[1]?.card?.card?.header?.title);
        setOnYourMindTitle(json?.data?.cards[0]?.card?.card?.header?.title);
        setWhatOnYourMindData(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
        setOnlineFoodTitle(json?.data?.cards[2]?.card?.card?.title);
        setOnlineFoodData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        SetBestPlaceEatCities(json?.data?.cards[6]?.card?.card?.brands);
        setBestPlaceEatTitle(json?.data?.cards[6]?.card?.card?.title)
        setBestCuisinesNearMe(json?.data?.cards[7]?.card?.card?.brands);
        setBestCuisinesTitle(json?.data?.cards[7]?.card?.card?.title)
        setResturentNearMe(json?.data?.cards[8]?.card?.card?.brands);
        setResturentNearMeTitle(json?.data?.cards[8]?.card?.card?.title);
        setDownloadAppNowTitle(json?.data?.cards[9]?.card?.card?.title);
        setDownloadAppNow(json?.data?.cards[9]?.card?.card);
      } catch (error) {
        console.log('Error fetching data:', error)
      }

    };

    const toggleShowAll = () => {
      setShowAll(!showAll);
    };

    const toggleShowAllCuisines = () => {
      setShowAllCuisines(!showAllCuisines);
    }

    const scroll = (scrollOffset) => {
      scrollRef.current.scrollLeft += scrollOffset;
    }
    const mindScroll = (scrollOffset) => {
      mindscrollRef.current.scrollLeft += scrollOffset;      
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false)
      return(
        <div className="status h-screen w-screen flex flex-col justify-center items-center">
          <RiWifiOffLine className="offline text-6xl" />
          <h1 className="onlinestatus text-4xl mt-4 text-red-500">Oops Please, check your internet connection.</h1>
        </div>
      ) 

      

    //Conditional Rendering
    return (resturentList?.length === 0 || resturentList === undefined) ? <Shimmer /> : (
      <div className="flex flex-col justify-center items-center pt-16 md:pt-[90px]">
        <div className="body w-9/12">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center p-2 md:p-0">
            <div className="search m-0 md:m-2 p-3">
              <input type="text" data-testid="searchInput" className="searchinp p-2 border border-solid border-black " placeholder="Search..." value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
              <button className="searchbtn border border-green-300 rounded-md px-5 py-2 bg-green-200 m-4 cursor-pointer" onClick={()=>{
                const searchRestro = resturentList.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilterdResturent(searchRestro)
              }}>Search</button>
            </div>

            <div>
              <button className="filter-btn px-5 py-2 mr-3 border border-gray-200 rounded-md bg-gray-200 cursor-pointer" onClick={() => {
                const filterdList = resturentList.filter(res => res.info.avgRating > 4.3)
                setFilterdResturent(filterdList)
              }} >Top Rated Resturents</button>
            </div>

          </div>

          {/* What's on your mind */}
            
          <div className="">
            <div className="flex flex-col sm:flex-row justify-center md:justify-between items-center">
              <h1 className="text-2xl md:text-3xl">{onYourMindTitle}</h1>
              <div className="flex justify-center text-3xl mr-3">
                <BsArrowLeftCircleFill onClick={() => mindScroll(-300)} className="text-gray-500 transition-all duration-700 hover:scale-125 cursor-pointer"/>
                <BsArrowRightCircleFill onClick={() => mindScroll(300)} className="ml-4 text-gray-500 transition-all duration-700 hover:scale-125 cursor-pointer" />
              </div>
            </div>
            <div className="flex space-x-9 overflow-x-scroll scroll-smooth" ref={mindscrollRef} style={{ scrollbarWidth: 'thin', scrollbarColor: 'transparent transparent' }}>
              { 
                whatOnYourMindData.map((onYourMind) => 
                  <Link  key={onYourMind.id} >
                    {
                      <div >
                        <OnYourMindCardList onYourMindData={onYourMind}  />
                      </div>
                    }
                  </Link>
                )
              }
            </div>
          </div>
          <hr className="mb-10" />

          {/* Top Chains Restaurent Cards */}

          <div className="">
            <div className="flex flex-col sm:flex-row justify-center md:justify-between items-center">
              <h1 className="text-2xl md:text-3xl">{resRowHeader}</h1>
              <div className="flex justify-center text-3xl mr-3">
                <BsArrowLeftCircleFill onClick={() => scroll(-500)} className="text-gray-500 transition-all duration-700 hover:scale-125 cursor-pointer"/>
                <BsArrowRightCircleFill onClick={() => scroll(500)} className="ml-4 text-gray-500 transition-all duration-700 hover:scale-125 cursor-pointer" />
              </div>
            </div>
            <div className="flex space-x-9 overflow-x-auto overflow-y-hidden scroll-smooth" ref={scrollRef} style={{ scrollbarWidth: 'thin', scrollbarColor: 'transparent transparent' }}>
              { 
                filterdResturent.map((resturent) => 
                  <Link to={"/restaurents/" + resturent.info.id} key={resturent.info.id} >  
                    {
                      resturent.info.promoted ? <ResturentCartPromoted resData={resturent} /> : <ResturentCart resData={resturent}  />
                    }
                  </Link>
                )
              }
            </div>
          </div>

          <hr className="mb-8" />

          {/* Restaurants with online food delivery in Rajkot */}

          <div className="">
            <div className="">
              <h1 className="text-2xl md:text-3xl">{onlineFoodTitle}</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" >
              { 
                onlineFoodData.map((resturent) => 
                  <Link to={"/restaurents/" + resturent.info.id} key={resturent.info.id} >  
                    {
                      <OnlineFoodDeliveryCards resData={resturent}  />
                    }
                  </Link>
                )
              }
              { 
                resturentList.map((resturent) => 
                  <Link to={"/restaurents/" + resturent.info.id} key={resturent.info.id} >  
                    {
                      <ResturentCart resData={resturent}  />
                    }
                  </Link>
                )
              }
            </div>
          </div>

          <hr className="mb-8" />

          {/* Best Places to Eat Across Cities */}

          <div className="mt-16">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl md:text-3xl">{bestPlaceEatTitle}</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              { 
                showAll 
                ?
                bestPlaceEatCities.map((resturent, index) => 
                  <Link key={index} >  
                    {
                       <BestPlaceEatInCities resData={resturent}  />
                    }
                  </Link>
                ) 
                : 
                bestPlaceEatCities.slice(0, 11).map((resturent, index) => 
                  <Link key={index} >  
                    {
                       <BestPlaceEatInCities resData={resturent}  />
                    }
                  </Link>
                )
              }
            
              { !showAll &&
                <button onClick={toggleShowAll} className="flex justify-center items-center gap-2 mt-8 p-3 w-[275px] border-2 rounded-xl font-bold text-xl">
                  Show More <FaAngleDown />
                </button>
              }

            </div>
          </div>


          {/* Best Cuisines Near Me */}

          <div className="mt-16">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl md:text-3xl">{bestCuisinesTitle}</h1>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
              { 
                showAllCuisines 
                ?
                bestCuisinesNearMe.map((resturent, index) => 
                  <Link key={index} >  
                    {
                       <BestCuisinesNear resData={resturent}  />
                    }
                  </Link>
                ) 
                : 
                bestCuisinesNearMe.slice(0, 11).map((resturent, index) => 
                  <Link key={index} >  
                    {
                       <BestCuisinesNear resData={resturent}  />
                    }
                  </Link>
                )
              }
            
              { !showAllCuisines &&
                <button onClick={toggleShowAllCuisines} className="flex justify-center items-center gap-2 mt-8 p-3 w-[275px] border-2 rounded-xl font-bold text-xl">
                  Show More <FaAngleDown />
                </button>
              }

            </div>
          </div>

          {/* Explore Every Restaurants Near Me */}

          <div className="mt-16">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl md:text-3xl">{resturentNearMeTitle}</h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-3">
              { 
                resturentNearMe.map((resturent, index) => 
                  <Link key={index} >  
                    {
                       <ResturentNearMe resData={resturent}  />
                    }
                  </Link>
                ) 
              }

            </div>
          </div>

        </div>

        {/* For better experience,download the Swiggy app now */}

        <div className="w-full h-56 lg:h-32 flex flex-col lg:flex-row justify-center items-center gap-20 bg-[#eeeef2] mt-28">
            <div className="flex justify-between items-center">
              <h1 className="text-xl sm:text-2xl md:text-4xl md:w-[500px] text-[#02060cbf] font-bold">{downloadAppNowTitle}</h1>
            </div>
            <div className="flex  justify-center items-center gap-7">
              <Link to={downloadAppNow.androidAppLink}>
                <img src={REST_IMG_URL + downloadAppNow.androidAppImage} className="w-auto h-20" alt="android" />
              </Link>
              <Link to={downloadAppNow.iosAppLink}>
                <img src={REST_IMG_URL + downloadAppNow.iosAppImage} className="w-auto h-20" alt="iphone" />
              </Link>
            </div>
          </div>

          <Footer />

      </div>
    )
}

export default Body;
