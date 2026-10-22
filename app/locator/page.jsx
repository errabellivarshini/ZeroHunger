import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Locator } from "@/components/locator/locator";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
export default function LocatorPage() {
    return (_jsx("div", { children: _jsxs(Section, { className: "pb-10", children: [_jsx(SectionHeading, { eyebrow: "Food bank locator", title: "Find food banks, NGO centers, and community kitchens", description: "Explore nearby support points on an interactive map. Filter by distance, availability, and meal type." }), _jsx(Container, { children: _jsx(Locator, {}) })] }) }));
}
