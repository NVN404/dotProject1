import { useEffect, useState, useRef } from "react";

const Counter = ({ value, label, trigger }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!trigger) return;

        let start = 0;
        const duration = 2000;
        const steps = 50;
        const increment = Math.ceil(value / steps);

        const counter = setInterval(() => {
            start += increment;
            setCount(start >= value ? value : start);
            if (start >= value) clearInterval(counter);
        }, duration / steps);

        return () => clearInterval(counter);
    }, [trigger, value]);

    return (
        <div className="flex flex-col items-center text-white">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">{count}+</h2>
            <p className="text-xs md:text-sm lg:text-base uppercase tracking-wide">{label}</p>
        </div>
    );
};

const StatsCounter = () => {
    const statsRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry], obs) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    obs.disconnect(); // Stop observing once triggered
                }
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) observer.observe(statsRef.current);

        return () => observer.disconnect();
    }, []);

    const stats = [
        { value: 120, label: "State Ranks", src: "bangalore.png" },
        { value: 40, label: "Professional Lecturers", src: "teacher.png" },
        { value: 12, label: "Years of History", src: "history.png" },
        { value: 100, label: "Results Every Year", src: "result.png" },
    ];

    return (
        <div ref={statsRef} className="w-full mt-8 mb-8 flex flex-wrap justify-center items-center gap-6 p-4">
            {stats.map(({ value, label, src }, index) => (
                <div 
                    key={index}
                    className="w-[300px] h-[200px] bg-background rounded-2xl shadow-lg flex flex-col justify-center items-center text-center gap-2"
                >
                    <img src={src} alt={label} className="invert h-14 w-14" />
                    <Counter value={value} label={label} trigger={isVisible} />
                </div>
            ))}
        </div>
    );
};

export default StatsCounter;
