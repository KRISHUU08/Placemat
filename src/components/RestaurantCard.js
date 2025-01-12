import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props)=> {
    const {resData} = props;
  
    const {
      cloudinaryImageId ,
      name,
      cuisines,
      avgRating,
      costForTwo,
    } = resData?.info;
    
    if (!resData || !resData.info) {
      return <p>Data is missing!</p>;
    }
   
    return (
      <div className="res-card">
        <img className=" res-foodImg" src={ CDN_URL + cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} stars </h4>
        <h4>{costForTwo} </h4>
  
      </div>
    )
  };

  export default RestaurantCard;