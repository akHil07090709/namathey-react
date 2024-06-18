import { CDN_IMG_URL } from "../utilities/constants";

const FoodCard = (props) => {
    const { name, cuisine, rating, cloudinaryImageId } = props;
    return (
      <div className="res-card">
        <div className="food-img">
          <img
            src={CDN_IMG_URL + cloudinaryImageId}
            alt="food-item"
          />
        </div>
        <div className="food-name">{name}</div>
        <div className="food-cuisine">{cuisine}</div>
        <div className="food-rating">{rating}</div>
      </div>
    );
  };

export default FoodCard;