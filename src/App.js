import React, { useEffect, useState } from "react";
import Map from "./Components/Map";
import axios from "axios";
const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchRestaurants() {
      const { data } = await axios({
        url: "http://localhost:3030/api/v1/restaurants",
        method: "GET",
      });

      if (data.restaurants) setRestaurants(data.restaurants);
    }
    setLoading(true);
    fetchRestaurants();
    setLoading(false);
  }, [setRestaurants]);
  if (loading) return <div>Loading ...</div>;
  return (
    <div>
      <Map restaurants={restaurants} />
    </div>
  );
};

export default App;
