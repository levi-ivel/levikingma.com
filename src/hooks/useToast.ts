import { useRef, useState, useEffect } from "react";

// Show toast for 2 seconds
export function useToast(duration = 2000) {
    const [visible, setVisible] = useState(false);
    const timeoutRef = useRef<number | null>(null);

    const showToast = () => {
        setVisible(true);
        if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => setVisible(false), duration);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
        };
    }, []);

    return { visible, showToast };
}
