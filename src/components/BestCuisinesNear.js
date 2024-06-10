import { useEffect, useState } from "react";

const BestCuisinesNear = ({resData}) => {

    const {text} = resData;

    const [truncatedText, setTruncatedText] = useState('');

    useEffect(() => {
        setTruncatedText(truncate(text, 28)); 
    }, [text]);

    const truncate = (input, length) => {
        if (input.length > length) {
          return input.substring(0, length) + '...';
        }
        return input;
    };

  return (
    <div className="mt-8 p-3 w-[275px] border-2 rounded-xl">
        <h1 className="text-center text-lg font-semibold">{truncatedText}</h1>
    </div>
  )
}

export default BestCuisinesNear;