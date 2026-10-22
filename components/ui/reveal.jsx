import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
export function Reveal({ children, delay = 0 }) {
    const reduced = useReducedMotion();
    return (_jsx(motion.div, { initial: reduced ? false : { opacity: 0, y: 14 }, whileInView: reduced ? undefined : { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6, ease: [0.2, 0.9, 0.2, 1], delay }, children: children }));
}
