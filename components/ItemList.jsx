import { URL } from "../utils/link"
import { addItem } from "../utils/cartSlice"
import { useDispatch } from "react-redux"
import toast from "react-hot-toast";
const ItemList = (props) => {
    
    const dispatch = useDispatch();
    const handleDispatch = (item) => {
        dispatch(addItem(item))
        toast.success(`${item.card.info.name} added to cart 🛒`, {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  }); 
    }
    return (

        <div className="w-full  ">
            {
                props.itemcards.map((item) => {
                    return <div className="w-full border-b-2 pl-2  border-b-black pt-2 flex justify-between items-center pb-5 bg-gray-100" key={item.card.id}>
                        <div className="w-[70%] flex flex-col gap-1">
                            <p className="font-semibold">{item.card.info.name}</p>
                            <p className="font-semibold">₹ {item.card.info.defaultPrice / 100 || item.card.info.price / 100}</p>
                            <p className="text-xs pb-2">{item.card.info.description}</p>
                        </div>
                        <div className="pr-5 relative">
                            <div>
                                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.card.info.imageId}`} alt="" className="w-32 h-32 object-cover rounded-xl" />
                            </div>

                            <div className="">
                                <button className="absolute bottom-0 left-8 bg-white px-3 py-1 font-semibold rounded-md cursor-pointer" onClick={() => handleDispatch(item)}>Add+</button>
                            </div>

                        </div>
                    </div>
                })
            }


        </div>


    )
}

export default ItemList;