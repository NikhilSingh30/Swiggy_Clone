import { useState } from "react";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
import { useSelector } from "react-redux";
const Header = () => {

    const [islogin, setislogin] = useState(true);
    const online = useStatus();
    const cartItems = useSelector((store) => store.cart.items)
    return (
        <div className=" h-30 w-full flex items-center justify-between pl-10 shadow-xl  bg-white">
            <div className="w-[10%]">
                <img src="https://img.freepik.com/premium-vector/modern-restaurant-logo-design-template_872774-98.jpg" alt="" className="h-28" />
            </div>

            <ul className="flex gap-10 text-lg  items-center h-30 justify-end w-[95%] bg-green-200 pr-15">
                <li>Online Status :{online ? "✅" : "🔴"}</li>
                <li className="cursor-pointer hover:font-semibold  transition,duration-100"><Link to="/">Home</Link></li>
                <li className="cursor-pointer hover:font-semibold transition duration-100"><Link to="about">About Us</Link></li>
                <li className="cursor-pointer hover:font-semibold transition duration-100"><Link to="contact">Contact Us</Link></li>
                <li className="cursor-pointer hover:font-bold font-semibold text-xl transition duration-100"><Link to="./cart">Cart ({cartItems.length} items)</Link></li>
                {/* <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 cursor-pointer" onClick={() => {
                    setislogin(!islogin);
                }}>{islogin ? "Login" : "Logout"}</button> */}
            </ul>
        </div>
    )
}

export default Header;