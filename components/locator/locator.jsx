import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Filter, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input, Label, Select } from "@/components/ui/field";
import { FoodMap } from "@/components/maps/food-map";
import { coordsForLocationId, LOCATION_OPTIONS } from "@/lib/locations";
import { FOOD_BANKS, NGOS } from "@/lib/mock-data";
import { kmBetween } from "@/lib/geo";
export function Locator() {
    const [cityId, setCityId] = React.useState(LOCATION_OPTIONS[0].id);
    const [maxKm, setMaxKm] = React.useState(12);
    const [availability, setAvailability] = React.useState("any");
    const [mealType, setMealType] = React.useState("any");
    const center = coordsForLocationId(cityId);
    const pins = React.useMemo(() => {
        const banks = FOOD_BANKS.map((b) => {
            const km = kmBetween(center, b.coords);
            const okAvail = availability === "any" ? true : b.availability === availability;
            const okMeal = mealType === "any" ? true : b.mealTypes.includes(mealType);
            const okCity = b.cityId === cityId;
            const ok = okCity && km <= maxKm && okAvail && okMeal;
            return ok
                ? {
                    id: b.id,
                    label: b.name,
                    coords: b.coords,
                    meta: `Food bank · ${b.availability} · ${km.toFixed(1)} km`
                }
                : null;
        });
        const ngos = NGOS.map((n) => {
            const km = kmBetween(center, n.coords);
            const okCity = n.cityId === cityId;
            const ok = okCity && km <= maxKm;
            return ok
                ? {
                    id: n.id,
                    label: n.name,
                    coords: n.coords,
                    meta: `NGO center · ${n.accepting ? "accepting" : "paused"} · ${km.toFixed(1)} km`
                }
                : null;
        });
        return [...banks, ...ngos].filter((p) => Boolean(p));
    }, [availability, center, cityId, maxKm, mealType]);
    const list = React.useMemo(() => {
        const items = [
            ...FOOD_BANKS.filter((b) => b.cityId === cityId).map((b) => ({
                id: b.id,
                kind: "Food bank",
                title: b.name,
                subtitle: `Availability: ${b.availability} · Meals: ${b.mealTypes.join(", ")} · ${b.hours}`,
                km: kmBetween(center, b.coords),
                coords: b.coords
            })),
            ...NGOS.filter((n) => n.cityId === cityId).map((n) => ({
                id: n.id,
                kind: "NGO center",
                title: n.name,
                subtitle: `Capacity: ${n.capacityMealsPerDay.toLocaleString()}/day · ${n.accepting ? "Accepting" : "Paused"} · Tags: ${n.tags.join(", ")}`,
                km: kmBetween(center, n.coords),
                coords: n.coords
            }))
        ];
        return items
            .filter((it) => it.km <= maxKm)
            .filter((it) => {
            if (it.kind !== "Food bank")
                return true;
            if (availability === "any")
                return true;
            const b = FOOD_BANKS.find((x) => x.id === it.id);
            return b?.availability === availability;
        })
            .filter((it) => {
            if (it.kind !== "Food bank")
                return true;
            if (mealType === "any")
                return true;
            const b = FOOD_BANKS.find((x) => x.id === it.id);
            return b?.mealTypes.includes(mealType);
        })
            .sort((a, b) => a.km - b.km);
    }, [availability, center, cityId, maxKm, mealType]);
    return (_jsxs("div", { className: "grid gap-4 lg:grid-cols-[1fr_.9fr]", children: [_jsxs(Card, { className: "h-fit", children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Filter, { className: "h-5 w-5 text-primary" }), "Filters"] }), _jsx(CardDescription, { children: "Filter by distance, availability, and meal type." })] }), _jsxs(CardContent, { className: "grid gap-4 sm:grid-cols-2", children: [_jsxs("div", { className: "sm:col-span-2", children: [_jsx(Label, { children: "City" }), _jsx(Select, { value: cityId, onChange: (e) => setCityId(e.target.value), children: LOCATION_OPTIONS.map((o) => (_jsx("option", { value: o.id, children: o.label }, o.id))) })] }), _jsxs("div", { children: [_jsx(Label, { children: "Max distance (km)" }), _jsx(Input, { type: "number", min: 2, max: 50, value: maxKm, onChange: (e) => setMaxKm(Number(e.target.value)) })] }), _jsxs("div", { children: [_jsx(Label, { children: "Availability" }), _jsxs(Select, { value: availability, onChange: (e) => setAvailability(e.target.value), children: [_jsx("option", { value: "any", children: "Any" }), _jsx("option", { value: "high", children: "High" }), _jsx("option", { value: "medium", children: "Medium" }), _jsx("option", { value: "low", children: "Low" })] })] }), _jsxs("div", { className: "sm:col-span-2", children: [_jsx(Label, { children: "Meal type" }), _jsxs(Select, { value: mealType, onChange: (e) => setMealType(e.target.value), children: [_jsx("option", { value: "any", children: "Any" }), _jsx("option", { value: "hot-meals", children: "Hot meals" }), _jsx("option", { value: "dry-goods", children: "Dry goods" }), _jsx("option", { value: "fresh", children: "Fresh" })] })] }), _jsxs("div", { className: "sm:col-span-2 mt-2 flex items-center justify-between gap-3", children: [_jsxs("div", { className: "text-xs text-muted-fg", children: [list.length, " results within ", maxKm, " km"] }), _jsx(Button, { variant: "secondary", onClick: () => {
                                            setMaxKm(12);
                                            setAvailability("any");
                                            setMealType("any");
                                        }, children: "Reset" })] }), _jsx("div", { className: "sm:col-span-2 mt-2 grid gap-3", children: list.map((it) => (_jsx("div", { className: "rounded-xl border border-border bg-card p-4", children: _jsxs("div", { className: "flex items-start justify-between gap-3", children: [_jsxs("div", { children: [_jsx("div", { className: "text-xs font-medium text-muted-fg", children: it.kind }), _jsx("div", { className: "mt-1 text-sm font-semibold", children: it.title }), _jsx("div", { className: "mt-1 text-xs text-muted-fg", children: it.subtitle })] }), _jsxs("div", { className: "text-right", children: [_jsxs("div", { className: "text-xs font-medium text-muted-fg", children: [it.km.toFixed(1), " km"] }), _jsxs("div", { className: "mt-2 inline-flex items-center gap-2 text-xs text-muted-fg", children: [_jsx(MapPin, { className: "h-4 w-4" }), " ", it.coords.lat.toFixed(3), ", ", it.coords.lng.toFixed(3)] })] })] }) }, it.id))) })] })] }), _jsx(FoodMap, { center: center, pins: pins })] }));
}
