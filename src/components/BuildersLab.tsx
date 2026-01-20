'use client';

import { useState } from 'react';

// --- Utility for Classes ---
function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}

// --- Types ---
type Tab = 'clinical' | 'ai';

export default function BuildersLab() {
    const [activeTab, setActiveTab] = useState<Tab>('clinical');

    // ==========================================
    // TAB 1: CLINICAL LOGIC ENGINE STATE
    // ==========================================
    // Module A: Clinical History
    const [age, setAge] = useState<number>(10); // 5 (60-70), 10 (71-80), 15 (81+)
    const [diabetes, setDiabetes] = useState<number>(15); // 0, 5, 15
    const [heart, setHeart] = useState<number>(15); // 0, 5, 15
    const [surgery, setSurgery] = useState<number>(5); // 0, 2, 5
    const [stroke, setStroke] = useState<number>(10); // 0, 10

    // Module B: Functional Status
    const [confusion, setConfusion] = useState<number>(10); // 0, 10
    const [breathless, setBreathless] = useState<number>(5); // 0, 2, 5
    const [pain, setPain] = useState<number>(10); // 0, 5, 10
    const [falls, setFalls] = useState<number>(10); // 0, 5, 10
    const [adl, setAdl] = useState<number>(10); // 0, 10

    // Module C: Lifestyle & Bio
    const [gut, setGut] = useState<number>(5); // 0, 5
    const [mood, setMood] = useState<number>(5); // 0, 5
    const [sleep, setSleep] = useState<number>(5); // 0, 5
    const [diet, setDiet] = useState<number>(5); // 0, 5
    const [habits, setHabits] = useState<number>(5); // 0, 2, 5

    // Logic Engine
    const scores = {
        metabolic: diabetes,
        cardio: heart,
        neuro: stroke + confusion,
        musculo: pain,
        frailty: falls + adl,
        resilience: Math.min(15, age + breathless + surgery),
        digestive: gut,
        emotional: mood,
        sleep: sleep,
        lifestyle: diet + habits,
    };

    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

    const getRiskColor = (s: number) => s > 60 ? "text-red-500" : s > 30 ? "text-amber-500" : "text-emerald-500";
    const getRiskBg = (s: number) => s > 60 ? "bg-[#ea580c]" : s > 30 ? "bg-amber-500" : "bg-emerald-500";

    // ==========================================
    // TAB 2: AI SENTINEL STATE
    // ==========================================
    const [showRecovery, setShowRecovery] = useState(false);
    const [hoverWeek, setHoverWeek] = useState<number | null>(null);

    // Constants for Chart
    // 12 Weeks. 
    // Gait (Orange): Normal ~1.2m/s (High on Y), Dips Wk10. 
    // SpO2 (Blue): Normal ~98% (High on Y), Dips Wk10.
    // Y-axis normalized 0-100 for SVG drawing (0 is bottom, 100 is top).
    const data = [
        { wk: 1, gait: 85, spo2: 90 },
        { wk: 2, gait: 84, spo2: 91 },
        { wk: 3, gait: 86, spo2: 89 },
        { wk: 4, gait: 85, spo2: 90 },
        { wk: 5, gait: 83, spo2: 88 },
        { wk: 6, gait: 80, spo2: 85 }, // Slow drift
        { wk: 7, gait: 75, spo2: 80 },
        { wk: 8, gait: 65, spo2: 70 },
        { wk: 9, gait: 50, spo2: 50 }, // Drop
        { wk: 10, gait: 30, spo2: 20 }, // CRITICAL DIP (Anomaly)
        { wk: 11, gait: 25, spo2: 15 }, // Continued Low (Without intervention)
        { wk: 12, gait: 20, spo2: 10 },
    ];

    // Recovery Data (Projected) starting Wk 10
    const recoveryData = [
        { wk: 10, gait: 30 },
        { wk: 11, gait: 60 },
        { wk: 12, gait: 85 },
    ];

    // SVG Point Mapper
    // X: Week 1=0%, Week 12=100%
    // Y: Value 0-100 (Inverted for SVG: 100-Value)
    const getX = (i: number) => (i / (data.length - 1)) * 100;
    const getY = (val: number) => 100 - val;

    const makePath = (key: 'gait' | 'spo2') => {
        return data.map((d, i) =>
            `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(d[key])}`
        ).join(' ');
    };

    const makeRecoveryPath = () => {
        // Start from index 9 (Wk 10)
        const startIdx = 9;
        return recoveryData.map((d, i) =>
            `${i === 0 ? 'M' : 'L'} ${getX(startIdx + i)} ${getY(d.gait)}`
        ).join(' ');
    };

    // UI HELPERS
    const Segment = ({ label, value, options, onChange }: any) => (
        <div className="flex flex-col space-y-1.5">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</span>
            <div className="flex rounded-md bg-slate-100 p-1">
                {options.map((opt: any) => (
                    <button
                        key={opt.label}
                        onClick={() => onChange(opt.val)}
                        className={cn(
                            "flex-1 py-1 text-[10px] md:text-xs font-medium rounded transition-all duration-200",
                            value === opt.val
                                ? "bg-[#ea580c] text-white shadow-sm"
                                : "text-slate-400 hover:text-slate-600"
                        )}
                    >
                        {opt.label}
                    </button>
                ))}
            </div>
        </div>
    );

    return (
        <section className="mb-24 space-y-6">
            {/* HEADER */}
            <div>
                <h3 className="text-lg font-semibold text-slate-900">The Builder's Lab</h3>
                <h4 className="text-base font-medium text-orange-700 mt-1">
                    {activeTab === 'clinical' ? "Current State: Scaleable Clinical Logic." : "Future State: Predictive AI Sentinel."}
                </h4>
            </div>

            {/* COMPONENT CONTAINER */}
            <div className="bg-white/90 backdrop-blur-xl border border-slate-200/60 rounded-2xl shadow-sm overflow-hidden min-h-[600px] flex flex-col">

                {/* TOP NAVIGATION */}
                <div className="flex border-b border-slate-100">
                    <button
                        onClick={() => setActiveTab('clinical')}
                        className={cn(
                            "flex-1 py-4 text-sm font-bold uppercase tracking-wide transition-colors duration-300",
                            activeTab === 'clinical'
                                ? "text-[#ea580c] border-b-2 border-[#ea580c] bg-orange-50/30"
                                : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
                        )}
                    >
                        Tab 1: Clinical Logic Engine
                    </button>
                    <button
                        onClick={() => setActiveTab('ai')}
                        className={cn(
                            "flex-1 py-4 text-sm font-bold uppercase tracking-wide transition-colors duration-300",
                            activeTab === 'ai'
                                ? "text-[#ea580c] border-b-2 border-[#ea580c] bg-orange-50/30"
                                : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
                        )}
                    >
                        Tab 2: The AI Sentinel
                    </button>
                </div>

                {/* --- TAB 1: CLINICAL LOGIC --- */}
                {activeTab === 'clinical' && (
                    <div className="flex flex-col md:flex-row flex-1 animate-in fade-in slide-in-from-left-4 duration-300">
                        {/* LEFT: INPUTS */}
                        <div className="w-full md:w-1/2 p-6 md:p-8 border-r border-slate-100 overflow-y-auto max-h-[600px] scrollbar-thin">
                            <div className="space-y-8">
                                {/* Clinical Module */}
                                <div className="space-y-4">
                                    <h5 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">Module A: Clinical History</h5>
                                    <Segment label="Age" value={age} onChange={setAge} options={[{ label: '60-70', val: 5 }, { label: '71-80', val: 10 }, { label: '81+', val: 15 }]} />
                                    <Segment label="Diabetes" value={diabetes} onChange={setDiabetes} options={[{ label: 'No', val: 0 }, { label: 'Pre', val: 5 }, { label: 'Yes', val: 15 }]} />
                                    <Segment label="Heart Condition" value={heart} onChange={setHeart} options={[{ label: 'No', val: 0 }, { label: 'Managed', val: 5 }, { label: 'Severe', val: 15 }]} />
                                    <Segment label="Surgery/Hospital" value={surgery} onChange={setSurgery} options={[{ label: 'None', val: 0 }, { label: 'Minor', val: 2 }, { label: 'Major', val: 5 }]} />
                                    <Segment label="Stroke/Tremors" value={stroke} onChange={setStroke} options={[{ label: 'No', val: 0 }, { label: 'Yes', val: 10 }]} />
                                </div>

                                {/* Functional Module */}
                                <div className="space-y-4">
                                    <h5 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">Module B: Functional Status</h5>
                                    <Segment label="Confusion" value={confusion} onChange={setConfusion} options={[{ label: 'No', val: 0 }, { label: 'Yes', val: 10 }]} />
                                    <Segment label="Breathless" value={breathless} onChange={setBreathless} options={[{ label: 'Never', val: 0 }, { label: 'Sometimes', val: 2 }, { label: 'Often', val: 5 }]} />
                                    <Segment label="Pain (Joints)" value={pain} onChange={setPain} options={[{ label: 'No', val: 0 }, { label: 'Mild', val: 5 }, { label: 'Limiting', val: 10 }]} />
                                    <Segment label="Falls (Past 2 Yrs)" value={falls} onChange={setFalls} options={[{ label: 'None', val: 0 }, { label: '1-2', val: 5 }, { label: 'Freq', val: 10 }]} />
                                    <Segment label="ADL Help" value={adl} onChange={setAdl} options={[{ label: 'No', val: 0 }, { label: 'Yes', val: 10 }]} />
                                </div>

                                {/* Lifestyle Module */}
                                <div className="space-y-4">
                                    <h5 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">Module C: Lifestyle & Bio</h5>
                                    <Segment label="Gut Issues" value={gut} onChange={setGut} options={[{ label: 'Good', val: 0 }, { label: 'Issues', val: 5 }]} />
                                    <Segment label="Mood" value={mood} onChange={setMood} options={[{ label: 'Good', val: 0 }, { label: 'Low', val: 5 }]} />
                                    <Segment label="Sleep" value={sleep} onChange={setSleep} options={[{ label: 'Good', val: 0 }, { label: 'Poor', val: 5 }]} />
                                    <Segment label="Diet" value={diet} onChange={setDiet} options={[{ label: 'Good', val: 0 }, { label: 'Bad', val: 5 }]} />
                                    <Segment label="Habits" value={habits} onChange={setHabits} options={[{ label: 'None', val: 0 }, { label: 'Bad', val: 5 }]} />
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: REPORT */}
                        <div className="w-full md:w-1/2 bg-slate-50/50 p-6 md:p-8 flex flex-col justify-center items-center relative">

                            {/* Score Display */}
                            <div className="text-center mb-10 scale-100 hover:scale-105 transition-transform duration-500">
                                <div className={cn(
                                    "w-40 h-40 rounded-full border-8 flex flex-col items-center justify-center bg-white shadow-sm transition-colors duration-500",
                                    totalScore > 60 ? "border-red-100" : totalScore > 30 ? "border-amber-100" : "border-emerald-100"
                                )}>
                                    <span className={cn("text-5xl font-bold", getRiskColor(totalScore))}>{totalScore}</span>
                                    <span className="text-xs text-slate-400 font-medium uppercase mt-1">Risk Score</span>
                                </div>
                            </div>

                            {/* Plan Card */}
                            <div className={cn(
                                "w-full max-w-sm rounded-xl p-6 text-white shadow-lg transition-all duration-500 transform",
                                getRiskBg(totalScore)
                            )}>
                                <div className="uppercase text-[10px] font-bold tracking-widest opacity-80 mb-2">Recommended Protocol</div>
                                <h3 className="text-xl font-bold mb-3 leading-tight">
                                    {totalScore > 60 && "Specialist-Led Multidisciplinary Care"}
                                    {totalScore > 30 && totalScore <= 60 && "Preventative Strength Strategy"}
                                    {totalScore <= 30 && "Maintenance & Longevity"}
                                </h3>
                                <p className="text-sm opacity-90 leading-relaxed">
                                    {totalScore > 60 && "Immediate intervention required. Coordinate Endocrinologist + Cardiologist reviews. Daily vitals monitoring enabled."}
                                    {totalScore > 30 && totalScore <= 60 && "Focus on reversing pre-chronic flags. Weekly strength training and nutritional coaching assigned."}
                                    {totalScore <= 30 && "Excellent baseline. Focus on sustaining muscle mass and quarterly screenings."}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- TAB 2: AI SENTINEL --- */}
                {activeTab === 'ai' && (
                    <div className="flex-1 p-6 md:p-8 flex flex-col items-center justify-center animate-in fade-in slide-in-from-right-4 duration-300 relative">

                        <div className="w-full max-w-2xl">
                            <div className="flex justify-between items-end mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900">Predictive Biomarker Analysis</h2>
                                    <p className="text-sm text-slate-500">Connecting hidden data points to predict adverse events.</p>
                                </div>
                                <div className="flex gap-4 text-xs font-semibold">
                                    <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-orange-500"></span> Gait Velocity</div>
                                    <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-500"></span> Nocturnal SpO2</div>
                                </div>
                            </div>

                            {/* CHART CONTAINER */}
                            <div className="w-full aspect-[2/1] bg-slate-50 rounded-xl border border-slate-100 relative mb-6 overflow-hidden">
                                <svg className="w-full h-full p-4 overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    {/* Grid Lines */}
                                    {[0, 25, 50, 75, 100].map(y => (
                                        <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#e2e8f0" strokeWidth="0.5" />
                                    ))}

                                    {/* Data Paths */}
                                    <path d={makePath('spo2')} fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                                    <path d={makePath('gait')} fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />

                                    {/* Recovery Path (Conditional) */}
                                    {showRecovery && (
                                        <path
                                            d={makeRecoveryPath()}
                                            fill="none"
                                            stroke="#f97316"
                                            strokeWidth="2"
                                            strokeDasharray="4"
                                            className="animate-in fade-in duration-700"
                                        />
                                    )}

                                    {/* Hover Interaction Areas */}
                                    <rect
                                        x={getX(9) - 2} y="0" width="4" height="100" fill="transparent"
                                        onMouseEnter={() => setHoverWeek(10)}
                                        onMouseLeave={() => setHoverWeek(null)}
                                        className="cursor-pointer"
                                    />

                                    {/* Anomaly Highlight (Week 10) */}
                                    <circle cx={getX(9)} cy={getY(data[9].gait)} r="2" fill="#ef4444" className="animate-pulse" />
                                    <circle cx={getX(9)} cy={getY(data[9].spo2)} r="2" fill="#ef4444" className="animate-pulse" />

                                    {/* Connective Line at Anomaly */}
                                    {(hoverWeek === 10 || showRecovery) && (
                                        <line
                                            x1={getX(9)} y1={getY(data[9].gait)} x2={getX(9)} y2={getY(data[9].spo2)}
                                            stroke="#ef4444" strokeWidth="0.5" strokeDasharray="2"
                                        />
                                    )}

                                </svg>

                                {/* TOOLTIP / ALERT */}
                                {(hoverWeek === 10 || showRecovery) && !showRecovery && (
                                    <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur border border-red-100 shadow-lg p-4 rounded-lg w-64 text-center z-10 animate-in zoom-in-95 duration-200">
                                        <div className="text-red-500 font-bold text-xs uppercase mb-1">⚠️ Correlation Alert (r=0.94)</div>
                                        <p className="text-slate-700 text-xs leading-relaxed">
                                            Hypoxic episodes (SpO2 drop) are driving Gait Instability. Fall Risk Imminent.
                                        </p>
                                        <button
                                            onClick={() => setShowRecovery(true)}
                                            className="mt-3 bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-2 px-4 rounded-full transition-colors w-full"
                                        >
                                            Activate 'Sleep-Recovery' Protocol
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* RECOVERY MESSAGE */}
                            {showRecovery && (
                                <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-4 rounded-lg text-sm flex items-center gap-3 animate-in slide-in-from-bottom-2">
                                    <span className="text-xl">✅</span>
                                    <div>
                                        <strong>Protocol Activated.</strong> Projected Gait Velocity returns to baseline (1.2m/s) within 3 weeks of CPAP intervention.
                                    </div>
                                </div>
                            )}

                            <div className="flex justify-between text-xs text-slate-400 mt-2 px-4">
                                <span>Week 1</span>
                                <span>Week 6</span>
                                <span className="text-red-500 font-semibold">Week 10 (Anomaly)</span>
                                <span>Week 12</span>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}
