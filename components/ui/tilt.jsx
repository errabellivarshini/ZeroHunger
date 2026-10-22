import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "@/lib/utils";
export function TiltCard({ className, children }) {
    const ref = React.useRef(null);
    function onMove(e) {
        const el = ref.current;
        if (!el)
            return;
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        const rx = (py - 0.5) * -10;
        const ry = (px - 0.5) * 10;
        el.style.setProperty("--rx", `${rx}deg`);
        el.style.setProperty("--ry", `${ry}deg`);
    }
    function onLeave() {
        const el = ref.current;
        if (!el)
            return;
        el.style.setProperty("--rx", `0deg`);
        el.style.setProperty("--ry", `0deg`);
    }
    return (_jsx("div", { ref: ref, onPointerMove: onMove, onPointerLeave: onLeave, className: cn("group relative [perspective:1200px]", "transition-transform duration-200 will-change-transform", className), children: _jsx("div", { className: cn("relative h-full w-full rounded-xl border border-border bg-card shadow-sm", "transition-transform duration-200 will-change-transform", "[transform:rotateX(var(--rx))_rotateY(var(--ry))]", "group-hover:shadow-glow"), children: children }) }));
}
