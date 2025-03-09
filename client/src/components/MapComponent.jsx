import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Custom marker icon
const customIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const AutoOpenPopup = ({ markerRef }) => {
  const map = useMap();

  useEffect(() => {
    if (markerRef.current) {
      setTimeout(() => markerRef.current.openPopup(), 500);
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
      className="h-full w-full rounded-md shadow-md -z-50"
      scrollWheelZoom={false}
      doubleClickZoom={false}
      touchZoom={true}
      zoomControl={true}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} ref={markerRef} icon={customIcon}>
        <Popup>
          <div className="w-[12.8em] flex items-center justify-between">
            <img src="/DobbespetPublicSchool.png" alt="Dobbespet Public School" className="h-5" />
            <span>Dobbespet Public School</span>
          </div>
        </Popup>
      </Marker>
      <AutoOpenPopup markerRef={markerRef} />
    </MapContainer>
  );
};

export default MapComponent;
