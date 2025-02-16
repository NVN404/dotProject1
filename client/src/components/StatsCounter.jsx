import { useEffect, useState } from "react";

const Counter = ({ value, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000; // Animation duration in ms
        const increment = Math.ceil(value / 50); // Adjust for smoother animation

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
    }, [value]);

    return (
        <div className="flex flex-col items-center text-white">
            <h2 className="text-3xl font-bold">{count}+</h2>
            <p className="text-sm uppercase tracking-wide">{label}</p>
        </div>
    );
};

const StatsCounter = () => {
    const stats = [
        { value: 120, label: "State Rank" },
        { value: 40, label: "Professional Lecturers" },
        { value: 4, label: "Years of History" },
        { value: 100, label: "Results Every Year" },
    ];

    return (
        <div className="w-full bg-blue-600 p-6 rounded-2xl shadow-lg flex flex-col md:flex-row justify-around items-center text-center space-y-6 md:space-y-0 md:space-x-6">
            {stats.map((stat, index) => (
                <div key={index} className="w-1/4 border-r last:border-none border-white/50">
                    <Counter value={stat.value} label={stat.label} />
                </div>
            ))}
        </div>
    );
};

export default StatsCounter;
