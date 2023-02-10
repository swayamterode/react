import { IMG_CDN_URL } from "../config";
const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  maxDeliveryTime,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="Resturant" />
      <b>{name}</b>
      <br />
      {cuisines.join(", ")}
      <br />
      Delivery Time: {maxDeliveryTime}
    </div>
  );
};
export default RestrauntCard;
