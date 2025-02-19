import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  if (!resData || !resData.info) {
    return <p>Data is missing!</p>;
  }

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData.info;

  return (
    <div data-testid = "resCard" className="w-[280px] min-h-[150px] bg-white rounded-xl  transition-transform duration-300 ease-in-out hover:scale-95 
    cursor-pointer overflow-hidden">
      {/* Image with Overlay */}
      <div className="relative">
        <img
          className="w-full h-40 object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
        {/* Price Overlay */}
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-md font-semibold">
          ITEMS AT {costForTwo}
        </div>
      </div>

      {/* Details Section */}
      <div className="p-3">
        <h3 className="text-base font-semibold text-gray-900 truncate">{name}</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-700 mt-1">
          <span className="text-green-700 font-bold">⭐ {avgRating}</span>
          <span>•</span>
          <span>{sla?.deliveryTime} mins</span>
        </div>
        <p className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

// HOC for Discount & Free Delivery Badge
export const withDiscountOffer = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;
    const { aggregatedDiscountInfoV3 } = resData?.info || {};

    return (
      <div className="relative w-[250px] bg-white rounded-lg shadow-md cursor-pointer overflow-hidden">
        {/* Ensure discount badge is visible */}
        {aggregatedDiscountInfoV3 && (
          <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
            {`${aggregatedDiscountInfoV3.header} ${aggregatedDiscountInfoV3.subHeader}`}
          </div>
        )}
        <RestaurantCard {...props} />
      </div>
    );
  };
};


export default RestaurantCard;