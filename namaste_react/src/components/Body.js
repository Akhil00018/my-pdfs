/*import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState(resList);

  useEffect(() => {
    fetchdata();
  }, []);

  /*const fetchdata = async () => {
    const data = await fetch("http://localhost:5000/swiggy");

    const json = await data.json();
    console.log(json);

    setListOfRestaurants(json.data.cards[2].data.cards);
  };


// second 
  const fetchdata = async () => {
    const data = await fetch("http://localhost:5000/swiggy");

    const json = await data.json();
    console.log(json);

    setListOfRestaurants(json?.data?.cards?.[2]?.data?.data?.cards || []);
  };
  

  const fetchdata = async () => {
    const data = await fetch("http://localhost:5000/swiggy");
    const json = await data.json();

    console.log(json);

    const restaurants =
      json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants(restaurants || []);
  };

  return (
    <div className="body">
      <div className="btn">
        <button
          className="button"
          onClick={() => {
            const filterdList = ListOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filterdList);
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="res_container">
        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;*/
/*
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch("http://localhost:5000/swiggy");
    const json = await data.json();

    console.log("Swiggy JSON: ", json);

    // extract restaurants correctly
    const restaurants =
      json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants(restaurants || []);
  };

  return (
    <div className="body">
      <div className="btn">
        <button
          className="button"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res_container">
        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
*/
/*
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch("http://localhost:5000/swiggy");
    const json = await data.json();

    console.log("SWIGGY JSON:", json);

    // ⭐ AUTOMATICALLY FIND THE CARD THAT HAS RESTAURANTS
    let restaurants = [];

    json?.data?.cards?.forEach((card) => {
      const possibleRestaurants =
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (possibleRestaurants) {
        restaurants = possibleRestaurants; // FOUND!
      }
    });

    console.log("FOUND RESTAURANTS:", restaurants);

    setListOfRestaurants(restaurants || []);
  };

  return (
    <div className="body">
      <div className="btn">
        <button
          className="button"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res_container">
        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;*/

/*
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchdata = async () => {
    try {
      // const data = await fetch("http://localhost:5000/swiggy");

      const data = await fetch(
        "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      console.log("SWIGGY JSON:", json);

      let restaurants = [];

      json?.data?.cards?.forEach((card) => {
        const possibleRestaurants =
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        if (Array.isArray(possibleRestaurants)) {
          restaurants = possibleRestaurants;
        }
      });

      console.log("FOUND RESTAURANTS:", restaurants);

      setListOfRestaurants(restaurants || []);
    } catch (err) {
      console.error("Fetch error:", err);
      setListOfRestaurants([]);
    }
  };

  // ⭐ SHIMMER LOGIC (AS YOU REQUESTED)
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search a restaurant you want..."
            className="searchBox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            // * Filter th restaurant cards and update the UI
            // * searchText
            console.log(searchText);

            const filteredRestaurant = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>

      <div className="btn">
        <button
          className="button"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res_container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
*/

import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log("SWIGGY JSON:", json);

      let restaurants = [];

      json?.data?.cards?.forEach((card) => {
        const possibleRestaurants =
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        if (Array.isArray(possibleRestaurants)) {
          restaurants = possibleRestaurants;
        }
      });

      console.log("FOUND RESTAURANTS:", restaurants);

      setAllRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (err) {
      console.error("Fetch error:", err);
      setAllRestaurants([]);
      setFilteredRestaurants([]);
    }
  };

  // ⭐ SHIMMER
  if (allRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        {
          // SEARCH
        }
        <div className="search">
          <input
            type="text"
            placeholder="Search a restaurant you want..."
            className="searchBox"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filtered = allRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>

        {
          // TOP RATED
        }
        <button
          className="button"
          onClick={() => {
            const filtered = allRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {
        // RESTAURANT CARDS
      }
      <div className="res_container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
