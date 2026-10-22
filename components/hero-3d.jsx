import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
function cssVarToHslStyle(raw, fallback) {
    const trimmed = raw.trim();
    if (!trimmed)
        return fallback;
    // Expected: "221 83% 53%" -> "hsl(221, 83%, 53%)"
    const parts = trimmed.split(/\s+/);
    if (parts.length < 3)
        return fallback;
    return `hsl(${parts[0]}, ${parts[1]}, ${parts[2]})`;
}
function useThemeHsl() {
    const [colors, setColors] = React.useState(() => ({
        primary: "hsl(221, 83%, 53%)",
        muted: "hsl(210, 40%, 96%)"
    }));
    React.useEffect(() => {
        function refresh() {
            const root = document.documentElement;
            const s = getComputedStyle(root);
            const primary = cssVarToHslStyle(s.getPropertyValue("--primary"), colors.primary);
            const muted = cssVarToHslStyle(s.getPropertyValue("--muted"), colors.muted);
            setColors({ primary, muted });
        }
        refresh();
        window.addEventListener("theme-change", refresh);
        return () => window.removeEventListener("theme-change", refresh);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [colors.primary, colors.muted]);
    return colors;
}
function Nodes({ primary, muted }) {
    const points = React.useMemo(() => {
        const arr = [];
        for (let i = 0; i < 120; i++) {
            const t = Math.random() * Math.PI * 2;
            const p = Math.acos(2 * Math.random() - 1);
            const r = 1.65 + Math.random() * 0.18;
            arr.push([r * Math.sin(p) * Math.cos(t), r * Math.cos(p), r * Math.sin(p) * Math.sin(t)]);
        }
        return arr;
    }, []);
    return (_jsxs("group", { children: [_jsxs("mesh", { children: [_jsx("sphereGeometry", { args: [1.4, 48, 48] }), _jsx("meshStandardMaterial", { color: muted, roughness: 0.6, metalness: 0.1 })] }), points.map((pos, i) => (_jsxs("mesh", { position: pos, children: [_jsx("sphereGeometry", { args: [0.03, 12, 12] }), _jsx("meshStandardMaterial", { color: primary })] }, i)))] }));
}
export function Hero3D() {
    const { primary, muted } = useThemeHsl();
    return (_jsxs("div", { className: "relative h-80 w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm sm:h-[420px]", children: [_jsx("div", { className: "pointer-events-none absolute inset-0 noise opacity-70" }), _jsxs(Canvas, { camera: { position: [0, 0, 4.6], fov: 50 }, children: [_jsx("ambientLight", { intensity: 0.7 }), _jsx("directionalLight", { position: [5, 5, 4], intensity: 1.4 }), _jsx(Nodes, { primary: primary, muted: muted }), _jsx(OrbitControls, { enableZoom: false, autoRotate: true, autoRotateSpeed: 0.8 })] }), _jsx("div", { className: "absolute inset-x-0 bottom-0 border-t border-border bg-bg/70 p-4 backdrop-blur", children: _jsx("div", { className: "text-xs font-medium text-muted-fg", children: "Interactive community network \u00B7 demo 3D visualization" }) })] }));
}
