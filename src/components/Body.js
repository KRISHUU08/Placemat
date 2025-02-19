import RestaurantCard , {withDiscountOffer}from "./RestaurantCard"
import { Shimmer } from "./shimmer";
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Body = () => {

  const[listOfRes,setListOfRes] = useState([]);
  // console.log("Res data",listOfRes);                   //fot APIs
  const[filteredRestaurant,setFIlterdRestaurant] = useState([]);  //for nested search
  const[searchText,setSearchText] = useState("");
  const EnhancedRestaurantCard = withDiscountOffer(RestaurantCard);                  //for normal search

  useEffect(()=> {
    fetchData()
  }, []);
  

   const fetchData = async () => {

  //  const data1 = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.712112897464575&lng=76.77729360759258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   const data1 = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.712112897464575&lng=76.77729360759258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

   const json = await data1.json();
   console.log("api data",json);
  //  console.log("apiData", json?.data.cards[2]);
   setListOfRes(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setFIlterdRestaurant(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const onlineStatus = useOnlineStatus(false);

  const {setUserName, loggedInUser} = useContext(userContext);

  
if(listOfRes.length===0) {
  return <Shimmer />
}

return (    
    
      <div className="body">
        <div className="filter flex justify-center ">
          <div className="search m-4 p-2">
            <input type = "text"  data-testid = "searchInput" className="search-box w-72 px-4 py-2 border border-gray-300 rounded-full outline-none focus:border-blue-500 transition duration-300 " placeholder="search a food you want.."
            
            value={searchText}
            onChange = {(e)=>{
              setSearchText(e.target.value);
              }} />
            <button className="search-btn px-3  bg-orange-300 rounded-lg font-sans hover:font-bold"
            onClick={() => {
              //filter the res and update the UI//
              const filteredRestau = listOfRes.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

              // setListOfRes(filteredList);
              setFIlterdRestaurant(filteredRestau)

            }}>
              Search
            </button>
          </div>


        <div className="m-4 p-2">
 {/*Print high rating value only*/}
 <button className="filter-btn px-4 py-1 bg-stone-300 border-black rounded-lg" onClick={() => {
            const topRated = listOfRes.filter(
              (res) => res.info.avgRating>4.5
            );
            setListOfRes(topRated);
          }}>Top Rated Restaurant</button>
        </div>

        {/* update context with username */}
        <div className="m-4 p-2">
          <label>Username: </label>
           <input className="w-72 px-4 py-2 border border-gray-300 rounded-full outline-none focus:border-blue-500 transition duration-300" value = {loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
        </div>
</div>
       

        <div className="res-container  flex justify-center flex-wrap gap-8 p-20">
          {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to = {"/restaurant/" + restaurant.info.id}
          >

            {
              // Applying the ternary operator to check if discount exists
              restaurant.info.aggregatedDiscountInfoV3 ? (
                <EnhancedRestaurantCard resData={restaurant} /> // Use enhanced card with discount if available
              ) : (
                <RestaurantCard resData={restaurant} /> // Regular card if no discount
              )
            }
           
            </Link>
          ))}

          
        
        </div>
  
        
      </div>
    )
  }
  
  export default Body