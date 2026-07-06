import React from 'react';
import './Dashboard.css';

const leadersData = [
  { id: 1, name: 'Амир Раджабов Аслодинович', points: 1200, avatar: '👨‍💻', group: '9 Ж' },
  { id: 2, name: 'Ольга Петрова Викторовна', points: 1150, avatar: '👩‍💻', group: '9 Ж' },
  { id: 3, name: 'Сергей Иванов Павлович', points: 1100, avatar: '👨‍🎓', group: '9 Ж' },
  { id: 4, name: 'Мария Смирнова Алексеевна', points: 1050, avatar: '👩‍🎓', group: '9 Ж' },
  { id: 5, name: 'Иван Кузнецов Дмитриевич', points: 1000, avatar: '🧑‍💻', group: '9 Ж' },
];

const gradesData = [
  { month: 'Январь', grades: [10, 10, 3, 10, 10] },
  { month: 'Февраль', grades: [10, 10, 3, 10, 10] },
  { month: 'Март', grades: [10, 10, 3, 10, 10] },
  { month: 'Апрель', grades: [10, 10, 3, 10, 10] },
];

export default function Dashboard() {
  return (
    <section className="dashboardPage">
      <div className="dashboardPanel">
        <div className="dashboardTop">
          <div className="dashboardIntro">
            <p className="dashboardSmallLabel">Дашборд</p>
            <h1 className="dashboardTitle">Обзор успеваемости</h1>
            <p className="dashboardSubtitle">
              Главное пространство для быстрого анализа рейтинга, среднего балла и лучших учеников.
            </p>
          </div>
          <div className="dashboardControls">
            <div className="dashboardBadge">
              Обновлено: <strong>2 мин назад</strong>
            </div>
            <button className="dashboardButton">Создать отчет</button>
          </div>
        </div>

        <div className="dashboardStatsGrid">
          <div className="dashboardCard">
            <p className="cardLabel">В группе</p>
            <p className="metricValue">3</p>
            <p className="metricText">лидера</p>
          </div>
          <div className="dashboardCard">
            <p className="cardLabel">В потоке</p>
            <p className="metricValue">24</p>
            <p className="metricText">ученика</p>
          </div>
        </div>

        <div className="dashboardSection">
          <div className="dashboardPanel">
            <div className="dashboardSectionHeading">
              <div>
                <h2>Лидеры</h2>
                <p>Лучшие ученики по баллам и активности.</p>
              </div>
              <select>
                <option>Группа</option>
              </select>
            </div>

            <div className="leaderList">
              {leadersData.map((student) => (
                <div key={student.id} className="leaderItem">
                  <div className="leaderMeta">
                    <div className="leaderAvatar">{student.avatar}</div>
                    <div className="leaderText">
                      <span>#{student.id} • {student.group}</span>
                      <strong>{student.name}</strong>
                    </div>
                  </div>
                  <div className="leaderScore">{student.points} баллов</div>
                </div>
              ))}
            </div>
          </div>

          <div className="dashboardPanel taskPanel">
            <div className="dashboardSectionHeading">
              <div>
                <p className="taskLabel">Обзор</p>
                <h2>Текущее задание</h2>
              </div>
            </div>

            <div className="taskCard">
              <div className="taskRow">
                <span>Тема</span>
                <strong>Flex сетка</strong>
              </div>
              <div className="taskRow">
                <span>Дата</span>
                <strong>16 января 2026</strong>
              </div>
            </div>

            <div className="taskCard">
              <div className="taskRow">
                <span>Оценка</span>
                <strong>10 📄</strong>
              </div>
              <div className="taskRow">
                <span>Награда</span>
                <strong>3 💎</strong>
              </div>
            </div>

            <div className="taskCard">
              <p className="taskText">
                Амир отлично справляется с заданиями, ответственно подходит к работе и демонстрирует глубокое понимание материала.
              </p>
            </div>

            <button className="taskAction">Посмотреть профиль</button>
          </div>
        </div>

        <div className="dashboardPanel">
          <div className="dashboardSectionHeading">
            <div>
              <h2>Оценки</h2>
            </div>
          </div>
          <div className="gradeGroup">
            {gradesData.map((item) => (
              <div key={item.month} className="gradeMonth">
                <p className="gradeMonthTitle">{item.month}</p>
                <div className="gradeList">
                  {item.grades.map((grade, gIdx) => (
                    <div key={gIdx} className={`gradeItem ${grade === 3 ? 'low' : 'good'}`}>
                      {grade}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
