import React, { useState, useEffect, useContext } from "react";
import ResturentCart, { promotedLabel } from "./ResturentCart";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { RiWifiOffLine } from "react-icons/ri";
import UserContext from "../utils/UserContext";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";



const Body = () => {

    const [resturentList, setResturentList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filterdResturent, setFilterdResturent] = useState([]);
    const [resRowHeader, setResRowHeader] = useState("");

    const ResturentCartPromoted = promotedLabel(ResturentCart);

    useEffect(()=>{
      fetchData();
    }, [])

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2629975&lng=70.7862588&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log("all data",json);

      //Optional Chaining
      setResturentList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilterdResturent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setResRowHeader(json?.data?.cards[1]?.card?.card?.header?.title);
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false)
      return(
        <div className="status h-screen w-screen flex flex-col justify-center items-center">
          <RiWifiOffLine className="offline text-6xl" />
          <h1 className="onlinestatus text-4xl mt-4 text-red-500">Oops Please, check your internet connection.</h1>
        </div>
      ) 

      const {loggedInUser,setUserName} = useContext(UserContext);

    //Conditional Rendering
    return resturentList.length === 0 ? <Shimmer /> : (
      <div className="flex justify-center ">
        <div className="body w-9/12">
            <div className="filter flex justify-between items-center">
              <div className="search m-2 p-3">
                <input type="text" data-testid="searchInput" className="searchinp p-2 border border-solid border-black " placeholder="Search..." value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button className="searchbtn border border-green-300 rounded-md px-5 py-2 bg-green-200 m-4 cursor-pointer" onClick={()=>{
                  const searchRestro = resturentList.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setFilterdResturent(searchRestro)
                }}>Search</button>
              </div>

              <div>
                <label className="text-xl"> UserName :  </label>
                <input data-testid="userNameInput" className="border border-black p-2" onChange={(e) => setUserName(e.target.value)} value={loggedInUser} />
              </div>

              <div>
                <button className="filter-btn px-5 py-2 mr-3 border border-gray-200 rounded-md bg-gray-200 cursor-pointer" onClick={() => {
                  const filterdList = resturentList.filter(res => res.info.avgRating > 4.3)
                  setFilterdResturent(filterdList)
                }} >Top Rated Resturents</button>
              </div>

            </div>
            <div x-data="{ slide: 0 }" class="">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl ml-4">{resRowHeader}</h1>
                <div className="flex justify-center text-3xl mr-3">
                  <BsArrowLeftCircleFill  className="text-gray-500 transition-all duration-700 hover:scale-125 "/>
                  <BsArrowRightCircleFill className="ml-4 text-gray-500 transition-all duration-700 hover:scale-125 " />
                </div>
              </div>
              <div className="resturent-carts flex space-x-4 overflow-x-auto overflow-y-hidden">
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
        </div>
      </div>
    )
}

export default Body;