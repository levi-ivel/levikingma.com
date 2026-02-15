import { useCallback, useEffect, useRef, useState } from "react";

// Make the arrow grow on hover
export function useAnimatedArrow() {
    const [arrow, setArrow] = useState("~~~>");
    const intervalRef = useRef<number | null>(null);

    const animate = useCallback((target: string, speed: number) => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = window.setInterval(() => {
            setArrow((prev) => {
                if (prev === target) {
                    if (intervalRef.current) clearInterval(intervalRef.current);
                    return prev;
                }
                return prev.length < target.length
                    ? prev.replace(">", "~>")
                    : prev.replace("~>", ">");
            });
        }, speed);
    }, []);

    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const onMouseEnter = useCallback(() => animate("~~~~~~~~~~~~~>", 100), [animate]);
    const onMouseLeave = useCallback(() => animate("~~~>", 50), [animate]);

    return {
        arrow,
        onMouseEnter,
        onMouseLeave,
    };
}
