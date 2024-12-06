import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { SWIGGY_API } from "../utilities/constants";
import Shimmer from './Shimmer';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([])
  const handleFilterTopRatedRestaurants = () => {
    const updatedFilteredList = listOfRestaurants?.filter(item => item?.avgRating > 4.5)
    setListOfRestaurants(updatedFilteredList)
  }

  useEffect(() => {
    fetchData() 
  })

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API)
    const json = await data.json()
    const restaurantData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setListOfRestaurants(restaurantData)
  }

  // Conditional Rendering
    return listOfRestaurants?.length === 0 ? <Shimmer />: <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={handleFilterTopRatedRestaurants}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {listOfRestaurants?.map((restaurant) => (
            <FoodCard
              key={restaurant?.info?.id}
              name={restaurant?.info?.name}
              cuisine={restaurant?.info?.cuisines?.join(', ')}
              rating={restaurant?.info?.avgRating}
              cloudinaryImageId={restaurant?.info?.cloudinaryImageId}
            />
          ))}
        </div>
      </div>
}
export default Body