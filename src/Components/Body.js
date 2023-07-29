import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
// import './Body.css'
import { Link } from "react-router-dom";
import { REST_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState();

  const handleSubmit = () => {
    const filteredRestaurant = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterRestaurant(filteredRestaurant);
  };

  const fetchData = async () => {
    const data = await fetch(REST_URL);
    const json = await data.json();
    // console.log(json);
    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    // setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    // setFilterRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

  useEffect(() => {
    fetchData();
    // console.log(listOfRestaurant)
  }, []);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Seems like there is no Internet. Kindly check the Internet</h1>;

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex p-2">
        <div className="search">
          <input
            type="text"
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-emerald-300 rounded-lg m-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <button
          className="filter-btn px-4 py-2 bg-violet-400 rounded-lg m-2"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (avg) => avg.info.avgRating > 4
            );
            setFilterRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-container flex flex-wrap justify-center">
        {filterRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
