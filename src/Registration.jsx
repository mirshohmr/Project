import { useContext } from 'react'
import { LanguageContext } from './LanguageContext.jsx'
import { UserContext } from './UserContext.jsx'

export default function Registration() {
  const { t } = useContext(LanguageContext)
  const { setUser } = useContext(UserContext)

  return (
    <div className="registration-page">
      <div className="registration-card">
        <h1>{t.regTitle}</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            const form = event.currentTarget
            const name = form.elements[0].value.trim()
            const email = form.elements[1].value.trim()
            if (name && email) {
              setUser({ name, email })
              form.reset()
            }
          }}
        >
          <input type="text" placeholder={t.namePlaceholder} />
          <input type="email" placeholder={t.emailPlaceholder} />
          <input type="password" placeholder={t.passwordPlaceholder} />
          <button type="submit">{t.submitButton}</button>
        </form>
        <p>{t.noteText}</p>
      </div>
    </div>
  )
}
