import { jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { animate, useInView } from "framer-motion";
export function Counter({ to, suffix = "", duration = 1.4 }) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20% 0px" });
    React.useEffect(() => {
        if (!isInView || !ref.current)
            return;
        const node = ref.current;
        const controls = animate(0, to, {
            duration,
            ease: [0.2, 0.9, 0.2, 1],
            onUpdate(value) {
                node.textContent = Math.round(value).toLocaleString();
            }
        });
        return () => controls.stop();
    }, [duration, isInView, to]);
    return (_jsxs("span", { ref: ref, "aria-label": `${to}${suffix}`, children: ["0", suffix] }));
}
