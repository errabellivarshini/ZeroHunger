import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
const wasteSeries = [
    { month: "Jan", saved: 280, wasted: 420 },
    { month: "Feb", saved: 360, wasted: 380 },
    { month: "Mar", saved: 460, wasted: 320 },
    { month: "Apr", saved: 540, wasted: 290 },
    { month: "May", saved: 650, wasted: 250 },
    { month: "Jun", saved: 740, wasted: 220 }
];
const distributionSeries = [
    { zone: "North", deliveries: 124, ontime: 112 },
    { zone: "East", deliveries: 156, ontime: 141 },
    { zone: "South", deliveries: 118, ontime: 104 },
    { zone: "West", deliveries: 172, ontime: 160 }
];
function Tip({ active, payload, label }) {
    if (!active || !payload?.length)
        return null;
    return (_jsxs("div", { className: "rounded-lg border border-border bg-card px-3 py-2 text-xs shadow-sm", children: [_jsx("div", { className: "font-medium text-fg", children: label }), _jsx("div", { className: "mt-1 space-y-1 text-muted-fg", children: payload.map((p) => (_jsxs("div", { className: "flex items-center justify-between gap-4", children: [_jsx("span", { className: "capitalize", children: p.name ?? p.dataKey }), _jsx("span", { className: "font-medium text-fg", children: p.value })] }, p.dataKey))) })] }));
}
export function ImpactCharts() {
    return (_jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [_jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Waste Reduction Trend" }), _jsx(CardDescription, { children: "Meals saved vs meals wasted over the last six months." })] }), _jsx(CardContent, { className: "h-64", children: _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(AreaChart, { data: wasteSeries, margin: { top: 10, left: 0, right: 10, bottom: 0 }, children: [_jsxs("defs", { children: [_jsxs("linearGradient", { id: "savedFill", x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "0%", stopColor: "hsl(var(--primary))", stopOpacity: 0.35 }), _jsx("stop", { offset: "100%", stopColor: "hsl(var(--primary))", stopOpacity: 0.02 })] }), _jsxs("linearGradient", { id: "wastedFill", x1: "0", y1: "0", x2: "0", y2: "1", children: [_jsx("stop", { offset: "0%", stopColor: "hsl(var(--muted-fg))", stopOpacity: 0.25 }), _jsx("stop", { offset: "100%", stopColor: "hsl(var(--muted-fg))", stopOpacity: 0.02 })] })] }), _jsx(CartesianGrid, { stroke: "hsl(var(--border))", strokeDasharray: "4 6" }), _jsx(XAxis, { dataKey: "month", tick: { fill: "hsl(var(--muted-fg))", fontSize: 12 }, axisLine: false, tickLine: false }), _jsx(YAxis, { tick: { fill: "hsl(var(--muted-fg))", fontSize: 12 }, axisLine: false, tickLine: false }), _jsx(Tooltip, { content: _jsx(Tip, {}) }), _jsx(Area, { type: "monotone", dataKey: "saved", name: "saved", stroke: "hsl(var(--primary))", fill: "url(#savedFill)", strokeWidth: 2 }), _jsx(Area, { type: "monotone", dataKey: "wasted", name: "wasted", stroke: "hsl(var(--muted-fg))", fill: "url(#wastedFill)", strokeWidth: 2 })] }) }) })] }), _jsxs(Card, { children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Delivery Reliability" }), _jsx(CardDescription, { children: "Deliveries vs on-time deliveries by zone (demo data)." })] }), _jsx(CardContent, { className: "h-64", children: _jsx(ResponsiveContainer, { width: "100%", height: "100%", children: _jsxs(BarChart, { data: distributionSeries, margin: { top: 10, left: 0, right: 10, bottom: 0 }, children: [_jsx(CartesianGrid, { stroke: "hsl(var(--border))", strokeDasharray: "4 6" }), _jsx(XAxis, { dataKey: "zone", tick: { fill: "hsl(var(--muted-fg))", fontSize: 12 }, axisLine: false, tickLine: false }), _jsx(YAxis, { tick: { fill: "hsl(var(--muted-fg))", fontSize: 12 }, axisLine: false, tickLine: false }), _jsx(Tooltip, { content: _jsx(Tip, {}) }), _jsx(Bar, { dataKey: "deliveries", fill: "hsl(var(--muted))", radius: [8, 8, 0, 0] }), _jsx(Bar, { dataKey: "ontime", fill: "hsl(var(--primary))", radius: [8, 8, 0, 0] })] }) }) })] })] }));
}
