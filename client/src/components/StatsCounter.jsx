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
        { value: 120, label: "State Rank" },
        { value: 40, label: "Professional Lecturers" },
        { value: 4, label: "Years of History" },
        { value: 100, label: "Results Every Year" },
    ];

    return (
        <div ref={statsRef} className="w-full mt-[2em] mb-[2em] flex justify-center items-center p-4 md:p-6 lg:p-8 xl:p-10">
            <div className="w-full bg-[#2973B2] p-6 md:p-10 lg:p-12 rounded-2xl md:rounded-[5em] shadow-lg flex flex-col md:flex-row justify-between items-center text-center space-y-6 md:space-y-0 md:space-x-6">
                {stats.map((stat, index) => (
                    <div 
                        key={index} 
                        className={`w-full md:w-1/4 px-4 border-white/50 ${
                            index !== stats.length - 1 ? "border-b md:border-b-0 md:border-r" : ""
                        }`}
                    >
                        <Counter value={stat.value} label={stat.label} trigger={isVisible} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsCounter;
