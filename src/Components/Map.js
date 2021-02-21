import React, { useEffect, useState } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const MapComponent = ({ google, restaurants }) => {
  const [cords, setCords] = useState({
    lat: 25.165114,
    lng: 55.2162692,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        setCords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);
  console.log({
    restaurants,
  });
  return (
    <div>
      <Map
        google={google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: cords.lat,
          lng: cords.lng,
        }}>
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.id}
            name={restaurant.restaurantsName}
            title={restaurant.address}
            position={{ lng: restaurant.lat, lat: restaurant.log }}
          />
        ))}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAQdJxWUKssZ3RgWiS_UYcaeEG1yUpqgvI",
})(MapComponent);
