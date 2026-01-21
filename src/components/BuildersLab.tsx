'use client';

import { useState, useMemo } from 'react';

// --- UTILITIES ---
function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}

// --- CONSTANTS ---
const QUESTIONS = [
    {
        id: 1,
        label: "Age Group",
        options: [
            { label: "Below 40", score: 0 },
            { label: "40-55", score: 5 },
            { label: "56-69", score: 10 },
            { label: "70+", score: 15 },
            { label: "Don't Know", score: 5 }
        ]
    },
    {
        id: 2,
        label: "Diabetes Status",
        options: [
            { label: "No", score: 0 },
            { label: "Prediabetes", score: 5 },
            { label: "Diabetes", score: 15 },
            { label: "Don't Know", score: 5 }
        ]
    },
    {
        id: 3,
        label: "Heart & BP",
        options: [
            { label: "No Issues", score: 0 },
            { label: "One Condition", score: 5 },
            { label: "Multiple/Severe", score: 15 },
            { label: "Don't Know", score: 5 }
        ]
    },
    {
        id: 4,
        label: "Tiredness / Breathlessness",
        options: [
            { label: "Never", score: 0 },
            { label: "Sometimes", score: 5 },
            { label: "Often", score: 10 },
            { label: "Don't Know", score: 5 }
        ]
    },
    {
        id: 5,
        label: "History of Stroke / Tremors",
        options: [
            { label: "No", score: 0 },
            { label: "Mild signs", score: 5 },
            { label: "Diagnosed", score: 10 },
            { label: "Don't Know", score: 5 }
        ]
    },
    {
        id: 6,
        label: "Confusion / Memory Issues",
        options: [
            { label: "No", score: 0 },
            { label: "Sometimes", score: 5 },
            { label: "Often", score: 10 },
            { label: "Don't Know", score: 5 }
        ]
    },
    {
        id: 7,
        label: "Major Surgery / Cancer History",
        options: [
            { label: "No", score: 0 },
            { label: "Once/Minor", score: 5 },
            { label: "Major/Cancer", score: 10 },
            { label: "Don't Know", score: 5 }
        ]
    },
    {
        id: 8,
        label: "Joint or Back Pain",
        options: [
            { label: "No", score: 0 },
            { label: "Sometimes/Mild", score: 10 },
            { label: "Severe/Daily", score: 20 },
            { label: "Don't Know", score: 5 }
        ]
    },
    {
        id: 9,
        label: "Falls (Past 2 Years)",
        options: [
            { label: "No", score: 0 },
            { label: "Once", score: 5 },
            { label: "Multiple", score: 10 },
            { label: "Don't Know", score: 5 }
        ]
    },
    {
        id: 10,
        label: "Need Help with Daily Activities (ADL)",
        options: [
            { label: "No", score: 0 },
            { label: "Occasionally", score: 5 },
            { label: "Often", score: 10 },
            { label: "Don't Know", score: 5 }
        ]
    },
    {
        id: 11,
        label: "Gut / Digestive Issues",
        options: [
            { label: "No", score: 0 },
            { label: "Occasionally", score: 5 },
            { label: "Frequently", score: 10 },
            { label: "Don't Know", score: 5 }
        ]
    },
    {
        id: 12,
        label: "Stress / Low Mood",
        options: [
            { label: "No", score: 0 },
            { label: "Sometimes", score: 5 },
            { label: "Often", score: 10 },
            { label: "Don't Know", score: 5 }
        ]
    },
    {
        id: 13,
        label: "Sleep Quality",
        options: [
            { label: "Good", score: 0 },
            { label: "Variable", score: 5 },
            { label: "Poor/Insomnia", score: 10 },
            { label: "Don't Know", score: 5 }
        ]
    },
    {
        id: 14,
        label: "Diet & Hydration Habits",
        options: [
            { label: "Good", score: 0 },
            { label: "Average", score: 5 },
            { label: "Poor", score: 10 },
            { label: "Don't Know", score: 5 }
        ]
    },
    {
        id: 15,
        label: "Habits (Smoking / Alcohol)",
        options: [
            { label: "None", score: 0 },
            { label: "Moderated", score: 5 },
            { label: "High Usage", score: 10 },
            { label: "Don't Know", score: 5 }
        ]
    },
];

export default function BuildersLab() {
    // State: Record<QuestionId, Label>
    // Changed to store Label string to ensure unique selection even if scores are same
    const [answers, setAnswers] = useState<Record<number, string>>({});

    const handleSelect = (qId: number, label: string) => {
        setAnswers(prev => ({ ...prev, [qId]: label }));
    };

    // --- SCORING ENGINE ---
    const report = useMemo(() => {
        // Helper to get score from label
        const getS = (id: number) => {
            const lbl = answers[id];
            if (!lbl) return 0;
            const q = QUESTIONS.find(x => x.id === id);
            const opt = q?.options.find(o => o.label === lbl);
            return opt?.score || 0;
        };

        const scores = {
            metabolic: getS(2),
            cardio: getS(3),
            neuro: getS(5) + getS(6),
            musculo: getS(8),
            frailty: getS(9) + getS(10),
            digestive: getS(11),
            emotional: getS(12),
            sleep: getS(13),
            lifestyle: getS(14) + getS(15),
            resilience: getS(1) + getS(4) + getS(7),
        };

        const totalRisk = Object.values(scores).reduce((a, b) => a + b, 0);

        return { scores, totalRisk };
    }, [answers]);

    const { scores, totalRisk } = report;
    const isHighRisk = totalRisk > 40; // Threshold for "High Risk" visual

    return (
        <section className="mb-24 space-y-8">
            <div>
                <h3 className="text-lg font-semibold text-slate-900">Clinical Assessment Engine</h3>
                <h4 className="text-base font-medium text-orange-700 mt-1">
                    Simulating the Praan Health Intake Logic
                </h4>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 relative">

                {/* --- LEFT COLUMN: QUESTIONS --- */}
                <div className="w-full lg:w-2/3 space-y-8">
                    {QUESTIONS.map((q) => {
                        const currentLabel = answers[q.id];

                        return (
                            <div key={q.id} className="bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-xl p-4 md:p-6 transition-all duration-300 hover:bg-white hover:shadow-sm">
                                <h5 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-4">
                                    {q.id}. {q.label}
                                </h5>

                                {/* 
                  MOBILE: Flex-col (Vertical Stack)
                  DESKTOP: Flex-row (Horizontal Buttons)
                */}
                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                    {q.options.map((opt) => {
                                        const isSelected = currentLabel === opt.label;
                                        return (
                                            <button
                                                key={opt.label}
                                                onClick={() => handleSelect(q.id, opt.label)}
                                                className={cn(
                                                    "px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 border text-center sm:flex-1",
                                                    isSelected
                                                        ? "bg-[#ea580c] border-[#ea580c] text-white shadow-md transform scale-[1.02]"
                                                        : "bg-white border-slate-200 text-slate-600 hover:border-orange-200 hover:bg-orange-50"
                                                )}
                                            >
                                                {opt.label}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* --- RIGHT COLUMN: REPORT (STICKY) --- */}
                <div className="w-full lg:w-1/3">
                    <div className="sticky top-6 space-y-4">

                        {/* SCORE CARD */}
                        <div className={cn(
                            "rounded-xl p-6 text-white text-center shadow-lg transition-colors duration-500",
                            isHighRisk ? "bg-red-500" : totalRisk > 20 ? "bg-amber-500" : "bg-emerald-500"
                        )}>
                            <div className="uppercase text-[10px] font-bold tracking-widest opacity-80 mb-1">Total Risk Score</div>
                            <div className="text-5xl font-bold mb-2">{totalRisk}</div>
                            <div className="text-sm font-medium opacity-90">
                                {isHighRisk ? "High Complexity Profile" : totalRisk > 20 ? "Moderate Attention" : "Healthy Baseline"}
                            </div>
                        </div>

                        {/* CATEGORY GRID */}
                        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
                                Category Breakdown
                            </h5>
                            <div className="grid grid-cols-1 gap-y-3">
                                {Object.entries(scores).map(([key, val]) => (
                                    <div key={key} className="flex items-center justify-between text-xs">
                                        <span className="capitalize text-slate-600 font-medium w-24">
                                            {key.replace('musculo', 'Muscular').replace('neuro', 'Cognitive')}
                                        </span>
                                        <div className="flex-1 mx-3 h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div
                                                className={cn("h-full rounded-full transition-all duration-500",
                                                    val > 10 ? "bg-red-500" : val > 5 ? "bg-amber-400" : "bg-emerald-400"
                                                )}
                                                style={{ width: `${Math.min(100, (val / 20) * 100)}%` }} // Normalized approx max 20
                                            />
                                        </div>
                                        <span className="font-bold text-slate-800 w-6 text-right">{val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SMALL STEPS */}
                        <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
                            <h5 className="text-xs font-bold text-orange-800 uppercase tracking-wider mb-3">
                                Immediate Small Steps
                            </h5>
                            <ul className="space-y-2 text-xs text-orange-900/80 font-medium">
                                <li className="flex gap-2">
                                    <span>✨</span> Use warm compress & turmeric milk for flare days.
                                </li>
                                <li className="flex gap-2">
                                    <span>🏠</span> Install anti-slip mats & night lights.
                                </li>
                                <li className="flex gap-2">
                                    <span>🎈</span> Practice balloon blowing 2x/day (Lung capacity).
                                </li>
                            </ul>
                        </div>

                        {/* PRESCRIBED PLAN */}
                        <div className="bg-slate-900 text-white rounded-xl p-6 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">🛡️</div>
                            <div className="uppercase text-[10px] font-bold tracking-widest text-slate-400 mb-2">Recommended Protocol</div>
                            <h3 className="text-lg font-bold mb-4 leading-tight">
                                Specialist-Supervised, Multidisciplinary Care
                            </h3>
                            <ul className="space-y-2 text-xs md:text-sm text-slate-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">✓</span> Physician & Specialist consults (2x/mo)
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">✓</span> Supervised Strength Training (3x/wk)
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">✓</span> Personalized Nutrition + Daily Check-ins
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">✓</span> Mental Health & Habit Coaching
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-0.5">✓</span> <strong>WhatsApp Accountability Wrapper</strong>
                                </li>
                            </ul>
                            <button className="w-full mt-6 bg-white text-slate-900 font-bold py-3 rounded-lg hover:bg-slate-100 transition-colors">
                                Generate Full Care Plan
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
