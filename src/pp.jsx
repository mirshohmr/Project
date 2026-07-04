import React from 'react'

function Pp() {
  const fields = [
    { id: 1, label: 'Имя', type: 'text' },
    { id: 2, label: 'Телефон', type: 'tel' },
    { id: 3, label: 'Новый пароль', type: 'password' },
    { id: 4, label: 'Старый пароль', type: 'password' }
  ];

  const extraFields = [
    { id: 5, label: 'Имя', type: 'text' },
    { id: 6, label: 'Email', type: 'email' },
    { id: 7, label: 'Повторите пароль', type: 'password' }
  ];

  return (
    <div>
      <h1>Персональные данные</h1>

      <h2>Персональная информация</h2>

      <ul>
        {fields.map((field) => (
          <li key={field.id}>
            {field.label}
            <br />
            <input type={field.type} />
          </li>
        ))}
      </ul>

      <ul>
        {extraFields.map((field) => (
          <li key={field.id}>
            {field.label}
            <br />
            <input type={field.type} />
          </li>
        ))}
      </ul>

      <button>Сохранить данные</button>
    </div>
  );
}

export default Pp;
