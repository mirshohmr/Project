import { useState } from "react";
import "./Raiting.css";

const mockPayments = [
  {
    id: 1,
    name: "Алексей Григорьевич",
    course: "React-разработка",
    amount: "1 500 000 лв",
    date: "4 февраля 2026 г.",
  },
  {
    id: 2,
    name: "Шавкатов Жахонгир",
    course: "HTML-разработка",
    amount: "1 350 000 лв",
    date: "4 февраля 2026 г.",
  },
  {
    id: 3,
    name: "Мухаммадали Рахматов",
    course: "CSS-разработка",
    amount: "1 200 000 лв",
    date: "4 февраля 2026 г.",
  },
];

export default function PaymentHistory() {
  const [sortBy, setSortBy] = useState("Дата");

  return (
    <div className="payment-page">
      <div className="payment-wrapper">
        <div className="payment-top">
          <h2>История платежей</h2>
          <div className="select-wrapper">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option>Дата</option>
              <option>Сумма</option>
            </select>
            <div className="select-icon">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="payment-list">
          {mockPayments.map((payment) => (
            <div className="payment-card" key={payment.id}>
              <div className="payment-info">
                <h3>{payment.name}</h3>
                <p>
                  <span className="payment-label">Курс :</span>
                  <span className="payment-value">{payment.course}</span>
                </p>
                <div className="payment-amount">{payment.amount}</div>
              </div>
              <div className="payment-date">{payment.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
