import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { DonationForm } from "@/components/donation-form";
export default function DonatePage() {
    return (_jsx("div", { children: _jsxs(Section, { className: "pb-10", children: [_jsx(SectionHeading, { eyebrow: "Food donation", title: "Donate surplus food in minutes", description: "Restaurants, supermarkets, and individuals can report surplus food. The system alerts nearby NGOs and volunteers based on distance, capacity, and urgency." }), _jsx(Container, { children: _jsx(DonationForm, {}) })] }) }));
}
