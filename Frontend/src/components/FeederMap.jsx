import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom icon for feeders
const petIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
  iconSize: [30, 30]
});

const FeederMap = ({ feeders }) => (
  <MapContainer center={[28.61, 77.20]} zoom={5} style={{ height: '400px', width: '100%' }}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {feeders.map(feeder => (
      <Marker
        key={feeder._id}
        position={[feeder.location.lat, feeder.location.lng]}
        icon={petIcon}
      >
        <Popup>
          <strong>{feeder.name}</strong><br />
          Food Level: {feeder.foodLevel}%<br />
          {feeder.needsRefill ? "⚠️ Needs Refill" : "✅ OK"}
        </Popup>
      </Marker>
    ))}
  </MapContainer>
);

export default FeederMap;
