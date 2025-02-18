import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom heart-shaped marker icon
const heartIcon = new L.Icon({
  iconUrl: "/icons/heart.png", // Update to local path
  iconSize: [32, 32], // Icon size
  iconAnchor: [16, 32], // Anchor point for the icon
  popupAnchor: [0, -32] // Position of the popup relative to the icon
});

// Component to open popups programmatically
const AutoOpenPopup = ({ position, content }) => {
  const map = useMap();

  useEffect(() => {
    const popup = L.popup({ closeButton: false, autoClose: false })
      .setLatLng(position)
      .setContent(content);
    map.openPopup(popup);
  }, [map, position, content]);

  return null;
};

const LoveMap = () => {
  // Coordinates for locations
  const positions = [
    { name: "You (HCLTech)", coords: [28.5545, 77.3385] }, // Noida
    { name: "Your Shekhawat (Pilani)", coords: [28.3700, 75.5871] } // Pilani
  ];

  return (
    <div style={{ height: "500px", width: "100%", marginTop: "20px", borderRadius: "15px", overflow: "hidden", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}>
      <MapContainer
        center={[28.4920, 76.3981]} // Center of the map (midpoint between Noida and Pilani)
        zoom={10} // Initial zoom level
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {positions.map((position, index) => (
          <Marker key={index} position={position.coords} icon={heartIcon}>
            <Popup>
              <strong>{position.name}</strong>
              <br />
              <em>Thinking of you from here ❤️</em>
            </Popup>
            <AutoOpenPopup
              position={position.coords}
              content={`<strong>${position.name}</strong><br /><em>Thinking of you from here ❤️</em>`}
            />
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LoveMap;
