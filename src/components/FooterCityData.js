

const FooterCityData = ({citiesData}) => {

    const {text} = citiesData;

  return (
    <div>
        <h1 className="text-[#ffffff99] p-2 md:p-0 text-lg md:text-xl font-semibold cursor-pointer">{text}</h1>
    </div>
  )
}

export default FooterCityData;