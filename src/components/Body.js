import RestaurantCard from "./RestaurantCard"
import { resList } from "../utils/mockData"
import { useEffect, useState } from "react"

const Body = () => {

  const [listOfRes,setListOfRes] = useState(resList);

  useEffect(()=> {
    fetchData()
  }, []);

   const fetchData = async () => {

   const data1 = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7281946&lng=76.657876&page_type=DESKTOP_WEB_LISTING");

   const json = await data1.json();
    console.log(json);
    setListOfRes(json.data.cards);
  }

  
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating>4.5
            );
            setListOfRes(filteredList);
          }}>Top Rated Restaurant</button>
        </div>
        <div className="res-container">
          {listOfRes.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        
        </div>
  
        
      </div>
    )
  }
  
  export default Body