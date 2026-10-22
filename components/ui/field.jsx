import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "@/lib/utils";
export function Label({ className, ...props }) {
    return (_jsx("label", { className: cn("text-sm font-medium text-fg", className), ...props }));
}
export function Input({ className, ...props }) {
    return (_jsx("input", { className: cn("h-11 w-full rounded-md border border-input bg-bg px-3 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg", className), ...props }));
}
export function Textarea({ className, ...props }) {
    return (_jsx("textarea", { className: cn("min-h-28 w-full resize-y rounded-md border border-input bg-bg px-3 py-2 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg", className), ...props }));
}
export function Select({ className, ...props }) {
    return (_jsx("select", { className: cn("h-11 w-full rounded-md border border-input bg-bg px-3 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg", className), ...props }));
}
