"use client";

type StatsBarProps = {
    label: string;
    value: number;
    max: number;
};

export default function StatsBar({ label, value, max }: StatsBarProps) {
    const percentage = Math.round((value / max) * 100);

    return (
        <div>
            <div className="flex justify-between text-sm mb-1">
                <span className="capitalize">{label}</span>
                <span>{value}</span>
            </div>
            <div className="w-full bg-gray-200 rounded h-2">
                <div
                    className="bg-blue-500 h-2 rounded"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}
