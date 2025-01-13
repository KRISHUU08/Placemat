import RestaurantCard from "./RestaurantCard"
import { Shimmer } from "./shimmer";
import { useEffect, useState } from "react"

const Body = () => {

  const[listOfRes,setListOfRes] = useState([]);                   //fot APIs
  const[filteredRestaurant,setFIlterdRestaurant] = useState([]);  //for nested search
  const[searchText,setSearchText] = useState("");                  //for normal search

  useEffect(()=> {
    fetchData()
  }, []);

   const fetchData = async () => {

   const data1 = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667");
  //  const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667');

   const json = await data1.json();
   console.log("api data",json);
  //  console.log("apiData", json?.data.cards[2]);
   setListOfRes(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setFIlterdRestaurant(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  {/*During loading the page*/}
    return listOfRes.length===0 ? (<Shimmer />)     //use ternary operator  (conditional rendering)
    :(
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type = "text" className="search-box"
            value={searchText}
            onChange = {(e)=>{
              setSearchText(e.target.value);
              }} />
            <button className="search-btn"
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

        {/*Print high rating value only*/}
          <button className="filter-btn" onClick={() => {
            const topRated = listOfRes.filter(
              (res) => res.info.avgRating>4.5
            );
            setListOfRes(topRated);
          }}>Top Rated Restaurant</button>
        </div>

        <div className="res-container">
          {filteredRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        
        </div>
  
        
      </div>
    )
  }
  
  export default Body