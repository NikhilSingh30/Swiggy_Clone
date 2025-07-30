
import Card from "./Card";
import { use, useEffect, useState } from "react";
import Simer from "./Simer";
import { Link } from "react-router-dom";
const Body = () => {
    const [listofresList, setlistofresList] = useState([]);
    const [filterlistofreslist, setfilterlistofreslist] = useState([]);
    const [searchText, setsearchText] = useState("");
    const handletoprated = () => {
        const filter = listofresList.filter((data) => data.info.avgRating >= 4.5);
        setfilterlistofreslist(filter);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59430&lng=85.13520&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setlistofresList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterlistofreslist(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const handleSearch = () => {
        const filter = listofresList.filter((data) => {
            return data.info.name.toLowerCase().includes(searchText.toLowerCase());
        })
        setfilterlistofreslist(filter);
    }
    if (listofresList.length === 0) {
        return <Simer />
    }

    return (
        <div className="mt-2 ">
            <div className="w-full h-15  flex items-center gap-10">
                <button className="bg-blue-500 px-5 py-2 rounded-lg text-white cursor-pointer ml-45 hover:bg-blue-700" onClick={handletoprated}>Top Rated Restaurant</button>
                <input type="text" placeholder="Search Restaurants" className="border-2 px-5 py-2 rounded-lg" value={searchText} onChange={(e) => setsearchText(e.target.value)} onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearch();
                    }
                }} />
                <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 cursor-pointer" onClick={handleSearch}>Search</button>
            </div>
            <div className=" w-[76%] py-5 mx-auto mt-5 flex flex-wrap gap-20 ">

                {
                    filterlistofreslist.length == 0 && <div className="flex text-3xl font-semibold text-red-400">Restaurants not found</div>
                }

                {
                    filterlistofreslist.map((data) => {
                        return <Link to={"/restaurants/" + data.info.id} key={data.info.id} className="flex flex-wrap">
                            <Card key={data.info.id} resdata={data} />
                        </Link>
                    })
                }



            </div>
        </div>
    )
}
export default Body;