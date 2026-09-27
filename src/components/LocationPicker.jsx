import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

function LocationMarker({ position, onPositionChange }) {
  useMapEvents({
    click(e) {
      onPositionChange({ lat: e.latlng.lat, lng: e.latlng.lng });
    },
  });

  return position ? <Marker position={[position.lat, position.lng]} /> : null;
}

function LocationPicker({ position, onPositionChange }) {
  const defaultCenter = position
    ? [position.lat, position.lng]
    : [-1.9441, 30.0619]; // Kigali, as a sensible default center

  return (
    <div className="rounded-lg overflow-hidden border border-gray-300">
      <MapContainer
        center={defaultCenter}
        zoom={13}
        style={{ height: "300px", width: "100%" }}
        key={position ? `${position.lat}-${position.lng}` : "default"}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker position={position} onPositionChange={onPositionChange} />
      </MapContainer>
    </div>
  );
}

export default LocationPicker;