import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { CalendarClock, CheckCircle2, ClipboardList, Route, Users } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const initialPickups = [
    { id: "p1", donor: "Sunset Bistro", food: "Prepared meals", quantityMeals: 120, eta: "Today · 4:30pm", status: "new" },
    { id: "p2", donor: "Green Market Co.", food: "Produce", quantityMeals: 80, eta: "Today · 6:15pm", status: "scheduled" },
    { id: "p3", donor: "Central Bakery", food: "Bakery", quantityMeals: 60, eta: "Tomorrow · 10:00am", status: "picked" }
];
const performance = [
    { day: "Mon", deliveries: 22, ontime: 20 },
    { day: "Tue", deliveries: 26, ontime: 25 },
    { day: "Wed", deliveries: 19, ontime: 17 },
    { day: "Thu", deliveries: 28, ontime: 26 },
    { day: "Fri", deliveries: 32, ontime: 30 },
    { day: "Sat", deliveries: 24, ontime: 23 },
    { day: "Sun", deliveries: 18, ontime: 17 }
];
const volunteers = [
    { id: "v1", name: "Amina", role: "Driver", availability: "Now" },
    { id: "v2", name: "Jordan", role: "Runner", availability: "2–4pm" },
    { id: "v3", name: "Maya", role: "Driver", availability: "Evening" }
];
function StatusPill({ status }) {
    const label = status === "new" ? "New" : status === "scheduled" ? "Scheduled" : status === "picked" ? "Picked" : "Delivered";
    return (_jsx("span", { className: "inline-flex items-center rounded-full border border-border bg-muted/50 px-2.5 py-1 text-[11px] font-medium text-muted-fg", children: label }));
}
function Tip({ active, payload, label }) {
    if (!active || !payload?.length)
        return null;
    return (_jsxs("div", { className: "rounded-lg border border-border bg-card px-3 py-2 text-xs shadow-sm", children: [_jsx("div", { className: "font-medium text-fg", children: label }), _jsx("div", { className: "mt-1 space-y-1 text-muted-fg", children: payload.map((p) => (_jsxs("div", { className: "flex items-center justify-between gap-4", children: [_jsx("span", { className: "capitalize", children: p.dataKey }), _jsx("span", { className: "font-medium text-fg", children: p.value })] }, p.dataKey))) })] }));
}
export function NgoDashboard() {
    const [pickups, setPickups] = React.useState(initialPickups);
    function advance(id) {
        setPickups((prev) => prev.map((p) => {
            if (p.id !== id)
                return p;
            const next = p.status === "new" ? "scheduled" : p.status === "scheduled" ? "picked" : p.status === "picked" ? "delivered" : "delivered";
            return { ...p, status: next };
        }));
    }
    return (_jsxs("div", { className: "grid gap-4 lg:grid-cols-[1.1fr_.9fr]", children: [_jsxs("div", { className: "space-y-4", children: [_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(ClipboardList, { className: "h-5 w-5 text-primary" }), "Food donation requests"] }), _jsx(CardDescription, { children: "Review, schedule pickup, and track delivery outcomes." })] }), _jsx(CardContent, { className: "grid gap-3", children: pickups.map((p) => (_jsx("div", { className: "rounded-xl border border-border bg-card p-4", children: _jsxs("div", { className: "flex flex-wrap items-start justify-between gap-3", children: [_jsxs("div", { children: [_jsx("div", { className: "text-sm font-semibold", children: p.donor }), _jsxs("div", { className: "mt-1 text-xs text-muted-fg", children: [p.food, " \u00B7 ", p.quantityMeals, " meals \u00B7 ", p.eta] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(StatusPill, { status: p.status }), _jsx(Button, { size: "sm", variant: p.status === "delivered" ? "secondary" : "primary", onClick: () => advance(p.id), disabled: p.status === "delivered", children: p.status === "new"
                                                            ? "Schedule"
                                                            : p.status === "scheduled"
                                                                ? "Mark picked"
                                                                : p.status === "picked"
                                                                    ? "Mark delivered"
                                                                    : "Done" })] })] }) }, p.id))) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Route, { className: "h-5 w-5 text-primary" }), "Distribution tracking"] }), _jsx(CardDescription, { children: "Demo analytics: deliveries and on-time performance." })] }), _jsx(CardContent, { className: "h-64", children: _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(LineChart, { data: performance, margin: { top: 10, left: 0, right: 10, bottom: 0 }, children: [_jsx(CartesianGrid, { stroke: "hsl(var(--border))", strokeDasharray: "4 6" }), _jsx(XAxis, { dataKey: "day", tick: { fill: "hsl(var(--muted-fg))", fontSize: 12 }, axisLine: false, tickLine: false }), _jsx(YAxis, { tick: { fill: "hsl(var(--muted-fg))", fontSize: 12 }, axisLine: false, tickLine: false }), _jsx(Tooltip, { content: _jsx(Tip, {}) }), _jsx(Line, { type: "monotone", dataKey: "deliveries", stroke: "hsl(var(--muted-fg))", strokeWidth: 2, dot: false }), _jsx(Line, { type: "monotone", dataKey: "ontime", stroke: "hsl(var(--primary))", strokeWidth: 2, dot: false })] }) }) })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(CalendarClock, { className: "h-5 w-5 text-primary" }), "Pickup scheduling"] }), _jsx(CardDescription, { children: "Suggested windows based on expiry, travel time, and volunteer availability." })] }), _jsxs(CardContent, { className: "grid gap-3", children: [_jsxs("div", { className: "rounded-xl border border-border bg-muted/30 p-4", children: [_jsx("div", { className: "text-sm font-semibold", children: "AI suggestions" }), _jsxs("ul", { className: "mt-2 list-disc pl-5 text-sm text-muted-fg", children: [_jsx("li", { children: "Prioritize donations expiring within 6 hours." }), _jsx("li", { children: "Batch pickups in the same zone to reduce travel time." }), _jsx("li", { children: "Assign a driver + runner duo for high-quantity pickups." })] })] }), _jsx("div", { className: "rounded-xl border border-border bg-card p-4", children: _jsxs("div", { className: "flex items-start gap-3", children: [_jsx(CheckCircle2, { className: "mt-0.5 h-5 w-5 text-primary" }), _jsxs("div", { children: [_jsx("div", { className: "text-sm font-semibold", children: "Auto-notifications enabled" }), _jsx("div", { className: "mt-1 text-sm text-muted-fg", children: "Donors and volunteers receive status updates when pickup state changes." })] })] }) })] })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsxs(CardTitle, { className: "flex items-center gap-2", children: [_jsx(Users, { className: "h-5 w-5 text-primary" }), "Volunteer coordination"] }), _jsx(CardDescription, { children: "Assign volunteers to pickups and track availability." })] }), _jsx(CardContent, { className: "grid gap-3", children: volunteers.map((v) => (_jsxs("div", { className: "flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-4", children: [_jsxs("div", { children: [_jsx("div", { className: "text-sm font-semibold", children: v.name }), _jsxs("div", { className: "mt-1 text-xs text-muted-fg", children: [v.role, " \u00B7 Availability: ", v.availability] })] }), _jsx(Button, { size: "sm", variant: "secondary", children: "Assign" })] }, v.id))) })] })] })] }));
}
