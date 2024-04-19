import {CDN_URL} from "../utils/constants";  

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, sla } = resData?.info;
    return (
      <div className="res-card m-4 p-1 w-[200px] h-[370px] rounded-lg bg-gray-100 hover:bg-gray-300">
        <img
          className="res-logo h-[170px] w-[190px]"
          alt="res-logo"
          src={
            CDN_URL + resData.info.cloudinaryImageId
          }
        />
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    );
  };


//Higher Order Component

//Input -> RestaurantCard ==> Output -> RestaurantCardPromoted


export default RestaurantCard;