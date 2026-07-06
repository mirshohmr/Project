import { useContext } from 'react'
import { UserContext } from './UserContext.jsx'
import { LanguageContext } from './LanguageContext.jsx'

export default function Profile() {
  const { user } = useContext(UserContext)
  const { t } = useContext(LanguageContext)

  if (!user) {
    return (
      <div className="profile-card">
        <h2>{t.profileTitle}</h2>
        <p>{t.noUser}</p>
      </div>
    )
  }

  return (
    <div className="profile-card">
      <h2>{t.profileTitle}</h2>
      <div className="profile-row">
        <span>{t.nameLabel}</span>
        <strong>{user.name}</strong>
      </div>
      <div className="profile-row">
        <span>{t.emailLabel}</span>
        <strong>{user.email}</strong>
      </div>
      <p>{t.profileNote}</p>
    </div>
  )
}
