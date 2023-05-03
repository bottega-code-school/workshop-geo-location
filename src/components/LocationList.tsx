import * as React from "react";

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
  return (
    <div>
      {locations.map((location) => (
        <LocationItem key={location.id} location={location} />
      ))}
    </div>
  );
};
