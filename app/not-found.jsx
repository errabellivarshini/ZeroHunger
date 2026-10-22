import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
export default function NotFound() {
    return (_jsx(Container, { className: "py-24", children: _jsxs("div", { className: "rounded-xl border border-border bg-card p-8", children: [_jsx("h1", { className: "text-2xl font-semibold tracking-tight", children: "Page not found" }), _jsx("p", { className: "mt-2 text-sm text-muted-fg", children: "The page you\u2019re looking for doesn\u2019t exist or has moved." }), _jsxs("div", { className: "mt-6 flex gap-3", children: [_jsx(Link, { to: "/", children: _jsx(Button, { children: "Back to home" }) }), _jsx(Link, { to: "/locator", children: _jsx(Button, { variant: "secondary", children: "Find food banks" }) })] })] }) }));
}
