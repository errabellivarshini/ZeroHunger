import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/container";
export function Footer() {
    return (_jsx("footer", { className: "border-t border-border bg-bg", children: _jsxs(Container, { className: "flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between", children: [_jsxs("div", { children: [_jsx("div", { className: "text-sm font-semibold tracking-tight", children: "Zero Hunger Platform" }), _jsx("div", { className: "mt-1 text-xs text-muted-fg", children: "Reduce food waste. Improve access. Powered by AI insights." })] }), _jsxs("div", { className: "flex flex-wrap gap-4 text-sm text-muted-fg", children: [_jsx(Link, { className: "hover:text-fg", to: "/locator", children: "Food Bank Locator" }), _jsx(Link, { className: "hover:text-fg", to: "/dashboard/ngo", children: "NGO Dashboard" }), _jsx(Link, { className: "hover:text-fg", to: "/nutrition-advisor", children: "AI Nutrition Advisor" })] })] }) }));
}
