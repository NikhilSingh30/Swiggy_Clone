import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearItem } from "../utils/cartSlice";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearItem())
    }
    return (
        <div className="w-1/2 mx-auto my-10  flex flex-col items-center">
            <h1 className="text-2xl font-semibold">Cart</h1>
            {
                cartItems.length > 0 && <button className="px-3 mt-5 cursor-pointer py-2 bg-red-500 hover:bg-red-600 rounded-md text-white font-bold" onClick={handleClearCart}>Clear Cart</button>
            }

            <div className="w-full  mt-10">
                {
                    cartItems.map((item) => {
                        return <div className="w-full mb-7 shadow-md pl-2  border-b-black pt-2 flex justify-between items-center pb-5 bg-gray-100" key={item.card.id}>
                            <div className="w-[70%] flex flex-col gap-1">
                                <p className="font-semibold">{item.card.info.name}</p>
                                <p className="font-semibold">₹ {item.card.info.defaultPrice / 100 || item.card.info.price / 100}</p>
                                <p className="text-xs pb-2">{item.card.info.description}</p>
                            </div>
                            <div className="pr-5 relative">
                                <div>
                                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.card.info.imageId}`} alt="" className="w-32 h-32 object-cover rounded-xl" />
                                </div>



                            </div>
                        </div>
                    })
                }


            </div>
        </div>
    )

}

export default Cart