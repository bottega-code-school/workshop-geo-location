import React, { useContext, useMemo } from "react";
import { LocationContext } from "./LocationProvider";
import * as geolib from "geolib";

import { LocationItem } from "./LocationItem";

export interface LocationData {
  id: string;
  name: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

interface LocationListProps {
  locations: LocationData[];
}

export const LocationList: React.FC<LocationListProps> = ({ locations }) => {
  const { userLocation } = useContext(LocationContext);

  const sortedLocations = useMemo(() => {
    if (!userLocation) return locations;

    return locations.sort((a, b) => {
      const distanceToA = geolib.getDistance(
        { latitude: userLocation.latitude, longitude: userLocation.longitude },
        { latitude: a.coordinates.latitude, longitude: a.coordinates.longitude }
      );
      const distanceToB = geolib.getDistance(
        { latitude: userLocation.latitude, longitude: userLocation.longitude },
        { latitude: b.coordinates.latitude, longitude: b.coordinates.longitude }
      );
      return distanceToA - distanceToB;
    });
  }, [locations, userLocation]);

  return (
    <div>
      {sortedLocations.map((location) => (
        <LocationItem key={location.id} location={location} />
      ))}
    </div>
  );
};
