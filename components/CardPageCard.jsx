import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { removeItem } from "../utils/cartSlice";

import { useState } from "react";
import { updateItems } from "../utils/cartSlice";
import toast from "react-hot-toast"
const CardPageCard = (props)=>{
     const cartItems = useSelector((store) => store.cart.items)
    const totalPrice = useSelector((store)=>store.cart.totalPrice)
    const [quantity,setquantity] = useState(props.data.quantity)
    
    const dispatch = useDispatch()
   
    const handleRemove = (id)=>{
        dispatch(removeItem(id))
         toast.success(`${props.data.card.info.name} removed from cart 🛒`, {
                style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
                },
                });
        
    }
    const handleUpdate = (id)=>{
        if(quantity < 1){
            alert("Quantity must be at least 1");
            setquantity(props.data.quantity);
        }else if (quantity === props.data.quantity) {
    
    toast(`${props.data.card.info.name} is already set to ${quantity} ⚡`, {
      icon: "ℹ️",
      style: {
        borderRadius: "10px",
        background: "#222",
        color: "#fff",
      },
    });
  }else{
            dispatch(updateItems({id,quantity}))
            
            toast.success(`${props.data.card.info.name} quantity updated to ${quantity} 🛒`, {
                style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
                },
                });
        }


    }
    return (
         <div className="w-full mb-7 shadow-md pl-2  border-b-black pt-2 flex justify-between items-center pb-5 bg-gray-100" key={props.data.card.id}>
                            <div className="w-[70%] flex flex-col gap-1">
                                <p className="font-semibold">{props.data.card.info.name}</p>
                                <p className="font-semibold">₹ {props.data.card.info.defaultPrice / 100 || props.data.card.info.price / 100}</p>
                                <p className="text-xs pb-2">{props.data.card.info.description}</p>
                                <div className="flex items-center gap-3">
                                    <p className="font-semibold text-green-400">Quantity:</p><input type="number" min="1" className="border h-7 w-15 pl-2" value={quantity} onChange={(e)=>setquantity(e.target.value)}/>
                                    <button className="px-4 py-1 bg-orange-400 text-white rounded-md cursor-pointer" onClick={()=>handleUpdate(props.data.card.info.id)}>Update</button>
                                     <button className="px-4 py-1 bg-red-600 text-white rounded-md cursor-pointer" onClick={()=>handleRemove(props.data.card.info.id)}>Remove</button>
                                </div>
                            </div>
                            <div className="pr-5 relative">
                                <div>
                                    <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${props.data.card.info.imageId}`} alt="" className="w-32 h-32 object-cover rounded-xl" />
                                </div>



                            </div>
                        </div>
    )
}
export default CardPageCard;