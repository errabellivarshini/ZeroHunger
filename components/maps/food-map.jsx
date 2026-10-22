import * as React from "react";
import "leaflet/dist/leaflet.css";
import * as Leaflet from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export function FoodMap({ center, pins }) {
  React.useEffect(() => {
    delete Leaflet.Icon.Default.prototype._getIconUrl;
    Leaflet.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
    });
  }, []);

  return (
    <div className="relative h-[520px] overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={12}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {pins.map((pin) => (
          <Marker
            key={pin.id}
            position={[pin.coords.lat, pin.coords.lng]}
          >
            <Popup>
              <div className="text-sm font-semibold">{pin.label}</div>
              {pin.meta ? (
                <div className="mt-1 text-xs opacity-80">{pin.meta}</div>
              ) : null}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="pointer-events-none absolute inset-x-0 top-0 border-b border-border bg-bg/70 p-3 text-xs text-muted-fg backdrop-blur">
        Interactive map · OpenStreetMap tiles · Filters update pins
      </div>
    </div>
  );
}
