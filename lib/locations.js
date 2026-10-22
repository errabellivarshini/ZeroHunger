export const LOCATION_OPTIONS = [
    { id: "sf", label: "San Francisco, CA", coords: { lat: 37.7749, lng: -122.4194 } },
    { id: "la", label: "Los Angeles, CA", coords: { lat: 34.0522, lng: -118.2437 } },
    { id: "chi", label: "Chicago, IL", coords: { lat: 41.8781, lng: -87.6298 } },
    { id: "nyc", label: "New York, NY", coords: { lat: 40.7128, lng: -74.006 } },
    { id: "hou", label: "Houston, TX", coords: { lat: 29.7604, lng: -95.3698 } },
    { id: "sea", label: "Seattle, WA", coords: { lat: 47.6062, lng: -122.3321 } }
];
export function coordsForLocationId(id) {
    const hit = LOCATION_OPTIONS.find((o) => o.id === id);
    return hit?.coords ?? LOCATION_OPTIONS[0].coords;
}
