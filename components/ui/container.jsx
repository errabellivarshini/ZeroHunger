import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "@/lib/utils";
export function Container({ className, ...props }) {
    return (_jsx("div", { className: cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className), ...props }));
}
