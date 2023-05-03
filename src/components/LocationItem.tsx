import React, { useContext, useMemo } from "react";
import { LocationData } from "./LocationList";
import { LocationContext } from "./LocationProvider";
import * as geolib from "geolib";

interface LocationItemProps {
  location: LocationData;
}

export const LocationItem: React.FC<LocationItemProps> = ({ location }) => {
  const { userLocation } = useContext(LocationContext);

  const distanceInMiles = useMemo(() => {
    if (!userLocation) return null;

    const distanceInMeters = geolib.getDistance(
      { latitude: userLocation.latitude, longitude: userLocation.longitude },
      {
        latitude: location.coordinates.latitude,
        longitude: location.coordinates.longitude,
      }
    );
    const metersToMiles = 0.000621371;
    return distanceInMeters * metersToMiles;
  }, [userLocation, location.coordinates]);

  return (
    <div>
      <h3>{location.name}</h3>
      <p>Latitude: {location.coordinates.latitude}</p>
      <p>Longitude: {location.coordinates.longitude}</p>
      {distanceInMiles !== null && (
        <p>Distance: {distanceInMiles.toFixed(2)} miles away</p>
      )}
    </div>
  );
};
