import React, { useState } from 'react';


const leadersData = [
    { id: 1, name: "Амир Раджабов Аслодинович", points: 1200, avatar: "👨‍💻", group: "9 Ж" },
    { id: 2, name: "Ольга Петрова Викторовна", points: 1150, avatar: "👩‍💻", group: "9 Ж" },
    { id: 3, name: "Сергей Иванов Павлович", points: 1100, avatar: "👨‍🎓", group: "9 Ж" },
    { id: 4, name: "Мария Смирнова Алексеевна", points: 1050, avatar: "👩‍🎓", group: "9 Ж" },
    { id: 5, name: "Иван Кузнецов Дмитриевич", points: 1000, avatar: "🧑‍💻", group: "9 Ж" },
];

const gradesData = [
    { month: "Январь", grades: [10, 10, 3, 10, 10] },
    { month: "Февраль", grades: [10, 10, 3, 10, 10] },
    { month: "Март", grades: [10, 10, 3, 10, 10] },
    { month: "Апрель", grades: [10, 10, 3, 10, 10] },
];

export default function Dashboard() {
    const [hoveredStudent, setHoveredStudent] = useState(null);

    return (
        <div className="min-h-screen bg-[#f0f4f8] p-6 text-[#1e293b] font-sans selection:bg-blue-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md">
                    <h2 className="text-2xl font-semibold text-[#0f172a] mb-6">Рейтинг</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#f8fafc] rounded-2xl p-6 transition-transform duration-200 hover:scale-[1.02]">
                            <p className="text-slate-500 font-medium mb-2">В группе</p>
                            <p className="text-6xl font-bold text-[#0f172a]">3</p>
                        </div>
                        <div className="bg-[#f8fafc] rounded-2xl p-6 transition-transform duration-200 hover:scale-[1.02]">
                            <p className="text-slate-500 font-medium mb-2">В потоке</p>
                            <p className="text-6xl font-bold text-[#0f172a]">24</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md">
                    <h2 className="text-2xl font-semibold text-[#0f172a] mb-6">Средний балл</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#f8fafc] rounded-2xl p-6 transition-transform duration-200 hover:scale-[1.02]">
                            <p className="text-slate-500 font-medium mb-2">За курс</p>
                            <p className="text-6xl font-bold text-[#0f172a]">9.1</p>
                        </div>
                        <div className="bg-[#f8fafc] rounded-2xl p-6 transition-transform duration-200 hover:scale-[1.02]">
                            <p className="text-slate-500 font-medium mb-2">За контрольные</p>
                            <p className="text-6xl font-bold text-[#0f172a]">9.5</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 relative transition-all duration-300 hover:shadow-md">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold text-[#0f172a]">Лидеры</h2>
                        <select className="bg-[#f1f5f9] text-sm font-medium py-1.5 px-3 rounded-xl border-none outline-none cursor-pointer">
                            <option>группа</option>
                        </select>
                    </div>

                    <div className="space-y-3 relative">
                        {leadersData.map((student) => (
                            <div
                                key={student.id}
                                className="flex items-center justify-between p-3 rounded-2xl transition-all duration-300 cursor-pointer relative group hover:bg-blue-50/70 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                                onMouseEnter={() => setHoveredStudent(student)}
                                onMouseLeave={() => setHoveredStudent(null)}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform duration-200">
                                        {student.avatar}
                                    </div>
                                    <span className="font-medium text-sm md:text-base text-slate-700 group-hover:text-blue-600 transition-colors duration-200">
                                        {student.name}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1.5 text-slate-500">
                                    <span className="font-semibold text-sm">{student.points}</span>
                                    <span className="text-amber-400 group-hover:animate-pulse">⭐</span>
                                </div>

                                {hoveredStudent?.id === student.id && (
                                    <div className="absolute left-1/2 bottom-[110%] -translate-x-1/2 z-50 w-64 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-blue-100 pointer-events-none animate-fadeIn">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-2xl border border-blue-100">
                                                {hoveredStudent.avatar}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm text-slate-800 leading-tight">Portfolio</h4>
                                                <p className="text-xs text-slate-400">{hoveredStudent.group}</p>
                                            </div>
                                        </div>
                                        <div className="text-xs space-y-1.5 text-slate-600 border-t border-slate-100 pt-2">
                                            <p className="font-medium text-slate-700 truncate">{hoveredStudent.name}</p>
                                            <p>🔥 Активность: Высокая</p>
                                            <p>🏆 Награда: Топ-лидер месяца</p>
                                        </div>
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent w-0 h-0 border-t-white drop-shadow-[0_4px_2px_rgba(0,0,0,0.05)]"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-7">
                        <h2 className="text-2xl font-semibold text-[#0f172a] mb-6">Оценки</h2>
                        <div className="space-y-4">
                            {gradesData.map((item, idx) => (
                                <div key={idx}>
                                    <p className="text-xs font-semibold text-slate-400 mb-1.5">{item.month}</p>
                                    <div className="flex gap-2">
                                        {item.grades.map((grade, gIdx) => (
                                            <div
                                                key={gIdx}
                                                className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-200 cursor-pointer hover:scale-110 ${
                                                    grade === 3
                                                        ? 'bg-rose-50 text-rose-500 border border-rose-100 hover:bg-rose-100'
                                                        : 'bg-blue-50 text-blue-600 border border-blue-100 hover:bg-blue-100'
                                                }`}
                                            >
                                                {grade}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-5 bg-[#f8fafc] rounded-2xl p-4 border border-slate-100 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-slate-400">Тема : Flex сетка</span>
                            </div>
                            <p className="text-xs text-slate-400 mb-4">16 января 2026 г.</p>

                            <div className="space-y-2 text-sm mb-4">
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Оценка</span>
                                    <span className="font-bold flex items-center gap-1">10 📄</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Награда</span>
                                    <span className="font-bold flex items-center gap-1">3 💎</span>
                                </div>
                            </div>

                            <div className="border-t border-slate-200/60 pt-3">
                                <span className="text-xs font-bold text-slate-400 block mb-1">Комментарий ⬇️</span>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                    Амир отлично справляется с заданиями и проявляет ответственное отношение к учебе.
                                    Всегда внимателен на уроках, задает правильные вопросы и стремится к глубокому пониманию материала.
                                </p>
                            </div>
                        </div>

                        <button className="mt-4 w-full bg-white border border-slate-200 text-xs font-semibold py-2 rounded-xl text-slate-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 shadow-sm">
                            View Profile
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}