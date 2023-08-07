import { useState } from "react";
import CategoryList from "./CategoryList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems,setShowItems] = useState(false)

  const handleClick = () => {
    setShowIndex();
  };
  // console.log(data);
  return (
    <div className="accordion ">
      <div className="header w-6/12 mx-auto my-4 p-4 shadow-lg bg-gray-200">
        <div className="flex justify-between">
          <span className="font-bold cursor-pointer" onClick={handleClick}>
            {data.title} ({data.itemCards.length})
          </span>
          <span className="iconDown">🔽</span>
        </div>
        {showItems && <CategoryList list={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
