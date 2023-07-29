import "./RestaurantMenu.css";
import { RESTAURANT_LOGO } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <img src={RESTAURANT_LOGO + cloudinaryImageId} alt="res-logo" />
      <ul>
        <li>{cuisines.join(",")}</li>
        <li>{costForTwoMessage}</li>
      </ul>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹
            {item.card.info.defaultPrice
              ? Math.ceil(item.card.info.defaultPrice / 100)
              : Math.ceil(item.card.info.price / 100)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
