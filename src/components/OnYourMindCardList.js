import { ONYOURMIND_IMG_URL } from "../utils/constants";

const OnYourMindCardList = ({onYourMindData}) => {

    const {imageId, action} = onYourMindData;
    const {text} = action;

  return (
    <div className="my-4">
        <img src={ONYOURMIND_IMG_URL + imageId} alt={text} className="mx-16 h-40 w-40" />
    </div>
  )
}

export default OnYourMindCardList;