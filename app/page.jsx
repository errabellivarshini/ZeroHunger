import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Map, Sparkles, Timer } from "lucide-react";
const Hero3D = lazy(() =>
    import("@/components/hero-3d").then((module) => ({ default: module.Hero3D }))
);
const ImpactCharts = lazy(() =>
    import("@/components/impact-charts").then((module) => ({ default: module.ImpactCharts }))
);
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Counter } from "@/components/ui/counter";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { TiltCard } from "@/components/ui/tilt";
const features = [
    {
        title: "Smart Food Redistribution System",
        desc: "AI prioritizes time-sensitive surplus and routes it to the nearest verified partners.",
        icon: Sparkles
    },
    {
        title: "Real-Time Food Waste Tracker",
        desc: "Track surplus, expiry windows, pickups, and outcomes across the community.",
        icon: Timer
    },
    {
        title: "Community Food Sharing",
        desc: "Restaurants, supermarkets, and residents donate with clear pickup coordination.",
        icon: Map
    },
    {
        title: "AI Nutrition Advisor",
        desc: "Budget-friendly meal plans with calories and protein breakdown from available ingredients.",
        icon: Bot
    }
];
export default function HomePage() {
    return (_jsxs("div", { children: [_jsxs("section", { className: "relative overflow-hidden border-b border-border", children: [_jsx("div", { className: "pointer-events-none absolute inset-0 noise opacity-70" }), _jsx("div", { className: "absolute -top-24 left-1/2 h-72 w-[56rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" }), _jsxs(Container, { className: "relative grid gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:items-center", children: [_jsx(Reveal, { children: _jsxs("div", { children: [_jsx("h1", { className: "mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl", children: "Connecting Surplus Food to People in Need" }), _jsx("p", { className: "mt-4 max-w-xl text-pretty text-base text-muted-fg sm:text-lg", children: "A modern platform that reduces hunger and food waste by matching surplus food from donors with nearby NGOs, food banks, and volunteers\u2014powered by AI insights for smarter coordination." }), _jsxs("div", { className: "mt-7 flex flex-wrap gap-3", children: [_jsx(Link, { to: "/donate", children: _jsxs(Button, { size: "lg", children: ["Donate Food ", _jsx(ArrowRight, { className: "h-4 w-4" })] }) }), _jsx(Link, { to: "/request", children: _jsx(Button, { size: "lg", variant: "secondary", children: "Request Food" }) }), _jsx(Link, { to: "/locator", children: _jsx(Button, { size: "lg", variant: "ghost", className: "border border-border bg-bg", children: "Explore Food Banks" }) })] }), _jsxs("div", { className: "mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4", children: [_jsxs("div", { className: "rounded-lg border border-border bg-card px-4 py-3", children: [_jsx("div", { className: "text-xs text-muted-fg", children: "Meals saved" }), _jsx("div", { className: "mt-1 text-lg font-semibold", children: _jsx(Counter, { to: 128450, suffix: "+" }) })] }), _jsxs("div", { className: "rounded-lg border border-border bg-card px-4 py-3", children: [_jsx("div", { className: "text-xs text-muted-fg", children: "People supported" }), _jsx("div", { className: "mt-1 text-lg font-semibold", children: _jsx(Counter, { to: 36210, suffix: "+" }) })] }), _jsxs("div", { className: "rounded-lg border border-border bg-card px-4 py-3", children: [_jsx("div", { className: "text-xs text-muted-fg", children: "Active NGOs" }), _jsx("div", { className: "mt-1 text-lg font-semibold", children: _jsx(Counter, { to: 248, suffix: "+" }) })] }), _jsxs("div", { className: "rounded-lg border border-border bg-card px-4 py-3", children: [_jsx("div", { className: "text-xs text-muted-fg", children: "Food donors" }), _jsx("div", { className: "mt-1 text-lg font-semibold", children: _jsx(Counter, { to: 1240, suffix: "+" }) })] })] })] }) }), _jsx(Reveal, { delay: 0.1, children: _jsx(Suspense, { fallback: _jsx("div", { className: "min-h-48 animate-pulse rounded-2xl bg-muted/40", "aria-label": "Loading 3D visualization" }), children: _jsx(Hero3D, {}) }) })] })] }), _jsxs(Section, { children: [_jsx(SectionHeading, { eyebrow: "Platform capabilities", title: "Built like a modern social impact SaaS", description: "Clear workflows for donors, NGOs, volunteers, and families\u2014plus AI-powered insights that reduce waste and improve access.", align: "center" }), _jsx(Container, { children: _jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: features.map((f, idx) => {
                                const Icon = f.icon;
                                return (_jsx(Reveal, { delay: idx * 0.05, children: _jsx(TiltCard, { className: "h-full", children: _jsxs("div", { className: "p-5", children: [_jsx("div", { className: "mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-muted text-primary", children: _jsx(Icon, { className: "h-5 w-5" }) }), _jsx("div", { className: "text-sm font-semibold", children: f.title }), _jsx("div", { className: "mt-2 text-sm text-muted-fg", children: f.desc })] }) }) }, f.title));
                            }) }) })] }), _jsxs(Section, { className: "border-y border-border bg-muted/30", children: [_jsx(SectionHeading, { eyebrow: "How it works", title: "From surplus to support in three steps", description: "Fast reporting, smart matching, and reliable delivery\u2014optimized with AI signals like distance, expiry windows, and demand." }), _jsx(Container, { children: _jsxs("div", { className: "grid gap-4 lg:grid-cols-3", children: [_jsx(Reveal, { children: _jsxs(Card, { className: "h-full", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Step 1 \u00B7 Report Surplus Food" }), _jsx(CardDescription, { children: "Donors submit food type, quantity, pickup details, and expiry time." })] }), _jsx(CardContent, { children: _jsx("div", { className: "text-sm text-muted-fg", children: "Automatic validation flags risky items and prioritizes time-sensitive donations." }) })] }) }), _jsx(Reveal, { delay: 0.05, children: _jsxs(Card, { className: "h-full", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Step 2 \u00B7 AI Matches Nearby NGOs" }), _jsx(CardDescription, { children: "The matching engine ranks partners by proximity, capacity, and dietary needs." })] }), _jsx(CardContent, { children: _jsx("div", { className: "text-sm text-muted-fg", children: "Live notifications go to eligible NGOs and volunteer networks for quick pickup." }) })] }) }), _jsx(Reveal, { delay: 0.1, children: _jsxs(Card, { className: "h-full", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Step 3 \u00B7 Volunteers Deliver Food" }), _jsx(CardDescription, { children: "Pickup scheduling, route suggestions, and delivery confirmation." })] }), _jsx(CardContent, { children: _jsx("div", { className: "text-sm text-muted-fg", children: "Outcomes are tracked end-to-end to improve reliability and transparency." }) })] }) })] }) })] }), _jsxs(Section, { children: [_jsx(SectionHeading, { eyebrow: "Impact visualization", title: "See hunger reduction and waste prevention", description: "Charts and analytics help communities identify surplus patterns, high-need areas, and the most effective distribution routes." }), _jsx(Container, { children: _jsx(Suspense, { fallback: _jsx("div", { className: "min-h-64 animate-pulse rounded-2xl bg-muted/40", "aria-label": "Loading impact charts" }), children: _jsx(ImpactCharts, {}) }) })] }), _jsx(Section, { className: "border-t border-border", children: _jsx(Container, { children: _jsxs("div", { className: "grid gap-6 rounded-2xl border border-border bg-card p-8 lg:grid-cols-2 lg:items-center", children: [_jsxs("div", { children: [_jsx("div", { className: "text-xs font-medium text-muted-fg", children: "Start now" }), _jsx("div", { className: "mt-2 text-2xl font-semibold tracking-tight", children: "Turn leftover food into reliable support\u2014today." }), _jsx("p", { className: "mt-3 text-sm text-muted-fg", children: "Create a donation or a request in under a minute. NGOs get prioritized alerts and volunteers get clear pickup details." })] }), _jsxs("div", { className: "flex flex-wrap gap-3 lg:justify-end", children: [_jsx(Link, { to: "/donate", children: _jsx(Button, { size: "lg", children: "Donate Food" }) }), _jsx(Link, { to: "/request", children: _jsx(Button, { size: "lg", variant: "secondary", children: "Request Food" }) })] })] }) }) })] }));
}
