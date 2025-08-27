import { URL } from "../utils/link";
const Card = (props) => {
    const { cloudinaryImageId, name, cuisines, avgRating } = props.resdata.info;
    return (
        <div className="pb-1 w-55  bg-gray-200  shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer hover:shadow-xl flex flex-col rounded-t-xl">

            <img src={URL + cloudinaryImageId} alt="" className="h-40 w-full object-cover rounded-t-xl" />

            <div className="mt-2 ml-1 flex flex-col gap-3">
                <h1 className="font-bold text-lg">{name}</h1>
                <p>{cuisines.join(" ,  ")}</p>
                <p>{avgRating}</p>
            </div>
        </div>
    )
}
export default Card;