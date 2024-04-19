import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //Local State Variable - superpowerful variable -> for that we use HOOKS = normal JS function comes with some superpowers, have some logic written behind it
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  //Whenever state variable updates, react triggers a reconciliation cycle(re rendering the component)
  //and, the updated state variable is a new variable and therefore const used above and it's fine ne!
  console.log("Body Rendered re");

  useEffect(() => {
    console.log("useEffect called!");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3397809&lng=76.3868797&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const resList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(resList)
    setListOfRestaurants(resList);
    setFilteredRestaurants(resList);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you are offline</h1>;
  }

  //Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search">
          <input
            type="text"
            className="border-2 border-gray-600 ml-[56px] w-[235px] h-[36px] rounded-xl p-1"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn px-5 py-2 my-4 ml-5 bg-green-500 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="filter-btn px-5 py-2 my-4 ml-5 bg-slate-400 rounded-lg"
            onClick={() => {
              //filter logic
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.3
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap ml-[35px]">
        {filteredRestaurants.map((res) => (
          <Link
            className="restaurant-text"
            key={res.info.id}
            to={"/restaurants/" + res.info.id}
          >
            {/*If the restaurant promoted then add a promoted label to it*/}
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
