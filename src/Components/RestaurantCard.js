import { RES_IMG_URL } from "../utils/constants";
import "./RestaurantCard.css";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
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
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;

export const isOpen = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-1 p-1 rounded-lg">Open</label>
        <RestaurantCard {...props} />
      </div>
    );
  }
}