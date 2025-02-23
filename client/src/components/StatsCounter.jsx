import { useEffect, useState, useRef } from "react";

const Counter = ({ value, label, trigger }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (trigger) {
            let start = 0;
            const duration = 2000;
            const increment = Math.ceil(value / 50);

            const counter = setInterval(() => {
                start += increment;
                if (start >= value) {
                    setCount(value);
                    clearInterval(counter);
                } else {
                    setCount(start);
                }
            }, duration / 50);

            return () => clearInterval(counter);
        }
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
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const stats = [
        { value: 120, label: "State Rank" ,src:"bangalore.png"},
        { value: 40, label: "Professional Lecturers",src:"teacher.png" },
        { value: 4, label: "Years of History",src:"history.png" },
        { value: 100, label: "Results Every Year",src:"result.png" },
    ];

    return (
        <div ref={statsRef} className="w-full mt-[2em] mb-[2em] flex flex-wrap justify-center items-center gap-6 p-4">
            {stats.map((stat, index) => (
                <div 
                    key={index}
                    className="w-[300px] h-[200px] bg-[#2973B2] rounded-2xl shadow-lg flex flex-col justify-center items-center text-center gap-2"
                >
                <img src={stat.src} alt="icon" className="invert h-14 w-14"/>
                    <Counter value={stat.value} label={stat.label} trigger={isVisible} />
                </div>
            ))}
        </div>
    );
};

export default StatsCounter;
