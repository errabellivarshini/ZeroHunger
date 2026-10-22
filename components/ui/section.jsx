import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
export function Section({ className, ...props }) {
    return (_jsx("section", { className: cn("py-16 sm:py-20", className), ...props }));
}
export function SectionHeading({ eyebrow, title, description, align = "left" }) {
    const alignCls = align === "center" ? "text-center" : "text-left";
    return (_jsxs(Container, { className: cn("mb-10", alignCls), children: [eyebrow ? (_jsx("div", { className: "mb-3 inline-flex items-center rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-fg", children: eyebrow })) : null, _jsx("h2", { className: "text-balance text-2xl font-semibold tracking-tight sm:text-3xl", children: title }), description ? (_jsx("p", { className: "mt-3 max-w-2xl text-pretty text-sm text-muted-fg sm:text-base", children: description })) : null] }));
}
