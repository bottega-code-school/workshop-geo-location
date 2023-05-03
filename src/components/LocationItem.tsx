import * as React from "react";
import { LocationData } from "./LocationList";

interface LocationItemProps {
  location: LocationData;
}

export const LocationItem: React.FC<LocationItemProps> = ({ location }) => {
  return (
    <div>
      <h3>{location.name}</h3>
      <p>Latitude: {location.coordinates.latitude}</p>
      <p>Longitude: {location.coordinates.longitude}</p>
    </div>
  );
};
