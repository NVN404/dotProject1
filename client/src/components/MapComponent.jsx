import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const AutoOpenPopup = ({ markerRef }) => {
  const map = useMap();

  useEffect(() => {
    if (markerRef.current) {
      setTimeout(() => {
        markerRef.current.openPopup();
      }, 500); // Delay to ensure map renders first
    }
  }, [map, markerRef]);

  return null;
};

const MapComponent = () => {
  const position = [13.2382, 77.2414]; // Dobbespet Public School
  const markerRef = useRef(null);

  return (
    <MapContainer
      center={position}
      zoom={12}
      className="h-full w-full rounded-md shadow-md z-0"
      scrollWheelZoom={false}  // Disable scroll zoom
      doubleClickZoom={false}  // Disable double-click zoom
      touchZoom={true}  // Disable pinch zoom
      zoomControl={true} // Enable zoom control buttons
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} ref={markerRef}>
        <Popup>📍 Dobbespet Public School</Popup>
      </Marker>
      <AutoOpenPopup markerRef={markerRef} />
    </MapContainer>
  );
};

export default MapComponent;
