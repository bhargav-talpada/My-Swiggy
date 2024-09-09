  import { SiSwiggy } from "react-icons/si";
  import { FaAngleUp, FaRegCopyright } from "react-icons/fa";
  import { SWIGGY_MAIN_API } from "../utils/constants";
  import { useEffect, useState } from "react";
  import FooterCityData from "./FooterCityData";
  import { FaAngleDown } from "react-icons/fa6";

  const Footer = () => {

    const [footerCityData, setFooterCityData] = useState([]);
    const [showAllCities, setShowAllCities] = useState(false);

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      const data = await fetch(SWIGGY_MAIN_API);
      const json = await data.json();
      setFooterCityData(json?.data?.cards[10]?.card?.card?.cities);
    }

    const toggleAllCities = () => {
      setShowAllCities(!showAllCities);
    }

    return (
      <div className="w-full h-auto bg-[#02060C] flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <div className="w-screen md:w-8/12 my-20">
          {/* Web view */}
            <div className="w-full hidden md:flex justify-around">
              <div className="flex flex-col gap-2">
                <h1 className="flex items-center text-[#ffffffeb] gap-1 text-3xl font-bold"><SiSwiggy className="text-[#ffffffeb] text-4xl" /> Swiggy </h1>
                <p className="text-[#ffffff99] flex items-center gap-1 font-semibold text-xl ml-2"> <FaRegCopyright className="text-sm" /> 2024 Bhargav Talpada </p>
              </div>
              <div>
                <h1 className="text-[#ffffffeb] text-2xl font-black">Company</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">About</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">Careers</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">Team</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">Swiggy One</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">Swiggy Instamart</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">Swiggy Genie</h1>
              </div>
              <div>
                <div>
                  <h1 className="text-[#ffffffeb] text-2xl font-black">Contact us</h1>
                  <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">Help & Support</h1>
                  <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">Partner with us</h1>
                  <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">Ride with us</h1>
                </div>
                <div className="mt-16">
                  <h1 className="text-[#ffffffeb] text-2xl font-black">Legal</h1>
                  <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">Terms & Conditions</h1>
                  <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">Cookie Policy</h1>
                  <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">Privacy Policy</h1>
                  <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">Investor Relations</h1>
                </div>
              </div>
              <div>
                <h1 className="text-[#ffffffeb] text-2xl font-black">We deliver to:</h1>
                { 
                  footerCityData.slice(0,6).map((cities, index) => 
                    <FooterCityData key={index} citiesData={cities}  />
                  )
                }

                <button 
                  onClick={toggleAllCities} className="px-3 py-1 text-[#ffffff99] text-base font-semibold my-2 border border-[#ffffff99] rounded-lg flex justify-center items-center">
                  {footerCityData.length - 6} cities 
                  { !showAllCities ? <FaAngleDown className="ml-2" /> : <FaAngleUp className="ml-2" /> } 
                </button>

              </div> 
            </div>  

            {/* mobile view */}

            <div className="w-full flex md:hidden justify-around">
              <div className="flex flex-col gap-2">
                <h1 className="flex text-[#ffffffeb] gap-1 text-xl font-bold"><SiSwiggy className="text-[#ffffffeb] text-3xl" /> Swiggy </h1>
                <p className="text-[#ffffff99] flex flex-col gap-1 font-semibold text-xl"> <span className="flex"><FaRegCopyright className="text-sm" /> 2024</span> Bhargav Talpada </p>
                <h1 className="text-[#ffffffeb] text-2xl my-2 font-black">Company</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">About</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">Careers</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">Team</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">Swiggy One</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">Swiggy Instamart</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">Swiggy Genie</h1>
                <h1 className="text-[#ffffffeb] text-2xl my-2 font-black">Contact us</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">Help & Support</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">Partner with us</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">Ride with us</h1>
              </div>
              <div className="">
                <h1 className="text-[#ffffffeb] text-2xl font-black">Legal</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">Terms & Conditions</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">Cookie Policy</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">Privacy Policy</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2 cursor-pointer">Investor Relations</h1>
              
                <h1 className="text-[#ffffffeb] text-2xl font-black">We deliver to:</h1>
                { 
                  footerCityData.slice(0,6).map((cities, index) => 
                      <FooterCityData key={index} citiesData={cities}  />
                    )
                }

                <button 
                  onClick={toggleAllCities} className="px-3 py-1 text-[#ffffff99] text-base font-semibold my-2 border border-[#ffffff99] rounded-lg flex justify-center items-center">
                  {footerCityData.length - 6} cities 
                  { !showAllCities ? <FaAngleDown className="ml-2" /> : <FaAngleUp className="ml-2" /> } 
                </button>
              </div> 
            </div>      
          </div>
        </div>
        <hr />
        {
          showAllCities &&
          <div className="w-screen pt-4 flex flex-col">
            <h1 className="w-screen text-[#ffffffeb] pl-5 md:pl-0 text-xl md:text-2xl font-black">Other cities that we deliver:</h1>
              <div className="w-full mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                  footerCityData.slice(6,595).map((cities, index) =>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:w-1/4"  key={index}>
                      <FooterCityData citiesData={cities}  />
                    </div>
                  )
                }
              </div>
          </div>
        }
      </div>
    )
  }

  export default Footer;