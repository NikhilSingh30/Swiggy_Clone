import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearItem } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";

import CardPageCard from "./CardPageCard";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const totalPrice = useSelector((store)=>store.cart.totalPrice)
    const quantity = useSelector((store)=>store.cart)
    
    
    
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearItem())
    }
    
    const handleRemove = (id)=>{
        dispatch(removeItem(id))
    }
    return (
        <div className="w-1/2 mx-auto py-5  flex flex-col items-center">
           
            {
                cartItems.length > 0 ?  <h1 className="text-2xl font-semibold">Your Cart items</h1> :  <h1 className="text-2xl font-semibold">Your Cart is empty</h1>
            }
            {
                cartItems.length > 0 && <button className="px-3 mt-5 cursor-pointer py-2 bg-red-500 hover:bg-red-600 rounded-md text-white font-bold" onClick={handleClearCart}>Clear Cart</button>
            }

            <div className="w-full  mt-10">
                {
                    cartItems.map((item) => {
                        return <CardPageCard data={item}/>
                    })
                }


            </div>
            {
                cartItems.length > 0 &&   <div className="flex w-full justify-end">
                    <h1 className="text-2xl font-semibold">Total Price : ₹{totalPrice.toFixed(2)}</h1>
            </div>
            }
          
            
        </div>
    )

}

export default Cart