import { RES_IMG_URL } from "../utils/constants";
import "./RestaurantCard.css";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    resData?.info;

  return (
    <div className="restaurant-card">
      <img
        className="res-logo rounded-lg"
        src={RES_IMG_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
