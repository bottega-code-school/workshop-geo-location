import * as React from "react";
import Layout from "./Layout";
import { LocationData, LocationList } from "./LocationList";

const sampleLocations: LocationData[] = [
  {
    id: "1",
    name: "Phoenix",
    coordinates: { latitude: 33.4484, longitude: -112.074 },
  },
  {
    id: "2",
    name: "Scottsdale",
    coordinates: { latitude: 33.4942, longitude: -111.9261 },
  },
  {
    id: "3",
    name: "Tempe",
    coordinates: { latitude: 33.4255, longitude: -111.94 },
  },
];

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Nearest Locations</h1>
        <LocationList locations={sampleLocations} />
      </div>
    </Layout>
  );
}
