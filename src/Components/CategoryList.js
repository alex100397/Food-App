import { useDispatch } from "react-redux";
import { RESTAURANT_LOGO } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const CategoryList = ({ list }) => {
  console.log(list);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }
  return (
    <div>
      {list.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold">{item.card.info.name}</span>
              <span className="font-bold">
                - ₹
                {Math.ceil(
                  item.card.info.defaultPrice
                    ? item.card.info.defaultPrice / 100
                    : item.card.info.price / 100
                )}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-1 mx-16 rounded-lg bg-black text-white shadow-lg m-auto" onClick={() => handleAddItem(item)}>
                Add +
              </button>
            </div>
            <img
              className="w-full"
              src={RESTAURANT_LOGO + item.card.info.imageId}
              alt="restaurant-logo"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
