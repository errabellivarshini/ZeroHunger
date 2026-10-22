import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
import { RequestForm } from "@/components/request-form";
export default function RequestPage() {
    return (_jsx("div", { children: _jsxs(Section, { className: "pb-10", children: [_jsx(SectionHeading, { eyebrow: "Food requests", title: "Request food with dignity and speed", description: "Submit your needs and location. The platform matches you with nearby food banks and time-sensitive donations." }), _jsx(Container, { children: _jsx(RequestForm, {}) })] }) }));
}
