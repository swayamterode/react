import { useState } from "react";
import { restaurantList } from "../config";
import { useState } from "react";
import RestrauntCard from "./RestaurantCard";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
}
const Body = () => {
  const [searchText, setSearchInput] = useState();
  //const searchedClikced = false;
  // const [searchedClikced, setsearchedClikced] = useState("false");
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            //e.target.value => whatever you write in input
            setSearchInput(e.target.value);
          }}
        />
        {/* <h1>{searchedClikced}</h1> */}
        <button
          className="search-btn"
          onClick={() => {
            // if(searchedClikced === "true")
            //   setsearchedClikced("flase");
            // else
            // setsearchedClikced("true");

            //filter the data
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="resturant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
