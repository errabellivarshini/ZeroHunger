import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import * as React from "react";
import { RISK_AREAS } from "@/lib/mock-data";
const routes = [
    {
        id: "r1",
        from: { lat: 37.7922, lng: -122.401 },
        to: { lat: 37.7603, lng: -122.4182 },
        label: "Surplus → High-need zone"
    },
    {
        id: "r2",
        from: { lat: 34.0566, lng: -118.2365 },
        to: { lat: 34.028, lng: -118.278 },
        label: "Food bank → Community kitchen"
    },
    {
        id: "r3",
        from: { lat: 40.741, lng: -73.9897 },
        to: { lat: 40.733, lng: -73.98 },
        label: "Bakery surplus → Shelter zone"
    }
];
export function RiskMap({ center }) {
    const mapRef = React.useRef(null);
    const mapInstanceRef = React.useRef(null);
    React.useEffect(() => {
        if (!mapRef.current)
            return;
        let disposed = false;
        (async () => {
            delete L.Icon.Default.prototype._getIconUrl;
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
                iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
                shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
            });
            if (disposed || !mapRef.current)
                return;
            if (!mapInstanceRef.current) {
                mapInstanceRef.current = L.map(mapRef.current, {
                    zoomControl: true,
                    scrollWheelZoom: false,
                    attributionControl: true
                }).setView([center.lat, center.lng], 5);
                L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                }).addTo(mapInstanceRef.current);
            }
            const map = mapInstanceRef.current;
            map.setView([center.lat, center.lng], 5);
            map.eachLayer((layer) => {
                if (layer?.options?.attribution !== undefined || layer?.options?.className === "leaflet-tile") {
                    return;
                }
                if (layer !== map) {
                    map.removeLayer(layer);
                }
            });
            RISK_AREAS.forEach((a) => {
                const circle = L.circle([a.coords.lat, a.coords.lng], {
                    radius: 22000,
                    color: "hsl(var(--primary))",
                    weight: 2,
                    fillColor: "hsl(var(--primary))",
                    fillOpacity: Math.max(0.15, Math.min(0.65, a.riskIndex / 120))
                }).addTo(map);
                circle.bindPopup(`<div class="text-sm font-semibold">Hunger risk index: ${a.riskIndex}</div><div class="mt-1 text-xs opacity-80">${a.notes}</div>`);
            });
            routes.forEach((r) => {
                L.polyline([
                    [r.from.lat, r.from.lng],
                    [(r.from.lat + r.to.lat) / 2, (r.from.lng + r.to.lng) / 2],
                    [r.to.lat, r.to.lng]
                ], {
                    color: "hsl(var(--ring))",
                    weight: 3,
                    opacity: 0.55
                }).addTo(map);
            });
        })();
        return () => {
            disposed = true;
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, [center.lat, center.lng]);
    return (_jsxs("div", { className: "relative h-[560px] overflow-hidden rounded-2xl border border-border bg-card shadow-sm", children: [_jsx("div", { ref: mapRef, className: "h-full w-full" }), _jsx("div", { className: "pointer-events-none absolute inset-x-0 top-0 border-b border-border bg-bg/70 p-3 text-xs text-muted-fg backdrop-blur", children: "Risk overlay + distribution routes \u00B7 Demo visualization for resource allocation" })] }));
}
