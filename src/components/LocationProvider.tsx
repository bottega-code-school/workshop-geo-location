import React, { createContext, useState, useEffect } from "react";

interface LocationContextType {
  userLocation: Coordinates | null;
  setUserLocation: React.Dispatch<React.SetStateAction<Coordinates | null>>;
}

export const LocationContext = createContext<LocationContextType>({
  userLocation: null,
  setUserLocation: () => {},
});

export const LocationProvider: React.FC = ({ children }) => {
  const [userLocation, setUserLocation] = useState<Coordinates | null>(null);

  useEffect(() => {
    const getUserLocation = async () => {
      try {
        const location = await new Promise<Coordinates>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (position) => resolve(position.coords),
            (error) => reject(error)
          );
        });

        setUserLocation(location);
      } catch (error) {
        console.error("Error getting user location:", error);
      }
    };

    getUserLocation();
  }, []);

  return (
    <LocationContext.Provider value={{ userLocation, setUserLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export interface Coordinates {
  latitude: number;
  longitude: number;
}
