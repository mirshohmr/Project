import { useState } from "react";
import "./Deadline.css";

function Deadline() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("notDone");

    const cards = [
        { id: 1, title: "Flex сетка", issued: "26.02.2025", deadline: "27.02.2025", done: true },
        { id: 2, title: "Grid Layout", issued: "26.02.2025", deadline: "27.02.2025", done: true },
        { id: 3, title: "HTML", issued: "26.02.2025", deadline: "27.02.2025", done: true },
        { id: 4, title: "CSS", issued: "26.02.2025", deadline: "27.02.2025", done: true },
        { id: 5, title: "React", issued: "26.02.2025", deadline: "27.02.2025", done: true },
        { id: 6, title: "JavaScript", issued: "26.02.2025", deadline: "27.02.2025", done: true },
        { id: 7, title: "API", issued: "26.02.2025", deadline: "27.02.2025", done: true },
        { id: 8, title: "DOM", issued: "26.02.2025", deadline: "27.02.2025", done: true },
        { id: 9, title: "Bootstrap", issued: "26.02.2025", deadline: "27.02.2025", done: true },
        { id: 10, title: "Node.js", issued: "26.02.2025", deadline: "27.02.2025", done: true },
        { id: 11, title: "MongoDB", issued: "26.02.2025", deadline: "27.02.2025", done: true },
        { id: 12, title: "Express", issued: "26.02.2025", deadline: "27.02.2025", done: true },

        { id: 13, title: "Python", issued: "26.02.2025", deadline: "27.02.2025", done: false },
        { id: 14, title: "C++", issued: "26.02.2025", deadline: "27.02.2025", done: false },
        { id: 15, title: "Java", issued: "26.02.2025", deadline: "27.02.2025", done: false },
        { id: 16, title: "PHP", issued: "26.02.2025", deadline: "27.02.2025", done: false },
        { id: 17, title: "SQL", issued: "26.02.2025", deadline: "27.02.2025", done: false },
        { id: 18, title: "TypeScript", issued: "26.02.2025", deadline: "27.02.2025", done: false },
        { id: 19, title: "Redux", issued: "26.02.2025", deadline: "27.02.2025", done: false },
        { id: 20, title: "Next.js", issued: "26.02.2025", deadline: "27.02.2025", done: false },
    ];

    const filteredCards = cards.filter((card) => {
        const status =
            filter === "done" ? card.done : !card.done;

        const searchMatch = card.title
            .toLowerCase()
            .includes(search.toLowerCase());

        return status && searchMatch;
    });

    return (
        <div className="app">
            <div className="top">
                <input
                    type="text"
                    placeholder="🔍 Поиск"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div className="buttons">
                    <button
                        className={filter === "done" ? "active" : ""}
                        onClick={() => setFilter("done")}
                    >
                        Сделанные
                    </button>

                    <button
                        className={filter === "notDone" ? "active" : ""}
                        onClick={() => setFilter("notDone")}
                    >
                        Не сделанные
                    </button>
                </div>
            </div>

            <div className="cards">
                {filteredCards.map((card) => (
                    <div className="card" key={card.id}>
                        <div className="img">📖</div>

                        <div className="info">
                            <h3>{card.title}</h3>

                            <div className="row">
                                <span>Выдано:</span>
                                <b>{card.issued}</b>
                            </div>

                            <div className="row">
                                <span>Дэдлайн:</span>
                                <b>{card.deadline}</b>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Deadline;