import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NgoDashboard } from "@/components/dashboard/ngo-dashboard";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
export default function NgoDashboardPage() {
    return (_jsx("div", { children: _jsxs(Section, { className: "pb-10", children: [_jsx(SectionHeading, { eyebrow: "NGO dashboard", title: "Manage pickups, distribution, and volunteers", description: "A clean dashboard for food donation requests, pickup scheduling, distribution tracking, and volunteer coordination." }), _jsx(Container, { children: _jsx(NgoDashboard, {}) })] }) }));
}
