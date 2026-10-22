import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "@/lib/utils";
export function Card({ className, ...props }) {
    return (_jsx("div", { className: cn("rounded-xl border border-border bg-card text-card-fg shadow-sm", className), ...props }));
}
export function CardHeader({ className, ...props }) {
    return _jsx("div", { className: cn("p-5 pb-3", className), ...props });
}
export function CardTitle({ className, ...props }) {
    return (_jsx("h3", { className: cn("text-base font-semibold tracking-tight", className), ...props }));
}
export function CardDescription({ className, ...props }) {
    return (_jsx("p", { className: cn("text-sm text-muted-fg", className), ...props }));
}
export function CardContent({ className, ...props }) {
    return _jsx("div", { className: cn("p-5 pt-0", className), ...props });
}
