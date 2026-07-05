import React, { useState } from 'react';

const mockPayments = [
  {
    id: 1,
    name: 'Алексей Григорьевич',
    course: 'React-разработка',
    amount: '1 500 000 лв',
    date: '4 февраля 2026 г.',
  },
  {
    id: 2,
    name: 'Шавкатов Жахонгир',
    course: 'HTML-разработка',
    amount: '1 350 000 лв',
    date: '4 февраля 2026 г.',
  },
  {
    id: 3,
    name: 'Мухаммадали Рахматов',
    course: 'CSS-разработка',
    amount: '1 200 000 лв',
    date: '4 февраля 2026 г.',
  },
];

export default function PaymentHistory() {
  const [sortBy, setSortBy] = useState('Дата');

  return (
    <div className="min-h-screen bg-[#f4f7f6] p-6 flex justify-center items-start font-sans">
      <div className="w-full max-w-4xl bg-[#f0f5fa] rounded-2xl p-6 shadow-sm">
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[#1e293b] text-2xl font-semibold tracking-wide">
            История платежей
          </h2>
          
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white text-[#334155] px-4 py-1.5 pr-8 rounded-lg border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-sm"
            >
              <option>Дата</option>
              <option>Сумма</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {mockPayments.map((payment) => (
            <div
              key={payment.id}
              className="relative bg-[#e3f2fd] border-l-[6px] border-[#0091ea] rounded-2xl p-5 shadow-sm transition-all hover:shadow-md flex flex-col sm:flex-row sm:justify-between sm:items-start"
            >
              <div>
                <h3 className="text-[#1e293b] font-bold text-base mb-1">
                  {payment.name}
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  <span className="font-semibold text-slate-700">Курс :</span>{' '}
                  <span className="text-slate-400 font-medium">{payment.course}</span>
                </p>
                <div className="text-[#0288d1] font-black text-2xl sm:text-3xl tracking-tight">
                  {payment.amount}
                </div>
              </div>

              <div className="text-slate-400 text-xs sm:text-sm font-medium mt-3 sm:mt-0 self-end sm:self-start">
                {payment.date}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}