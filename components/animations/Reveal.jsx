// component/animations/Reveal.tsx 
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";


export default function Reveal({
    children,
    direction = "up",
    delay = 0,
    inView = true,
}) {

    const initial = {
        opacity: 0,
        x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
        y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    };

    const animate = {
        opacity: 1,
        x: 0,
        y: 0,
    };

    return (
        <motion.div
            initial={initial}
            {...(inView
                ? { whileInView: animate, viewport: { once: true, margin: "-80px" } }
                : { animate })}
            transition={{
                duration: 0.4,
                ease: "easeOut",
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}