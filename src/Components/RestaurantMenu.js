import "./RestaurantMenu.css";
import { MENU_URL, RESTAURANT_LOGO } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <img src={RESTAURANT_LOGO + cloudinaryImageId} alt="res-logo" />
      <ul>
        <li>{cuisines.join(",")}</li>
        <li>{costForTwoMessage}</li>
      </ul>
      <h3>Menu</h3>
      {itemCards.map((item) => (
        <li key={item.card.info.id}>
          {item.card.info.name} - {item.card.info.price}
        </li>
      ))}
    </div>
  );
};

export default RestaurantMenu;
