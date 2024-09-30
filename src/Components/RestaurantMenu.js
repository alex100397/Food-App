import React from "react";
import "./RestaurantMenu.css";
// import { RESTAURANT_LOGO } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

    console.log(resInfo, 'resinfo');

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // // console.log(itemCards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories)

  return (
    <div className="menu text-center">
      <h1 className="font-bold text-2xl">{name}</h1>
      {/* <img className="w-40 h-40" src={RESTAURANT_LOGO + cloudinaryImageId} alt="res-logo" /> */}
      <ul>
        <li>Cuisines -{cuisines.join(", ")}</li>
        <li>Approximate Cost for Two - {costForTwoMessage}</li>
      </ul>
      <h3 className="font-bold text-2xl">Menu</h3>
      {categories.map((c, index) => (
        <RestaurantCategory
          data={c?.card?.card}
          key={c?.card?.card?.title}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
      {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹
            {item.card.info.defaultPrice
              ? Math.ceil(item.card.info.defaultPrice / 100)
              : Math.ceil(item.card.info.price / 100)}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
