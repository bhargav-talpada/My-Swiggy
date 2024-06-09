import { useEffect, useState } from "react";

const BestPlaceEatInCities = ({resData}) => {

    const {text} = resData;

    const [truncatedTitle, setTruncatedTitle] = useState('');

    useEffect(() => {
        setTruncatedTitle(truncate(text, 29)); 
      }, [text]);

    const truncate = (input, length) => {
        if (input.length > length) {
          return input.substring(0, length) + '...';
        }
        return input;
      };

  return (
    <div className="mt-8 p-3 w-[275px] border-2 rounded-xl">
        <h1 className="text-center text-lg font-semibold">{truncatedTitle}</h1>
    </div>
  )
}

export default BestPlaceEatInCities;