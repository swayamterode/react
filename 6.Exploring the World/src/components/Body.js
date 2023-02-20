import { useState } from "react";
import { useState, useEffect } from "react";
import RestrauntCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase()?.includes(searchText.toLowerCase())
  );
}
const Body = () => {
  //Avoid rendering component! - use optional chaining
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchInput] = useState("");
  useEffect(() => {
    //API call inside useEffect ( )
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.587320330136933&lng=73.98135859519243&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    //optional chaning
    setAllRestaurant(json.data.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json.data.cards[2]?.data?.data?.cards);
  }

  //early return!
  if (!allRestaurant) return null;

  //conditional rendering ✅
  return allRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurant);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="resturant-list">
        {/* if (filteredRestaurants?.length === 0)
      return <h1>Opps! no restaurants match your filter!</h1> */}

        {filteredRestaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
