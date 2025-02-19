import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/createSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();
  const handleAddItem = (item)=>{
    dispatch(addItems(item));
  };

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div
          data-testid = "foodItems"
          key={item.card.info.id}
          className="group flex justify-between items-center p-4 hover:bg-gray-50 rounded-lg transition-all duration-300 ease-in-out "
        >
          {/* Left Section: Item Details */}
          <div className="flex-1 pr-4">
            <div className="space-y-2">
              {/* Item Name and Price */}
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg text-gray-800">
                  {item.card.info.name}
                </span>
                <span className="font-semibold text-gray-600 ">
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
                
              </div>

              {/* Item Description */}
              <p className="text-sm text-gray-600 line-clamp-2 text-left">
                {item.card.info.description}
              </p>
            </div>
          </div>

          {/* Right Section: Item Image and Add Button */}
          <div className="relative w-32 h-32 flex-shrink-0">
            {/* Item Image */}
            {item.card.info.imageId && (
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            )}

            {/* Add Button */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <button className="px-6 py-2 bg-white text-green-600 font-semibold rounded-full shadow-lg hover:bg-green-600 hover:text-white transition-all duration-300 ease-in-out border border-green-600" onClick={()=>handleAddItem(item)}>
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;