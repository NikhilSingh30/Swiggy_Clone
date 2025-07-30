import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

import Simer from "./Simer";

const ResMenu = () => {
    const [resmenudata, setresmenudata] = useState(null);
    const [itemList, setitemList] = useState([]);
    const [openindex, setopenindex] = useState(null)

    useEffect(() => {
        fetchMenu();
    }, [])

    const { resid } = useParams()
    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.59430&lng=85.13520&restaurantId=" + resid)
        const json = await data.json();
        console.log(json);
        setresmenudata(json.data)
        setitemList(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    }
    const handltoggle = (index) => {
        setopenindex(openindex === index ? null : index);
    }


    if (resmenudata == null) {
        return <Simer />
    }

    const filterCat = itemList.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(filterCat)

    const { name } = resmenudata?.cards[2]?.card?.card?.info;




    console.log(itemList)
    return (
        <div className="flex  flex-col items-center mt-10">
            <div>
                <h1 className="text-2xl font-semibold">{name}</h1>
            </div>

            <div className="w-full mt-6 flex flex-col gap-3 " >
                {
                    filterCat.map((data, index) => {
                        return (
                            <div key={data.card.card.categoryId} className="w-1/2 mx-auto   bg-gray-200 shadow-md" >
                                <div className="flex justify-between items-center cursor-pointer " onClick={() => {
                                    handltoggle(index)
                                }}>
                                    <span className="font-semibold text-lg p-2">{data.card.card.title} ({data.card.card.itemCards.length})</span>
                                    <span className="pr-3">⬇️</span>
                                </div>

                                {
                                    openindex === index && (<ItemList itemcards={data.card.card.itemCards} />)
                                }

                            </div>)
                    }
                    )
                }

            </div>



        </div>
    )
}

export default ResMenu;