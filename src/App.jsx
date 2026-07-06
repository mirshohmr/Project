import './App.css'
import { Routes, Route } from 'react-router-dom'
import Hero from './Hero.jsx'
import Dashboard from './Dashboard.jsx'
import Profile from './Profile.jsx'
import Raiting from './Raiting.jsx'
import Reviews from './Reviews.jsx'
import Schedule from './Schedule.jsx'
import Deadline from './Deadline.jsx'
import Registration from './Registration.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />}>
        <Route index element={<Registration />} />
        <Route path="registration" element={<Registration />} />
        <Route path="profile" element={<Profile />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="payment" element={<Raiting />} />
        <Route path="rating" element={<Raiting />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="deadline" element={<Deadline />} />
      </Route>
    </Routes>
  )
}