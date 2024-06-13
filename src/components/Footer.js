  import { SiSwiggy } from "react-icons/si";
  import { FaRegCopyright } from "react-icons/fa";
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
      
    }

    return (
      <div className="w-full h-[550px] bg-[#02060C] flex justify-center items-center">
        <div className="w-8/12">
          <div className="w-full flex justify-around">
            <div>
              <h1 className="flex items-center text-[#ffffffeb] gap-1 text-3xl font-bold"><SiSwiggy className="text-[#ffffffeb] text-4xl" /> Swiggy </h1>
              <p className="text-[#ffffff99] flex items-center gap-1 font-semibold text-xl"> <FaRegCopyright /> 2024 Bhargav Talpada </p>
            </div>
            <div>
              <h1 className="text-[#ffffffeb] text-2xl font-black">Company</h1>
              <h1 className="text-[#ffffff99] text-xl font-semibold my-2">About</h1>
              <h1 className="text-[#ffffff99] text-xl font-semibold my-2">Careers</h1>
              <h1 className="text-[#ffffff99] text-xl font-semibold my-2">Team</h1>
              <h1 className="text-[#ffffff99] text-xl font-semibold my-2">Swiggy One</h1>
              <h1 className="text-[#ffffff99] text-xl font-semibold my-2">Swiggy Instamart</h1>
              <h1 className="text-[#ffffff99] text-xl font-semibold my-2">Swiggy Genie</h1>
            </div>
            <div>
              <div>
                <h1 className="text-[#ffffffeb] text-2xl font-black">Contact us</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2">Help & Support</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2">Partner with us</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2">Ride with us</h1>
              </div>
              <div className="mt-16">
                <h1 className="text-[#ffffffeb] text-2xl font-black">Legal</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2">Terms & Conditions</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2">Cookie Policy</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2">Privacy Policy</h1>
                <h1 className="text-[#ffffff99] text-xl font-semibold my-2">Investor Relations</h1>
              </div>
            </div>
            <div>
              <h1 className="text-[#ffffffeb] text-2xl font-black">We deliver to:</h1>
              {
                footerCityData.slice(0,6).map((cities) => 
                  <FooterCityData key={cities.id} citiesData={cities}  />
                )
              }

              <button className="px-3 py-1 text-[#ffffff99] text-[16px] font-semibold my-2 border border-[#ffffff99] rounded-lg flex justify-center items-center">{footerCityData.length - 6} cities <FaAngleDown className="ml-10" /> </button>

            </div>
          </div>  
        </div>
      </div>
    )
  }

  export default Footer;