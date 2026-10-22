import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import * as React from "react";
import { Leaf, LayoutDashboard, MapPinned, Sparkles, HandHeart, Hand, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
const nav = [
    { to: "/donate", label: "Donate", icon: HandHeart },
    { to: "/request", label: "Request", icon: Hand },
    { to: "/locator", label: "Food Banks", icon: MapPinned },
    { to: "/dashboard/ngo", label: "NGO Dashboard", icon: LayoutDashboard },
    { to: "/risk-map", label: "Hunger Risk", icon: BarChart3 },
    { to: "/nutrition-advisor", label: "AI Advisor", icon: Sparkles }
];
function useTheme() {
    const [theme, setTheme] = React.useState("light");
    React.useEffect(() => {
        const root = document.documentElement;
        const stored = window.localStorage.getItem("theme");
        const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
        const initial = (stored === "dark" || stored === "light"
            ? stored
            : prefersDark
                ? "dark"
                : "light");
        root.dataset.theme = initial;
        setTheme(initial);
    }, []);
    function toggle() {
        const next = theme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = next;
        window.localStorage.setItem("theme", next);
        setTheme(next);
        window.dispatchEvent(new Event("theme-change"));
    }
    return { theme, toggle };
}
export function Navbar() {
    const { pathname } = useLocation();
    const { theme, toggle } = useTheme();
    return (_jsxs("header", { className: "sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur supports-[backdrop-filter]:bg-bg/60", children: [_jsxs(Container, { className: "flex h-16 items-center justify-between", children: [_jsxs(Link, { to: "/", className: "group inline-flex items-center gap-2", children: [_jsx("span", { className: "grid h-9 w-9 place-items-center rounded-lg border border-border bg-card shadow-sm transition group-hover:shadow-glow", children: _jsx(Leaf, { className: "h-5 w-5 text-primary" }) }), _jsxs("div", { className: "leading-tight", children: [_jsx("div", { className: "text-sm font-semibold tracking-tight", children: "Zero Hunger" }), _jsx("div", { className: "text-xs text-muted-fg", children: "SDG 02 Platform" })] })] }), _jsx("nav", { className: "hidden items-center gap-1 lg:flex", children: nav.map((item) => {
                            const active = pathname === item.to;
                            const Icon = item.icon;
                            return (_jsxs(Link, { to: item.to, className: cn("inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm transition", active ? "bg-muted text-fg" : "text-muted-fg hover:bg-muted/70 hover:text-fg"), children: [_jsx(Icon, { className: "h-4 w-4" }), item.label] }, item.to));
                        }) }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Button, { variant: "secondary", size: "sm", onClick: toggle, "aria-label": "Toggle theme", children: theme === "dark" ? "Light" : "Dark" }), _jsx(Link, { to: "/donate", className: "hidden sm:block", children: _jsx(Button, { size: "sm", children: "Get Started" }) })] })] }), _jsx("div", { className: "lg:hidden", children: _jsx(Container, { className: "pb-3", children: _jsx("div", { className: "flex flex-wrap gap-2", children: nav.slice(0, 4).map((item) => {
                            const active = pathname === item.to;
                            return (_jsx(Link, { to: item.to, className: cn("rounded-full border px-3 py-2 text-xs transition", active
                                    ? "border-border bg-muted text-fg"
                                    : "border-border/70 bg-card text-muted-fg hover:bg-muted/70 hover:text-fg"), children: item.label }, item.to));
                        }) }) }) })] }));
}
