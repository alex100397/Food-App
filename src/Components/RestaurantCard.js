import { RES_IMG_URL } from "../utils/constants";
import "./RestaurantCard.css";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    resData?.data;

  return (
    <div className="restaurant-card">
      <img
        className="res-logo"
        src={RES_IMG_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
