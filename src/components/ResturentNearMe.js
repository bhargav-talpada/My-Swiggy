
const ResturentNearMe = ({resData}) => {

    const {text} = resData;

  return (
    <div className="mt-8 p-3 w-[390px] md:w-[480px] lg:w-[560px] border-2 rounded-xl">
        <h1 className="text-center text-lg font-semibold">{text}</h1>
    </div>
  )
}

export default ResturentNearMe;