import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const ProfileMap = () => {
  const [mapCenter, setMapCenter] = useState({ lat: 47.6062, lng: -122.3321 }); // Example: Seattle coordinates
  const [zoom, setZoom] = useState(12);

  const onLoad = useCallback((map) => {
    // You can use the map instance here if needed
    console.log('Map loaded:', map);
  }, []);

  const handleUser_Location = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setMapCenter({ lat: latitude, lng: longitude });
      setZoom(15); // Zoom in closer to the user's location
    });
  };

  return (
    <LoadScript googleMapsApiKey="390ed4827176bafc3a36fe3ed0a9fe93">
      <GoogleMap
        onLoad={onLoad}
        center={mapCenter}
        zoom={zoom}
        mapContainerStyle={{ height: "400px", width: "800px" }}
      >
        {/* Add a marker at the center */}
        
      </GoogleMap>
      <button onClick={handleUser_Location}>Get My Location</button>
    </LoadScript>
  );
};

export default ProfileMap;

