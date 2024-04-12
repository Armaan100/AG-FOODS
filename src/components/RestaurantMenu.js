import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {MENU_API} from "../utils/constants";
  //imported from constants.js
const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API+resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json.data);
    console.log(json.data);
  };


  if(resInfo === null){
    return <Shimmer />
  }

  const { name, cuisines, avgRating, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  console.log( resInfo?.cards[2]?.card?.card?.info)
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")} - {costForTwoMessage}</h2>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item)=>(
            <li key={item.card.info.id}>
                {item.card.info.name}
            </li>
        ))}
        {
            console.log(itemCards)
        }
      </ul>
    </div>
  );
};

export default RestaurantMenu;
