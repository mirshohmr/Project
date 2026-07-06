import { createContext, useMemo, useState } from 'react'

export const UserContext = createContext({
  user: null,
  setUser: () => {},
})

export function UserProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('user')
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  })

  const value = useMemo(
    () => ({
      user,
      setUser: (userData) => {
        setUser(userData)
        try {
          localStorage.setItem('user', JSON.stringify(userData))
        } catch {
          // ignore storage errors
        }
      },
    }),
    [user],
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
