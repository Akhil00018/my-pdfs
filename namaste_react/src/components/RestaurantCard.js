/*import resList from "../utils/mockData";

import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  return (
    <div className="res_card" style={{ background: "#f0f0f0" }}>
      <img
        className="res_logo"
        src={CDN_URL + cloudinaryImageId}
        alt="biryani"
      />
      <h3>{name}</h3>
      <h4 padding="4px">{cuisines.join(",")}</h4>
      <h4>{avgRating + " Stars"}</h4>
      <h4>{costForTwo / 100}</h4>
      <h4>{deliveryTime + " Min"}</h4>
    </div>
  );
};
export default RestaurantCard;

*/

/*
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;

  return (
    <div className="res_card" style={{ background: "#f0f0f0" }}>
      <img className="res_logo" src={CDN_URL + cloudinaryImageId} alt={name} />

      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} Min</h4>
    </div>
  );
};

export default RestaurantCard;*/

import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;

  return (
    <div className="res_card" style={{ background: "#f0f0f0" }}>
      <img className="res_logo" src={CDN_URL + cloudinaryImageId} alt={name} />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} Min</h4>
    </div>
  );
};

export default RestaurantCard;
