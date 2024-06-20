import { useState } from "react";
import { resList } from "../utilities/staticData";
import FoodCard from "./FoodCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList)
  const handleFilterTopRatedRestaurants = () => {
    const updatedFilteredList = listOfRestaurants?.filter(item => item?.avgRating > 4.5)
    setListOfRestaurants(updatedFilteredList)
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