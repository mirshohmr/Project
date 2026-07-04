import { useState } from "react";
import "./Schedule.css";
import logo from "./assets/logo.png";

const lessons = [
    {
        id: 1,
        day: "Понедельник",
        lesson: false
    },
    {
        id: 2,
        day: "Вторник",
        lesson: true,
        subject: "Frontend",
        time: "12:00 - 14:00",
        teacher: "Амир Аслидинович",
        room: "Кабинет 204",
        status: "🟢 Сегодня",
        week: "current"
    },
    {
        id: 3,
        day: "Среда",
        lesson: false
    },
    {
        id: 4,
        day: "Четверг",
        lesson: true,
        subject: "React",
        time: "16:00 - 18:00",
        teacher: "Сардор Камалов",
        room: "Кабинет 105",
        status: "🟡 Скоро",
        week: "next"
    },
    {
        id: 5,
        day: "Пятница",
        lesson: false
    },
    {
        id: 6,
        day: "Суббота",
        lesson: true,
        subject: "JavaScript",
        time: "10:00 - 12:00",
        teacher: "Азиз Бахтияров",
        room: "Кабинет 310",
        status: "🔵 Онлайн",
        week: "past"
    }
];

const Schedule = () => {
    const [filter, setFilter] = useState("current");

    const filteredLessons = lessons.filter((lesson) => {
        if (filter === "all") return true;
        if (filter === "my") return lesson.lesson;
        return lesson.week === filter || !lesson.lesson;
    });

    return (
        <section className="schedule">
            <div className="scheduleHeader">
                <h1>Расписание</h1>

                <select
                    className="weekSelect"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="current">📅 Эта неделя</option>
                    <option value="next">📆 Следующая неделя</option>
                    <option value="past">🗓️ Прошлая неделя</option>
                    <option value="all">📚 Все занятия</option>
                    <option value="my">⭐ Только мои уроки</option>
                </select>
            </div>

            <div className="scheduleGrid">
                {filteredLessons.map((lesson) => (
                    <div className="lessonCard" key={lesson.id}>
                        <div className="lessonInfo">
                            <h2>{lesson.day}</h2>

                            {lesson.lesson ? (
                                <>
                                    <p><b>📚 Курс:</b> {lesson.subject}</p>
                                    <p><b>⏰ Время:</b> {lesson.time}</p>
                                    <p><b>👨‍🏫 Учитель:</b> {lesson.teacher}</p>
                                    <p><b>🚪 Кабинет:</b> {lesson.room}</p>

                                    <span className="status">
                                        {lesson.status}
                                    </span>
                                </>
                            ) : (
                                <p className="empty">В этот день занятий нет.</p>
                            )}
                        </div>

                        <img src={logo} alt="logo" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Schedule;