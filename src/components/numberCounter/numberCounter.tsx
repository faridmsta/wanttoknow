import {  useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function NumberCounter({ from, to, speed }: { from: number; to: number; speed: number }) {
    const [count, setCount] = useState(from);
    const [hasStarted, setHasStarted] = useState(false);

    const ref = useRef(null); // Ref for the element
    const inView = useInView(ref, { once: true, amount: 0.1 }); // Detects when 10% of the element is visible

    useEffect(() => {
        if (inView && !hasStarted) {
            setHasStarted(true);
            const interval = setInterval(() => {
                setCount((prevCount) => {
                    if (prevCount < to) {
                        return prevCount + 1;
                    } else {
                        clearInterval(interval);
                        return prevCount;
                    }
                });
            }, speed);
        }
    }, [inView, to, speed, hasStarted]);

    return (
        <span
            ref={ref}
        >
            {count}
        </span>
    );
}

export default NumberCounter;
