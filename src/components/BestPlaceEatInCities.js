
const BestPlaceEatInCities = ({resData}) => {

    const {text} = resData;

    const [truncatedTitle, setTruncatedTitle] = useState('');

    useEffect(() => {
        setTruncatedTitle(truncate(text, 30)); 
      }, [text]);

    const truncate = (input, length) => {
        if (input.length > length) {
          return input.substring(0, length) + '...';
        }
        return input;
      };

  return (
    <div className="mt-8 p-3 w-[17rem] border rounded-lg">
        <h1 className="text-center text-lg font-semibold">{truncatedTitle}</h1>
    </div>
  )
}

export default BestPlaceEatInCities;