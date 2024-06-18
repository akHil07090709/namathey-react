import { resList } from "../utilities/staticData";
import FoodCard from "./FoodCard";

const Body = () => {
    return (
      <div className="body" style={{}}>
        <div className="search">search</div>
        <div className="res-container">
          {resList?.map((restaurant) => (
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