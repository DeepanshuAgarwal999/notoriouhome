import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";

const Marker = ({ text }) => (
  <div style={{ color: "red", fontWeight: "bold" }}>{text}</div>
);

const MapContainer = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setLocations(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact defaultCenter={{ lat: 0, lng: 0 }} defaultZoom={2}>
        {locations.map((location) => (
          <Marker
            key={location.id}
            lat={parseFloat(location.address.geo.lat)}
            lng={parseFloat(location.address.geo.lng)}
            text={location.name}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default MapContainer;
