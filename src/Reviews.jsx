import { useState } from "react";
import "./Reviews.css";
import search from "./assets/search.png";

const reviews = [
    {
        id: 1,
        teacher: "Амир Аслидинович",
        course: "Frontend",
        date: "12.02.2025",
        text: "Алим проявляет старательность и демонстрирует большой потенциал. Однако для достижения лучших результатов ему следует регулярно выполнять домашние задания и активнее участвовать в учебном процессе."
    },
    {
        id: 2,
        teacher: "Сардор Камалов",
        course: "React",
        date: "19.02.2025",
        text: "На занятиях ученик активно отвечает на вопросы и быстро усваивает материал. Стоит уделить больше внимания самостоятельной практике."
    },
    {
        id: 3,
        teacher: "Азиз Бахтияров",
        course: "JavaScript",
        date: "25.02.2025",
        text: "Домашние задания выполнены аккуратно. Код становится чище, но желательно чаще использовать современные возможности JavaScript."
    },
    {
        id: 4,
        teacher: "Нодирбек Турсунов",
        course: "HTML & CSS",
        date: "02.03.2025",
        text: "Ученик хорошо справляется с версткой. Необходимо больше внимания уделять адаптивности и правильной структуре проекта."
    }
];

const Reviews = () => {
    const [searchValue, setSearchValue] = useState("");

    const filteredReviews = reviews.filter((item) =>
        item.teacher.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.course.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <section className="reviews">
            <div className="reviewsHeader">
                <h1>Отзывы</h1>

                <div className="searchBox">
                    <input
                        type="text"
                        placeholder="Поиск..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />

                    <img src={search} alt="search" />
                </div>
            </div>

            <div className="reviewsList">
                {filteredReviews.map((review) => (
                    <div className="reviewCard" key={review.id}>
                        <div className="reviewTop">
                            <div className="teacherInfo">
                                <h3>{review.teacher}</h3>
                                <span>{review.course}</span>
                            </div>

                            <p>{review.date}</p>
                        </div>

                        <div className="blueLine"></div>

                        <p className="reviewText">{review.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;