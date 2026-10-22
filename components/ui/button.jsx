import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "@/lib/utils";
const variants = {
    primary: "bg-primary text-primary-fg shadow-glow hover:opacity-95 active:opacity-90",
    secondary: "bg-muted text-fg hover:bg-muted/80 active:bg-muted/70 border border-border",
    ghost: "hover:bg-muted/70 active:bg-muted/60",
    danger: "bg-danger text-danger-fg hover:opacity-95 active:opacity-90 shadow-glow"
};
const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-4 text-sm",
    lg: "h-12 px-5 text-base"
};
export function Button({ className, variant = "primary", size = "md", ...props }) {
    return (_jsx("button", { className: cn("inline-flex items-center justify-center gap-2 rounded-md font-medium outline-none transition focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50", variants[variant], sizes[size], className), ...props }));
}
