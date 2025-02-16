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
        <div className=" flex flex-col items-center text-white">
            <h2 className="text-3xl font-bold">{count}+</h2>
            <p className="text-sm uppercase tracking-wide">{label}</p>
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
        { value: 120, label: "State Rank" },
        { value: 40, label: "Professional Lecturers" },
        { value: 4, label: "Years of History" },
        { value: 100, label: "Results Every Year" },
    ];

    return (
        <div className="w-full flex justify-center items-center">
            <div className="mt-[2em] w-[95%] bg-[#003cff] p-[1.5em] rounded-3xl md:rounded-[5em] shadow-lg flex flex-col md:flex-row justify-around items-center text-center space-y-6 md:space-y-0 md:space-x-6 ">
            {stats.map((stat, index) => (
                <div key={index} className="w-1/4 border-r last:border-none border-white/50">
                    <Counter value={stat.value} label={stat.label} trigger={isVisible} />
                </div>
            ))}
            </div>
        </div>
    );
};

export default StatsCounter;