import { useEffect, useState } from "react";
import { resList } from "../utilities/staticData";
import FoodCard from "./FoodCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList)
  const handleFilterTopRatedRestaurants = () => {
    const updatedFilteredList = listOfRestaurants?.filter(item => item?.avgRating > 4.5)
    setListOfRestaurants(updatedFilteredList)
  }

  useEffect(() => {
    fetchData() 
  })

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    console.log("Swiggy API Response:",json)
  }

    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={handleFilterTopRatedRestaurants}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {listOfRestaurants?.map((restaurant) => (
            <FoodCard
              key={restaurant.id}
              name={restaurant?.name}
              cuisine={restaurant?.cuisines?.join(', ')}
              rating={restaurant?.avgRating}
              cloudinaryImageId={restaurant?.cloudinaryImageId}
            />
          ))}
        </div>
      </div>
    );
  };

export default Body