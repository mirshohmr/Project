import { createContext, useMemo, useState } from 'react'

const translations = {
  ru: {
    regTitle: 'Регистрация',
    namePlaceholder: 'Ваше имя',
    emailPlaceholder: 'Email',
    passwordPlaceholder: 'Пароль',
    submitButton: 'Зарегистрироваться',
    noteText: 'Нажми кнопку — регистрация не отправляет данные.',
    translateTitle: 'Переключить язык',
    profileTitle: 'Профиль',
    nameLabel: 'Имя',
    emailLabel: 'Email',
    profileNote: 'Данные сохраняются локально и не отправляются.',
    noUser: 'Сначала зарегистрируйтесь на главной странице.',
  },
  en: {
    regTitle: 'Registration',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Email',
    passwordPlaceholder: 'Password',
    submitButton: 'Register',
    noteText: 'Press the button — registration does not send data.',
    translateTitle: 'Switch language',
    profileTitle: 'Profile',
    nameLabel: 'Name',
    emailLabel: 'Email',
    profileNote: 'Data is stored locally and not sent anywhere.',
    noUser: 'Please register on the main page first.',
  },
}

export const LanguageContext = createContext({
  locale: 'ru',
  toggleLocale: () => {},
  t: translations.ru,
})

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('ru')
  const value = useMemo(
    () => ({
      locale,
      toggleLocale: () => setLocale((current) => (current === 'ru' ? 'en' : 'ru')),
      t: translations[locale],
    }),
    [locale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
