import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NutritionAdvisor } from "@/components/nutrition/advisor";
import { Container } from "@/components/ui/container";
import { Section, SectionHeading } from "@/components/ui/section";
export default function NutritionAdvisorPage() {
    return (_jsx("div", { children: _jsxs(Section, { className: "pb-10", children: [_jsx(SectionHeading, { eyebrow: "AI nutrition", title: "Low-cost meal plans with nutrition breakdown", description: "Users enter budget and ingredients. The advisor suggests nutritious meals with calories and protein to support better outcomes." }), _jsx(Container, { children: _jsx(NutritionAdvisor, {}) })] }) }));
}
