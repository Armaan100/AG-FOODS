import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {


  const {resId} = useParams();

 const resInfo = useRestaurantMenu(resId);


  if(resInfo === null){
    return <Shimmer />
  }

  const { name, cuisines, avgRating, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  //console.log( resInfo?.cards[2]?.card?.card?.info)
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{c.card?.["card"]?.["@type"]=='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'})
  console.log(categories);
  //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
  
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h2>{cuisines.join(", ")} - {costForTwoMessage}</h2>
      <h2>Menu</h2>
      {/* {categories.map(()=>{

      })} */}
    </div>
  );
};

export default RestaurantMenu;



/*
- RestaurantMenu Component has two functions:
  1. Fetching the data from the API
  2. Displaying the data in the UI      -> so, not following the single responsibility

- Shouldn't RestaurantMenu Component only be responsible for displaying the data in the UI?

- Yes. The fetching of data should be done in a separate function.

-And therefore, there is a requirement of Custom Hook.

Before

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

*/